import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/mona-sans/wght.css'
import '@fontsource-variable/mona-sans/wght-italic.css'
import './index.css'
import App from './App.jsx'
import './utils/smoothScroll';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
