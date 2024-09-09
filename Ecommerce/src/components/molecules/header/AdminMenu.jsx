import { Link} from "react-router-dom";

const  AdminMenu = () => {


   return(
      <nav className="w-full">
         <ul className="flex justify-end text-gray-100">
            <li className="flex items-center">
               <Link className=" py-5 px-4 hover:text-sky-100" to="/Productos">Productos</Link>
            </li>
            <li className="flex items-center">
               <Link className=" py-5 px-4 hover:text-sky-100" to="/">Volver a Inicio</Link>
            </li>

         </ul>
      </nav>
   )
}

export default AdminMenu;