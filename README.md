# Finance Dashboard – Next.js

A customizable finance dashboard built with **Next.js**, **Redux Toolkit**, and **Tailwind CSS v4**. The app supports dynamic theming with explicit JavaScript logic for light/dark mode, widget management, and real‑time data from public financial APIs.

![Next.js](https://img.shields.io/badge/Next.js-14.x-black)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-cyan)
![Redux Toolkit](https://img.shields.io/badge/Redux-2.2.1-764ABC)

## ✨ Features

- **Widget Management** – Add, edit, and delete widgets; choose display mode (Card, Table, Chart).
- **Explicit Theme Logic** – Light/Dark mode is handled via a `isLight ? ... : ...` pattern in key components (`DashboardHeader`, `WidgetHeader`, `CardView`). This ensures correct text colors without relying solely on Tailwind's `dark:` prefix.
- **Hydration Fixes** – Resolved `ReferenceError: mounted is not defined` and hydration mismatch warnings by restoring missing state hooks and synchronizing server/client rendering.
- **Real‑time Data** – Configurable auto‑refresh intervals; supports multiple API URLs for table aggregation.
- **Responsive Design** – Works on desktop and mobile devices.
- **Smooth Animations** – Tailwind CSS transitions and micro‑animations for a premium feel.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Open **http://localhost:3000** in your browser.

## 📖 Usage

1. Click **"Add Widget"**.
2. Provide a name, API URL, refresh interval, and select a display mode.
3. Test the connection – fields are auto‑populated on success.
4. Choose which fields to display (supports multi‑URL aggregation for tables).
5. Save the widget – it appears on the dashboard with proper theming.

## 🛠️ Tech Stack
- **Framework**: Next.js 14 (App Router)
- **UI**: React 18
- **Styling**: Tailwind CSS v4
- **State**: Redux Toolkit
- **Charts**: Chart.js via `react-chartjs-2`
- **HTTP**: Axios
- **Deployment**: Vercel (recommended)

## 📁 Project Structure
```text
assignment_groww/
├─ app/
│  ├─ layout.jsx          # Root layout with Redux Provider
│  ├─ page.jsx            # Home page (Dashboard)
│  ├─ providers.jsx       # Theme manager & Redux wrapper
│  └─ globals.css         # CSS variables for light/dark themes
├─ components/
│  ├─ Dashboard/
│  ├─ DashboardHeader/   # Uses explicit JS theme logic
│  ├─ WidgetHeader/       # Fixed hydration & theme handling
│  ├─ WidgetGrid/
│  ├─ AddWidgetModal/
│  ├─ CardView/           # Updated text colors via `isLight`
│  ├─ TableView/
│  └─ ChartView/
├─ store/
│  ├─ store.js
│  └─ slices/
├─ services/
│  ├─ apiService.js
│  ├─ dataMapper.js
│  └─ pollingManager.js
├─ utils/
├─ hooks/
├─ next.config.js
├─ postcss.config.js
├─ jsconfig.json
└─ package.json
```

## 🐛 Troubleshooting
- **Hydration Mismatch** – Ensure the `mounted` state hook is present in components that use `isLight` logic.
- **CORS Errors** – Use APIs that support CORS or enable a proxy.
- **Rate Limits** – Adjust refresh intervals or cache responses.

## 📝 Scripts
```bash
npm run dev      # Development server (port 3000)
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # Lint the codebase
```

## 🚀 Deployment
1. Push to GitHub.
2. Connect the repo to Vercel.
3. Deploy automatically.

## 📄 License
MIT

## 🤝 Contributing
Feel free to open issues or submit pull requests.

---
**Note**: This project is frontend‑only; all data is fetched directly from public APIs and stored in `localStorage`.

**Server**: http://localhost:3000
