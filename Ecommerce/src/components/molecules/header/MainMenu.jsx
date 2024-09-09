import { Link, useNavigate } from "react-router-dom";
import { removeToken, token } from "../../../helpers/auth";
import { useContext } from "react";
import { CardContext } from "../../../context/CardContext";
// import { useContext } from "react";
// import { UserContext } from "../../../context/UserContext";

const MainMenu = () => {

   const nav = useNavigate()
   //  Guarda los valores del context en el estado
   // const {userData, setUserData} = useContext(UserContext)
   const handleSession = () => {
      // Remuevo el token de inicio de sesión
      removeToken()
      nav("/")
      // Remuevo el userData Que es la información de usuario.
      // setUserData(null)
    }

    const {state} = useContext(CardContext)

   return(
      <nav className="w-full">
         <ul className="flex justify-end text-gray-100">
            <li className="flex items-center">
               <Link className=" py-5 px-4 hover:text-sky-100" to="/">Inicio</Link>
            </li>
            <li className="flex items-center">
               <Link className=" py-5 px-4 hover:text-sky-100" to="/productos">Productos</Link>
            </li>
            <li className="flex items-center">
               <Link className=" py-5 px-4 hover:text-sky-100" to="/carrito">Carrito {state.cart.length}</Link>
            </li>

            {!token() ? (
            <li className="flex items-center">
               <Link className="menu-item" to="/login">
               Iniciar sesión
               </Link>
            </li>
            ) : (
               <>
                  <li className="flex items-center">
                  <Link className="menu-item" to="/admin/productos">
                     Administrar productos
                  </Link>
                  </li>
                  <li className="flex items-center">
                  <a onClick={handleSession} className="menu-item cursor-pointer">
                     Cerrar sesión
                  </a>
                  </li>
               </>
            )}

         </ul>
         {/* Del campo de userData, imprimimos si es admin */}
         {/* {userData.is_admin} */}
      </nav>
   )
}

export default MainMenu;