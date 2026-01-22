'use client'

import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllWidgets, setWidgets } from '@store/slices/widgetsSlice'

export default function PersistenceManager() {
    const dispatch = useDispatch()
    const widgets = useSelector(selectAllWidgets)
    const isFirstRender = useRef(true)

    // Load from storage on mount
    useEffect(() => {
        try {
            const saved = localStorage.getItem('finance-dashboard-widgets')
            if (saved) {
                const parsed = JSON.parse(saved)
                dispatch(setWidgets(parsed))
            }
        } catch (error) {
            console.error('Failed to load widgets:', error)
        }
    }, [dispatch])

    // Save to storage on change
    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
            return
        }

        try {
            localStorage.setItem('finance-dashboard-widgets', JSON.stringify(widgets))
        } catch (error) {
            console.error('Failed to save widgets:', error)
        }
    }, [widgets])

    return null
}
