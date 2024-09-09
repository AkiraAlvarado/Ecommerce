// Recibira el estado del carrito y la accio´n que se quiera que haga
const CardReducer = (state, action) => {
   console.log(action)
   switch(action.type){
      // Si no coincide con ninguna opción se devuelve tal cual
      case "ADD_TO_CARD": 
         // Lo que ya tiene el estado, más un producto más
         return{...state, cart:[...state.cart, action.payload]}
      case "REMOVE_FROM_CARD":
         return {
            ...state,
            cart: [...state.cart.filter((c) => c.id !== action.payload.id)],
          }
      case "CLEAR_CARD":
         return {cart: []}
      default:
         return state
   }
}

export default CardReducer;
// 1. Agregar Productos
// 2. Quitar Productos
// 3. Vaciar el Carrito