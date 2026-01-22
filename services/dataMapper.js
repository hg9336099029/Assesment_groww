import { parseNestedField } from '@utils/dataTransformers'

/**
 * Parse JSON structure recursively to find all fields
 * @param {object} response - API response
 * @param {string} prefix - Prefix for nested fields
 * @returns {Array} Array of field objects
 */
export const parseJsonStructure = (response, prefix = '') => {
    const fields = []

    if (!response || typeof response !== 'object') {
        return fields
    }

    for (const key in response) {
        if (response.hasOwnProperty(key)) {
            const value = response[key]
            const fieldPath = prefix ? `${prefix}.${key}` : key

            if (value === null) {
                fields.push({ path: fieldPath, type: 'null', isArray: false })
            } else if (Array.isArray(value)) {
                fields.push({ path: fieldPath, type: 'array', isArray: true, length: value.length })
                // Parse first item if array is not empty
                if (value.length > 0 && typeof value[0] === 'object') {
                    fields.push(...parseJsonStructure(value[0], fieldPath))
                }
            } else if (typeof value === 'object') {
                fields.push({ path: fieldPath, type: 'object', isArray: false })
                fields.push(...parseJsonStructure(value, fieldPath))
            } else {
                fields.push({ path: fieldPath, type: typeof value, isArray: false, sampleValue: value })
            }
        }
    }

    return fields
}

/**
 * Extract fields from data for display
 * @param {object} data - Data object
 * @returns {Array} Array of field names
 */
export const extractFields = (data) => {
    const fields = parseJsonStructure(data)
    return fields
        .filter(f => !f.isArray && f.type !== 'object')
        .map(f => f.path)
}

/**
 * Map selected fields to display data
 * @param {object|Array} data - Data to map
 * @param {Array} selectedFields - Fields to extract
 * @returns {object|Array} Mapped data
 */
export const mapFieldsToDisplay = (data, selectedFields) => {
    if (Array.isArray(data)) {
        return data.map(item => {
            const mapped = {}
            selectedFields.forEach(field => {
                mapped[field] = parseNestedField(item, field)
            })
            return mapped
        })
    }

    const mapped = {}
    selectedFields.forEach(field => {
        mapped[field] = parseNestedField(data, field)
    })
    return mapped
}

/**
 * Normalize API response based on common patterns
 * @param {object} response - API response
 * @param {string} apiType - Type of API (optional)
 * @returns {object} Normalized response
 */
export const normalizeApiResponse = (response, apiType = 'generic') => {
    if (!response) return null

    // Alpha Vantage adapter
    if (apiType === 'alphavantage' || response['Time Series (Daily)']) {
        const timeSeries = response['Time Series (Daily)'] || response['Time Series (5min)']
        if (timeSeries) {
            return Object.entries(timeSeries).map(([date, values]) => ({
                date,
                ...values,
            }))
        }
    }

    // Finnhub adapter
    if (apiType === 'finnhub' || (response.c && response.h && response.l)) {
        return {
            current: response.c,
            high: response.h,
            low: response.l,
            open: response.o,
            previousClose: response.pc,
            timestamp: response.t,
        }
    }

    // CoinBase adapter
    if (response.data && response.data.rates) {
        return response.data
    }

    // Generic - return as is
    return response
}

/**
 * Handle nested data extraction
 * @param {object} obj - Object to search
 * @param {string} path - Dot notation path
 * @returns {any} Value at path
 */
export const handleNestedData = (obj, path) => {
    return parseNestedField(obj, path)
}

export default {
    parseJsonStructure,
    extractFields,
    mapFieldsToDisplay,
    normalizeApiResponse,
    handleNestedData,
}
