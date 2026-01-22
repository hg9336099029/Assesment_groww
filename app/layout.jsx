import { Providers } from './providers'
import './globals.css'

export const metadata = {
    title: 'Finance Dashboard - Real-time Financial Data',
    description: 'A customizable finance dashboard with real-time API integration. Track stocks, crypto, and financial data with interactive widgets.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="dark" suppressHydrationWarning>
            <body className="min-h-screen bg-dark-bg text-gray-100 transition-colors duration-300">
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
