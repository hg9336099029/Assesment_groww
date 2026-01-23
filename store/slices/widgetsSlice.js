import { createSlice } from '@reduxjs/toolkit'

// Initial state
const initialState = {
    widgets: [],
    activeWidgetId: null,
    isLoading: false,
    error: null,
    isInitialized: false, // Track if we've attempted hydration
}

const widgetsSlice = createSlice({
    name: 'widgets',
    initialState,
    reducers: {
        setWidgets: (state, action) => {
            state.widgets = action.payload
            state.isInitialized = true
        },
        addWidget: (state, action) => {
            const newWidget = {
                id: `widget-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                ...action.payload,
                createdAt: new Date().toISOString(),
                lastUpdated: null,
                data: null,
                isLoading: false,
                error: null,
            }
            state.widgets.push(newWidget)
            // LocalStorage persistence is now handled by PersistenceManager
        },

        removeWidget: (state, action) => {
            state.widgets = state.widgets.filter(widget => widget.id !== action.payload)
        },

        updateWidget: (state, action) => {
            const { id, updates } = action.payload
            const widget = state.widgets.find(w => w.id === id)
            if (widget) {
                Object.assign(widget, updates)
            }
        },

        reorderWidgets: (state, action) => {
            state.widgets = action.payload
        },

        setWidgetData: (state, action) => {
            const { id, data } = action.payload
            const widget = state.widgets.find(w => w.id === id)
            if (widget) {
                widget.data = data
                widget.lastUpdated = new Date().toISOString()
                widget.isLoading = false
                widget.error = null

                // Add history for charts
                if (widget.displayMode === 'chart') {
                    if (!widget.history) widget.history = []

                    // Create history entry
                    const historyEntry = {
                        timestamp: widget.lastUpdated,
                        ...((typeof data === 'object' && data !== null && !Array.isArray(data)) ? data : { value: data })
                    }

                    widget.history.push(historyEntry)

                    // Limit history size to 500 points
                    if (widget.history.length > 500) {
                        widget.history.shift()
                    }
                }
            }
        },

        setWidgetLoading: (state, action) => {
            const { id, isLoading } = action.payload
            const widget = state.widgets.find(w => w.id === id)
            if (widget) {
                widget.isLoading = isLoading
            }
        },

        setWidgetError: (state, action) => {
            const { id, error } = action.payload
            const widget = state.widgets.find(w => w.id === id)
            if (widget) {
                widget.error = error
                widget.isLoading = false
            }
        },

        setActiveWidget: (state, action) => {
            state.activeWidgetId = action.payload
        },
    },
})

export const {
    setWidgets,
    addWidget,
    removeWidget,
    updateWidget,
    reorderWidgets,
    setWidgetData,
    setWidgetLoading,
    setWidgetError,
    setActiveWidget,
} = widgetsSlice.actions

// Selectors
export const selectAllWidgets = (state) => state.widgets.widgets
export const selectWidgetById = (id) => (state) =>
    state.widgets.widgets.find(widget => widget.id === id)
export const selectWidgetCount = (state) => state.widgets.widgets.length
export const selectActiveWidgetId = (state) => state.widgets.activeWidgetId

export default widgetsSlice.reducer
