import { createSlice } from '@reduxjs/toolkit'

const CACHE_DURATION = 30 // seconds

const initialState = {
    cache: {}, // { url: { data, timestamp } }
}

const cacheSlice = createSlice({
    name: 'cache',
    initialState,
    reducers: {
        setCacheData: (state, action) => {
            const { url, data } = action.payload
            state.cache[url] = {
                data,
                timestamp: Date.now(),
            }
        },

        invalidateCache: (state, action) => {
            const url = action.payload
            delete state.cache[url]
        },

        clearExpiredCache: (state) => {
            const now = Date.now()
            Object.keys(state.cache).forEach(url => {
                const cacheEntry = state.cache[url]
                if (now - cacheEntry.timestamp > CACHE_DURATION * 1000) {
                    delete state.cache[url]
                }
            })
        },

        clearAllCache: (state) => {
            state.cache = {}
        },
    },
})

export const {
    setCacheData,
    invalidateCache,
    clearExpiredCache,
    clearAllCache,
} = cacheSlice.actions

// Selectors
export const selectCacheData = (url) => (state) => {
    const cacheEntry = state.cache.cache[url]
    if (!cacheEntry) return null

    const now = Date.now()
    const isExpired = now - cacheEntry.timestamp > CACHE_DURATION * 1000

    return isExpired ? null : cacheEntry.data
}

export const selectIsCached = (url) => (state) => {
    const cacheEntry = state.cache.cache[url]
    if (!cacheEntry) return false

    const now = Date.now()
    return now - cacheEntry.timestamp <= CACHE_DURATION * 1000
}

export default cacheSlice.reducer
