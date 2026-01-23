'use client'

import { Provider, useSelector } from 'react-redux'
import { store } from '@/store/store'
import PersistenceManager from '@/components/PersistenceManager/PersistenceManager'
import { useEffect } from 'react'

// Internal component to handle theme effects
function ThemeManager() {
    const theme = useSelector(state => state.ui.theme)

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    return null
}

export function Providers({ children }) {
    return (
        <Provider store={store}>
            <PersistenceManager />
            <ThemeManager />
            {children}
        </Provider>
    )
}
