'use client'

import { Provider } from 'react-redux'
import { store } from '@/store/store'
import PersistenceManager from '@/components/PersistenceManager/PersistenceManager'

export function Providers({ children }) {
    return (
        <Provider store={store}>
            <PersistenceManager />
            {children}
        </Provider>
    )
}
