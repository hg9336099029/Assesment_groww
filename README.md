# Finance Dashboard - Next.js

A customizable finance dashboard built with **Next.js**, **Redux Toolkit**, and **Tailwind CSS v4** that allows users to connect to financial APIs and create widgets to display real-time data in multiple formats.

![Next.js](https://img.shields.io/badge/Next.js-14.x-black)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-cyan)
![Redux Toolkit](https://img.shields.io/badge/Redux-2.2.1-764ABC)

## ✨ Features

### Widget Management
- 🎨 **Add Custom Widgets** - Connect to any financial API
- 📊 **Multiple Display Modes** - Card, Table, or Chart views
- 🔄 **Real-time Data** - Configurable auto-refresh intervals
- 💾 **Persistence** - Widgets saved to localStorage

### Display Modes
- **Card View** - Clean display of key metrics with smart formatting
- **Table View** - Searchable, sortable, paginated data tables
- **Chart View** - Line and bar charts with Chart.js

### UI/UX
- 🌓 **Dark/Light Theme** - Toggle between themes
- 📱 **Responsive Design** - Works on all devices
- ⚡ **Fast Performance** - Optimized with Next.js
- 🎭 **Smooth Animations** - Tailwind CSS animations

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies**
```bash
npm install
```

2. **Start development server**
```bash
npm run dev
```

3. **Open in browser**
```
http://localhost:3000
```

## 📖 Usage

### Adding a Widget

1. Click the **"Add Widget"** button
2. Enter widget details:
   - Widget name
   - API URL (e.g., `https://api.coinbase.com/v2/exchange-rates?currency=BTC`)
   - Refresh interval (in seconds)
3. Click **"Test Connection"** to validate the API
4. Select fields to display from the parsed response
5. Choose display mode (Card, Table, or Chart)
6. Click **"Add Widget"**

### Example APIs

**CoinBase - Exchange Rates**
```
https://api.coinbase.com/v2/exchange-rates?currency=BTC
```

**JSON Placeholder - Test Data**
```
https://jsonplaceholder.typicode.com/users
```

## 🛠️ Tech Stack

- **Frontend Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Styling**: Tailwind CSS v4
- **State Management**: Redux Toolkit
- **Charts**: Chart.js with react-chartjs-2
- **HTTP Client**: Axios
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
assignment_groww/
├── app/
│   ├── layout.jsx          # Root layout with Redux Provider
│   ├── page.jsx            # Home page (Dashboard)
│   ├── providers.jsx       # Redux Provider wrapper
│   └── globals.css         # Global styles with Tailwind
├── components/             # React components
│   ├── Dashboard/
│   ├── DashboardHeader/
│   ├── WidgetCard/
│   ├── WidgetGrid/
│   ├── AddWidgetModal/
│   ├── CardView/
│   ├── TableView/
│   └── ChartView/
├── store/                  # Redux store
│   ├── store.js
│   └── slices/
├── services/               # API services
│   ├── apiService.js
│   ├── dataMapper.js
│   └── pollingManager.js
├── utils/                  # Utility functions
├── hooks/                  # Custom React hooks
├── next.config.js          # Next.js configuration
├── postcss.config.js       # PostCSS for Tailwind v4
├── jsconfig.json           # Path aliases
└── package.json
```

## 🎨 Features in Detail

### Smart Data Formatting
- Automatic currency formatting
- Percentage display
- Number formatting with commas
- Color-coded values (green for positive, red for negative)

### Table Features
- Real-time search across all fields
- Click-to-sort columns (ascending/descending)
- Pagination with customizable items per page
- Row count display

### Chart Features
- Line charts for time-series data
- Bar charts for comparisons
- Dark mode support
- Responsive sizing

### API Integration
- Flexible JSON parser for any API structure
- Nested field extraction
- Array data handling
- Error handling for CORS, rate limits, network issues
- Intelligent caching to reduce API calls

## 🔧 Configuration

### Path Aliases

The project uses path aliases for clean imports:

```javascript
import { store } from '@/store/store'
import Dashboard from '@/components/Dashboard/Dashboard'
import { fetchApiData } from '@/services/apiService'
```

Configured in `jsconfig.json`:
- `@/*` → Root directory
- `@components/*` → Components directory
- `@store/*` → Store directory
- `@services/*` → Services directory
- `@utils/*` → Utils directory
- `@hooks/*` → Hooks directory

### Tailwind CSS v4

This project uses Tailwind CSS v4 with the PostCSS plugin:

```javascript
// postcss.config.js
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
}
```

Custom theme defined in `app/globals.css`:
```css
@theme {
  --color-primary: hsl(160 84% 39%);
  --color-primary-hover: hsl(160 84% 45%);
}
```

## 🐛 Troubleshooting

### CORS Errors
Some APIs may block requests from browsers due to CORS policies.

**Solutions:**
- Use APIs that support CORS
- Use a browser extension like "CORS Unblock" for testing
- Set up a backend proxy server

### Rate Limits
If you see rate limit errors:
- Increase the refresh interval
- Check your API provider's rate limits
- The app caches responses to minimize API calls

### Widget Not Updating
- Check the browser console for errors
- Verify the API URL is correct
- Test the API in a separate tab
- Check your internet connection

## 📝 Available Scripts

```bash
npm run dev      # Start development server (port 3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run Next.js linter
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Environment Variables

No environment variables required for basic functionality. Optional:

```env
NEXT_PUBLIC_CACHE_DURATION=30
NEXT_PUBLIC_DEFAULT_REFRESH_INTERVAL=60
```

## 🎯 Roadmap

- [ ] Drag-and-drop widget reordering
- [ ] Widget templates (Crypto, Stocks, Forex)
- [ ] Export/import dashboard configuration
- [ ] WebSocket support for real-time data
- [ ] Backend API for data persistence
- [ ] User authentication
- [ ] Multiple dashboards

## 📄 License

MIT

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 👨‍💻 Built With

- **Next.js** - React framework for production
- **Redux Toolkit** - State management
- **Tailwind CSS v4** - Utility-first CSS
- **Chart.js** - Data visualization
- **Axios** - HTTP client

---

**Note**: This is a frontend-only application. All data is fetched directly from public APIs and stored in browser localStorage.

**Server**: http://localhost:3000
