import { formatCurrency, formatNumber, formatPercentage } from '@utils/formatters'

function CardView({ data, fields }) {
    if (!data) return null

    // If data is an array, show first item
    const displayData = Array.isArray(data) ? data[0] : data

    const formatValue = (value, key) => {
        if (value === null || value === undefined) return '-'

        // Try to detect currency/number/percentage based on key name and value
        const keyLower = key.toLowerCase()

        if (typeof value === 'number') {
            if (keyLower.includes('price') || keyLower.includes('usd') || keyLower.includes('inr')) {
                return formatCurrency(value)
            }
            if (keyLower.includes('percent') || keyLower.includes('%')) {
                return formatPercentage(value)
            }
            return formatNumber(value)
        }

        return String(value)
    }

    const getValueColor = (value, key) => {
        if (typeof value !== 'number') return 'text-white'

        const keyLower = key.toLowerCase()
        if (keyLower.includes('change') || keyLower.includes('percent')) {
            return value > 0
                ? 'text-green-400'
                : value < 0
                    ? 'text-red-400'
                    : 'text-white'
        }

        return 'text-white'
    }

    return (
        <div className="space-y-4">
            {fields.map((field, index) => {
                const value = displayData[field]
                const isFirstField = index === 0

                return (
                    <div key={field} className={isFirstField ? 'pb-4 border-b border-dark-border' : ''}>
                        <div className="text-xs text-gray-400 mb-1 uppercase tracking-wide">
                            {field}
                        </div>
                        <div className={`font-semibold ${isFirstField ? 'text-2xl' : 'text-lg'} ${getValueColor(value, field)}`}>
                            {formatValue(value, field)}
                        </div>
                    </div>
                )
            })}</div>
    )
}

export default CardView
