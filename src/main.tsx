import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.tsx'
import { ThemeProvider } from './components/theme/ThemeContext.tsx'


createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <ThemeProvider>
    <App />
    </ThemeProvider>
  </StrictMode>,
  
)
