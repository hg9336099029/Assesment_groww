/**
 * Flatten a nested object into a single-level object with dot notation keys
 * @param {object} obj - Object to flatten
 * @param {string} prefix - Prefix for keys
 * @returns {object} Flattened object
 */
export const flattenObject = (obj, prefix = '') => {
    const flattened = {}

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key]
            const newKey = prefix ? `${prefix}.${key}` : key

            if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
                Object.assign(flattened, flattenObject(value, newKey))
            } else {
                flattened[newKey] = value
            }
        }
    }

    return flattened
}

/**
 * Extract array data from an object
 * @param {object} obj - Object to search
 * @returns {Array} Found arrays
 */
export const extractArrayData = (obj) => {
    const arrays = []

    const search = (current, path = '') => {
        if (Array.isArray(current)) {
            arrays.push({ path, data: current })
        } else if (current !== null && typeof current === 'object') {
            for (const key in current) {
                if (current.hasOwnProperty(key)) {
                    const newPath = path ? `${path}.${key}` : key
                    search(current[key], newPath)
                }
            }
        }
    }

    search(obj)
    return arrays
}

/**
 * Transform data for Chart.js format
 * @param {Array} data - Array of data objects
 * @param {Array} fields - Fields to include
 * @returns {object} Chart.js compatible data
 */
export const transformForChart = (data, fields) => {
    if (!Array.isArray(data) || data.length === 0) {
        return { labels: [], datasets: [] }
    }

    // Assume first field is label (x-axis), rest are datasets
    const labelField = fields[0]
    const dataFields = fields.slice(1)

    const labels = data.map(item => parseNestedField(item, labelField))

    const datasets = dataFields.map((field, index) => {
        const colors = [
            'rgb(75, 192, 192)',
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 206, 86)',
            'rgb(153, 102, 255)',
        ]

        return {
            label: field,
            data: data.map(item => parseNestedField(item, field)),
            borderColor: colors[index % colors.length],
            backgroundColor: colors[index % colors.length].replace('rgb', 'rgba').replace(')', ', 0.2)'),
            tension: 0.1,
        }
    })

    return { labels, datasets }
}

/**
 * Transform data for table display
 * @param {Array} data - Array of data objects
 * @param {Array} fields - Fields to include
 * @returns {Array} Transformed data for table
 */
export const transformForTable = (data, fields) => {
    if (!Array.isArray(data)) return []

    return data.map(item => {
        const row = {}
        fields.forEach(field => {
            row[field] = parseNestedField(item, field)
        })
        return row
    })
}

/**
 * Get value from nested object path
 * @param {object} obj - Object to search
 * @param {string} path - Dot-notation path (e.g., "data.rates.USD")
 * @returns {any} Value at path or undefined
 */
export const parseNestedField = (obj, path) => {
    if (!obj || !path) return undefined

    const keys = path.split('.')
    let current = obj

    for (const key of keys) {
        if (current === null || current === undefined) return undefined
        current = current[key]
    }

    return current
}

/**
 * Deep clone an object
 * @param {any} obj - Object to clone
 * @returns {any} Cloned object
 */
export const deepClone = (obj) => {
    if (obj === null || typeof obj !== 'object') return obj
    if (obj instanceof Date) return new Date(obj.getTime())
    if (obj instanceof Array) return obj.map(item => deepClone(item))

    const cloned = {}
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloned[key] = deepClone(obj[key])
        }
    }
    return cloned
}

/**
 * Generate a unique ID
 * @returns {string} Unique ID
 */
export const generateId = () => {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

/**
 * Debounce function
 * @param {Function} func - Function to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, delay) => {
    let timeoutId
    return function (...args) {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => func.apply(this, args), delay)
    }
}
