import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../constans/env";
import axios from "axios";
import { CardContext } from "../../context/CardContext";
const Product = () => {

   const params = useParams()
   const {state, dispatch} = useContext(CardContext)
   const [product, setProduct] = useState({})
   useEffect(()=>{
      const getProduct = async() => {
         try{
            const response = await axios.get(`${API_URL}/public/products/${params.id}`)
            setProduct(response.data.data)
         }
         catch(error){
            console.log(error)
         }
      }
      getProduct()
   },[])

   const addtoCard = () => {
      dispatch({
         type: "ADD_TO_CARD",
         payload: product
      })
   }
   const removeFromCard = () => {
      dispatch({ type: "REMOVE_FROM_CARD", payload: product })
   }
  return (
    <div>
      <h1 className="text-3xl">Producto: {product?.product_name}</h1>
      <p>{JSON.stringify(product)}</p>
      {
         !state.cart.find(prod => prod.id === product.id) ? (
            <button className="bg-gradient" onClick={addtoCard}>Agregar al Carrito</button>
         ) :  ( <button className="bg-gradient" onClick={removeFromCard}>Quitar al Carrito</button>)

      }

    </div>
  )
}

export default Product;
