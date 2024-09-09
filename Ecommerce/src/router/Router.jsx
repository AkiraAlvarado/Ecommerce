import { createBrowserRouter } from "react-router-dom";
import Error404 from "../components/pages/Error404";
import Home from "../components/pages/Home";
import Products from "../components/pages/Products";
import App from "../components/template/App";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import Form from "../components/pages/Admin/Products/Form";
import Table from "../components/pages/Admin/Products/Table";
import Admin from "../components/template/Admin";
import Product from "../components/pages/Product";
import Cart from "../components/pages/Cart";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/productos", // Se elimina la barra inicial
        element: <Products />
      },
      {
         path: "/productos/:id", // Se elimina la barra inicial
         element: <Product/>
       },
       {
         path: "/carrito", // Se elimina la barra inicial
         element: <Cart/>
       }
    ]
  },
  {
    path: "/login", // Se elimina la barra inicial
    element: <Login />
  },
  {
    path: "/registro", // Se elimina la barra inicial
    element: <Register />
  },
  {
    path: "/admin", // Se elimina la barra inicial
    element: <Admin />,
    children: [
      {
        path: "productos/crear", // Se elimina la barra inicial
        element: <Form />
      },
      {
        path: "productos", // Se elimina la barra inicial
        element: <Table />
      },
      {
        path: "productos/editar/:id", // Se elimina la barra inicial
        element: <Form />
      }
    ]
  }
]);

export default Router;