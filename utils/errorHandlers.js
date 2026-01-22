/**
 * Get user-friendly error message from error object
 * @param {Error} error - Error object
 * @returns {string} User-friendly error message
 */
export const getErrorMessage = (error) => {
    if (!error) return 'An unknown error occurred'

    if (typeof error === 'string') return error

    if (error.message) return error.message

    return 'An unknown error occurred'
}

/**
 * Handle API-specific errors
 * @param {Error} error - Error object
 * @returns {string} User-friendly error message
 */
export const handleApiError = (error) => {
    if (!error) return 'Failed to fetch data from API'

    // Network error
    if (error.message === 'Network Error' || error.code === 'ERR_NETWORK') {
        return 'Network error. Please check your internet connection.'
    }

    // CORS error
    if (error.message?.includes('CORS') || error.toString().includes('CORS')) {
        return handleCorsError()
    }

    // Rate limit error
    if (error.response?.status === 429) {
        return handleRateLimitError(error)
    }

    // Unauthorized
    if (error.response?.status === 401 || error.response?.status === 403) {
        return 'Invalid API key or unauthorized access. Please check your API credentials.'
    }

    // Not found
    if (error.response?.status === 404) {
        return 'API endpoint not found. Please check the URL.'
    }

    // Server error
    if (error.response?.status >= 500) {
        return 'API server error. Please try again later.'
    }

    // Timeout
    if (error.code === 'ECONNABORTED') {
        return 'Request timeout. The API is taking too long to respond.'
    }

    // Default
    return error.response?.data?.message || error.message || 'Failed to fetch data from API'
}

/**
 * Handle rate limit errors
 * @param {Error} error - Error object
 * @returns {string} User-friendly error message
 */
export const handleRateLimitError = (error) => {
    const retryAfter = error.response?.headers?.['retry-after']

    if (retryAfter) {
        return `API rate limit exceeded. Please try again in ${retryAfter} seconds.`
    }

    return 'API rate limit exceeded. Please try again later. Consider reducing the refresh interval or check your API provider\'s rate limit documentation.'
}

/**
 * Handle CORS errors
 * @returns {string} User-friendly error message with suggestions
 */
export const handleCorsError = () => {
    return `Unable to connect to API due to CORS restrictions.

Possible solutions:
1. Use a browser extension like "CORS Unblock" for testing
2. Contact the API provider to enable CORS for your domain
3. Consider setting up a backend proxy server

This is a security feature of web browsers and cannot be bypassed from the client side.`
}

/**
 * Log error for debugging
 * @param {Error} error - Error object
 * @param {string} context - Context where error occurred
 */
export const logError = (error, context = '') => {
    if (process.env.NODE_ENV === 'development') {
        console.group(`❌ Error${context ? ` in ${context}` : ''}`)
        console.error('Error:', error)
        if (error.response) {
            console.error('Response:', error.response)
        }
        if (error.request) {
            console.error('Request:', error.request)
        }
        console.groupEnd()
    }
}

/**
 * Check if error is a network error
 * @param {Error} error - Error object
 * @returns {boolean} True if network error
 */
export const isNetworkError = (error) => {
    return error.message === 'Network Error' ||
        error.code === 'ERR_NETWORK' ||
        !error.response
}

/**
 * Check if error is a CORS error
 * @param {Error} error - Error object
 * @returns {boolean} True if CORS error
 */
export const isCorsError = (error) => {
    return error.message?.includes('CORS') ||
        error.toString().includes('CORS') ||
        (isNetworkError(error) && error.config?.url)
}

/**
 * Check if error is a rate limit error
 * @param {Error} error - Error object
 * @returns {boolean} True if rate limit error
 */
export const isRateLimitError = (error) => {
    return error.response?.status === 429
}
