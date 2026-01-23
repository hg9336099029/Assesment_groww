'use client'

import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectModalState, closeModal } from '@store/slices/uiSlice'
import { addWidget, updateWidget } from '@store/slices/widgetsSlice'
import { testApiConnection } from '@services/apiService'
import { parseJsonStructure } from '@services/dataMapper'
import { validateWidgetConfig } from '@utils/validators'

function AddWidgetModal() {
    const { isOpen, type } = useSelector(selectModalState)
    const dispatch = useDispatch()

    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({
        name: '',
        apiUrl: '',
        refreshInterval: 30,
        displayMode: 'card',
        chartType: 'line',
        selectedFields: [],
        showArraysOnly: false,
    })
    const [availableFields, setAvailableFields] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const [testing, setTesting] = useState(false)
    const [testResult, setTestResult] = useState(null)
    const [errors, setErrors] = useState({})

    const existingWidget = useSelector(state =>
        type === 'editWidget'
            ? state.widgets.widgets.find(w => w.id === state.ui.modalProps?.widgetId)
            : null
    )

    useEffect(() => {
        if (!isOpen) {
            // Reset form
            setStep(1)
            setFormData({
                name: '',
                apiUrl: '',
                refreshInterval: 30,
                displayMode: 'card',
                chartType: 'line',
                selectedFields: [],
                showArraysOnly: false,
            })
            setAvailableFields([])
            setSearchQuery('')
            setTestResult(null)
            setErrors({})
        } else if (type === 'editWidget' && existingWidget) {
            // Populate form for editing
            setFormData({
                name: existingWidget.name,
                apiUrl: existingWidget.apiUrl || (existingWidget.apiUrls ? existingWidget.apiUrls[0] : ''),
                refreshInterval: existingWidget.refreshInterval || 30,
                displayMode: existingWidget.displayMode || 'card',
                chartType: existingWidget.chartType || 'line',
                selectedFields: existingWidget.selectedFields || [],
                showArraysOnly: existingWidget.showArraysOnly || false,
            })
            // Verify connection to get fields
            // handleTestConnection() // Don't auto-test to avoid jumping or async issues immediately
        }
    }, [isOpen, type, existingWidget])

    const handleClose = () => {
        dispatch(closeModal())
    }

    const handleTestConnection = async () => {
        if (!formData.apiUrl) {
            setErrors({ apiUrl: 'API URL is required' })
            return
        }

        setTesting(true)
        setTestResult(null)
        setAvailableFields([])
        setSearchQuery('')
        setErrors({})

        const result = await testApiConnection(formData.apiUrl)

        setTesting(false)

        if (result.success) {
            const fields = parseJsonStructure(result.sampleData)
            setAvailableFields(fields)
            setTestResult({ success: true, message: `API connection successful! ${fields.length} top-level fields found.` })
            setStep(2)
        } else {
            setTestResult({ success: false, message: result.error })
        }
    }

    const handleFieldToggle = (fieldPath) => {
        setFormData(prev => ({
            ...prev,
            selectedFields: prev.selectedFields.includes(fieldPath)
                ? prev.selectedFields.filter(f => f !== fieldPath)
                : [...prev.selectedFields, fieldPath]
        }))
    }

    const handleSelectAll = () => {
        const selectableFields = availableFields
            .filter(f => !f.isArray && f.type !== 'object')
            .map(f => f.path)
        setFormData(prev => ({ ...prev, selectedFields: selectableFields }))
    }

    const handleDeselectAll = () => {
        setFormData(prev => ({ ...prev, selectedFields: [] }))
    }

    const handleSubmit = () => {
        const validation = validateWidgetConfig(formData)

        if (!validation.isValid) {
            setErrors(validation.errors)
            return
        }

        if (type === 'editWidget' && existingWidget) {
            dispatch(updateWidget({
                id: existingWidget.id,
                updates: formData
            }))
        } else {
            dispatch(addWidget(formData))
        }
        handleClose()
    }

    if (!isOpen || (type !== 'addWidget' && type !== 'editWidget')) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white dark:bg-dark-card rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden animate-scaleIn border border-gray-200 dark:border-dark-border flex flex-col">
                {/* Header */}
                <div className="px-6 py-4 border-b border-gray-200 dark:border-dark-border flex items-center justify-between shrink-0">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {type === 'editWidget' ? 'Edit Widget' : 'Add New Widget'}
                    </h2>
                    <button
                        onClick={handleClose}
                        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-hover transition-colors text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 overflow-y-auto scrollbar-thin flex-1">
                    <div className="space-y-5">
                        {/* Step 1: Basic Info */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                                Quick Start Templates
                            </label>
                            <div className="grid grid-cols-2 gap-3 mb-6">
                                {[
                                    {
                                        id: 'custom',
                                        name: 'Custom Widget',
                                        icon: '🔧',
                                        desc: 'Build from scratch',
                                        config: {}
                                    },
                                    {
                                        id: 'crypto-watchlist',
                                        name: 'Crypto Watchlist',
                                        icon: '📋',
                                        desc: 'Top coins table',
                                        config: {
                                            name: 'Crypto Watchlist',
                                            apiUrl: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false',
                                            displayMode: 'table',
                                            refreshInterval: 60,
                                            selectedFields: ['name', 'current_price', 'price_change_percentage_24h', 'market_cap']
                                        }
                                    },
                                    {
                                        id: 'btc-price',
                                        name: 'Bitcoin Price',
                                        icon: '💰',
                                        desc: 'BTC/USD Card',
                                        config: {
                                            name: 'Bitcoin Price',
                                            apiUrl: 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true',
                                            displayMode: 'card',
                                            refreshInterval: 30,
                                            selectedFields: ['bitcoin.usd', 'bitcoin.usd_24h_change']
                                        }
                                    },
                                    {
                                        id: 'market-chart',
                                        name: 'Market Trend',
                                        icon: '📈',
                                        desc: 'Price History Chart',
                                        config: {
                                            name: 'Market Trend',
                                            apiUrl: 'https://api.coincap.io/v2/assets/bitcoin',
                                            displayMode: 'chart',
                                            refreshInterval: 10,
                                            selectedFields: ['data.priceUsd']
                                        }
                                    }
                                ].map(template => (
                                    <button
                                        key={template.id}
                                        onClick={() => {
                                            if (template.id !== 'custom') {
                                                setFormData(prev => ({
                                                    ...prev,
                                                    ...template.config
                                                }))
                                                // If template has fields, we might need to fetch available fields to show them selected?
                                                // For now, just setting selectedFields relies on the user going to Step 2 and us trusting they exist.
                                                // Or we can let the 'Test' button verify them.
                                            }
                                        }}
                                        className="flex items-start gap-3 p-3 rounded-xl border border-gray-200 dark:border-dark-border bg-gray-50 dark:bg-dark-hover/50 hover:bg-white dark:hover:bg-dark-hover hover:border-primary/50 transition-all text-left group shadow-sm dark:shadow-none"
                                    >
                                        <div className="text-2xl pt-0.5">{template.icon}</div>
                                        <div>
                                            <div className="font-medium text-gray-900 dark:text-white text-sm group-hover:text-primary transition-colors">
                                                {template.name}
                                            </div>
                                            <div className="text-xs text-gray-400 mt-0.5">
                                                {template.desc}
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>

                            <div className="h-px bg-gray-200 dark:bg-dark-border my-6"></div>

                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Widget Name
                            </label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="e.g., Bitcoin Price Tracker"
                                className="w-full px-4 py-2.5 bg-gray-50 dark:bg-dark-hover border border-gray-200 dark:border-dark-border rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                            {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                API URL
                            </label>
                            <div className="flex gap-2 items-start">
                                <div className="flex-1">
                                    <input
                                        type="url"
                                        value={formData.apiUrl}
                                        onChange={(e) => setFormData({ ...formData, apiUrl: e.target.value })}
                                        placeholder="e.g., https://api.coinbase.com/v2/exchange-rates?currency=BTC"
                                        className="w-full px-4 py-2.5 bg-gray-50 dark:bg-dark-hover border border-gray-200 dark:border-dark-border rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                    />
                                    {/* Support multiple URLs for table aggregation */}
                                    {formData.displayMode === 'table' && (
                                        <div className="mt-2 space-y-2">
                                            {(formData.apiUrls || []).map((url, idx) => (
                                                <div key={idx} className="flex gap-2">
                                                    <input
                                                        type="url"
                                                        value={url}
                                                        onChange={(e) => {
                                                            const newUrls = [...(formData.apiUrls || [])]
                                                            newUrls[idx] = e.target.value
                                                            setFormData({ ...formData, apiUrls: newUrls })
                                                        }}
                                                        className="w-full px-4 py-2 bg-gray-50 dark:bg-dark-hover border border-gray-200 dark:border-dark-border rounded-lg text-gray-900 dark:text-white text-sm"
                                                    />
                                                    <button
                                                        onClick={() => {
                                                            const newUrls = formData.apiUrls.filter((_, i) => i !== idx)
                                                            setFormData({ ...formData, apiUrls: newUrls })
                                                        }}
                                                        className="text-red-400 hover:text-red-300 px-2"
                                                    >
                                                        ×
                                                    </button>
                                                </div>
                                            ))}
                                            <button
                                                onClick={() => setFormData({
                                                    ...formData,
                                                    apiUrls: [...(formData.apiUrls || []), '']
                                                })}
                                                className="text-xs text-primary hover:text-primary-light flex items-center gap-1"
                                            >
                                                <span>+ Add another URL source</span>
                                            </button>
                                        </div>
                                    )}
                                    {errors.apiUrl && <p className="mt-1 text-sm text-red-400">{errors.apiUrl}</p>}
                                </div>
                                <button
                                    onClick={handleTestConnection}
                                    disabled={testing || !formData.apiUrl}
                                    className="px-6 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center whitespace-nowrap h-[42px]"
                                >
                                    {testing ? (
                                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                    ) : (
                                        'Test'
                                    )}
                                </button>
                            </div>
                        </div>

                        {testResult && (
                            <div className={`p-4 rounded-lg border ${testResult.success
                                ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800/50'
                                : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800/50'
                                }`}>
                                <p className={`text-sm whitespace-pre-wrap ${testResult.success
                                    ? 'text-green-700 dark:text-green-300'
                                    : 'text-red-700 dark:text-red-300'
                                    }`}>
                                    {testResult.message}
                                </p>
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Refresh Interval (seconds)
                            </label>
                            <input
                                type="number"
                                value={formData.refreshInterval}
                                onChange={(e) => setFormData({ ...formData, refreshInterval: parseInt(e.target.value) })}
                                min="10"
                                max="3600"
                                className="w-full px-4 py-2.5 bg-gray-50 dark:bg-dark-hover border border-gray-200 dark:border-dark-border rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                            {errors.refreshInterval && <p className="mt-1 text-sm text-red-400">{errors.refreshInterval}</p>}
                        </div>

                        {/* Step 2: Field Selection (only visible when step 2 is active) */}
                        {step === 2 && (
                            <div className="space-y-5 animate-fadeIn border-t border-gray-200 dark:border-dark-border pt-5">
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                                            Select Fields to Display
                                        </h3>
                                        <div className="text-xs text-gray-400">
                                            {formData.selectedFields.length} selected
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Display Mode
                                        </label>
                                        <div className="grid grid-cols-3 gap-2">
                                            {[
                                                { value: 'card', icon: '📇', label: 'Card' },
                                                { value: 'table', icon: '📊', label: 'Table' },
                                                { value: 'chart', icon: '📈', label: 'Chart' }
                                            ].map(mode => (
                                                <button
                                                    key={mode.value}
                                                    onClick={() => setFormData({ ...formData, displayMode: mode.value })}
                                                    className={`p-3 rounded-lg border transition-all text-sm ${formData.displayMode === mode.value
                                                        ? 'border-primary bg-primary/10 text-primary dark:text-white'
                                                        : 'border-gray-200 dark:border-dark-border hover:border-gray-300 dark:hover:border-dark-hover text-gray-400'
                                                        }`}
                                                >
                                                    <div className="text-lg mb-1">{mode.icon}</div>
                                                    <div className="font-medium">{mode.label}</div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Search Fields
                                        </label>
                                        <input
                                            type="text"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            placeholder="Search for fields..."
                                            className="w-full px-3 py-2 bg-gray-50 dark:bg-dark-hover border border-gray-200 dark:border-dark-border rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary mb-3"
                                        />
                                    </div>

                                    <div className="flex items-center justify-between mb-2">
                                        <label className="flex items-center gap-2 text-sm text-gray-400">
                                            <input
                                                type="checkbox"
                                                checked={formData.showArraysOnly}
                                                onChange={(e) => setFormData({ ...formData, showArraysOnly: e.target.checked })}
                                                className="rounded"
                                            />
                                            Show arrays only (for table view)
                                        </label>
                                    </div>

                                    <div className="mb-3">
                                        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Available Fields</h4>
                                        <div className="max-h-60 overflow-y-auto scrollbar-thin space-y-1 p-2 bg-gray-50 dark:bg-dark-bg/50 rounded-lg border border-gray-200 dark:border-dark-border">
                                            {availableFields
                                                .filter(f => !f.isArray && f.type !== 'object')
                                                .filter(f => f.path.toLowerCase().includes(searchQuery.toLowerCase()))
                                                .map(field => {
                                                    const isSelected = formData.selectedFields.includes(field.path)
                                                    return (
                                                        <div
                                                            key={field.path}
                                                            className="flex items-center justify-between p-3 bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg group hover:border-primary/50 transition-colors"
                                                        >
                                                            <div className="flex-1 min-w-0 mr-3">
                                                                <div className="font-medium text-gray-900 dark:text-white text-sm truncate">
                                                                    {field.path}
                                                                </div>
                                                                <div className="text-xs text-gray-500 mt-0.5">
                                                                    <span className="text-primary/80">{field.type}</span>
                                                                    <span className="mx-1.5 text-gray-700">|</span>
                                                                    <span className="text-gray-400">{String(field.sampleValue).substring(0, 40)}</span>
                                                                </div>
                                                            </div>
                                                            <button
                                                                onClick={() => !isSelected && handleFieldToggle(field.path)}
                                                                disabled={isSelected}
                                                                className={`p-1.5 rounded-md transition-colors ${isSelected
                                                                    ? 'text-green-500 cursor-default'
                                                                    : 'text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-dark-hover'
                                                                    }`}
                                                            >
                                                                {isSelected ? (
                                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                                    </svg>
                                                                ) : (
                                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                                                    </svg>
                                                                )}
                                                            </button>
                                                        </div>
                                                    )
                                                })}
                                            {availableFields.filter(f => f.path.toLowerCase().includes(searchQuery.toLowerCase())).length === 0 && (
                                                <p className="text-center text-gray-500 text-sm py-4">No fields found</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Selected Fields</h4>
                                        <div className="space-y-2">
                                            {formData.selectedFields.length === 0 ? (
                                                <div className="p-4 border border-dashed border-gray-300 dark:border-dark-border rounded-lg text-center">
                                                    <p className="text-sm text-gray-500">No fields selected</p>
                                                </div>
                                            ) : (
                                                formData.selectedFields.map(field => (
                                                    <div
                                                        key={field}
                                                        className="flex items-center justify-between p-3 bg-gray-50 dark:bg-dark-hover border border-gray-200 dark:border-dark-border rounded-lg group"
                                                    >
                                                        <div className="flex flex-col">
                                                            <span className="text-xs text-gray-500 mb-0.5">data.field</span>
                                                            <span className="text-sm text-gray-900 dark:text-white font-medium">{field}</span>
                                                        </div>
                                                        <button
                                                            onClick={() => handleFieldToggle(field)}
                                                            className="p-1 text-gray-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all"
                                                        >
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                ))
                                            )}
                                        </div>
                                        {errors.selectedFields && (
                                            <p className="mt-2 text-sm text-red-400">{errors.selectedFields}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer buttons */}
                <div className="px-6 py-4 border-t border-gray-200 dark:border-dark-border flex gap-3 shrink-0">
                    {step === 2 && (
                        <button
                            onClick={() => setStep(1)}
                            className="px-6 py-2.5 bg-gray-100 dark:bg-dark-hover hover:bg-gray-200 dark:hover:bg-dark-border text-gray-700 dark:text-white rounded-lg font-medium transition-colors text-sm"
                        >
                            Back
                        </button>
                    )}

                    <button
                        onClick={handleClose}
                        className={`flex-1 py-2.5 bg-gray-100 dark:bg-dark-hover hover:bg-gray-200 dark:hover:bg-dark-border text-gray-700 dark:text-white rounded-lg font-medium transition-colors text-sm ${step === 2 ? 'hidden' : ''}`}
                    >
                        Cancel
                    </button>

                    {step === 1 && (
                        <button
                            onClick={() => {
                                if (formData.apiUrl) {
                                    handleTestConnection()
                                } else {
                                    setStep(2)
                                }
                            }}
                            disabled={!formData.apiUrl && (!formData.apiUrls || formData.apiUrls.length === 0)}
                            className="flex-1 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                        >
                            Next: Select Fields {testing && '...'}
                        </button>
                    )}

                    {step === 2 && (
                        <button
                            onClick={handleSubmit}
                            disabled={formData.selectedFields.length === 0}
                            className="flex-1 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                        >
                            {type === 'editWidget' ? 'Save Changes' : 'Add Widget'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AddWidgetModal
