'use client'

import { useMemo } from 'react'
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

function ChartView({ data, fields, chartType = 'line' }) {
    const chartData = useMemo(() => {
        if (!data) return null

        const dataArray = Array.isArray(data) ? data : [data]

        // First field is labels (x-axis), rest are datasets
        const labelField = fields[0]
        const dataFields = fields.slice(1)

        const labels = dataArray.map(item => String(item[labelField] || ''))

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
                    const value = item[field]
                    return typeof value === 'number' ? value : 0
                }),
                borderColor: color,
                backgroundColor: color.replace('rgb', 'rgba').replace(')', ', 0.2)'),
                tension: 0.1,
            }
        })

        return { labels, datasets }
    }, [data, fields])

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: document.documentElement.classList.contains('dark') ? '#e5e7eb' : '#374151',
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
                    color: document.documentElement.classList.contains('dark') ? '#9ca3af' : '#6b7280',
                },
                grid: {
                    color: document.documentElement.classList.contains('dark') ? '#374151' : '#e5e7eb',
                },
            },
            y: {
                ticks: {
                    color: document.documentElement.classList.contains('dark') ? '#9ca3af' : '#6b7280',
                },
                grid: {
                    color: document.documentElement.classList.contains('dark') ? '#374151' : '#e5e7eb',
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
        <div className="h-64">
            {chartType === 'line' ? (
                <Line data={chartData} options={options} />
            ) : (
                <Bar data={chartData} options={options} />
            )}
        </div>
    )
}

export default ChartView
