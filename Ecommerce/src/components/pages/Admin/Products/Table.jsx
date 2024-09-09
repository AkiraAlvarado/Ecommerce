import axios from "axios"
import { Link } from "react-router-dom"
import { API_URL } from "../../../../constans/env"
import { token } from "../../../../helpers/auth"
import useAxios from "../../../../hooks/useAxios"
import Button from "../../Button"

// Este componente es la tabla de Productos de vista de Administrador, nos permitira editar o borrar la información
// del producto, pero más que todo ELIMINAR
const Table = () => {
  const { data, loading, error } = useAxios("public/products")

  const deleteProduct = async (product) => {
   // sI DAMOs aceptar , recien se eliminara el producto
    if (window.confirm("Estás seguro de eliminar?")) {
      try{
         await axios.delete(`${API_URL}/admin/products/${product.id}`, {
            headers: {
              Authorization: `Bearer ${token()}`,
            },
          });
          alert("Producto eliminado");
        } catch (error) {
          console.error("Error al eliminar el producto:", error);
        }
      }
    }

  if (loading) return <span> Cargando </span>
  if (error) return <div>{error?.message}</div>

  return (
    <div className="max-w-256 m-auto">
      <section className="pt-10">
        <h1 className="text-4xl mb-6">Productos</h1>
        <Button></Button>
        <div className="pt-1 mb-12 pb-1">
          <Link className="bg-gradient button" to="/admin/productos/crear">
            Agregar producto
          </Link>
        </div>
        <table className="overflow-x-scroll">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Editar</th>
              <th>Borrar</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 && (
              <tr>
                <td colSpan={4}>No existen productos actualmente</td>
              </tr>
            )}
            {data.map((prod) => (
              <tr key={prod.id}>
                <td>{prod.product_name}</td>
                <td>{prod.price}</td>
                <td>
                  <Link to={`/admin/productos/editar/${prod.id}`}>Editar</Link>
                </td>
                <td>
                  <a
                    className="text-red-600 hover:cursor-pointer"
                    onClick={() => deleteProduct(prod)}
                  >
                    Eliminar
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default Table