import { createBrowserRouter } from "react-router-dom";
import Error404 from "../components/pages/Error404";
import Home from "../components/pages/Home";
import Products from "../components/pages/Products";
import App from "../components/template/App";

const Router = createBrowserRouter([
   {
      path: "/",
      element: <App/>,
      errorElement: <Error404/>,
      children:[
      {
         index: true,
         element: <Home/>
      },
      {
         path: "/productos",
         element: <Products/>
      }
      ]
   }
])

export default Router;