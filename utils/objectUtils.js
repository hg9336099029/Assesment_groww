export const getNestedValue = (obj, path) => {
    if (!obj || !path) return undefined

    // Handle array paths if needed, but for now simple dot notation
    const keys = path.split('.')
    let current = obj

    for (const key of keys) {
        if (current === null || current === undefined) return undefined
        current = current[key]
    }

    return current
}
