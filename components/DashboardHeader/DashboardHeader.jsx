'use client'

import { useSelector, useDispatch } from 'react-redux'
import { openModal, toggleTheme } from '@store/slices/uiSlice'

function DashboardHeader({ widgetCount }) {
    const dispatch = useDispatch()
    const theme = useSelector(state => state.ui.theme)

    const handleAddWidget = () => {
        dispatch(openModal('addWidget'))
    }

    const handleToggleTheme = () => {
        dispatch(toggleTheme())
    }

    return (
        <header className="sticky top-0 z-30 bg-dark-card/95 backdrop-blur-sm border-b border-dark-border">
            <div className="max-w-7xl mx-auto px-6 py-3">
                <div className="flex items-center justify-between gap-4">
                    {/* Left side */}
                    <div className="flex items-center gap-4 flex-1">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                                <span className="text-xl">📊</span>
                            </div>
                            <div>
                                <h1 className="text-lg font-semibold text-white">
                                    Finance Dashboard
                                </h1>
                                {widgetCount > 0 && (
                                    <p className="text-xs text-gray-400">
                                        {widgetCount} active widget{widgetCount !== 1 ? 's' : ''} • Real-time data
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={handleAddWidget}
                            className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded-lg font-medium text-sm transition-all duration-200"
                        >
                            <span className="text-lg font-light">+</span>
                            <span>Add Widget</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default DashboardHeader
