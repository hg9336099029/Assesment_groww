/**
 * Format a number as currency
 * @param {number} value - The number to format
 * @param {string} currency - Currency code (default: 'USD')
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (value, currency = 'USD') => {
    if (value === null || value === undefined || isNaN(value)) return '-'

    // Handle small values (crypto)
    let maxDigits = 2
    if (value > 0 && value < 1) {
        maxDigits = 6
    }
    if (value > 0 && value < 0.0001) {
        maxDigits = 8
    }

    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: maxDigits,
    }).format(value)
}

/**
 * Format a number as percentage
 * @param {number} value - The number to format
 * @param {number} decimals - Number of decimal places (default: 2)
 * @returns {string} Formatted percentage string
 */
export const formatPercentage = (value, decimals = 2) => {
    if (value === null || value === undefined || isNaN(value)) return '-'

    return `${value.toFixed(decimals)}%`
}

/**
 * Format a number with commas
 * @param {number} value - The number to format
 * @param {number} decimals - Number of decimal places (default: 2)
 * @returns {string} Formatted number string
 */
export const formatNumber = (value, decimals = 2) => {
    if (value === null || value === undefined || isNaN(value)) return '-'

    // Handle small values
    let maxDigits = decimals
    const absValue = Math.abs(value)
    if (absValue > 0 && absValue < 1) {
        maxDigits = Math.max(decimals, 6)
    }
    if (absValue > 0 && absValue < 0.0001) {
        maxDigits = Math.max(decimals, 8)
    }

    return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: maxDigits,
    }).format(value)
}

/**
 * Format a timestamp as a readable date/time string
 * @param {string|Date} date - The date to format
 * @returns {string} Formatted date/time string
 */
export const formatTimestamp = (date) => {
    if (!date) return '-'

    const d = new Date(date)
    if (isNaN(d.getTime())) return '-'

    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    }).format(d)
}

/**
 * Format a timestamp as relative time (e.g., "2 minutes ago")
 * @param {string|Date} date - The date to format
 * @returns {string} Relative time string
 */
export const formatRelativeTime = (date) => {
    if (!date) return '-'

    const d = new Date(date)
    if (isNaN(d.getTime())) return '-'

    const now = new Date()
    const diffInSeconds = Math.floor((now - d) / 1000)

    if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`
    return `${Math.floor(diffInSeconds / 86400)} days ago`
}

/**
 * Format time in HH:MM:SS format
 * @param {string|Date} date - The date to format
 * @returns {string} Time string
 */
export const formatTime = (date) => {
    if (!date) return '-'

    const d = new Date(date)
    if (isNaN(d.getTime())) return '-'

    return d.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    })
}
