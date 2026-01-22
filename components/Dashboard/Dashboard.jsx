'use client'

import { useSelector } from 'react-redux'
import { selectAllWidgets, selectWidgetCount } from '@store/slices/widgetsSlice'
import DashboardHeader from '../DashboardHeader/DashboardHeader'
import WidgetGrid from '../WidgetGrid/WidgetGrid'
import EmptyState from '../EmptyState/EmptyState'

function Dashboard() {
    const widgets = useSelector(selectAllWidgets)
    const widgetCount = useSelector(selectWidgetCount)

    return (
        <div className="min-h-screen flex flex-col">
            <DashboardHeader widgetCount={widgetCount} />

            <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full">
                {widgets.length === 0 ? (
                    <EmptyState />
                ) : (
                    <WidgetGrid widgets={widgets} />
                )}
            </main>
        </div>
    )
}

export default Dashboard
