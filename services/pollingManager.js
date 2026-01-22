/**
 * Polling manager to handle multiple widget refresh intervals
 */

const activePolls = new Map()

/**
 * Start polling for a widget
 * @param {string} widgetId - Widget ID
 * @param {Function} callback - Callback function to execute
 * @param {number} interval - Interval in milliseconds
 */
export const startPolling = (widgetId, callback, interval) => {
    // Clear existing poll if any
    stopPolling(widgetId)

    // Execute immediately
    callback()

    // Set up interval
    const intervalId = setInterval(callback, interval)
    activePolls.set(widgetId, intervalId)

    console.log(`Started polling for widget ${widgetId} with interval ${interval}ms`)
}

/**
 * Stop polling for a widget
 * @param {string} widgetId - Widget ID
 */
export const stopPolling = (widgetId) => {
    const intervalId = activePolls.get(widgetId)
    if (intervalId) {
        clearInterval(intervalId)
        activePolls.delete(widgetId)
        console.log(`Stopped polling for widget ${widgetId}`)
    }
}

/**
 * Stop all active polling
 */
export const stopAllPolling = () => {
    activePolls.forEach((intervalId, widgetId) => {
        clearInterval(intervalId)
        console.log(`Stopped polling for widget ${widgetId}`)
    })
    activePolls.clear()
}

/**
 * Update polling interval for a widget
 * @param {string} widgetId - Widget ID
 * @param {Function} callback - Callback function
 * @param {number} newInterval - New interval in milliseconds
 */
export const updatePollingInterval = (widgetId, callback, newInterval) => {
    stopPolling(widgetId)
    startPolling(widgetId, callback, newInterval)
}

/**
 * Check if widget is being polled
 * @param {string} widgetId - Widget ID
 * @returns {boolean} True if polling is active
 */
export const isPolling = (widgetId) => {
    return activePolls.has(widgetId)
}

/**
 * Get count of active polls
 * @returns {number} Number of active polls
 */
export const getActivePollCount = () => {
    return activePolls.size
}

export default {
    startPolling,
    stopPolling,
    stopAllPolling,
    updatePollingInterval,
    isPolling,
    getActivePollCount,
}
