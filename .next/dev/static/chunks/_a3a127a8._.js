(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/DashboardHeader/DashboardHeader.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$slices$2f$uiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/slices/uiSlice.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function DashboardHeader({ widgetCount }) {
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "DashboardHeader.useSelector[theme]": (state)=>state.ui.theme
    }["DashboardHeader.useSelector[theme]"]);
    const handleAddWidget = ()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$slices$2f$uiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openModal"])('addWidget'));
    };
    const handleToggleTheme = ()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$slices$2f$uiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toggleTheme"])());
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-30 bg-dark-card/95 backdrop-blur-sm border-b border-dark-border",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6 py-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4 flex-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xl",
                                        children: "📊"
                                    }, void 0, false, {
                                        fileName: "[project]/components/DashboardHeader/DashboardHeader.jsx",
                                        lineNumber: 26,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/DashboardHeader/DashboardHeader.jsx",
                                    lineNumber: 25,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-lg font-semibold text-white",
                                            children: "Finance Dashboard"
                                        }, void 0, false, {
                                            fileName: "[project]/components/DashboardHeader/DashboardHeader.jsx",
                                            lineNumber: 29,
                                            columnNumber: 33
                                        }, this),
                                        widgetCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-400",
                                            children: [
                                                widgetCount,
                                                " active widget",
                                                widgetCount !== 1 ? 's' : '',
                                                " • Real-time data"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/DashboardHeader/DashboardHeader.jsx",
                                            lineNumber: 33,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/DashboardHeader/DashboardHeader.jsx",
                                    lineNumber: 28,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/DashboardHeader/DashboardHeader.jsx",
                            lineNumber: 24,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/DashboardHeader/DashboardHeader.jsx",
                        lineNumber: 23,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleAddWidget,
                            className: "flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded-lg font-medium text-sm transition-all duration-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-lg font-light",
                                    children: "+"
                                }, void 0, false, {
                                    fileName: "[project]/components/DashboardHeader/DashboardHeader.jsx",
                                    lineNumber: 47,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Add Widget"
                                }, void 0, false, {
                                    fileName: "[project]/components/DashboardHeader/DashboardHeader.jsx",
                                    lineNumber: 48,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/DashboardHeader/DashboardHeader.jsx",
                            lineNumber: 43,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/DashboardHeader/DashboardHeader.jsx",
                        lineNumber: 42,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/DashboardHeader/DashboardHeader.jsx",
                lineNumber: 21,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/DashboardHeader/DashboardHeader.jsx",
            lineNumber: 20,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/DashboardHeader/DashboardHeader.jsx",
        lineNumber: 19,
        columnNumber: 9
    }, this);
}
_s(DashboardHeader, "rF7LZwNkqQWskAS+w0YlFngcvE0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = DashboardHeader;
const __TURBOPACK__default__export__ = DashboardHeader;
var _c;
__turbopack_context__.k.register(_c, "DashboardHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/utils/dataTransformers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Flatten a nested object into a single-level object with dot notation keys
 * @param {object} obj - Object to flatten
 * @param {string} prefix - Prefix for keys
 * @returns {object} Flattened object
 */ __turbopack_context__.s([
    "debounce",
    ()=>debounce,
    "deepClone",
    ()=>deepClone,
    "extractArrayData",
    ()=>extractArrayData,
    "flattenObject",
    ()=>flattenObject,
    "generateId",
    ()=>generateId,
    "parseNestedField",
    ()=>parseNestedField,
    "transformForChart",
    ()=>transformForChart,
    "transformForTable",
    ()=>transformForTable
]);
const flattenObject = (obj, prefix = '')=>{
    const flattened = {};
    for(const key in obj){
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];
            const newKey = prefix ? `${prefix}.${key}` : key;
            if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
                Object.assign(flattened, flattenObject(value, newKey));
            } else {
                flattened[newKey] = value;
            }
        }
    }
    return flattened;
};
const extractArrayData = (obj)=>{
    const arrays = [];
    const search = (current, path = '')=>{
        if (Array.isArray(current)) {
            arrays.push({
                path,
                data: current
            });
        } else if (current !== null && typeof current === 'object') {
            for(const key in current){
                if (current.hasOwnProperty(key)) {
                    const newPath = path ? `${path}.${key}` : key;
                    search(current[key], newPath);
                }
            }
        }
    };
    search(obj);
    return arrays;
};
const transformForChart = (data, fields)=>{
    if (!Array.isArray(data) || data.length === 0) {
        return {
            labels: [],
            datasets: []
        };
    }
    // Assume first field is label (x-axis), rest are datasets
    const labelField = fields[0];
    const dataFields = fields.slice(1);
    const labels = data.map((item)=>parseNestedField(item, labelField));
    const datasets = dataFields.map((field, index)=>{
        const colors = [
            'rgb(75, 192, 192)',
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 206, 86)',
            'rgb(153, 102, 255)'
        ];
        return {
            label: field,
            data: data.map((item)=>parseNestedField(item, field)),
            borderColor: colors[index % colors.length],
            backgroundColor: colors[index % colors.length].replace('rgb', 'rgba').replace(')', ', 0.2)'),
            tension: 0.1
        };
    });
    return {
        labels,
        datasets
    };
};
const transformForTable = (data, fields)=>{
    if (!Array.isArray(data)) return [];
    return data.map((item)=>{
        const row = {};
        fields.forEach((field)=>{
            row[field] = parseNestedField(item, field);
        });
        return row;
    });
};
const parseNestedField = (obj, path)=>{
    if (!obj || !path) return undefined;
    const keys = path.split('.');
    let current = obj;
    for (const key of keys){
        if (current === null || current === undefined) return undefined;
        current = current[key];
    }
    return current;
};
const deepClone = (obj)=>{
    if (obj === null || typeof obj !== 'object') return obj;
    if (obj instanceof Date) return new Date(obj.getTime());
    if (obj instanceof Array) return obj.map((item)=>deepClone(item));
    const cloned = {};
    for(const key in obj){
        if (obj.hasOwnProperty(key)) {
            cloned[key] = deepClone(obj[key]);
        }
    }
    return cloned;
};
const generateId = ()=>{
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};
const debounce = (func, delay)=>{
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(()=>func.apply(this, args), delay);
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/utils/errorHandlers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Get user-friendly error message from error object
 * @param {Error} error - Error object
 * @returns {string} User-friendly error message
 */ __turbopack_context__.s([
    "getErrorMessage",
    ()=>getErrorMessage,
    "handleApiError",
    ()=>handleApiError,
    "handleCorsError",
    ()=>handleCorsError,
    "handleRateLimitError",
    ()=>handleRateLimitError,
    "isCorsError",
    ()=>isCorsError,
    "isNetworkError",
    ()=>isNetworkError,
    "isRateLimitError",
    ()=>isRateLimitError,
    "logError",
    ()=>logError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const getErrorMessage = (error)=>{
    if (!error) return 'An unknown error occurred';
    if (typeof error === 'string') return error;
    if (error.message) return error.message;
    return 'An unknown error occurred';
};
const handleApiError = (error)=>{
    if (!error) return 'Failed to fetch data from API';
    // Network error
    if (error.message === 'Network Error' || error.code === 'ERR_NETWORK') {
        return 'Network error. Please check your internet connection.';
    }
    // CORS error
    if (error.message?.includes('CORS') || error.toString().includes('CORS')) {
        return handleCorsError();
    }
    // Rate limit error
    if (error.response?.status === 429) {
        return handleRateLimitError(error);
    }
    // Unauthorized
    if (error.response?.status === 401 || error.response?.status === 403) {
        return 'Invalid API key or unauthorized access. Please check your API credentials.';
    }
    // Not found
    if (error.response?.status === 404) {
        return 'API endpoint not found. Please check the URL.';
    }
    // Server error
    if (error.response?.status >= 500) {
        return 'API server error. Please try again later.';
    }
    // Timeout
    if (error.code === 'ECONNABORTED') {
        return 'Request timeout. The API is taking too long to respond.';
    }
    // Default
    return error.response?.data?.message || error.message || 'Failed to fetch data from API';
};
const handleRateLimitError = (error)=>{
    const retryAfter = error.response?.headers?.['retry-after'];
    if (retryAfter) {
        return `API rate limit exceeded. Please try again in ${retryAfter} seconds.`;
    }
    return 'API rate limit exceeded. Please try again later. Consider reducing the refresh interval or check your API provider\'s rate limit documentation.';
};
const handleCorsError = ()=>{
    return `Unable to connect to API due to CORS restrictions.

Possible solutions:
1. Use a browser extension like "CORS Unblock" for testing
2. Contact the API provider to enable CORS for your domain
3. Consider setting up a backend proxy server

This is a security feature of web browsers and cannot be bypassed from the client side.`;
};
const logError = (error, context = '')=>{
    if ("TURBOPACK compile-time truthy", 1) {
        console.group(`❌ Error${context ? ` in ${context}` : ''}`);
        console.error('Error:', error);
        if (error.response) {
            console.error('Response:', error.response);
        }
        if (error.request) {
            console.error('Request:', error.request);
        }
        console.groupEnd();
    }
};
const isNetworkError = (error)=>{
    return error.message === 'Network Error' || error.code === 'ERR_NETWORK' || !error.response;
};
const isCorsError = (error)=>{
    return error.message?.includes('CORS') || error.toString().includes('CORS') || isNetworkError(error) && error.config?.url;
};
const isRateLimitError = (error)=>{
    return error.response?.status === 429;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/services/apiService.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "fetchApiData",
    ()=>fetchApiData,
    "fetchWithRetry",
    ()=>fetchWithRetry,
    "testApiConnection",
    ()=>testApiConnection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$dataTransformers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/dataTransformers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$errorHandlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/errorHandlers.js [app-client] (ecmascript)");
;
;
;
const testApiConnection = async (url)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(url, {
            timeout: 10000,
            headers: {
                'Accept': 'application/json'
            }
        });
        const data = response.data;
        // Flatten the response to get all available fields
        const flattened = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$dataTransformers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flattenObject"])(data);
        const fields = Object.keys(flattened).map((key)=>({
                name: key,
                type: typeof flattened[key],
                value: flattened[key]
            }));
        // Also extract any arrays
        const arrays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$dataTransformers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extractArrayData"])(data);
        return {
            success: true,
            fields,
            arrays,
            sampleData: data,
            error: null
        };
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$errorHandlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logError"])(error, 'testApiConnection');
        return {
            success: false,
            fields: [],
            arrays: [],
            sampleData: null,
            error: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$errorHandlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error)
        };
    }
};
const fetchApiData = async (url, options = {})=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(url, {
            timeout: options.timeout || 15000,
            headers: {
                'Accept': 'application/json',
                ...options.headers
            }
        });
        return {
            success: true,
            data: response.data,
            error: null
        };
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$errorHandlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logError"])(error, 'fetchApiData');
        // Check for specific error types
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$errorHandlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRateLimitError"])(error)) {
            return {
                success: false,
                data: null,
                error: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$errorHandlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error),
                isRateLimit: true
            };
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$errorHandlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCorsError"])(error)) {
            return {
                success: false,
                data: null,
                error: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$errorHandlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error),
                isCors: true
            };
        }
        return {
            success: false,
            data: null,
            error: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$errorHandlers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleApiError"])(error)
        };
    }
};
const fetchWithRetry = async (url, maxRetries = 3)=>{
    let lastError = null;
    for(let i = 0; i < maxRetries; i++){
        const result = await fetchApiData(url);
        if (result.success) {
            return result;
        }
        lastError = result.error;
        // Don't retry on CORS or rate limit errors
        if (result.isCors || result.isRateLimit) {
            return result;
        }
        // Exponential backoff: 1s, 2s, 4s
        if (i < maxRetries - 1) {
            await new Promise((resolve)=>setTimeout(resolve, Math.pow(2, i) * 1000));
        }
    }
    return {
        success: false,
        data: null,
        error: lastError || 'Failed to fetch data after multiple retries'
    };
};
const __TURBOPACK__default__export__ = {
    testApiConnection,
    fetchApiData,
    fetchWithRetry
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/services/pollingManager.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "getActivePollCount",
    ()=>getActivePollCount,
    "isPolling",
    ()=>isPolling,
    "startPolling",
    ()=>startPolling,
    "stopAllPolling",
    ()=>stopAllPolling,
    "stopPolling",
    ()=>stopPolling,
    "updatePollingInterval",
    ()=>updatePollingInterval
]);
/**
 * Polling manager to handle multiple widget refresh intervals
 */ const activePolls = new Map();
