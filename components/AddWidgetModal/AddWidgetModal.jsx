'use client'

import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectModalState, closeModal } from '@store/slices/uiSlice'
import { addWidget } from '@store/slices/widgetsSlice'
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

    useEffect(() => {
        if (!isOpen) {
            // Reset form when modal closes
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
        }
    }, [isOpen])

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

        dispatch(addWidget(formData))
        handleClose()
    }

    if (!isOpen || type !== 'addWidget') return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
            <div className="bg-dark-card rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden animate-scaleIn border border-dark-border flex flex-col">
                {/* Header */}
                <div className="px-6 py-4 border-b border-dark-border flex items-center justify-between shrink-0">
                    <h2 className="text-xl font-semibold text-white">
                        Add New Widget
                    </h2>
                    <button
                        onClick={handleClose}
                        className="p-2 rounded-lg hover:bg-dark-hover transition-colors text-gray-400 hover:text-white"
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
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Widget Name
                            </label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="e.g., Bitcoin Price Tracker"
                                className="w-full px-4 py-2.5 bg-dark-hover border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                            {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                API URL
                            </label>
                            <div className="flex gap-2">
                                <div className="flex-1">
                                    <input
                                        type="url"
                                        value={formData.apiUrl}
                                        onChange={(e) => setFormData({ ...formData, apiUrl: e.target.value })}
                                        placeholder="e.g., https://api.coinbase.com/v2/exchange-rates?currency=BTC"
                                        className="w-full px-4 py-2.5 bg-dark-hover border border-dark-border rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                    />
                                    {errors.apiUrl && <p className="mt-1 text-sm text-red-400">{errors.apiUrl}</p>}
                                </div>
                                <button
                                    onClick={handleTestConnection}
                                    disabled={testing || !formData.apiUrl}
                                    className="px-6 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center whitespace-nowrap"
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
                            <div className={`p-4 rounded-lg border ${testResult.success ? 'bg-green-900/20 border-green-800/50' : 'bg-red-900/20 border-red-800/50'}`}>
                                <p className={`text-sm whitespace-pre-wrap ${testResult.success ? 'text-green-300' : 'text-red-300'}`}>
                                    {testResult.message}
                                </p>
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Refresh Interval (seconds)
                            </label>
                            <input
                                type="number"
                                value={formData.refreshInterval}
                                onChange={(e) => setFormData({ ...formData, refreshInterval: parseInt(e.target.value) })}
                                min="10"
                                max="3600"
                                className="w-full px-4 py-2.5 bg-dark-hover border border-dark-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                            {errors.refreshInterval && <p className="mt-1 text-sm text-red-400">{errors.refreshInterval}</p>}
                        </div>

                        {/* Step 2: Field Selection (only visible when step 2 is active) */}
                        {step === 2 && (
                            <div className="space-y-5 animate-fadeIn border-t border-dark-border pt-5">
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-base font-semibold text-white">
                                            Select Fields to Display
                                        </h3>
                                        <div className="text-xs text-gray-400">
                                            {formData.selectedFields.length} selected
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
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
                                                        ? 'border-primary bg-primary/10 text-white'
                                                        : 'border-dark-border hover:border-dark-hover text-gray-400'
                                                        }`}
                                                >
                                                    <div className="text-lg mb-1">{mode.icon}</div>
                                                    <div className="font-medium">{mode.label}</div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-2">
                                            Search Fields
                                        </label>
                                        <input
                                            type="text"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            placeholder="Search for fields..."
                                            className="w-full px-3 py-2 bg-dark-hover border border-dark-border rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary mb-3"
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
                                        <h4 className="text-sm font-medium text-gray-300 mb-2">Available Fields</h4>
                                        <div className="max-h-60 overflow-y-auto scrollbar-thin space-y-1 p-2 bg-dark-bg/50 rounded-lg border border-dark-border">
                                            {availableFields
                                                .filter(f => !f.isArray && f.type !== 'object')
                                                .filter(f => f.path.toLowerCase().includes(searchQuery.toLowerCase()))
                                                .map(field => {
                                                    const isSelected = formData.selectedFields.includes(field.path)
                                                    return (
                                                        <div
                                                            key={field.path}
                                                            className="flex items-center justify-between p-3 bg-dark-card border border-dark-border rounded-lg group hover:border-primary/50 transition-colors"
                                                        >
                                                            <div className="flex-1 min-w-0 mr-3">
                                                                <div className="font-medium text-white text-sm truncate">
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
                                                                    : 'text-gray-400 hover:text-white hover:bg-dark-hover'
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
                                        <h4 className="text-sm font-medium text-gray-300 mb-2">Selected Fields</h4>
                                        <div className="space-y-2">
                                            {formData.selectedFields.length === 0 ? (
                                                <div className="p-4 border border-dashed border-dark-border rounded-lg text-center">
                                                    <p className="text-sm text-gray-500">No fields selected</p>
                                                </div>
                                            ) : (
                                                formData.selectedFields.map(field => (
                                                    <div
                                                        key={field}
                                                        className="flex items-center justify-between p-3 bg-dark-hover border border-dark-border rounded-lg group"
                                                    >
                                                        <div className="flex flex-col">
                                                            <span className="text-xs text-gray-500 mb-0.5">data.field</span>
                                                            <span className="text-sm text-white font-medium">{field}</span>
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
                <div className="px-6 py-4 border-t border-dark-border flex gap-3 shrink-0">
                    <button
                        onClick={handleClose}
                        className="flex-1 py-2.5 bg-dark-hover hover:bg-dark-border text-white rounded-lg font-medium transition-colors text-sm"
                    >
                        Cancel
                    </button>
                    {step === 2 && (
                        <button
                            onClick={handleSubmit}
                            disabled={formData.selectedFields.length === 0}
                            className="flex-1 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                        >
                            Add Widget
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AddWidgetModal
