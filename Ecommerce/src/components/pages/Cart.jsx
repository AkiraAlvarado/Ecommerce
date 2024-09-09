import { useContext, useState } from "react"
import { CardContext } from "../../context/CardContext"
import { Link } from "react-router-dom"
import SummaryItem from "../atoms/SummaryItem"
import axios from "axios"
import { API_URL } from "../../constans/env"
import { token } from "../../helpers/auth"
function Cart() {
   const { state } = useContext(CardContext)
   const [order, setOrder] = useState("")
   let value = 0
   state.cart.forEach((c) => (value += c.price))
   
   const handleOrder= async()=> {
      let products = state.cart.map( p => {
         return{
            product_id: p.id,
            amount: 1,
			   unit_price: p.price
         }
      })

      const data= {
         products,
      }

      try{
         const response = await axios.post(`${API_URL}/private/purchase-orders`, data, {
            headers: {
               Authorization: `Bearer ${token()}`
            }
         })
         setOrder(response.data.data)
         console.log(response)
      }catch(error){
         console.log(error)
      }
   }

   return (
     <div className="max-w-256 m-auto">
       <div className="grid grid-cols-3 gap-8 mb-16">
         <section className="col-span-2 pt-10">
           <h1 className="text-3xl font-semibold mb-6">Carrito de compras</h1>
           {state?.cart?.length > 0 ? (
             <div>
               <div className="grid mb-2 border-t border-gray-300/60">
                 {state.cart.map((prod) => (
                   <SummaryItem key={prod.id} product={prod} />
                 ))}
               </div>
               {
                  !order ? (
                     <button className="bg-gradient" onClick={handleOrder}>Crear Orden</button>
                  ) : (
                     <p>Id de la Orden de Compra {order.id}</p>
                  )
               }
             </div>
           ) : (
             <>
               <p className="mb-2">Tu carrito está vacío</p>
               <Link to="/productos" className="button bg-gradient">
                 Ver productos
               </Link>
             </>
           )}
         </section>
       </div>
     </div>
   )
 }
 
 export default Cart