const startPolling = (widgetId, callback, interval)=>{
    // Clear existing poll if any
    stopPolling(widgetId);
    // Execute immediately
    callback();
    // Set up interval
    const intervalId = setInterval(callback, interval);
    activePolls.set(widgetId, intervalId);
    console.log(`Started polling for widget ${widgetId} with interval ${interval}ms`);
};
const stopPolling = (widgetId)=>{
    const intervalId = activePolls.get(widgetId);
    if (intervalId) {
        clearInterval(intervalId);
        activePolls.delete(widgetId);
        console.log(`Stopped polling for widget ${widgetId}`);
    }
};
const stopAllPolling = ()=>{
    activePolls.forEach((intervalId, widgetId)=>{
        clearInterval(intervalId);
        console.log(`Stopped polling for widget ${widgetId}`);
    });
    activePolls.clear();
};
const updatePollingInterval = (widgetId, callback, newInterval)=>{
    stopPolling(widgetId);
    startPolling(widgetId, callback, newInterval);
};
const isPolling = (widgetId)=>{
    return activePolls.has(widgetId);
};
const getActivePollCount = ()=>{
    return activePolls.size;
};
const __TURBOPACK__default__export__ = {
    startPolling,
    stopPolling,
    stopAllPolling,
    updatePollingInterval,
    isPolling,
    getActivePollCount
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/services/dataMapper.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "extractFields",
    ()=>extractFields,
    "handleNestedData",
    ()=>handleNestedData,
    "mapFieldsToDisplay",
    ()=>mapFieldsToDisplay,
    "normalizeApiResponse",
    ()=>normalizeApiResponse,
    "parseJsonStructure",
    ()=>parseJsonStructure
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$dataTransformers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/dataTransformers.js [app-client] (ecmascript)");
;
const parseJsonStructure = (response, prefix = '')=>{
    const fields = [];
    if (!response || typeof response !== 'object') {
        return fields;
    }
    for(const key in response){
        if (response.hasOwnProperty(key)) {
            const value = response[key];
            const fieldPath = prefix ? `${prefix}.${key}` : key;
            if (value === null) {
                fields.push({
                    path: fieldPath,
                    type: 'null',
                    isArray: false
                });
            } else if (Array.isArray(value)) {
                fields.push({
                    path: fieldPath,
                    type: 'array',
                    isArray: true,
                    length: value.length
                });
                // Parse first item if array is not empty
                if (value.length > 0 && typeof value[0] === 'object') {
                    fields.push(...parseJsonStructure(value[0], fieldPath));
                }
            } else if (typeof value === 'object') {
                fields.push({
                    path: fieldPath,
                    type: 'object',
                    isArray: false
                });
                fields.push(...parseJsonStructure(value, fieldPath));
            } else {
                fields.push({
                    path: fieldPath,
                    type: typeof value,
                    isArray: false,
                    sampleValue: value
                });
            }
        }
    }
    return fields;
};
const extractFields = (data)=>{
    const fields = parseJsonStructure(data);
    return fields.filter((f)=>!f.isArray && f.type !== 'object').map((f)=>f.path);
};
const mapFieldsToDisplay = (data, selectedFields)=>{
    if (Array.isArray(data)) {
        return data.map((item)=>{
            const mapped = {};
            selectedFields.forEach((field)=>{
                mapped[field] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$dataTransformers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseNestedField"])(item, field);
            });
            return mapped;
        });
    }
    const mapped = {};
    selectedFields.forEach((field)=>{
        mapped[field] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$dataTransformers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseNestedField"])(data, field);
    });
    return mapped;
};
const normalizeApiResponse = (response, apiType = 'generic')=>{
    if (!response) return null;
    // Alpha Vantage adapter
    if (apiType === 'alphavantage' || response['Time Series (Daily)']) {
        const timeSeries = response['Time Series (Daily)'] || response['Time Series (5min)'];
        if (timeSeries) {
            return Object.entries(timeSeries).map(([date, values])=>({
                    date,
                    ...values
                }));
        }
    }
    // Finnhub adapter
    if (apiType === 'finnhub' || response.c && response.h && response.l) {
        return {
            current: response.c,
            high: response.h,
            low: response.l,
            open: response.o,
            previousClose: response.pc,
            timestamp: response.t
        };
    }
    // CoinBase adapter
    if (response.data && response.data.rates) {
        return response.data;
    }
    // Generic - return as is
    return response;
};
const handleNestedData = (obj, path)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$dataTransformers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseNestedField"])(obj, path);
};
const __TURBOPACK__default__export__ = {
    parseJsonStructure,
    extractFields,
    mapFieldsToDisplay,
    normalizeApiResponse,
    handleNestedData
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/utils/formatters.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Format a number as currency
 * @param {number} value - The number to format
 * @param {string} currency - Currency code (default: 'USD')
 * @returns {string} Formatted currency string
 */ __turbopack_context__.s([
    "formatCurrency",
    ()=>formatCurrency,
    "formatNumber",
    ()=>formatNumber,
    "formatPercentage",
    ()=>formatPercentage,
    "formatRelativeTime",
    ()=>formatRelativeTime,
    "formatTime",
    ()=>formatTime,
    "formatTimestamp",
    ()=>formatTimestamp
]);
const formatCurrency = (value, currency = 'USD')=>{
    if (value === null || value === undefined || isNaN(value)) return '-';
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(value);
};
const formatPercentage = (value, decimals = 2)=>{
    if (value === null || value === undefined || isNaN(value)) return '-';
    return `${value.toFixed(decimals)}%`;
};
const formatNumber = (value, decimals = 2)=>{
    if (value === null || value === undefined || isNaN(value)) return '-';
    return new Intl.NumberFormat('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals
    }).format(value);
};
const formatTimestamp = (date)=>{
    if (!date) return '-';
    const d = new Date(date);
    if (isNaN(d.getTime())) return '-';
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }).format(d);
};
const formatRelativeTime = (date)=>{
    if (!date) return '-';
    const d = new Date(date);
    if (isNaN(d.getTime())) return '-';
    const now = new Date();
    const diffInSeconds = Math.floor((now - d) / 1000);
    if (diffInSeconds < 60) return `${diffInSeconds} seconds ago`;
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    return `${Math.floor(diffInSeconds / 86400)} days ago`;
};
const formatTime = (date)=>{
    if (!date) return '-';
    const d = new Date(date);
    if (isNaN(d.getTime())) return '-';
    return d.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/WidgetHeader/WidgetHeader.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$formatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/formatters.js [app-client] (ecmascript)");
;
;
function WidgetHeader({ widget, onRefresh, onDelete }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-dark-card/50 px-4 py-3 border-b border-dark-border flex items-center justify-between",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 flex-1 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cursor-move text-gray-500 hover:text-gray-400",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-4 h-4",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M4 8h16M4 16h16"
                            }, void 0, false, {
                                fileName: "[project]/components/WidgetHeader/WidgetHeader.jsx",
                                lineNumber: 9,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/WidgetHeader/WidgetHeader.jsx",
                            lineNumber: 8,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/WidgetHeader/WidgetHeader.jsx",
                        lineNumber: 7,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-medium text-white truncate text-sm",
                                children: widget.name
                            }, void 0, false, {
                                fileName: "[project]/components/WidgetHeader/WidgetHeader.jsx",
                                lineNumber: 14,
                                columnNumber: 21
                            }, this),
                            widget.lastUpdated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500",
                                children: [
                                    "Last updated: ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$formatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRelativeTime"])(widget.lastUpdated)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/WidgetHeader/WidgetHeader.jsx",
                                lineNumber: 18,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/WidgetHeader/WidgetHeader.jsx",
                        lineNumber: 13,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/WidgetHeader/WidgetHeader.jsx",
                lineNumber: 6,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onRefresh,
                        disabled: widget.isLoading,
                        className: "p-1.5 rounded hover:bg-dark-hover text-gray-400 hover:text-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                        title: "Refresh data",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: `w-4 h-4 ${widget.isLoading ? 'animate-spin' : ''}`,
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                            }, void 0, false, {
                                fileName: "[project]/components/WidgetHeader/WidgetHeader.jsx",
                                lineNumber: 38,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/WidgetHeader/WidgetHeader.jsx",
                            lineNumber: 32,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/WidgetHeader/WidgetHeader.jsx",
                        lineNumber: 26,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onDelete,
                        className: "p-1.5 rounded hover:bg-red-900/30 text-gray-400 hover:text-red-400 transition-colors",
                        title: "Delete widget",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-4 h-4",
                            fill: "none",
                            stroke: "currentColor",
                            viewBox: "0 0 24 24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            }, void 0, false, {
                                fileName: "[project]/components/WidgetHeader/WidgetHeader.jsx",
                                lineNumber: 48,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/WidgetHeader/WidgetHeader.jsx",
                            lineNumber: 47,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/WidgetHeader/WidgetHeader.jsx",
                        lineNumber: 42,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/WidgetHeader/WidgetHeader.jsx",
                lineNumber: 25,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/WidgetHeader/WidgetHeader.jsx",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}
_c = WidgetHeader;
const __TURBOPACK__default__export__ = WidgetHeader;
var _c;
__turbopack_context__.k.register(_c, "WidgetHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/CardView/CardView.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$formatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/formatters.js [app-client] (ecmascript)");
;
;
function CardView({ data, fields }) {
    if (!data) return null;
    // If data is an array, show first item
    const displayData = Array.isArray(data) ? data[0] : data;
    const formatValue = (value, key)=>{
        if (value === null || value === undefined) return '-';
        // Try to detect currency/number/percentage based on key name and value
        const keyLower = key.toLowerCase();
        if (typeof value === 'number') {
            if (keyLower.includes('price') || keyLower.includes('usd') || keyLower.includes('inr')) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$formatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(value);
            }
            if (keyLower.includes('percent') || keyLower.includes('%')) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$formatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPercentage"])(value);
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$formatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(value);
        }
        return String(value);
    };
    const getValueColor = (value, key)=>{
        if (typeof value !== 'number') return 'text-white';
        const keyLower = key.toLowerCase();
        if (keyLower.includes('change') || keyLower.includes('percent')) {
            return value > 0 ? 'text-green-400' : value < 0 ? 'text-red-400' : 'text-white';
        }
        return 'text-white';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: fields.map((field, index)=>{
            const value = displayData[field];
            const isFirstField = index === 0;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: isFirstField ? 'pb-4 border-b border-dark-border' : '',
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-gray-400 mb-1 uppercase tracking-wide",
                        children: field
                    }, void 0, false, {
                        fileName: "[project]/components/CardView/CardView.jsx",
                        lineNumber: 51,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `font-semibold ${isFirstField ? 'text-2xl' : 'text-lg'} ${getValueColor(value, field)}`,
                        children: formatValue(value, field)
                    }, void 0, false, {
                        fileName: "[project]/components/CardView/CardView.jsx",
                        lineNumber: 54,
                        columnNumber: 25
                    }, this)
                ]
            }, field, true, {
                fileName: "[project]/components/CardView/CardView.jsx",
                lineNumber: 50,
                columnNumber: 21
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/components/CardView/CardView.jsx",
        lineNumber: 44,
        columnNumber: 9
    }, this);
}
_c = CardView;
const __TURBOPACK__default__export__ = CardView;
var _c;
__turbopack_context__.k.register(_c, "CardView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/TableView/TableView.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$formatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/formatters.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function TableView({ data, fields, showArraysOnly }) {
    _s();
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [sortField, setSortField] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sortDirection, setSortDirection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('asc');
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [itemsPerPage, setItemsPerPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(10);
    // Ensure data is an array
    const tableData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TableView.useMemo[tableData]": ()=>{
            if (!data) return [];
            return Array.isArray(data) ? data : [
                data
            ];
        }
    }["TableView.useMemo[tableData]"], [
        data
    ]);
    // Filter data based on search
    const filteredData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TableView.useMemo[filteredData]": ()=>{
            if (!searchTerm) return tableData;
            return tableData.filter({
                "TableView.useMemo[filteredData]": (row)=>{
                    return fields.some({
                        "TableView.useMemo[filteredData]": (field)=>{
                            const value = row[field];
                            if (value === null || value === undefined) return false;
                            return String(value).toLowerCase().includes(searchTerm.toLowerCase());
                        }
                    }["TableView.useMemo[filteredData]"]);
                }
            }["TableView.useMemo[filteredData]"]);
        }
    }["TableView.useMemo[filteredData]"], [
        tableData,
        fields,
        searchTerm
    ]);
    // Sort data
    const sortedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TableView.useMemo[sortedData]": ()=>{
            if (!sortField) return filteredData;
            return [
                ...filteredData
            ].sort({
                "TableView.useMemo[sortedData]": (a, b)=>{
                    const aVal = a[sortField];
                    const bVal = b[sortField];
                    if (aVal === null || aVal === undefined) return 1;
                    if (bVal === null || bVal === undefined) return -1;
                    let comparison = 0;
                    if (typeof aVal === 'number' && typeof bVal === 'number') {
                        comparison = aVal - bVal;
                    } else {
                        comparison = String(aVal).localeCompare(String(bVal));
                    }
                    return sortDirection === 'asc' ? comparison : -comparison;
                }
            }["TableView.useMemo[sortedData]"]);
        }
    }["TableView.useMemo[sortedData]"], [
        filteredData,
        sortField,
        sortDirection
    ]);
    // Paginate data
    const paginatedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TableView.useMemo[paginatedData]": ()=>{
            const startIndex = (currentPage - 1) * itemsPerPage;
            return sortedData.slice(startIndex, startIndex + itemsPerPage);
        }
    }["TableView.useMemo[paginatedData]"], [
        sortedData,
        currentPage,
        itemsPerPage
    ]);
    const totalPages = Math.ceil(sortedData.length / itemsPerPage);
    const handleSort = (field)=>{
        if (sortField === field) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortField(field);
            setSortDirection('asc');
        }
    };
    const formatValue = (value)=>{
        if (value === null || value === undefined) return '-';
        if (typeof value === 'number') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$formatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatNumber"])(value);
        return String(value);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Search table...",
                        value: searchTerm,
                        onChange: (e)=>{
                            setSearchTerm(e.target.value);
                            setCurrentPage(1);
                        },
                        className: "flex-1 px-3 py-2 bg-dark-hover border border-dark-border rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                    }, void 0, false, {
                        fileName: "[project]/components/TableView/TableView.jsx",
                        lineNumber: 81,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-gray-400",
                        children: [
                            sortedData.length,
                            " of ",
                            tableData.length,
                            " items"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/TableView/TableView.jsx",
                        lineNumber: 91,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/TableView/TableView.jsx",
                lineNumber: 80,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto scrollbar-thin",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "border-b border-dark-border",
                                children: fields.map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        onClick: ()=>handleSort(field),
                                        className: "px-3 py-2 text-left font-medium text-gray-300 cursor-pointer hover:bg-dark-hover transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "truncate",
                                                    children: field
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TableView/TableView.jsx",
                                                    lineNumber: 108,
                                                    columnNumber: 41
                                                }, this),
                                                sortField === field && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-primary",
                                                    children: sortDirection === 'asc' ? '↑' : '↓'
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TableView/TableView.jsx",
                                                    lineNumber: 110,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/TableView/TableView.jsx",
                                            lineNumber: 107,
                                            columnNumber: 37
                                        }, this)
                                    }, field, false, {
                                        fileName: "[project]/components/TableView/TableView.jsx",
                                        lineNumber: 102,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/TableView/TableView.jsx",
                                lineNumber: 100,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/TableView/TableView.jsx",
                            lineNumber: 99,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: paginatedData.map((row, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "border-b border-dark-border/50 hover:bg-dark-hover/50 transition-colors",
                                    children: fields.map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-3 py-2 text-gray-200",
                                            children: formatValue(row[field])
                                        }, field, false, {
                                            fileName: "[project]/components/TableView/TableView.jsx",
                                            lineNumber: 126,
                                            columnNumber: 37
                                        }, this))
                                }, index, false, {
                                    fileName: "[project]/components/TableView/TableView.jsx",
                                    lineNumber: 121,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/TableView/TableView.jsx",
                            lineNumber: 119,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/TableView/TableView.jsx",
                    lineNumber: 98,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/TableView/TableView.jsx",
                lineNumber: 97,
                columnNumber: 13
            }, this),
            totalPages > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-gray-400",
                                children: "Items per page:"
                            }, void 0, false, {
                                fileName: "[project]/components/TableView/TableView.jsx",
                                lineNumber: 140,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: itemsPerPage,
                                onChange: (e)=>{
                                    setItemsPerPage(Number(e.target.value));
                                    setCurrentPage(1);
                                },
                                className: "px-2 py-1 bg-dark-hover border border-dark-border rounded text-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: 5,
                                        children: "5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/TableView/TableView.jsx",
                                        lineNumber: 151,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: 10,
                                        children: "10"
                                    }, void 0, false, {
                                        fileName: "[project]/components/TableView/TableView.jsx",
                                        lineNumber: 152,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: 25,
                                        children: "25"
                                    }, void 0, false, {
                                        fileName: "[project]/components/TableView/TableView.jsx",
                                        lineNumber: 153,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: 50,
                                        children: "50"
                                    }, void 0, false, {
                                        fileName: "[project]/components/TableView/TableView.jsx",
                                        lineNumber: 154,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/TableView/TableView.jsx",
                                lineNumber: 143,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/TableView/TableView.jsx",
                        lineNumber: 139,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setCurrentPage((p)=>Math.max(1, p - 1)),
                                disabled: currentPage === 1,
                                className: "px-3 py-1 bg-dark-hover rounded hover:bg-dark-border disabled:opacity-50 disabled:cursor-not-allowed text-white",
                                children: "Previous"
                            }, void 0, false, {
                                fileName: "[project]/components/TableView/TableView.jsx",
                                lineNumber: 159,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-400",
                                children: [
                                    "Page ",
                                    currentPage,
                                    " of ",
                                    totalPages
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/TableView/TableView.jsx",
                                lineNumber: 166,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setCurrentPage((p)=>Math.min(totalPages, p + 1)),
                                disabled: currentPage === totalPages,
                                className: "px-3 py-1 bg-dark-hover rounded hover:bg-dark-border disabled:opacity-50 disabled:cursor-not-allowed text-white",
                                children: "Next"
                            }, void 0, false, {
                                fileName: "[project]/components/TableView/TableView.jsx",
                                lineNumber: 169,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/TableView/TableView.jsx",
                        lineNumber: 158,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/TableView/TableView.jsx",
                lineNumber: 138,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/TableView/TableView.jsx",
        lineNumber: 78,
        columnNumber: 9
    }, this);
}
_s(TableView, "quvRxKyesTBeKh4fdGFMCJa2bfk=");
_c = TableView;
const __TURBOPACK__default__export__ = TableView;
var _c;
__turbopack_context__.k.register(_c, "TableView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ChartView/ChartView.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-chartjs-2/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/chart.js/dist/chart.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Chart"].register(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["CategoryScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LinearScale"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PointElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["LineElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["BarElement"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Title"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tooltip"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$chart$2e$js$2f$dist$2f$chart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Legend"]);
function ChartView({ data, fields, chartType = 'line' }) {
    _s();
    const chartData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChartView.useMemo[chartData]": ()=>{
            if (!data) return null;
            const dataArray = Array.isArray(data) ? data : [
                data
            ];
            // First field is labels (x-axis), rest are datasets
            const labelField = fields[0];
            const dataFields = fields.slice(1);
            const labels = dataArray.map({
                "ChartView.useMemo[chartData].labels": (item)=>String(item[labelField] || '')
            }["ChartView.useMemo[chartData].labels"]);
            const datasets = dataFields.map({
                "ChartView.useMemo[chartData].datasets": (field, index)=>{
                    const colors = [
                        'rgb(75, 192, 192)',
                        'rgb(255, 99, 132)',
                        'rgb(54, 162, 235)',
                        'rgb(255, 206, 86)',
                        'rgb(153, 102, 255)'
                    ];
                    const color = colors[index % colors.length];
                    return {
                        label: field,
                        data: dataArray.map({
                            "ChartView.useMemo[chartData].datasets": (item)=>{
                                const value = item[field];
                                return typeof value === 'number' ? value : 0;
                            }
                        }["ChartView.useMemo[chartData].datasets"]),
                        borderColor: color,
                        backgroundColor: color.replace('rgb', 'rgba').replace(')', ', 0.2)'),
                        tension: 0.1
                    };
                }
            }["ChartView.useMemo[chartData].datasets"]);
            return {
                labels,
                datasets
            };
        }
    }["ChartView.useMemo[chartData]"], [
        data,
        fields
    ]);
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: document.documentElement.classList.contains('dark') ? '#e5e7eb' : '#374151'
                }
            },
            tooltip: {
                mode: 'index',
                intersect: false
            }
        },
        scales: {
            x: {
                ticks: {
                    color: document.documentElement.classList.contains('dark') ? '#9ca3af' : '#6b7280'
                },
                grid: {
                    color: document.documentElement.classList.contains('dark') ? '#374151' : '#e5e7eb'
                }
            },
            y: {
                ticks: {
                    color: document.documentElement.classList.contains('dark') ? '#9ca3af' : '#6b7280'
                },
                grid: {
                    color: document.documentElement.classList.contains('dark') ? '#374151' : '#e5e7eb'
                }
            }
        }
    };
    if (!chartData) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center text-gray-500 dark:text-gray-400 py-8",
            children: "No data available for chart"
        }, void 0, false, {
            fileName: "[project]/components/ChartView/ChartView.jsx",
            lineNumber: 103,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-64",
        children: chartType === 'line' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
            data: chartData,
            options: options
        }, void 0, false, {
            fileName: "[project]/components/ChartView/ChartView.jsx",
            lineNumber: 112,
            columnNumber: 17
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$chartjs$2d$2$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
            data: chartData,
            options: options
        }, void 0, false, {
            fileName: "[project]/components/ChartView/ChartView.jsx",
            lineNumber: 114,
            columnNumber: 17
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ChartView/ChartView.jsx",
        lineNumber: 110,
        columnNumber: 9
    }, this);
}
_s(ChartView, "i4eYYg6GOj65klTCDK4mhi4wfgw=");
_c = ChartView;
const __TURBOPACK__default__export__ = ChartView;
var _c;
__turbopack_context__.k.register(_c, "ChartView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/WidgetCard/WidgetCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$slices$2f$widgetsSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/slices/widgetsSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$apiService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/apiService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$pollingManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/pollingManager.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$dataMapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/dataMapper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WidgetHeader$2f$WidgetHeader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/WidgetHeader/WidgetHeader.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CardView$2f$CardView$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CardView/CardView.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TableView$2f$TableView$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TableView/TableView.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChartView$2f$ChartView$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ChartView/ChartView.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
function WidgetCard({ widget }) {
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const fetchData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "WidgetCard.useCallback[fetchData]": async ()=>{
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$slices$2f$widgetsSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setWidgetLoading"])({
                id: widget.id,
                isLoading: true
            }));
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$apiService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchApiData"])(widget.apiUrl);
            if (result.success) {
                const mappedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$dataMapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapFieldsToDisplay"])(result.data, widget.selectedFields);
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$slices$2f$widgetsSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setWidgetData"])({
                    id: widget.id,
                    data: mappedData
                }));
            } else {
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$slices$2f$widgetsSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setWidgetError"])({
                    id: widget.id,
                    error: result.error
                }));
            }
        }
    }["WidgetCard.useCallback[fetchData]"], [
        widget.id,
        widget.apiUrl,
        widget.selectedFields,
        dispatch
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WidgetCard.useEffect": ()=>{
            // Start polling
            const intervalMs = (widget.refreshInterval || 60) * 1000;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$pollingManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startPolling"])(widget.id, fetchData, intervalMs);
            return ({
                "WidgetCard.useEffect": ()=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$pollingManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopPolling"])(widget.id);
                }
            })["WidgetCard.useEffect"];
        }
    }["WidgetCard.useEffect"], [
        widget.id,
        widget.refreshInterval,
        fetchData
    ]);
    const handleRefresh = ()=>{
        fetchData();
    };
    const handleDelete = ()=>{
        if (window.confirm('Are you sure you want to delete this widget?')) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$pollingManager$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopPolling"])(widget.id);
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$slices$2f$widgetsSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeWidget"])(widget.id));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-dark-card rounded-lg border border-dark-border overflow-hidden hover:border-dark-hover transition-colors duration-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WidgetHeader$2f$WidgetHeader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                widget: widget,
                onRefresh: handleRefresh,
                onDelete: handleDelete
            }, void 0, false, {
                fileName: "[project]/components/WidgetCard/WidgetCard.jsx",
                lineNumber: 53,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4",
                children: [
                    widget.isLoading && !widget.data && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center py-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-spin rounded-full h-10 w-10 border-b-2 border-primary"
                        }, void 0, false, {
                            fileName: "[project]/components/WidgetCard/WidgetCard.jsx",
                            lineNumber: 62,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/WidgetCard/WidgetCard.jsx",
                        lineNumber: 61,
                        columnNumber: 21
                    }, this),
                    widget.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-red-900/20 border border-red-800/50 rounded-lg p-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-red-300 whitespace-pre-wrap",
                            children: widget.error
                        }, void 0, false, {
                            fileName: "[project]/components/WidgetCard/WidgetCard.jsx",
                            lineNumber: 68,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/WidgetCard/WidgetCard.jsx",
                        lineNumber: 67,
                        columnNumber: 21
                    }, this),
                    widget.data && !widget.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            widget.displayMode === 'card' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CardView$2f$CardView$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                data: widget.data,
                                fields: widget.selectedFields
                            }, void 0, false, {
                                fileName: "[project]/components/WidgetCard/WidgetCard.jsx",
                                lineNumber: 77,
                                columnNumber: 29
                            }, this),
                            widget.displayMode === 'table' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TableView$2f$TableView$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                data: widget.data,
                                fields: widget.selectedFields,
                                showArraysOnly: widget.showArraysOnly
                            }, void 0, false, {
                                fileName: "[project]/components/WidgetCard/WidgetCard.jsx",
                                lineNumber: 80,
                                columnNumber: 29
                            }, this),
                            widget.displayMode === 'chart' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ChartView$2f$ChartView$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                data: widget.data,
                                fields: widget.selectedFields,
                                chartType: widget.chartType || 'line'
                            }, void 0, false, {
                                fileName: "[project]/components/WidgetCard/WidgetCard.jsx",
                                lineNumber: 87,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/components/WidgetCard/WidgetCard.jsx",
                lineNumber: 59,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/WidgetCard/WidgetCard.jsx",
        lineNumber: 52,
        columnNumber: 9
    }, this);
}
_s(WidgetCard, "k0cX7owcmrphzN1il4mJuPLhkxc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"]
    ];
});
_c = WidgetCard;
const __TURBOPACK__default__export__ = WidgetCard;
var _c;
__turbopack_context__.k.register(_c, "WidgetCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/WidgetGrid/WidgetGrid.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dnd-kit/core/dist/core.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dnd-kit/sortable/dist/sortable.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@dnd-kit/utilities/dist/utilities.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$slices$2f$uiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/slices/uiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$slices$2f$widgetsSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/slices/widgetsSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WidgetCard$2f$WidgetCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/WidgetCard/WidgetCard.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
// Sortable Item Wrapper
function SortableWidget({ widget }) {
    _s();
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSortable"])({
        id: widget.id
    });
    const style = {
        transform: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$utilities$2f$dist$2f$utilities$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CSS"].Transform.toString(transform),
        transition,
        zIndex: isDragging ? 10 : 1,
        opacity: isDragging ? 0.8 : 1
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: setNodeRef,
        style: style,
        ...attributes,
        ...listeners,
        className: widget.displayMode === 'table' ? 'md:col-span-2 lg:col-span-3' : '',
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WidgetCard$2f$WidgetCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            widget: widget
        }, void 0, false, {
            fileName: "[project]/components/WidgetGrid/WidgetGrid.jsx",
            lineNumber: 51,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/WidgetGrid/WidgetGrid.jsx",
        lineNumber: 44,
        columnNumber: 9
    }, this);
}
_s(SortableWidget, "/TOZZ/rmlDvX8r+a5PgN0n4tnHE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSortable"]
    ];
});
_c = SortableWidget;
function WidgetGrid({ widgets }) {
    _s1();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const sensors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSensors"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSensor"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointerSensor"], {
        activationConstraint: {
            distance: 8
        }
    }), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSensor"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeyboardSensor"], {
        coordinateGetter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sortableKeyboardCoordinates"]
    }));
    const handleDragStart = (event)=>{
        setActiveId(event.active.id);
    };
    const handleDragEnd = (event)=>{
        const { active, over } = event;
        if (active.id !== over?.id) {
            const oldIndex = widgets.findIndex((w)=>w.id === active.id);
            const newIndex = widgets.findIndex((w)=>w.id === over?.id);
            if (oldIndex !== -1 && newIndex !== -1) {
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$slices$2f$widgetsSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reorderWidgets"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arrayMove"])(widgets, oldIndex, newIndex)));
            }
        }
        setActiveId(null);
    };
    const handleAddWidget = ()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$slices$2f$uiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openModal"])('addWidget'));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DndContext"], {
        sensors: sensors,
        collisionDetection: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["closestCenter"],
        onDragStart: handleDragStart,
        onDragEnd: handleDragEnd,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn pb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SortableContext"], {
                        items: widgets.map((w)=>w.id),
                        strategy: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$sortable$2f$dist$2f$sortable$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rectSortingStrategy"],
                        children: widgets.map((widget)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SortableWidget, {
                                widget: widget
                            }, widget.id, false, {
                                fileName: "[project]/components/WidgetGrid/WidgetGrid.jsx",
                                lineNumber: 107,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/WidgetGrid/WidgetGrid.jsx",
                        lineNumber: 102,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-h-[300px] border-2 border-dashed border-dark-border rounded-xl flex items-center justify-center hover:border-primary/50 hover:bg-dark-card/50 transition-all duration-300 group cursor-pointer",
                        onClick: handleAddWidget,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center gap-4 p-8 text-gray-500 hover:text-primary transition-colors duration-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-3xl font-light group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300",
                                    children: "+"
                                }, void 0, false, {
                                    fileName: "[project]/components/WidgetGrid/WidgetGrid.jsx",
                                    lineNumber: 116,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-lg block mb-1 text-gray-300 group-hover:text-primary transition-colors",
                                            children: "Add Widget"
                                        }, void 0, false, {
                                            fileName: "[project]/components/WidgetGrid/WidgetGrid.jsx",
                                            lineNumber: 120,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-500 group-hover:text-gray-400 transition-colors max-w-[200px]",
                                            children: "Connect to a finance API and create a custom widget"
                                        }, void 0, false, {
                                            fileName: "[project]/components/WidgetGrid/WidgetGrid.jsx",
                                            lineNumber: 121,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/WidgetGrid/WidgetGrid.jsx",
                                    lineNumber: 119,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/WidgetGrid/WidgetGrid.jsx",
                            lineNumber: 115,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/WidgetGrid/WidgetGrid.jsx",
                        lineNumber: 112,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/WidgetGrid/WidgetGrid.jsx",
                lineNumber: 101,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DragOverlay"], {
                children: activeId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "opacity-80",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WidgetCard$2f$WidgetCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        widget: widgets.find((w)=>w.id === activeId)
                    }, void 0, false, {
                        fileName: "[project]/components/WidgetGrid/WidgetGrid.jsx",
                        lineNumber: 132,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/WidgetGrid/WidgetGrid.jsx",
                    lineNumber: 131,
                    columnNumber: 21
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/components/WidgetGrid/WidgetGrid.jsx",
                lineNumber: 129,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/WidgetGrid/WidgetGrid.jsx",
        lineNumber: 95,
        columnNumber: 9
    }, this);
}
_s1(WidgetGrid, "nqqbIrk+G4FtkXRXSWazJUSTPJw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$dnd$2d$kit$2f$core$2f$dist$2f$core$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSensors"]
    ];
});
_c1 = WidgetGrid;
const __TURBOPACK__default__export__ = WidgetGrid;
var _c, _c1;
__turbopack_context__.k.register(_c, "SortableWidget");
__turbopack_context__.k.register(_c1, "WidgetGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/EmptyState/EmptyState.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$slices$2f$uiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/slices/uiSlice.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function EmptyState() {
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const handleAddWidget = ()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$slices$2f$uiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openModal"])('addWidget'));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center min-h-[70vh]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center max-w-md px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-20 h-20 mx-auto mb-6 bg-dark-card rounded-2xl flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-5xl opacity-50",
                        children: "📊"
                    }, void 0, false, {
                        fileName: "[project]/components/EmptyState/EmptyState.jsx",
                        lineNumber: 17,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/EmptyState/EmptyState.jsx",
                    lineNumber: 16,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-semibold text-white mb-3",
                    children: "Build Your Finance Dashboard"
                }, void 0, false, {
                    fileName: "[project]/components/EmptyState/EmptyState.jsx",
                    lineNumber: 20,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-base text-gray-400 mb-8",
                    children: "Create custom widgets by connecting to any finance API. Track real-time data and build your personalized view."
                }, void 0, false, {
                    fileName: "[project]/components/EmptyState/EmptyState.jsx",
                    lineNumber: 24,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleAddWidget,
                    className: "px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg font-medium transition-all duration-200",
                    children: "+ Add Widget"
                }, void 0, false, {
                    fileName: "[project]/components/EmptyState/EmptyState.jsx",
                    lineNumber: 28,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/EmptyState/EmptyState.jsx",
            lineNumber: 15,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/EmptyState/EmptyState.jsx",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
_s(EmptyState, "rgTLoBID190wEKCp9+G8W6F7A5M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"]
    ];
});
_c = EmptyState;
const __TURBOPACK__default__export__ = EmptyState;
var _c;
__turbopack_context__.k.register(_c, "EmptyState");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Dashboard/Dashboard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$slices$2f$widgetsSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/slices/widgetsSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DashboardHeader$2f$DashboardHeader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/DashboardHeader/DashboardHeader.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WidgetGrid$2f$WidgetGrid$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/WidgetGrid/WidgetGrid.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EmptyState$2f$EmptyState$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/EmptyState/EmptyState.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Dashboard() {
    _s();
    const widgets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$slices$2f$widgetsSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectAllWidgets"]);
    const widgetCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$slices$2f$widgetsSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectWidgetCount"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DashboardHeader$2f$DashboardHeader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                widgetCount: widgetCount
            }, void 0, false, {
                fileName: "[project]/components/Dashboard/Dashboard.jsx",
                lineNumber: 15,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full",
                children: widgets.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EmptyState$2f$EmptyState$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/components/Dashboard/Dashboard.jsx",
                    lineNumber: 19,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WidgetGrid$2f$WidgetGrid$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    widgets: widgets
                }, void 0, false, {
                    fileName: "[project]/components/Dashboard/Dashboard.jsx",
                    lineNumber: 21,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Dashboard/Dashboard.jsx",
                lineNumber: 17,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Dashboard/Dashboard.jsx",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
_s(Dashboard, "kzCLc6Bu0NjBOKFrjQbRqmQ0YeQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = Dashboard;
const __TURBOPACK__default__export__ = Dashboard;
var _c;
__turbopack_context__.k.register(_c, "Dashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/utils/validators.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Validate if a string is a valid URL
 * @param {string} url - The URL to validate
 * @returns {boolean} True if valid URL
 */ __turbopack_context__.s([
    "isValidApiKey",
    ()=>isValidApiKey,
    "isValidEmail",
    ()=>isValidEmail,
    "isValidUrl",
    ()=>isValidUrl,
    "validateWidgetConfig",
    ()=>validateWidgetConfig
]);
const isValidUrl = (url)=>{
    if (!url || typeof url !== 'string') return false;
    try {
        const urlObj = new URL(url);
        return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
    } catch  {
        return false;
    }
};
const isValidApiKey = (key)=>{
    if (!key || typeof key !== 'string') return false;
    // Basic validation: at least 8 characters, alphanumeric
    return key.length >= 8 && /^[a-zA-Z0-9_-]+$/.test(key);
};
const validateWidgetConfig = (config)=>{
    const errors = {};
    // Validate name
    if (!config.name || config.name.trim().length === 0) {
        errors.name = 'Widget name is required';
    } else if (config.name.length > 50) {
        errors.name = 'Widget name must be less than 50 characters';
    }
    // Validate API URL
    if (!config.apiUrl) {
        errors.apiUrl = 'API URL is required';
    } else if (!isValidUrl(config.apiUrl)) {
        errors.apiUrl = 'Please enter a valid URL';
    }
    // Validate refresh interval
    if (config.refreshInterval !== undefined) {
        const interval = parseInt(config.refreshInterval);
        if (isNaN(interval) || interval < 10) {
            errors.refreshInterval = 'Refresh interval must be at least 10 seconds';
        } else if (interval > 3600) {
            errors.refreshInterval = 'Refresh interval must be less than 1 hour';
        }
    }
    // Validate selected fields
    if (!config.selectedFields || config.selectedFields.length === 0) {
        errors.selectedFields = 'Please select at least one field to display';
    }
    // Validate display mode
    if (!config.displayMode || ![
        'card',
        'table',
        'chart'
    ].includes(config.displayMode)) {
        errors.displayMode = 'Please select a valid display mode';
    }
    // Validate chart type if display mode is chart
    if (config.displayMode === 'chart') {
        if (!config.chartType || ![
            'line',
            'candle'
        ].includes(config.chartType)) {
            errors.chartType = 'Please select a valid chart type';
        }
    }
    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
};
const isValidEmail = (email)=>{
    if (!email || typeof email !== 'string') return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/AddWidgetModal/AddWidgetModal.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$slices$2f$uiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/slices/uiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$slices$2f$widgetsSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/slices/widgetsSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$apiService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/apiService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$dataMapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/dataMapper.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/validators.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
function AddWidgetModal() {
    _s();
    const { isOpen, type } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$slices$2f$uiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectModalState"]);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        apiUrl: '',
        refreshInterval: 30,
        displayMode: 'card',
        chartType: 'line',
        selectedFields: [],
        showArraysOnly: false
    });
    const [availableFields, setAvailableFields] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [testing, setTesting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [testResult, setTestResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddWidgetModal.useEffect": ()=>{
            if (!isOpen) {
                // Reset form when modal closes
                setStep(1);
                setFormData({
                    name: '',
                    apiUrl: '',
                    refreshInterval: 30,
                    displayMode: 'card',
                    chartType: 'line',
                    selectedFields: [],
                    showArraysOnly: false
                });
                setAvailableFields([]);
                setSearchQuery('');
                setTestResult(null);
                setErrors({});
            }
        }
    }["AddWidgetModal.useEffect"], [
        isOpen
    ]);
    const handleClose = ()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$slices$2f$uiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["closeModal"])());
    };
    const handleTestConnection = async ()=>{
        if (!formData.apiUrl) {
            setErrors({
                apiUrl: 'API URL is required'
            });
            return;
        }
        setTesting(true);
        setTestResult(null);
        setAvailableFields([]);
        setSearchQuery('');
        setErrors({});
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$apiService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["testApiConnection"])(formData.apiUrl);
        setTesting(false);
        if (result.success) {
            const fields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$dataMapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseJsonStructure"])(result.sampleData);
            setAvailableFields(fields);
            setTestResult({
                success: true,
                message: `API connection successful! ${fields.length} top-level fields found.`
            });
            setStep(2);
        } else {
            setTestResult({
                success: false,
                message: result.error
            });
        }
    };
    const handleFieldToggle = (fieldPath)=>{
        setFormData((prev)=>({
                ...prev,
                selectedFields: prev.selectedFields.includes(fieldPath) ? prev.selectedFields.filter((f)=>f !== fieldPath) : [
                    ...prev.selectedFields,
                    fieldPath
                ]
            }));
    };
    const handleSelectAll = ()=>{
        const selectableFields = availableFields.filter((f)=>!f.isArray && f.type !== 'object').map((f)=>f.path);
        setFormData((prev)=>({
                ...prev,
                selectedFields: selectableFields
            }));
    };
    const handleDeselectAll = ()=>{
        setFormData((prev)=>({
                ...prev,
                selectedFields: []
            }));
    };
    const handleSubmit = ()=>{
        const validation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$validators$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateWidgetConfig"])(formData);
        if (!validation.isValid) {
            setErrors(validation.errors);
            return;
        }
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$slices$2f$widgetsSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addWidget"])(formData));
        handleClose();
    };
    if (!isOpen || type !== 'addWidget') return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-dark-card rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden animate-scaleIn border border-dark-border flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 py-4 border-b border-dark-border flex items-center justify-between shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold text-white",
                            children: "Add New Widget"
                        }, void 0, false, {
                            fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                            lineNumber: 120,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleClose,
                            className: "p-2 rounded-lg hover:bg-dark-hover transition-colors text-gray-400 hover:text-white",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-5 h-5",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M6 18L18 6M6 6l12 12"
                                }, void 0, false, {
                                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                    lineNumber: 128,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                lineNumber: 127,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                            lineNumber: 123,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                    lineNumber: 119,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 overflow-y-auto scrollbar-thin flex-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-300 mb-2",
                                        children: "Widget Name"
                                    }, void 0, false, {
                                        fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                        lineNumber: 138,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: formData.name,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                name: e.target.value
                                            }),
                                        placeholder: "e.g., Bitcoin Price Tracker",
                                        className: "w-full px-4 py-2.5 bg-dark-hover border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                        lineNumber: 141,
                                        columnNumber: 29
                                    }, this),
                                    errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-sm text-red-400",
                                        children: errors.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                        lineNumber: 148,
                                        columnNumber: 45
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                lineNumber: 137,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-300 mb-2",
                                        children: "API URL"
                                    }, void 0, false, {
                                        fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                        lineNumber: 152,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "url",
                                                        value: formData.apiUrl,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                apiUrl: e.target.value
                                                            }),
                                                        placeholder: "e.g., https://api.coinbase.com/v2/exchange-rates?currency=BTC",
                                                        className: "w-full px-4 py-2.5 bg-dark-hover border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                        lineNumber: 157,
                                                        columnNumber: 37
                                                    }, this),
                                                    errors.apiUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-1 text-sm text-red-400",
                                                        children: errors.apiUrl
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                        lineNumber: 164,
                                                        columnNumber: 55
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                lineNumber: 156,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleTestConnection,
                                                disabled: testing || !formData.apiUrl,
                                                className: "px-6 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center whitespace-nowrap",
                                                children: testing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "animate-spin rounded-full h-5 w-5 border-b-2 border-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                    lineNumber: 172,
                                                    columnNumber: 41
                                                }, this) : 'Test'
                                            }, void 0, false, {
                                                fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                lineNumber: 166,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                        lineNumber: 155,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                lineNumber: 151,
                                columnNumber: 25
                            }, this),
                            testResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-4 rounded-lg border ${testResult.success ? 'bg-green-900/20 border-green-800/50' : 'bg-red-900/20 border-red-800/50'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `text-sm whitespace-pre-wrap ${testResult.success ? 'text-green-300' : 'text-red-300'}`,
                                    children: testResult.message
                                }, void 0, false, {
                                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                    lineNumber: 182,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                lineNumber: 181,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-300 mb-2",
                                        children: "Refresh Interval (seconds)"
                                    }, void 0, false, {
                                        fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                        lineNumber: 189,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "number",
                                        value: formData.refreshInterval,
                                        onChange: (e)=>setFormData({
                                                ...formData,
                                                refreshInterval: parseInt(e.target.value)
                                            }),
                                        min: "10",
                                        max: "3600",
                                        className: "w-full px-4 py-2.5 bg-dark-hover border border-dark-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                        lineNumber: 192,
                                        columnNumber: 29
                                    }, this),
                                    errors.refreshInterval && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-sm text-red-400",
                                        children: errors.refreshInterval
                                    }, void 0, false, {
                                        fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                        lineNumber: 200,
                                        columnNumber: 56
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                lineNumber: 188,
                                columnNumber: 25
                            }, this),
                            step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-5 animate-fadeIn border-t border-dark-border pt-5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-base font-semibold text-white",
                                                    children: "Select Fields to Display"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                    lineNumber: 208,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-gray-400",
                                                    children: [
                                                        formData.selectedFields.length,
                                                        " selected"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                    lineNumber: 211,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                            lineNumber: 207,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-300 mb-2",
                                                    children: "Display Mode"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                    lineNumber: 217,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-3 gap-2",
                                                    children: [
                                                        {
                                                            value: 'card',
                                                            icon: '📇',
                                                            label: 'Card'
                                                        },
                                                        {
                                                            value: 'table',
                                                            icon: '📊',
                                                            label: 'Table'
                                                        },
                                                        {
                                                            value: 'chart',
                                                            icon: '📈',
                                                            label: 'Chart'
                                                        }
                                                    ].map((mode)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setFormData({
                                                                    ...formData,
                                                                    displayMode: mode.value
                                                                }),
                                                            className: `p-3 rounded-lg border transition-all text-sm ${formData.displayMode === mode.value ? 'border-primary bg-primary/10 text-white' : 'border-dark-border hover:border-dark-hover text-gray-400'}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-lg mb-1",
                                                                    children: mode.icon
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                                    lineNumber: 234,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-medium",
                                                                    children: mode.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                                    lineNumber: 235,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, mode.value, true, {
                                                            fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                            lineNumber: 226,
                                                            columnNumber: 49
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                    lineNumber: 220,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                            lineNumber: 216,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-300 mb-2",
                                                    children: "Search Fields"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                    lineNumber: 242,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: searchQuery,
                                                    onChange: (e)=>setSearchQuery(e.target.value),
                                                    placeholder: "Search for fields...",
                                                    className: "w-full px-3 py-2 bg-dark-hover border border-dark-border rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary mb-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                    lineNumber: 245,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                            lineNumber: 241,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flex items-center gap-2 text-sm text-gray-400",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: formData.showArraysOnly,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                showArraysOnly: e.target.checked
                                                            }),
                                                        className: "rounded"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                        lineNumber: 256,
                                                        columnNumber: 45
                                                    }, this),
                                                    "Show arrays only (for table view)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                lineNumber: 255,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                            lineNumber: 254,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-gray-300 mb-2",
                                                    children: "Available Fields"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                    lineNumber: 267,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "max-h-60 overflow-y-auto scrollbar-thin space-y-1 p-2 bg-dark-bg/50 rounded-lg border border-dark-border",
                                                    children: [
                                                        availableFields.filter((f)=>!f.isArray && f.type !== 'object').filter((f)=>f.path.toLowerCase().includes(searchQuery.toLowerCase())).map((field)=>{
                                                            const isSelected = formData.selectedFields.includes(field.path);
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between p-3 bg-dark-card border border-dark-border rounded-lg group hover:border-primary/50 transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex-1 min-w-0 mr-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "font-medium text-white text-sm truncate",
                                                                                children: field.path
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                                                lineNumber: 280,
                                                                                columnNumber: 65
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-xs text-gray-500 mt-0.5",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-primary/80",
                                                                                        children: field.type
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                                                        lineNumber: 284,
                                                                                        columnNumber: 69
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "mx-1.5 text-gray-700",
                                                                                        children: "|"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                                                        lineNumber: 285,
                                                                                        columnNumber: 69
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-gray-400",
                                                                                        children: String(field.sampleValue).substring(0, 40)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                                                        lineNumber: 286,
                                                                                        columnNumber: 69
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                                                lineNumber: 283,
                                                                                columnNumber: 65
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                                        lineNumber: 279,
                                                                        columnNumber: 61
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: ()=>!isSelected && handleFieldToggle(field.path),
                                                                        disabled: isSelected,
                                                                        className: `p-1.5 rounded-md transition-colors ${isSelected ? 'text-green-500 cursor-default' : 'text-gray-400 hover:text-white hover:bg-dark-hover'}`,
                                                                        children: isSelected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            className: "w-5 h-5",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            viewBox: "0 0 24 24",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: 2,
                                                                                d: "M5 13l4 4L19 7"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                                                lineNumber: 299,
                                                                                columnNumber: 73
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                                            lineNumber: 298,
                                                                            columnNumber: 69
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            className: "w-5 h-5",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            viewBox: "0 0 24 24",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: 2,
                                                                                d: "M12 4v16m8-8H4"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                                                lineNumber: 303,
                                                                                columnNumber: 73
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                                            lineNumber: 302,
                                                                            columnNumber: 69
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                                        lineNumber: 289,
                                                                        columnNumber: 61
                                                                    }, this)
                                                                ]
                                                            }, field.path, true, {
                                                                fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                                lineNumber: 275,
                                                                columnNumber: 57
                                                            }, this);
                                                        }),
                                                        availableFields.filter((f)=>f.path.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-center text-gray-500 text-sm py-4",
                                                            children: "No fields found"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                            lineNumber: 311,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                    lineNumber: 268,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                            lineNumber: 266,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-gray-300 mb-2",
                                                    children: "Selected Fields"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                    lineNumber: 317,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-2",
                                                    children: formData.selectedFields.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-4 border border-dashed border-dark-border rounded-lg text-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-500",
                                                            children: "No fields selected"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                            lineNumber: 321,
                                                            columnNumber: 53
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                        lineNumber: 320,
                                                        columnNumber: 49
                                                    }, this) : formData.selectedFields.map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between p-3 bg-dark-hover border border-dark-border rounded-lg group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex flex-col",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-gray-500 mb-0.5",
                                                                            children: "data.field"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                                            lineNumber: 330,
                                                                            columnNumber: 61
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm text-white font-medium",
                                                                            children: field
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                                            lineNumber: 331,
                                                                            columnNumber: 61
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                                    lineNumber: 329,
                                                                    columnNumber: 57
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: ()=>handleFieldToggle(field),
                                                                    className: "p-1 text-gray-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                        className: "w-4 h-4",
                                                                        fill: "none",
                                                                        stroke: "currentColor",
                                                                        viewBox: "0 0 24 24",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            strokeWidth: 2,
                                                                            d: "M6 18L18 6M6 6l12 12"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                                            lineNumber: 338,
                                                                            columnNumber: 65
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                                        lineNumber: 337,
                                                                        columnNumber: 61
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                                    lineNumber: 333,
                                                                    columnNumber: 57
                                                                }, this)
                                                            ]
                                                        }, field, true, {
                                                            fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                            lineNumber: 325,
                                                            columnNumber: 53
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                    lineNumber: 318,
                                                    columnNumber: 41
                                                }, this),
                                                errors.selectedFields && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-2 text-sm text-red-400",
                                                    children: errors.selectedFields
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                    lineNumber: 346,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                            lineNumber: 316,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                    lineNumber: 206,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                lineNumber: 205,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                        lineNumber: 135,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                    lineNumber: 134,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 py-4 border-t border-dark-border flex gap-3 shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleClose,
                            className: "flex-1 py-2.5 bg-dark-hover hover:bg-dark-border text-white rounded-lg font-medium transition-colors text-sm",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                            lineNumber: 357,
                            columnNumber: 21
                        }, this),
                        step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleSubmit,
                            disabled: formData.selectedFields.length === 0,
                            className: "flex-1 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm",
                            children: "Add Widget"
                        }, void 0, false, {
                            fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                            lineNumber: 364,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                    lineNumber: 356,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
            lineNumber: 117,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
        lineNumber: 116,
        columnNumber: 9
    }, this);
}
_s(AddWidgetModal, "UozTuJV6suTLUKwgsrblrHjh+CQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"]
    ];
});
_c = AddWidgetModal;
const __TURBOPACK__default__export__ = AddWidgetModal;
var _c;
__turbopack_context__.k.register(_c, "AddWidgetModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$slices$2f$uiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/slices/uiSlice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2f$Dashboard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Dashboard/Dashboard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AddWidgetModal$2f$AddWidgetModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AddWidgetModal/AddWidgetModal.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function Home() {
    _s();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$slices$2f$uiSlice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectTheme"]);
    // Apply theme to document
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            if (theme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }
    }["Home.useEffect"], [
        theme
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2f$Dashboard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 23,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AddWidgetModal$2f$AddWidgetModal$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 24,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s(Home, "JRaoUJ+bJn641JIkzwN1HyJ9TlI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_a3a127a8._.js.map