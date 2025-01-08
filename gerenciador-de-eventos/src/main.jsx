import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserActionProvider } from './context/UserActionContex.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserActionProvider>
      <App />
    </UserActionProvider>
  </StrictMode>
)
