import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext.tsx'
import { FavouritesProvider } from './contexts/FavouritesContext.tsx'

createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <FavouritesProvider>
  <BrowserRouter>
  <StrictMode>
    <App />
  </StrictMode>
  </BrowserRouter>
  </FavouritesProvider>
  </AuthProvider>,
)
