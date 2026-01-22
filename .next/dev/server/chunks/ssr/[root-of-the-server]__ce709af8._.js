module.exports = [
"[project]/components/DashboardHeader/DashboardHeader.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$slices$2f$uiSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/slices/uiSlice.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function DashboardHeader({ widgetCount }) {
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"])();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.ui.theme);
    const handleAddWidget = ()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$slices$2f$uiSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["openModal"])('addWidget'));
    };
    const handleToggleTheme = ()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$slices$2f$uiSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleTheme"])());
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-30 bg-dark-card/95 backdrop-blur-sm border-b border-dark-border",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6 py-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4 flex-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-lg font-semibold text-white",
                                            children: "Finance Dashboard"
                                        }, void 0, false, {
                                            fileName: "[project]/components/DashboardHeader/DashboardHeader.jsx",
                                            lineNumber: 29,
                                            columnNumber: 33
                                        }, this),
                                        widgetCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleAddWidget,
                            className: "flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded-lg font-medium text-sm transition-all duration-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-lg font-light",
                                    children: "+"
                                }, void 0, false, {
                                    fileName: "[project]/components/DashboardHeader/DashboardHeader.jsx",
                                    lineNumber: 47,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
const __TURBOPACK__default__export__ = DashboardHeader;
}),
"[project]/components/WidgetGrid/WidgetGrid.jsx [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/components/WidgetGrid/WidgetGrid.jsx'\n\nExpression expected");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/components/EmptyState/EmptyState.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$slices$2f$uiSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/slices/uiSlice.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function EmptyState() {
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"])();
    const handleAddWidget = ()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$slices$2f$uiSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["openModal"])('addWidget'));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center min-h-[70vh]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center max-w-md px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-20 h-20 mx-auto mb-6 bg-dark-card rounded-2xl flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-semibold text-white mb-3",
                    children: "Build Your Finance Dashboard"
                }, void 0, false, {
                    fileName: "[project]/components/EmptyState/EmptyState.jsx",
                    lineNumber: 20,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-base text-gray-400 mb-8",
                    children: "Create custom widgets by connecting to any finance API. Track real-time data and build your personalized view."
                }, void 0, false, {
                    fileName: "[project]/components/EmptyState/EmptyState.jsx",
                    lineNumber: 24,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
const __TURBOPACK__default__export__ = EmptyState;
}),
"[project]/components/Dashboard/Dashboard.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$slices$2f$widgetsSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/slices/widgetsSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DashboardHeader$2f$DashboardHeader$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/DashboardHeader/DashboardHeader.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WidgetGrid$2f$WidgetGrid$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/WidgetGrid/WidgetGrid.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EmptyState$2f$EmptyState$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/EmptyState/EmptyState.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function Dashboard() {
    const widgets = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$slices$2f$widgetsSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectAllWidgets"]);
    const widgetCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$slices$2f$widgetsSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectWidgetCount"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DashboardHeader$2f$DashboardHeader$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                widgetCount: widgetCount
            }, void 0, false, {
                fileName: "[project]/components/Dashboard/Dashboard.jsx",
                lineNumber: 15,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full",
                children: widgets.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$EmptyState$2f$EmptyState$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/components/Dashboard/Dashboard.jsx",
                    lineNumber: 19,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WidgetGrid$2f$WidgetGrid$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
const __TURBOPACK__default__export__ = Dashboard;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/utils/dataTransformers.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/utils/errorHandlers.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/services/apiService.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$dataTransformers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/dataTransformers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$errorHandlers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/errorHandlers.js [app-ssr] (ecmascript)");
;
;
;
const testApiConnection = async (url)=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(url, {
            timeout: 10000,
            headers: {
                'Accept': 'application/json'
            }
        });
        const data = response.data;
        // Flatten the response to get all available fields
        const flattened = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$dataTransformers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flattenObject"])(data);
        const fields = Object.keys(flattened).map((key)=>({
                name: key,
                type: typeof flattened[key],
                value: flattened[key]
            }));
        // Also extract any arrays
        const arrays = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$dataTransformers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractArrayData"])(data);
        return {
            success: true,
            fields,
            arrays,
            sampleData: data,
            error: null
        };
    } catch (error) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$errorHandlers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logError"])(error, 'testApiConnection');
        return {
            success: false,
            fields: [],
            arrays: [],
            sampleData: null,
            error: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$errorHandlers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApiError"])(error)
        };
    }
};
const fetchApiData = async (url, options = {})=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(url, {
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$errorHandlers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logError"])(error, 'fetchApiData');
        // Check for specific error types
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$errorHandlers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isRateLimitError"])(error)) {
            return {
                success: false,
                data: null,
                error: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$errorHandlers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApiError"])(error),
                isRateLimit: true
            };
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$errorHandlers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCorsError"])(error)) {
            return {
                success: false,
                data: null,
                error: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$errorHandlers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApiError"])(error),
                isCors: true
            };
        }
        return {
            success: false,
            data: null,
            error: (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$errorHandlers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApiError"])(error)
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
}),
"[project]/services/dataMapper.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$dataTransformers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/dataTransformers.js [app-ssr] (ecmascript)");
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
                mapped[field] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$dataTransformers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseNestedField"])(item, field);
            });
            return mapped;
        });
    }
    const mapped = {};
    selectedFields.forEach((field)=>{
        mapped[field] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$dataTransformers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseNestedField"])(data, field);
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$dataTransformers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseNestedField"])(obj, path);
};
const __TURBOPACK__default__export__ = {
    parseJsonStructure,
    extractFields,
    mapFieldsToDisplay,
    normalizeApiResponse,
    handleNestedData
};
}),
"[project]/utils/validators.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/components/AddWidgetModal/AddWidgetModal.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$slices$2f$uiSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/slices/uiSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$slices$2f$widgetsSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/slices/widgetsSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$apiService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/apiService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$dataMapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/services/dataMapper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/validators.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function AddWidgetModal() {
    const { isOpen, type } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$slices$2f$uiSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectModalState"]);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"])();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        apiUrl: '',
        refreshInterval: 30,
        displayMode: 'card',
        chartType: 'line',
        selectedFields: [],
        showArraysOnly: false
    });
    const [availableFields, setAvailableFields] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [testing, setTesting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [testResult, setTestResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
            setTestResult(null);
            setErrors({});
        }
    }, [
        isOpen
    ]);
    const handleClose = ()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$slices$2f$uiSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["closeModal"])());
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
        setErrors({});
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$apiService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["testApiConnection"])(formData.apiUrl);
        setTesting(false);
        if (result.success) {
            const fields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$services$2f$dataMapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseJsonStructure"])(result.sampleData);
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
        const validation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$validators$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateWidgetConfig"])(formData);
        if (!validation.isValid) {
            setErrors(validation.errors);
            return;
        }
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$slices$2f$widgetsSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addWidget"])(formData));
        handleClose();
    };
    if (!isOpen || type !== 'addWidget') return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-dark-card rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden animate-scaleIn border border-dark-border",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 py-4 border-b border-dark-border flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold text-white",
                            children: "Add New Widget"
                        }, void 0, false, {
                            fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                            lineNumber: 116,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleClose,
                            className: "p-2 rounded-lg hover:bg-dark-hover transition-colors text-gray-400 hover:text-white",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-5 h-5",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M6 18L18 6M6 6l12 12"
                                }, void 0, false, {
                                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                    lineNumber: 124,
                                    columnNumber: 29
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                lineNumber: 123,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                            lineNumber: 119,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                    lineNumber: 115,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 overflow-y-auto max-h-[calc(90vh-140px)] scrollbar-thin",
                    children: [
                        step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-300 mb-2",
                                            children: "Widget Name"
                                        }, void 0, false, {
                                            fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                            lineNumber: 134,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                            lineNumber: 137,
                                            columnNumber: 33
                                        }, this),
                                        errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm text-red-400",
                                            children: errors.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                            lineNumber: 144,
                                            columnNumber: 49
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                    lineNumber: 133,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-300 mb-2",
                                            children: "API URL"
                                        }, void 0, false, {
                                            fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                            lineNumber: 148,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                            lineNumber: 151,
                                            columnNumber: 33
                                        }, this),
                                        errors.apiUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm text-red-400",
                                            children: errors.apiUrl
                                        }, void 0, false, {
                                            fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                            lineNumber: 158,
                                            columnNumber: 51
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                    lineNumber: 147,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-300 mb-2",
                                            children: "Refresh Interval (seconds)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                            lineNumber: 162,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                            lineNumber: 165,
                                            columnNumber: 33
                                        }, this),
                                        errors.refreshInterval && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-sm text-red-400",
                                            children: errors.refreshInterval
                                        }, void 0, false, {
                                            fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                            lineNumber: 173,
                                            columnNumber: 60
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                    lineNumber: 161,
                                    columnNumber: 29
                                }, this),
                                testResult && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `p-4 rounded-lg border ${testResult.success ? 'bg-green-900/20 border-green-800/50' : 'bg-red-900/20 border-red-800/50'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-sm whitespace-pre-wrap ${testResult.success ? 'text-green-300' : 'text-red-300'}`,
                                        children: testResult.message
                                    }, void 0, false, {
                                        fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                        lineNumber: 178,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                    lineNumber: 177,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleTestConnection,
                                    disabled: testing || !formData.apiUrl,
                                    className: "w-full py-3 bg-primary hover:bg-primary-hover text-white rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2",
                                    children: testing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "animate-spin rounded-full h-5 w-5 border-b-2 border-white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                lineNumber: 191,
                                                columnNumber: 41
                                            }, this),
                                            "Testing..."
                                        ]
                                    }, void 0, true) : 'Test'
                                }, void 0, false, {
                                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                    lineNumber: 184,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                            lineNumber: 132,
                            columnNumber: 25
                        }, this),
                        step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-base font-semibold text-white",
                                                    children: "Select Fields to Display"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                    lineNumber: 205,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-gray-400",
                                                    children: [
                                                        formData.selectedFields.length,
                                                        " selected"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                    lineNumber: 208,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                            lineNumber: 204,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-300 mb-2",
                                                    children: "Display Mode"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                    lineNumber: 214,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                    ].map((mode)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setFormData({
                                                                    ...formData,
                                                                    displayMode: mode.value
                                                                }),
                                                            className: `p-3 rounded-lg border transition-all text-sm ${formData.displayMode === mode.value ? 'border-primary bg-primary/10 text-white' : 'border-dark-border hover:border-dark-hover text-gray-400'}`,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-lg mb-1",
                                                                    children: mode.icon
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                                    lineNumber: 231,
                                                                    columnNumber: 49
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-medium",
                                                                    children: mode.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                                    lineNumber: 232,
                                                                    columnNumber: 49
                                                                }, this)
                                                            ]
                                                        }, mode.value, true, {
                                                            fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                            lineNumber: 223,
                                                            columnNumber: 45
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                    lineNumber: 217,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                            lineNumber: 213,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-300 mb-2",
                                                    children: "Search Fields"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                    lineNumber: 239,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Search for fields...",
                                                    className: "w-full px-3 py-2 bg-dark-hover border border-dark-border rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary mb-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                    lineNumber: 242,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                            lineNumber: 238,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between mb-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flex items-center gap-2 text-sm text-gray-400",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: formData.showArraysOnly,
                                                        onChange: (e)=>setFormData({
                                                                ...formData,
                                                                showArraysOnly: e.target.checked
                                                            }),
                                                        className: "rounded"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                        lineNumber: 251,
                                                        columnNumber: 41
                                                    }, this),
                                                    "Show arrays only (for table view)"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                lineNumber: 250,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                            lineNumber: 249,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-gray-300 mb-2",
                                                    children: "Available Fields"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                    lineNumber: 262,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "max-h-48 overflow-y-auto scrollbar-thin space-y-1 p-3 bg-dark-bg rounded-lg border border-dark-border",
                                                    children: availableFields.filter((f)=>!f.isArray && f.type !== 'object').map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "flex items-start gap-2 p-2 hover:bg-dark-hover rounded cursor-pointer",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: formData.selectedFields.includes(field.path),
                                                                    onChange: ()=>handleFieldToggle(field.path),
                                                                    className: "mt-0.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                                    lineNumber: 271,
                                                                    columnNumber: 53
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-1 min-w-0 text-sm",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "font-medium text-white truncate",
                                                                            children: field.path
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                                            lineNumber: 278,
                                                                            columnNumber: 57
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs text-gray-500",
                                                                            children: [
                                                                                field.type,
                                                                                field.sampleValue !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "ml-2",
                                                                                    children: [
                                                                                        "• ",
                                                                                        String(field.sampleValue).substring(0, 30)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                                                    lineNumber: 284,
                                                                                    columnNumber: 65
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                                            lineNumber: 281,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                                    lineNumber: 277,
                                                                    columnNumber: 53
                                                                }, this)
                                                            ]
                                                        }, field.path, true, {
                                                            fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                            lineNumber: 267,
                                                            columnNumber: 49
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                    lineNumber: 263,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                            lineNumber: 261,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-gray-300 mb-2",
                                                    children: "Selected Fields"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                    lineNumber: 294,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-3 bg-dark-bg rounded-lg border border-dark-border min-h-[60px]",
                                                    children: formData.selectedFields.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-500",
                                                        children: "No fields selected"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                        lineNumber: 297,
                                                        columnNumber: 45
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-2",
                                                        children: formData.selectedFields.map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "px-2 py-1 bg-dark-hover rounded text-xs text-gray-300 border border-dark-border",
                                                                children: field
                                                            }, field, false, {
                                                                fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                                lineNumber: 301,
                                                                columnNumber: 53
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                        lineNumber: 299,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                    lineNumber: 295,
                                                    columnNumber: 37
                                                }, this),
                                                errors.selectedFields && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-2 text-sm text-red-400",
                                                    children: errors.selectedFields
                                                }, void 0, false, {
                                                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                                    lineNumber: 312,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                            lineNumber: 293,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                    lineNumber: 203,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3 pt-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setStep(1),
                                            className: "flex-1 py-2.5 bg-dark-hover hover:bg-dark-border text-white rounded-lg font-medium transition-colors text-sm",
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                            lineNumber: 318,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleSubmit,
                                            disabled: formData.selectedFields.length === 0,
                                            className: "flex-1 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm",
                                            children: "Add Widget"
                                        }, void 0, false, {
                                            fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                            lineNumber: 324,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                                    lineNumber: 317,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                            lineNumber: 202,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
                    lineNumber: 130,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
            lineNumber: 113,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/AddWidgetModal/AddWidgetModal.jsx",
        lineNumber: 112,
        columnNumber: 9
    }, this);
}
const __TURBOPACK__default__export__ = AddWidgetModal;
}),
"[project]/app/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$store$2f$slices$2f$uiSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/store/slices/uiSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2f$Dashboard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Dashboard/Dashboard.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AddWidgetModal$2f$AddWidgetModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AddWidgetModal/AddWidgetModal.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function Home() {
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$store$2f$slices$2f$uiSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectTheme"]);
    // Apply theme to document
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [
        theme
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Dashboard$2f$Dashboard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 23,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AddWidgetModal$2f$AddWidgetModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.jsx",
                lineNumber: 24,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ce709af8._.js.map