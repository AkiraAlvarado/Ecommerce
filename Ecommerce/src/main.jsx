import { createRoot } from 'react-dom/client'
import Router from './router/Router'
import { RouterProvider } from 'react-router-dom'
import "../src/components/styles/styles.css"
createRoot(document.getElementById('root')).render(
  <RouterProvider router={Router}/>
)
