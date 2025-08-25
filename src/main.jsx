import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './index.css'
import App from './App.jsx'

import Home from './pages/Home.jsx'
import AboutMe from './pages/AboutMe.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import ErrorPage from './pages/ErrorPage.jsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="AboutMe" element={<AboutMe />} />
            <Route path="Projects" element={<Projects />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} /> {/* Catch-all 404 */}
          </Route>
        </Routes>
      </HashRouter>
    </QueryClientProvider>
  </StrictMode>
)