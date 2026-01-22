import { formatRelativeTime } from '@utils/formatters'

function WidgetHeader({ widget, onRefresh, onDelete }) {
    return (
        <div className="bg-dark-card/50 px-4 py-3 border-b border-dark-border flex items-center justify-between">
            <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="cursor-move text-gray-500 hover:text-gray-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                    </svg>
                </div>

                <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-white truncate text-sm">
                        {widget.name}
                    </h3>
                    {widget.lastUpdated && (
                        <p className="text-xs text-gray-500">
                            Last updated: {formatRelativeTime(widget.lastUpdated)}
                        </p>
                    )}
                </div>
            </div>

            <div className="flex items-center gap-1">
                <button
                    onClick={onRefresh}
                    disabled={widget.isLoading}
                    className="p-1.5 rounded hover:bg-dark-hover text-gray-400 hover:text-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
                    onClick={onDelete}
                    className="p-1.5 rounded hover:bg-red-900/30 text-gray-400 hover:text-red-400 transition-colors"
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
