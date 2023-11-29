import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@material-tailwind/react'
import AuthProvider from './providers/auth-provider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className="max-w-[1920px] mx-auto">
          <ThemeProvider>
            <App />
            <Toaster
           
              position="top-right"
              reverseOrder={false}
            />
          </ThemeProvider>
        </div>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
