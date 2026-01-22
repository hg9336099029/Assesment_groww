'use client'

import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectTheme } from '@/store/slices/uiSlice'
import Dashboard from '@/components/Dashboard/Dashboard'
import AddWidgetModal from '@/components/AddWidgetModal/AddWidgetModal'

export default function Home() {
    const theme = useSelector(selectTheme)

    // Apply theme to document
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    return (
        <>
            <Dashboard />
            <AddWidgetModal />
        </>
    )
}
