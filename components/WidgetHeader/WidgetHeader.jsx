import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '@store/slices/uiSlice'
import { formatRelativeTime } from '@utils/formatters'

function WidgetHeader({ widget, onRefresh, onDelete, dragHandleProps }) {
    const dispatch = useDispatch()
    const [mounted, setMounted] = useState(false);
    const theme = useSelector(state => state.ui.theme);
    const isLight = theme !== 'dark';

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <div className="bg-white dark:bg-dark-card/50 px-4 py-3 border-b border-gray-200 dark:border-dark-border flex items-center justify-between">
            <div className="flex items-center gap-3 flex-1 min-w-0">
                <div
                    className={`cursor-move p-1 rounded hover:bg-gray-100 dark:hover:bg-dark-hover ${isLight ? 'text-gray-500 hover:text-gray-700' : 'text-gray-500 hover:text-gray-400'
                        }`}
                    {...dragHandleProps}
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                    </svg>
                </div>

                <div className="flex-1 min-w-0">
                    <h3 className={`font-medium truncate text-sm ${isLight ? 'text-gray-900' : 'text-white'}`}>
                        {widget.name}
                    </h3>
                    {widget.lastUpdated && mounted && (
                        <p className="text-xs text-gray-600 dark:text-gray-500">
                            Last updated: {formatRelativeTime(widget.lastUpdated)}
                        </p>
                    )}
                </div>
            </div>

            <div className="flex items-center gap-1">
                <button
                    onClick={onRefresh}
                    disabled={widget.isLoading}
                    className={`p-1.5 rounded hover:bg-gray-100 dark:hover:bg-dark-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${isLight
                        ? 'text-gray-600 hover:text-gray-900'
                        : 'text-gray-400 hover:text-gray-300'
                        }`}
                    title="Refresh data"
                >
                    <svg
                        className={`w-4 h-4 ${widget.isLoading ? 'animate-spin' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                </button>

                <button
                    onClick={() => dispatch(openModal({ type: 'editWidget', props: { widgetId: widget.id } }))}
                    className={`p-1.5 rounded hover:bg-gray-100 dark:hover:bg-dark-hover transition-colors ${isLight
                        ? 'text-gray-600 hover:text-gray-900'
                        : 'text-gray-400 hover:text-gray-300'
                        }`}
                    title="Settings"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </button>

                <button
                    onClick={onDelete}
                    className={`p-1.5 rounded hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors ${isLight ? 'text-gray-600 hover:text-red-600' : 'text-gray-400 hover:text-red-400'}`}
                    title="Delete widget"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default WidgetHeader
