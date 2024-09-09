import { createContext } from "react";
import { useState, useEffect } from "react";
import { token } from "../helpers/auth";
import { API_URL } from "../constans/env";
import axios from "axios";

// El contexto es información y el provider provee la información
const UserContext = createContext();

// Es como crear un componente
const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    const getUser = async () => {
      if (token()) { // Asegúrate de que token() se llame como función
        try {
          const response = await axios.get(`${API_URL}/private/users`, {
            headers: {
               Authorization: `Bearer ${token()}`, // Corrección de "Bearear" a "Bearer"
            }
          });
          setUserData(response.data.data);
          console.log(response.data.data);
        } catch (error) {
          console.log(error);
        }
      }
    };
    getUser();
  }, []); // Asegúrate de que la dependencia [] esté presente

  return (
    // Vamos a proveer el provider de un valor
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
