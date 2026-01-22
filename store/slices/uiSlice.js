import { createSlice } from '@reduxjs/toolkit'

// Load theme from localStorage
const loadThemeFromStorage = () => {
    try {
        const saved = localStorage.getItem('finance-dashboard-theme')
        return saved || 'dark'
    } catch (error) {
        return 'dark'
    }
}

const initialState = {
    isModalOpen: false,
    modalType: null,
    theme: loadThemeFromStorage(),
    sidebarOpen: false,
}

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.isModalOpen = true
            state.modalType = action.payload || 'addWidget'
        },

        closeModal: (state) => {
            state.isModalOpen = false
            state.modalType = null
        },

        toggleTheme: (state) => {
            state.theme = state.theme === 'dark' ? 'light' : 'dark'
            localStorage.setItem('finance-dashboard-theme', state.theme)
        },

        setTheme: (state, action) => {
            state.theme = action.payload
            localStorage.setItem('finance-dashboard-theme', state.theme)
        },

        toggleSidebar: (state) => {
            state.sidebarOpen = !state.sidebarOpen
        },
    },
})

export const {
    openModal,
    closeModal,
    toggleTheme,
    setTheme,
    toggleSidebar,
} = uiSlice.actions

// Selectors
export const selectModalState = (state) => ({
    isOpen: state.ui.isModalOpen,
    type: state.ui.modalType,
})
export const selectTheme = (state) => state.ui.theme
export const selectSidebarOpen = (state) => state.ui.sidebarOpen

export default uiSlice.reducer
