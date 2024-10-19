import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BudgetsProvider } from './context/BudgetsContext.jsx'

createRoot(document.getElementById('root')).render(
  <BudgetsProvider>
    <StrictMode>
    <App />
  </StrictMode>,
  </BudgetsProvider>
)
