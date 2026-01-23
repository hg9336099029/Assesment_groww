'use client'

import { useMemo, useState } from 'react'

import { Line, Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { formatTime } from '@utils/formatters'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend
)

import { useSelector } from 'react-redux'

// ... (imports)

function ChartView({ data, fields, chartType = 'line' }) {
    const [timeWindow, setTimeWindow] = useState('all')
    const theme = useSelector(state => state.ui.theme)

    const chartData = useMemo(() => {
        if (!data) return null

        let dataArray = Array.isArray(data) ? data : [data]
        if (dataArray.length === 0) return null

        // Check if data has timestamps (historical mode)
        const hasTimestamp = dataArray.length > 0 && 'timestamp' in dataArray[0]

        // Filter data based on time window
        if (hasTimestamp && timeWindow !== 'all') {
            const now = new Date()
            const timeLimit = new Date()
            if (timeWindow === '1m') timeLimit.setMinutes(now.getMinutes() - 1)
            if (timeWindow === '5m') timeLimit.setMinutes(now.getMinutes() - 5)
            if (timeWindow === '1h') timeLimit.setHours(now.getHours() - 1)

            dataArray = dataArray.filter(item => new Date(item.timestamp) > timeLimit)
        }

        // Define labels (X-axis)
        let labels
        if (hasTimestamp) {
            labels = dataArray.map(item => formatTime(item.timestamp))
        } else {
            // First field is labels (x-axis) if not historical
            const labelField = fields[0]
            labels = dataArray.map(item => String(item[labelField] || ''))
        }

        // Define datasets (Y-axis)
        // If historical, ALL fields are Y-axis. If not, slice(1).
        const dataFields = hasTimestamp ? fields : fields.slice(1)

        const datasets = dataFields.map((field, index) => {
            const colors = [
                'rgb(75, 192, 192)',
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 86)',
                'rgb(153, 102, 255)',
            ]

            const color = colors[index % colors.length]

            return {
                label: field,
                data: dataArray.map(item => {
                    const rawValue = item[field]
                    // Parse value to ensure it's a number (handles strings like "64000.50")
                    const value = parseFloat(rawValue)
                    return !isNaN(value) ? value : 0
                }),
                borderColor: color,
                backgroundColor: color.replace('rgb', 'rgba').replace(')', ', 0.2)'),
                tension: 0.1,
                pointRadius: hasTimestamp ? 2 : 4,
            }
        })

        return { labels, datasets }
    }, [data, fields, timeWindow])

    // ... (options remain)

    const options = {
        // ... (keep existing options)
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: theme === 'dark' ? '#e5e7eb' : '#374151',
                },
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            },
        },
        scales: {
            x: {
                ticks: {
                    color: theme === 'dark' ? '#9ca3af' : '#6b7280',
                },
                grid: {
                    color: theme === 'dark' ? '#374151' : '#e5e7eb',
                },
            },
            y: {
                ticks: {
                    color: theme === 'dark' ? '#9ca3af' : '#6b7280',
                },
                grid: {
                    color: theme === 'dark' ? '#374151' : '#e5e7eb',
                },
            },
        },
    }

    if (!chartData) {
        return (
            <div className="text-center text-gray-500 dark:text-gray-400 py-8">
                No data available for chart
            </div>
        )
    }

    return (
        <div className="flex flex-col h-full gap-2">
            {/* Time Window Controls */}
            {data && Array.isArray(data) && data.length > 0 && 'timestamp' in data[0] && (
                <div className="flex justify-end gap-1">
                    {['1m', '5m', '1h', 'all'].map(window => (
                        <button
                            key={window}
                            onClick={() => setTimeWindow(window)}
                            className={`px-2 py-0.5 text-xs rounded transition-colors ${timeWindow === window
                                ? 'bg-primary text-white'
                                : 'bg-gray-100 dark:bg-dark-hover text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-dark-hover/80 hover:text-gray-900 dark:hover:text-white'
                                }`}
                        >
                            {window.toUpperCase()}
                        </button>
                    ))}
                </div>
            )}

            <div className="flex-1 min-h-[200px]">
                {chartType === 'line' ? (
                    <Line data={chartData} options={options} />
                ) : (
                    <Bar data={chartData} options={options} />
                )}
            </div>
        </div>
    )
}

export default ChartView
