/**
 * Save widgets to localStorage
 * @param {Array} widgets - Array of widget objects
 */
export const saveWidgets = (widgets) => {
    try {
        localStorage.setItem('finance-dashboard-widgets', JSON.stringify(widgets))
        return true
    } catch (error) {
        console.error('Error saving widgets to localStorage:', error)
        if (error.name === 'QuotaExceededError') {
            alert('Storage quota exceeded. Please delete some widgets.')
        }
        return false
    }
}

/**
 * Load widgets from localStorage
 * @returns {Array} Array of widget objects
 */
export const loadWidgets = () => {
    try {
        const saved = localStorage.getItem('finance-dashboard-widgets')
        return saved ? JSON.parse(saved) : []
    } catch (error) {
        console.error('Error loading widgets from localStorage:', error)
        return []
    }
}

/**
 * Save widget layout to localStorage
 * @param {Array} layout - Array of widget positions
 */
export const saveLayout = (layout) => {
    try {
        localStorage.setItem('finance-dashboard-layout', JSON.stringify(layout))
        return true
    } catch (error) {
        console.error('Error saving layout to localStorage:', error)
        return false
    }
}

/**
 * Load widget layout from localStorage
 * @returns {Array} Array of widget positions
 */
export const loadLayout = () => {
    try {
        const saved = localStorage.getItem('finance-dashboard-layout')
        return saved ? JSON.parse(saved) : []
    } catch (error) {
        console.error('Error loading layout from localStorage:', error)
        return []
    }
}

/**
 * Export dashboard configuration as JSON
 * @param {Array} widgets - Array of widget objects
 * @returns {string} JSON string of configuration
 */
export const exportConfig = (widgets) => {
    const config = {
        version: '1.0',
        exportDate: new Date().toISOString(),
        widgets: widgets,
    }
    return JSON.stringify(config, null, 2)
}

/**
 * Import dashboard configuration from JSON
 * @param {string} jsonString - JSON string of configuration
 * @returns {object} Parsed configuration or null if invalid
 */
export const importConfig = (jsonString) => {
    try {
        const config = JSON.parse(jsonString)
        if (!config.widgets || !Array.isArray(config.widgets)) {
            throw new Error('Invalid configuration format')
        }
        return config.widgets
    } catch (error) {
        console.error('Error importing configuration:', error)
        alert('Invalid configuration file')
        return null
    }
}

/**
 * Clear all dashboard data from localStorage
 */
export const clearAllData = () => {
    try {
        localStorage.removeItem('finance-dashboard-widgets')
        localStorage.removeItem('finance-dashboard-layout')
        localStorage.removeItem('finance-dashboard-theme')
        return true
    } catch (error) {
        console.error('Error clearing localStorage:', error)
        return false
    }
}

/**
 * Get localStorage usage statistics
 * @returns {object} Storage statistics
 */
export const getStorageStats = () => {
    try {
        let totalSize = 0
        for (let key in localStorage) {
            if (localStorage.hasOwnProperty(key)) {
                totalSize += localStorage[key].length + key.length
            }
        }

        return {
            used: totalSize,
            usedKB: (totalSize / 1024).toFixed(2),
            usedMB: (totalSize / (1024 * 1024)).toFixed(2),
        }
    } catch (error) {
        console.error('Error getting storage stats:', error)
        return null
    }
}
