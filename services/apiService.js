import axios from 'axios'
import { flattenObject, extractArrayData } from '@utils/dataTransformers'
import { handleApiError, logError, isCorsError, isRateLimitError } from '@utils/errorHandlers'

/**
 * Test API connection and parse response structure
 * @param {string} url - API endpoint URL
 * @returns {Promise<object>} { success, fields, sampleData, error }
 */
export const testApiConnection = async (url) => {
    try {
        const response = await axios.get(url, {
            timeout: 10000,
            headers: {
                'Accept': 'application/json',
            },
        })

        const data = response.data

        // Flatten the response to get all available fields
        const flattened = flattenObject(data)
        const fields = Object.keys(flattened).map(key => ({
            name: key,
            type: typeof flattened[key],
            value: flattened[key],
        }))

        // Also extract any arrays
        const arrays = extractArrayData(data)

        return {
            success: true,
            fields,
            arrays,
            sampleData: data,
            error: null,
        }
    } catch (error) {
        logError(error, 'testApiConnection')

        return {
            success: false,
            fields: [],
            arrays: [],
            sampleData: null,
            error: handleApiError(error),
        }
    }
}

/**
 * Fetch data from API with caching support
 * @param {string} url - API endpoint URL
 * @param {object} options - Fetch options
 * @returns {Promise<object>} { success, data, error }
 */
export const fetchApiData = async (url, options = {}) => {
    try {
        const response = await axios.get(url, {
            timeout: options.timeout || 15000,
            headers: {
                'Accept': 'application/json',
                ...options.headers,
            },
        })

        return {
            success: true,
            data: response.data,
            error: null,
        }
    } catch (error) {
        logError(error, 'fetchApiData')

        // Check for specific error types
        if (isRateLimitError(error)) {
            return {
                success: false,
                data: null,
                error: handleApiError(error),
                isRateLimit: true,
            }
        }

        if (isCorsError(error)) {
            return {
                success: false,
                data: null,
                error: handleApiError(error),
                isCors: true,
            }
        }

        return {
            success: false,
            data: null,
            error: handleApiError(error),
        }
    }
}

/**
 * Retry fetch with exponential backoff
 * @param {string} url - API endpoint URL
 * @param {number} maxRetries - Maximum number of retries
 * @returns {Promise<object>} Fetch result
 */
export const fetchWithRetry = async (url, maxRetries = 3) => {
    let lastError = null

    for (let i = 0; i < maxRetries; i++) {
        const result = await fetchApiData(url)

        if (result.success) {
            return result
        }

        lastError = result.error

        // Don't retry on CORS or rate limit errors
        if (result.isCors || result.isRateLimit) {
            return result
        }

        // Exponential backoff: 1s, 2s, 4s
        if (i < maxRetries - 1) {
            await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000))
        }
    }

    return {
        success: false,
        data: null,
        error: lastError || 'Failed to fetch data after multiple retries',
    }
}

export default {
    testApiConnection,
    fetchApiData,
    fetchWithRetry,
}
