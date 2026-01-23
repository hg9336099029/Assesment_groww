'use client'

import { useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { setWidgetData, setWidgetLoading, setWidgetError, removeWidget } from '@store/slices/widgetsSlice'
import { fetchApiData } from '@services/apiService'
import { startPolling, stopPolling } from '@services/pollingManager'
import { mapFieldsToDisplay } from '@services/dataMapper'
import WidgetHeader from '../WidgetHeader/WidgetHeader'
import CardView from '../CardView/CardView'
import TableView from '../TableView/TableView'
import ChartView from '../ChartView/ChartView'

function WidgetCard({ widget, dragHandleProps }) {
    const dispatch = useDispatch()

    const fetchData = useCallback(async () => {
        dispatch(setWidgetLoading({ id: widget.id, isLoading: true }))

        const result = await fetchApiData(widget.apiUrl)

        if (result.success) {
            const mappedData = mapFieldsToDisplay(result.data, widget.selectedFields)
            dispatch(setWidgetData({ id: widget.id, data: mappedData }))
        } else {
            dispatch(setWidgetError({ id: widget.id, error: result.error }))
        }
    }, [widget.id, widget.apiUrl, widget.selectedFields, dispatch])

    useEffect(() => {
        // Start polling
        const intervalMs = (widget.refreshInterval || 60) * 1000
        startPolling(widget.id, fetchData, intervalMs)

        return () => {
            stopPolling(widget.id)
        }
    }, [widget.id, widget.refreshInterval, fetchData])

    const handleRefresh = () => {
        fetchData()
    }

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete this widget?')) {
            stopPolling(widget.id)
            dispatch(removeWidget(widget.id))
        }
    }

    return (
        <div className="bg-white dark:bg-dark-card rounded-lg shadow-sm border border-gray-200 dark:border-dark-border overflow-hidden hover:border-gray-300 dark:hover:border-dark-hover transition-colors duration-200">
            <WidgetHeader
                widget={widget}
                onRefresh={handleRefresh}
                onDelete={handleDelete}
                dragHandleProps={dragHandleProps}
            />

            <div className="p-4">
                {widget.isLoading && !widget.data && (
                    <div className="flex items-center justify-center py-12">
                        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
                    </div>
                )}

                {widget.error && (
                    <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 rounded-lg p-4">
                        <p className="text-sm text-red-700 dark:text-red-300 whitespace-pre-wrap">
                            {widget.error}
                        </p>
                    </div>
                )}

                {widget.data && !widget.error && (
                    <>
                        {widget.displayMode === 'card' && (
                            <CardView data={widget.data} fields={widget.selectedFields} />
                        )}
                        {widget.displayMode === 'table' && (
                            <TableView
                                data={widget.data}
                                fields={widget.selectedFields}
                                showArraysOnly={widget.showArraysOnly}
                            />
                        )}
                        {widget.displayMode === 'chart' && (
                            <ChartView
                                data={widget.history || widget.data}
                                fields={widget.selectedFields}
                                chartType={widget.chartType || 'line'}
                            />
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default WidgetCard
