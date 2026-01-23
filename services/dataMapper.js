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

export const LABEL_MAPPING = {
    // Generic / Common
    c: 'Current Price',
    d: 'Change',
    dp: 'Change %',
    h: 'High',
    l: 'Low',
    o: 'Open',
    pc: 'Previous Close',
    t: 'Timestamp',
    v: 'Volume',
    mc: 'Market Cap',
    pe: 'P/E Ratio',
    div: 'Dividend',
    yld: 'Yield',

    // Explicit names (if they come through)
    current_price: 'Current Price',
    market_cap: 'Market Cap',
    high_24h: 'High (24h)',
    low_24h: 'Low (24h)',
    price_change_percentage_24h: 'Change % (24h)',
    market_cap_rank: 'Rank',
    total_volume: 'Volume',
    circulating_supply: 'Circulating Supply',
    total_supply: 'Total Supply',
    max_supply: 'Max Supply',
    ath: 'All Time High',
    ath_change_percentage: 'ATH Change %',
    atl: 'All Time Low',
    atl_change_percentage: 'ATL Change %',
    last_updated: 'Last Updated',
    symbol: 'Symbol',
    name: 'Name',
    image: 'Image',
    roi: 'ROI',
}

/**
 * Get human readable label for a field key
 * @param {string} key - Field key (e.g. 'c', 'dp')
 * @returns {string} Human readable label
 */
export const getFieldLabel = (key) => {
    if (!key) return ''
    const lowerKey = key.toLowerCase()

    // 1. Check explicit mapping first
    if (LABEL_MAPPING[lowerKey]) {
        return LABEL_MAPPING[lowerKey]
    }

    // 2. Dynamic cleaning: strip common prefixes
    let cleanKey = key
        .replace(/^data\.rates\./i, '')
        .replace(/^data\./i, '')
        .replace(/^rates\./i, '')

    // 3. Replace snake_case with spaces
    cleanKey = cleanKey.replace(/_/g, ' ')

    // 4. Special case: short symbols (3-5 chars) -> Uppercase
    if (cleanKey.length <= 5 && !cleanKey.includes(' ')) {
        return cleanKey.toUpperCase()
    }

    // 5. Title Case for longer sentences
    return cleanKey.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}

export default {
    parseJsonStructure,
    extractFields,
    mapFieldsToDisplay,
    normalizeApiResponse,
    handleNestedData,
    getFieldLabel,
}
