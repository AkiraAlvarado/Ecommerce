import { token } from "../../../../helpers/auth"
import axios from "axios"
import { API_URL } from "../../../../constans/env"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
export const Form = () => {   
   // Se usara cuando se quiera editasr un producto
   const params = useParams()

   const [product, setProduct] = useState()

   useEffect(()=>{
      const editProduct = async() =>{
         if(params.id){
            try{
               const response = await axios.get(`${API_URL}/public/products/${params.id}`)
               // Obtiene todos los datos del producto
               setProduct(response.data.data)
            }
            catch(error){
               console.log(error)
            }
         }
      }
      editProduct()
   },[])


   const nav = useNavigate() 
   const handleSubmit = (e) => {
      e.preventDefault()

      const data = {
         product_name: e.target.productName.value,
         price: Number(e.target.price.value),
         images: [e.target.image.value],
         description: e.target.description.value,
         features:{
            color: e.target.color.value
         },
      }
      const saveProduct = async () => {
         try {
            // Comprueba, si existe params.id entonces Editara el producto con su id, sino , solo hara un POST
            // Subiendo el nuevo producto
           const url = params.id  ? `${API_URL}/admin/products/${params.id}`  : `${API_URL}/admin/products`;
           
           const method = params.id ? 'put' : 'post';
       
           const response = await axios[method](url, data, {
             headers: {
               Authorization: `Bearer ${token()}`
             }
           });
       
           console.log(response);
           nav("/admin/productos");
         } catch (error) {
           console.log(error);
         }
       };
       
       // Llamada a la función para guardar el producto
       saveProduct();
   }
   
   return (
    <div>
      <h1>
         {`${params.id ? "Editar Producto" : "Crear Producto"}`}
      </h1>
      <form onSubmit={handleSubmit}>
         <input type="text " name="productName" defaultValue={product && product.product_name} required placeholder="Nombre de Producto"/>
         <input type="number" name="price" defaultValue={product && product.price} required placeholder="precio"/>
         <input type="url" name="image" defaultValue={product && product.images} required placeholder="imagen"/>
         <textarea name="description" defaultValue={product && product.description} rows="10" />
         <input type="text" name="color" placeholder="color"/>
         <button type="submit"> Crear Producto</button>
      </form>
    </div>
  )
}

export default Form;