'use client'

import { useState, useMemo } from 'react'
import { formatNumber } from '@utils/formatters'
import { getFieldLabel } from '@services/dataMapper'

function TableView({ data, fields, showArraysOnly }) {
    const [searchTerm, setSearchTerm] = useState('')
    const [sortField, setSortField] = useState(null)
    const [sortDirection, setSortDirection] = useState('asc')
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(10)

    // Ensure data is an array
    const tableData = useMemo(() => {
        if (!data) return []
        return Array.isArray(data) ? data : [data]
    }, [data])

    // Filter data based on search
    const filteredData = useMemo(() => {
        if (!searchTerm) return tableData

        return tableData.filter(row => {
            return fields.some(field => {
                const value = row[field]
                if (value === null || value === undefined) return false
                return String(value).toLowerCase().includes(searchTerm.toLowerCase())
            })
        })
    }, [tableData, fields, searchTerm])

    // Sort data
    const sortedData = useMemo(() => {
        if (!sortField) return filteredData

        return [...filteredData].sort((a, b) => {
            const aVal = a[sortField]
            const bVal = b[sortField]

            if (aVal === null || aVal === undefined) return 1
            if (bVal === null || bVal === undefined) return -1

            let comparison = 0
            if (typeof aVal === 'number' && typeof bVal === 'number') {
                comparison = aVal - bVal
            } else {
                comparison = String(aVal).localeCompare(String(bVal))
            }

            return sortDirection === 'asc' ? comparison : -comparison
        })
    }, [filteredData, sortField, sortDirection])

    // Paginate data
    const paginatedData = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage
        return sortedData.slice(startIndex, startIndex + itemsPerPage)
    }, [sortedData, currentPage, itemsPerPage])

    const totalPages = Math.ceil(sortedData.length / itemsPerPage)

    const handleSort = (field) => {
        if (sortField === field) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
        } else {
            setSortField(field)
            setSortDirection('asc')
        }
    }

    const formatValue = (value) => {
        if (value === null || value === undefined) return '-'

        let numValue = value
        if (typeof value === 'string' && !isNaN(Number(value)) && value.trim() !== '') {
            numValue = Number(value)
        }

        if (typeof numValue === 'number') return formatNumber(numValue)
        return String(value)
    }

    return (
        <div className="space-y-4">
            {/* Search */}
            <div className="flex items-center gap-4">
                <input
                    type="text"
                    placeholder="Search table..."
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value)
                        setCurrentPage(1)
                    }}
                    className="flex-1 px-3 py-2 bg-gray-50 dark:bg-dark-hover border border-gray-200 dark:border-dark-border rounded-lg text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                    style={{ color: 'var(--text-main)' }}
                />
                <div className="text-sm text-gray-600 dark:text-gray-400">
                    {sortedData.length} of {tableData.length} items
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto scrollbar-thin">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="border-b border-gray-200 dark:border-dark-border">
                            {fields.map(field => (
                                <th
                                    key={field}
                                    onClick={() => handleSort(field)}
                                    className="px-3 py-2 text-left font-semibold cursor-pointer hover:bg-gray-100 dark:hover:bg-dark-hover transition-colors"
                                    style={{ color: 'var(--text-main)' }}
                                >
                                    <div className="flex items-center gap-2">
                                        <span className="truncate">{getFieldLabel(field)}</span>
                                        {sortField === field && (
                                            <span className="text-primary">
                                                {sortDirection === 'asc' ? '↑' : '↓'}
                                            </span>
                                        )}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedData.map((row, index) => (
                            <tr
                                key={index}
                                className="border-b border-gray-200 dark:border-dark-border/50 hover:bg-gray-50 dark:hover:bg-dark-hover/50 transition-colors"
                            >
                                {fields.map(field => (
                                    <td key={field} className="px-3 py-2 truncate max-w-xs font-medium" style={{ color: 'var(--text-main)' }} title={String(row[field])}>
                                        {formatValue(row[field])}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                        <label className="text-gray-700 dark:text-gray-400">
                            Items per page:
                        </label>
                        <select
                            value={itemsPerPage}
                            onChange={(e) => {
                                setItemsPerPage(Number(e.target.value))
                                setCurrentPage(1)
                            }}
                            className="px-2 py-1 bg-gray-50 dark:bg-dark-hover border border-gray-200 dark:border-dark-border rounded text-gray-900 dark:text-white"
                        >
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={25}>25</option>
                            <option value={50}>50</option>
                        </select>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                            className="px-3 py-1 bg-gray-100 dark:bg-dark-hover rounded hover:bg-gray-200 dark:hover:bg-dark-border disabled:opacity-50 disabled:cursor-not-allowed text-gray-700 dark:text-white"
                        >
                            Previous
                        </button>
                        <span className="text-gray-700 dark:text-gray-400">
                            Page {currentPage} of {totalPages}
                        </span>
                        <button
                            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                            className="px-3 py-1 bg-gray-100 dark:bg-dark-hover rounded hover:bg-gray-200 dark:hover:bg-dark-border disabled:opacity-50 disabled:cursor-not-allowed text-gray-700 dark:text-white"
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default TableView
