import { configureStore } from '@reduxjs/toolkit'
import widgetsReducer from './slices/widgetsSlice'
import uiReducer from './slices/uiSlice'
import cacheReducer from './slices/cacheSlice'

export const store = configureStore({
    reducer: {
        widgets: widgetsReducer,
        ui: uiReducer,
        cache: cacheReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types for serializable check
                ignoredActions: ['widgets/setWidgetData'],
                // Ignore these field paths in all actions
                ignoredActionPaths: ['payload.data'],
                // Ignore these paths in the state
                ignoredPaths: ['widgets.widgets'],
            },
        }),
})

export default store
