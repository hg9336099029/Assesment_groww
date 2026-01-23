'use client'

import { useSelector, useDispatch } from 'react-redux'
import { openModal, toggleTheme } from '@store/slices/uiSlice'

function DashboardHeader({ widgetCount }) {
    const dispatch = useDispatch()
    const theme = useSelector(state => state.ui.theme)

    const isLight = theme !== 'dark'

    const handleAddWidget = () => {
        dispatch(openModal('addWidget'))
    }

    const handleToggleTheme = () => {
        dispatch(toggleTheme())
    }

    return (
        <header className="sticky top-0 z-30 bg-white/95 dark:bg-dark-card/95 backdrop-blur-sm border-b border-gray-200 dark:border-dark-border">
            <div className="max-w-7xl mx-auto px-6 py-3">
                <div className="flex items-center justify-between gap-4">
                    {/* Left side */}
                    <div className="flex items-center gap-4 flex-1">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                                <span className="text-xl">📊</span>
                            </div>

                            <div>
                                <h1
                                    className={`text-lg font-semibold ${isLight ? 'text-gray-900' : 'text-white'
                                        }`}
                                >
                                    Finance Dashboard
                                </h1>

                                {widgetCount > 0 && (
                                    <p
                                        className={`text-xs ${isLight ? 'text-gray-900' : 'text-gray-400'
                                            }`}
                                    >
                                        {widgetCount} active widget{widgetCount !== 1 ? 's' : ''} • Real-time data
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right side */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={handleToggleTheme}
                            className={`p-2 rounded-lg bg-gray-100 dark:bg-dark-bg border border-gray-200 dark:border-dark-border transition-all duration-200 ${isLight
                                    ? 'text-gray-900 hover:text-gray-900 hover:border-gray-300'
                                    : 'text-gray-400 hover:text-white dark:hover:border-gray-500'
                                }`}
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 0 018 0z" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            )}
                        </button>

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
