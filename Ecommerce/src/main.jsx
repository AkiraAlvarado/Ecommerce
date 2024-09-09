import { createRoot } from 'react-dom/client'
import Router from './router/Router'
import { RouterProvider } from 'react-router-dom'
import "../src/components/styles/styles.css"
import { UserProvider } from './context/UserContext'
import { CardProvider } from './context/CardContext'
createRoot(document.getElementById('root')).render(
  <CardProvider>
      <UserProvider>
        <RouterProvider router={Router}/>
      </UserProvider>
  </CardProvider>
)
