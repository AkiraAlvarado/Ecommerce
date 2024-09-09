// Importa la constante TOKEN desde el archivo "../constans/env"
// TOKEN es el nombre de la clave bajo la cual se almacena el token en el almacenamiento local (localStorage)
import { TOKEN } from "../constans/env"

// Función para obtener el token almacenado en localStorage
// Devuelve el valor asociado con la clave TOKEN
export const token = () => localStorage.getItem(TOKEN)

// Función para establecer o guardar el token en localStorage
// Recibe un token como argumento y lo almacena bajo la clave TOKEN
export const setToken = (token) => localStorage.setItem(TOKEN, token)

// Función para eliminar el token almacenado en localStorage
// Borra el valor asociado con la clave TOKEN del almacenamiento local
export const removeToken = () => localStorage.removeItem(TOKEN)