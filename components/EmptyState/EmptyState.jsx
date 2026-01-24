'use client'

import { useDispatch } from 'react-redux'
import { openModal } from '@store/slices/uiSlice'

function EmptyState() {
    const dispatch = useDispatch()

    const handleAddWidget = () => {
        dispatch(openModal('addWidget'))
    }

    return (
        <div className="flex items-center justify-center min-h-[70vh]">
            <div className="text-center max-w-md px-4">
                <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 dark:bg-dark-card rounded-2xl flex items-center justify-center">
                    <span className="text-5xl opacity-50">📊</span>
                </div>

                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                    Build Your Finance Dashboard
                </h2>

                <p className="text-base text-gray-600 dark:text-gray-400 mb-8">
                    Create custom widgets by connecting to any finance API. Track real-time data and build your personalized view.
                </p>

                <button
                    onClick={handleAddWidget}
                    className="px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg font-medium transition-all duration-200"
                >
                    + Add Widget
                </button>
            </div>
        </div>
    )
}

export default EmptyState
