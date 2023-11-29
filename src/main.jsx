import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@material-tailwind/react'
import AuthProvider from './providers/auth-provider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className="max-w-[1920px] mx-auto">
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </div>
    </AuthProvider>
  </React.StrictMode>,
)