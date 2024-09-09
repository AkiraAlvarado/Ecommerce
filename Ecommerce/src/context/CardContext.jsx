import { createContext, useReducer } from "react"
import CardReducer from "./CardReducer"
const CardContext = createContext()
// El useReducer es una función que modifica el valor que esta  Guardado en el Contexto
// El dispatch es la función que dispara la función reductora

const CardProvider = ({children}) => {
   const initialState = {
      cart:[]
   }
   
   const[ state , dispatch] = useReducer(CardReducer, initialState)

   return (
      <CardContext.Provider value={{ state, dispatch }}>
         {children}
      </CardContext.Provider>
   );
}

export {CardContext, CardProvider}