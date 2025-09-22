import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "./i18n"; 
import ThemeContextProvider from './contexts/ThemeContextProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeContextProvider>
    <App />
    </ThemeContextProvider>
  </StrictMode>,
)
