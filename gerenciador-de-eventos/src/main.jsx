import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './routes/AppRoutes.jsx'
import { UserActionProvider } from './context/UserActionContext'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserActionProvider>
      <AppRoutes />
    </UserActionProvider>
  </StrictMode>
)
