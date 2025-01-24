import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './index.css'
import App from './App.jsx'
import { ErrorPage } from './App.jsx'

import Home from './pages/Home.jsx'

import { Provider } from 'react-redux'
import AboutMe from './pages/AboutMe.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'

const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <Home />},
      { path: "AboutMe", element: <AboutMe />},
      { path: "Projects", element: <Projects />},
      { path: "Contact", element: <Contact />}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <Provider store={store}>
        <RouterProvider router={router} />
      </Provider> */}
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
