module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/store/slices/widgetsSlice.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addWidget",
    ()=>addWidget,
    "default",
    ()=>__TURBOPACK__default__export__,
    "removeWidget",
    ()=>removeWidget,
    "reorderWidgets",
    ()=>reorderWidgets,
    "selectActiveWidgetId",
    ()=>selectActiveWidgetId,
    "selectAllWidgets",
    ()=>selectAllWidgets,
    "selectWidgetById",
    ()=>selectWidgetById,
    "selectWidgetCount",
    ()=>selectWidgetCount,
    "setActiveWidget",
    ()=>setActiveWidget,
    "setWidgetData",
    ()=>setWidgetData,
    "setWidgetError",
    ()=>setWidgetError,
    "setWidgetLoading",
    ()=>setWidgetLoading,
    "updateWidget",
    ()=>updateWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const initialState = {
    widgets: [],
    activeWidgetId: null,
    isLoading: false,
    error: null
};
// Load widgets from localStorage on initialization
const loadWidgetsFromStorage = ()=>{
    try {
        const saved = localStorage.getItem('finance-dashboard-widgets');
        return saved ? JSON.parse(saved) : [];
    } catch (error) {
        console.error('Error loading widgets from localStorage:', error);
        return [];
    }
};
const widgetsSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'widgets',
    initialState: {
        ...initialState,
        widgets: loadWidgetsFromStorage()
    },
    reducers: {
        addWidget: (state, action)=>{
            const newWidget = {
                id: `widget-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
                ...action.payload,
                createdAt: new Date().toISOString(),
                lastUpdated: null,
                data: null,
                isLoading: false,
                error: null
            };
            state.widgets.push(newWidget);
            // Save to localStorage
            localStorage.setItem('finance-dashboard-widgets', JSON.stringify(state.widgets));
        },
        removeWidget: (state, action)=>{
            state.widgets = state.widgets.filter((widget)=>widget.id !== action.payload);
            localStorage.setItem('finance-dashboard-widgets', JSON.stringify(state.widgets));
        },
        updateWidget: (state, action)=>{
            const { id, updates } = action.payload;
            const widget = state.widgets.find((w)=>w.id === id);
            if (widget) {
                Object.assign(widget, updates);
                localStorage.setItem('finance-dashboard-widgets', JSON.stringify(state.widgets));
            }
        },
        reorderWidgets: (state, action)=>{
            state.widgets = action.payload;
            localStorage.setItem('finance-dashboard-widgets', JSON.stringify(state.widgets));
        },
        setWidgetData: (state, action)=>{
            const { id, data } = action.payload;
            const widget = state.widgets.find((w)=>w.id === id);
            if (widget) {
                widget.data = data;
                widget.lastUpdated = new Date().toISOString();
                widget.isLoading = false;
                widget.error = null;
                localStorage.setItem('finance-dashboard-widgets', JSON.stringify(state.widgets));
            }
        },
        setWidgetLoading: (state, action)=>{
            const { id, isLoading } = action.payload;
            const widget = state.widgets.find((w)=>w.id === id);
            if (widget) {
                widget.isLoading = isLoading;
            }
        },
        setWidgetError: (state, action)=>{
            const { id, error } = action.payload;
            const widget = state.widgets.find((w)=>w.id === id);
            if (widget) {
                widget.error = error;
                widget.isLoading = false;
                localStorage.setItem('finance-dashboard-widgets', JSON.stringify(state.widgets));
            }
        },
        setActiveWidget: (state, action)=>{
            state.activeWidgetId = action.payload;
        }
    }
});
const { addWidget, removeWidget, updateWidget, reorderWidgets, setWidgetData, setWidgetLoading, setWidgetError, setActiveWidget } = widgetsSlice.actions;
const selectAllWidgets = (state)=>state.widgets.widgets;
const selectWidgetById = (id)=>(state)=>state.widgets.widgets.find((widget)=>widget.id === id);
const selectWidgetCount = (state)=>state.widgets.widgets.length;
const selectActiveWidgetId = (state)=>state.widgets.activeWidgetId;
const __TURBOPACK__default__export__ = widgetsSlice.reducer;
}),
"[project]/store/slices/uiSlice.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "closeModal",
    ()=>closeModal,
    "default",
    ()=>__TURBOPACK__default__export__,
    "openModal",
    ()=>openModal,
    "selectModalState",
    ()=>selectModalState,
    "selectSidebarOpen",
    ()=>selectSidebarOpen,
    "selectTheme",
    ()=>selectTheme,
    "setTheme",
    ()=>setTheme,
    "toggleSidebar",
    ()=>toggleSidebar,
    "toggleTheme",
    ()=>toggleTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
// Load theme from localStorage
const loadThemeFromStorage = ()=>{
    try {
        const saved = localStorage.getItem('finance-dashboard-theme');
        return saved || 'dark';
    } catch (error) {
        return 'dark';
    }
};
const initialState = {
    isModalOpen: false,
    modalType: null,
    theme: loadThemeFromStorage(),
    sidebarOpen: false
};
const uiSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'ui',
    initialState,
    reducers: {
        openModal: (state, action)=>{
            state.isModalOpen = true;
            state.modalType = action.payload || 'addWidget';
        },
        closeModal: (state)=>{
            state.isModalOpen = false;
            state.modalType = null;
        },
        toggleTheme: (state)=>{
            state.theme = state.theme === 'dark' ? 'light' : 'dark';
            localStorage.setItem('finance-dashboard-theme', state.theme);
        },
        setTheme: (state, action)=>{
            state.theme = action.payload;
            localStorage.setItem('finance-dashboard-theme', state.theme);
        },
        toggleSidebar: (state)=>{
            state.sidebarOpen = !state.sidebarOpen;
        }
    }
});
const { openModal, closeModal, toggleTheme, setTheme, toggleSidebar } = uiSlice.actions;
const selectModalState = (state)=>({
        isOpen: state.ui.isModalOpen,
        type: state.ui.modalType
    });
const selectTheme = (state)=>state.ui.theme;
const selectSidebarOpen = (state)=>state.ui.sidebarOpen;
const __TURBOPACK__default__export__ = uiSlice.reducer;
}),
"[project]/store/slices/cacheSlice.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearAllCache",
    ()=>clearAllCache,
    "clearExpiredCache",
    ()=>clearExpiredCache,
    "default",
    ()=>__TURBOPACK__default__export__,
    "invalidateCache",
    ()=>invalidateCache,
    "selectCacheData",
    ()=>selectCacheData,
    "selectIsCached",
    ()=>selectIsCached,
    "setCacheData",
    ()=>setCacheData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const CACHE_DURATION = 30 // seconds
;
const initialState = {
    cache: {}
};
const cacheSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: 'cache',
    initialState,
    reducers: {
        setCacheData: (state, action)=>{
            const { url, data } = action.payload;
            state.cache[url] = {
                data,
                timestamp: Date.now()
            };
        },
        invalidateCache: (state, action)=>{
            const url = action.payload;
            delete state.cache[url];
        },
        clearExpiredCache: (state)=>{
            const now = Date.now();
            Object.keys(state.cache).forEach((url)=>{
                const cacheEntry = state.cache[url];
                if (now - cacheEntry.timestamp > CACHE_DURATION * 1000) {
                    delete state.cache[url];
                }
            });
        },
        clearAllCache: (state)=>{
            state.cache = {};
        }
    }
});
const { setCacheData, invalidateCache, clearExpiredCache, clearAllCache } = cacheSlice.actions;
const selectCacheData = (url)=>(state)=>{
        const cacheEntry = state.cache.cache[url];
        if (!cacheEntry) return null;
        const now = Date.now();
        const isExpired = now - cacheEntry.timestamp > CACHE_DURATION * 1000;
        return isExpired ? null : cacheEntry.data;
    };
const selectIsCached = (url)=>(state)=>{
        const cacheEntry = state.cache.cache[url];
        if (!cacheEntry) return false;
        const now = Date.now();
        return now - cacheEntry.timestamp <= CACHE_DURATION * 1000;
    };
const __TURBOPACK__default__export__ = cacheSlice.reducer;
}),
"[project]/store/store.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "store",
    ()=>store
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$slices$2f$widgetsSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/slices/widgetsSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$slices$2f$uiSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/slices/uiSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$slices$2f$cacheSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/slices/cacheSlice.js [app-ssr] (ecmascript)");
;
;
;
;
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        widgets: __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$slices$2f$widgetsSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        ui: __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$slices$2f$uiSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        cache: __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$slices$2f$cacheSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types for serializable check
                ignoredActions: [
                    'widgets/setWidgetData'
                ],
                // Ignore these field paths in all actions
                ignoredActionPaths: [
                    'payload.data'
                ],
                // Ignore these paths in the state
                ignoredPaths: [
                    'widgets.widgets'
                ]
            }
        })
});
const __TURBOPACK__default__export__ = store;
}),
"[project]/app/providers.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/store.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["store"],
        children: children
    }, void 0, false, {
        fileName: "[project]/app/providers.jsx",
        lineNumber: 7,
        columnNumber: 12
    }, this);
}
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__78d9e0cc._.js.map