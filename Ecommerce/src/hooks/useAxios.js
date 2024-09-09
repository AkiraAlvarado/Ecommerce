import axios from "axios"
import { useEffect, useState } from "react"
import { API_URL } from "../constans/env"

const useAxios = (endpoint , headers ={}) => {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)

// useEffect se ejecuta una vez cuando el componente se monta.
useEffect(() => {
  // Función asíncrona para obtener datos de la API.
  const fetchData = async () => {
    try {
      // Realiza una solicitud GET a la API.
      const response = await axios.get(`${API_URL}/${endpoint}`, { headers });
      // Guarda los datos en el estado.
      setData(response.data.data);
    } catch (err) {
      // Si ocurre un error durante la solicitud, se captura y se actualiza el estado de error con el objeto err.
      setError(err);
    } finally {
      // Finalmente, sin importar si la solicitud fue exitosa o fallida,
      // se establece el estado de loading a false para indicar que la carga ha terminado.
      setLoading(false);
    }
  };

  // Llama a la función fetchData.
  fetchData();

// Lista de dependencias vacía para que se ejecute solo al montar.
}, []);

  return {data, error, loading};
};

export default useAxios;