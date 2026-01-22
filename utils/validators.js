/**
 * Validate if a string is a valid URL
 * @param {string} url - The URL to validate
 * @returns {boolean} True if valid URL
 */
export const isValidUrl = (url) => {
    if (!url || typeof url !== 'string') return false

    try {
        const urlObj = new URL(url)
        return urlObj.protocol === 'http:' || urlObj.protocol === 'https:'
    } catch {
        return false
    }
}

/**
 * Validate if a string is a valid API key format
 * @param {string} key - The API key to validate
 * @returns {boolean} True if valid format
 */
export const isValidApiKey = (key) => {
    if (!key || typeof key !== 'string') return false
    // Basic validation: at least 8 characters, alphanumeric
    return key.length >= 8 && /^[a-zA-Z0-9_-]+$/.test(key)
}

/**
 * Validate widget configuration
 * @param {object} config - Widget configuration object
 * @returns {object} Validation result { isValid, errors }
 */
export const validateWidgetConfig = (config) => {
    const errors = {}

    // Validate name
    if (!config.name || config.name.trim().length === 0) {
        errors.name = 'Widget name is required'
    } else if (config.name.length > 50) {
        errors.name = 'Widget name must be less than 50 characters'
    }

    // Validate API URL
    if (!config.apiUrl) {
        errors.apiUrl = 'API URL is required'
    } else if (!isValidUrl(config.apiUrl)) {
        errors.apiUrl = 'Please enter a valid URL'
    }

    // Validate refresh interval
    if (config.refreshInterval !== undefined) {
        const interval = parseInt(config.refreshInterval)
        if (isNaN(interval) || interval < 10) {
            errors.refreshInterval = 'Refresh interval must be at least 10 seconds'
        } else if (interval > 3600) {
            errors.refreshInterval = 'Refresh interval must be less than 1 hour'
        }
    }

    // Validate selected fields
    if (!config.selectedFields || config.selectedFields.length === 0) {
        errors.selectedFields = 'Please select at least one field to display'
    }

    // Validate display mode
    if (!config.displayMode || !['card', 'table', 'chart'].includes(config.displayMode)) {
        errors.displayMode = 'Please select a valid display mode'
    }

    // Validate chart type if display mode is chart
    if (config.displayMode === 'chart') {
        if (!config.chartType || !['line', 'candle'].includes(config.chartType)) {
            errors.chartType = 'Please select a valid chart type'
        }
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    }
}

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid email
 */
export const isValidEmail = (email) => {
    if (!email || typeof email !== 'string') return false

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}
