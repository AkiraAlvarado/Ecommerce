import { API_URL } from "../../constans/env"
import axios from "axios"
import { setToken } from "../../helpers/auth"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import LoginTemplate from "../template/LoginTemplate"
import { Link } from "react-router-dom"

const Login = () => {
   const nav = useNavigate()
 
   const [error, setError] = useState()

   // Al mandar el login, se manda la petición con la data ingresada es decir
   // Correo y Usuario, si esta todo bien guarda el token en Token y redirige a Inicio
   const handleSubmit = async (e) => {
      e.preventDefault();
      setError(); // Resetea cualquier error previo
      
      // La data que enviara el motod Post
      const data = {
        email: e.target.email.value,
        password: e.target.password.value,
      };
    
      try {
        const resp = await axios.post(`${API_URL}/public/login`, data);
        setToken(resp.data.data.token); // Guarda el token en localStorage
        nav("/"); // Navega a la página principal
      } catch (err) {
        setError(err); // Maneja el error, si ocurre
      }
    };
 
   return (
     <LoginTemplate title="Iniciar sesión">
       <form onSubmit={handleSubmit}>
         <div className="mb-4">
           <input
             type="email"
             placeholder="Correo electrónico"
             name="email"
             required
           />
         </div>
         <div className="mb-4">
           <input
             type="password"
             placeholder="Contraseña"
             name="password"
             required
           />
         </div>
         <div className="text-center pt-1 mb-12 pb-1">
           <button className="bg-gradient w-full" type="submit">
             Ingresar
           </button>
           <Link className="text-gray-500" to="/registro">
             ¿Deseas registrarte?
           </Link>
         </div>
         {error && (
           <p className="text-center p-2 bg-red-100 text-red-800">
             {error?.response?.data?.data}
           </p>
         )}
       </form>
     </LoginTemplate>
   )
 }
 
 export default Login