import { Link } from "react-router-dom";
const MainMenu = () => {
   return(
      <nav className="w-full">
         <ul className="flex justify-end text-gray-100">
            <li className="flex items-center">
               <Link className=" py-5 px-4 hover:text-sky-100" to="/">Inicio</Link>
            </li>
            <li className="flex items-center">
               <Link className=" py-5 px-4 hover:text-sky-100" to="/productos">Productos</Link>
            </li>

         </ul>
      </nav>
   )
}

export default MainMenu;