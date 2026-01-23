import { useSelector } from 'react-redux'
import { formatCurrency, formatNumber, formatPercentage } from '@utils/formatters'
import { getFieldLabel } from '@services/dataMapper'

function CardView({ data, fields }) {
    const theme = useSelector(state => state.ui.theme)
    const isLight = theme !== 'dark'

    if (!data) return null

    // Key mapping for common financial data keys
    const KEY_MAPPING = {
        'P': 'Price',
        'C': 'Current Price',
        'PC': 'Previous Close',
        'O': 'Open',
        'H': 'High',
        'L': 'Low',
        'T': 'Market Cap',
        'V': 'Volume',
        'DP': 'Change %',
        'D': 'Dividend',
        'CP': 'Change',
        'MC': 'Market Cap',
        'DIV': 'Dividend',
        'YLD': 'Yield',
        'PE': 'P/E Ratio',
        'AMOUNT': 'Amount',
        'CURRENCY': 'Currency',
    }

    // specific keys that should always be formatted as currency if simpler detection fails
    const CURRENCY_KEYS = ['P', 'C', 'PC', 'O', 'H', 'L', 'D', 'CP', 'DIV', 'MC', 'T', 'AMOUNT']
    const PERCENT_KEYS = ['DP', 'YLD']

    // If data is an array, show first item
    const displayData = Array.isArray(data) ? data[0] : data

    const getLabel = (key) => {
        // Try exact match first, then upper case
        // If not found in mapping, use the smart label cleaner from dataMapper
        return KEY_MAPPING[key] || KEY_MAPPING[key.toUpperCase()] || getFieldLabel(key)
    }

    const formatValue = (value, key) => {
        if (value === null || value === undefined) return '-'

        // Try to parse string numbers
        let numValue = value
        if (typeof value === 'string' && !isNaN(Number(value)) && value.trim() !== '') {
            numValue = Number(value)
        }

        // Try to detect currency/number/percentage based on key name and value
        // Also check exact key matches against our dictionary
        const keyLower = key.toLowerCase()
        const exactKey = key.toUpperCase()

        if (typeof numValue === 'number') {
            if (CURRENCY_KEYS.includes(exactKey) || keyLower.includes('price') || keyLower.includes('usd') || keyLower.includes('inr') || keyLower.includes('dividend') || keyLower.includes('cap')) {
                // Default to USD for now, or could try to detect from data if available
                return formatCurrency(numValue, displayData.currency || 'USD')
            }
            if (PERCENT_KEYS.includes(exactKey) || keyLower.includes('percent') || keyLower.includes('%') || keyLower.includes('change')) {
                // Check if it's already a decimal (0.015) or percentage (1.5)
                // Heuristic: if small < 1 might be decimal representation, but often APIs return 1.5 for 1.5%
                // For now, assume value is as-is
                return formatPercentage(numValue)
            }
            // Logic for Market Cap (T) - if value is very large
            if (exactKey === 'T' || numValue > 1000000000) {
                return formatCurrency(numValue, displayData.currency || 'USD')
            }

            return formatNumber(numValue)
        }

        return String(value)
    }

    const getValueColor = (value, key) => {
        let numValue = value
        if (typeof value === 'string' && !isNaN(Number(value)) && value.trim() !== '') {
            numValue = Number(value)
        }

        if (typeof numValue !== 'number') return isLight ? 'text-gray-900' : 'text-white'

        const keyLower = key.toLowerCase()
        const exactKey = key.toUpperCase()

        if (exactKey === 'DP' || exactKey === 'CP' || keyLower.includes('change') || keyLower.includes('percent')) {
            return numValue > 0
                ? (isLight ? 'text-green-600' : 'text-green-400')
                : numValue < 0
                    ? (isLight ? 'text-red-600' : 'text-red-400')
                    : (isLight ? 'text-gray-900' : 'text-white')
        }

        return isLight ? 'text-gray-900' : 'text-white'
    }

    // Sort fields to match the specific layout requested:
    // Row 1: Current Price (Top)
    // Row 2: Market Cap | Previous Close
    // Row 3: Open | Low
    // Row 4: High | Change %
    // Row 5: Dividend
    const PRIORITY_ORDER = [
        ['PRICE', 'CURRENT PRICE', 'C', 'P'],         // Rank 0 (Top)
        ['MARKET CAP', 'T', 'MC'],                    // Rank 1
        ['PREVIOUS CLOSE', 'PC'],                     // Rank 2
        ['OPEN', 'O'],                                // Rank 3
        ['LOW', 'L'],                                 // Rank 4
        ['HIGH', 'H'],                                // Rank 5
        ['CHANGE %', 'DP', 'CHANGE PERCENT', '%'],    // Rank 6
        ['DIVIDEND', 'D', 'DIV'],                     // Rank 7
        ['CHANGE', 'CP'],                             // Rank 8
        ['VOLUME', 'V']                               // Rank 9
    ]

    const sortedFields = [...fields].sort((a, b) => {
        const getRank = (key) => {
            const label = getLabel(key).toUpperCase()
            const rawKey = key.toUpperCase()

            for (let i = 0; i < PRIORITY_ORDER.length; i++) {
                if (PRIORITY_ORDER[i].includes(rawKey) || PRIORITY_ORDER[i].includes(label)) {
                    return i
                }
            }
            return 99 // Unknown fields go last
        }

        return getRank(a) - getRank(b)
    })

    return (
        <div className="space-y-6">
            {/* Use a grid layout for better density */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                {sortedFields.map((field, index) => {
                    const value = displayData[field]

                    // Force the very first item (after sort) to be primary
                    const isFirstField = index === 0

                    if (isFirstField) {
                        return (
                            <div key={field} className="col-span-2 pb-4 border-b border-gray-200 dark:border-dark-border">
                                <div className={`text-sm mb-1 uppercase tracking-wide ${isLight ? 'text-gray-700' : 'text-gray-400'
                                    }`}>
                                    {getLabel(field)}
                                </div>
                                <div className={`font-bold text-4xl ${getValueColor(value, field)}`}>
                                    {formatValue(value, field)}
                                </div>
                            </div>
                        )
                    }

                    return (
                        <div key={field} className="">
                            <div className={`text-xs mb-1 font-medium uppercase tracking-wide ${isLight ? 'text-gray-700' : 'text-gray-500'
                                }`}>
                                {getLabel(field)}
                            </div>
                            <div className={`font-semibold text-lg ${getValueColor(value, field)} truncate`} title={String(value)}>
                                {formatValue(value, field)}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CardView
