const initialState = {
  cart: [],
  totalPrice:0
};
export const Cart = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART": {
            const existing = state.cart.find((item) => item.id === action.data.id);
        if (existing) {
        const updatedCart = state.cart.map((item) => {
          if (item.id === action.data.id) {
            return {
              ...item,
              itemQty: item.itemQty + 1,
            };
          }
          return item;
        });
        const totalPrice = updatedCart.reduce((total, item) => {
            return total + (item.price * item.itemQty);
          }, 0);
        return {
          ...state,
          cart: updatedCart,
          totalPrice:totalPrice
        };
      } else {
        const updatedCart=[...state.cart,action.data]
        const totalPrice = updatedCart.reduce((total, item) => {
            return total + (item.price * item.itemQty);
          }, 0);
        return{
            ...state,
            cart:updatedCart,
            totalPrice:totalPrice
        }
      }
    }
    case "REMOVE_FROM_CART":{
        const existing=state.cart.find(item=>item.id===action.id)
        if (existing.itemQty > 1) {
            const updatedCart = state.cart.map((item) => {
              if (item.id === action.id) {
                return {
                  ...item,
                  itemQty: item.itemQty - 1
                };
              }
              return item;
            });
            const totalPrice = updatedCart.reduce((total, item) => {
                return  (item.price * item.itemQty) - total;
              }, 0);
            return {
              ...state,
              cart: updatedCart,
              totalPrice:totalPrice
            };
          } else {
            const updatedCart = state.cart.filter((item) => item.id !== action.id);
            const totalPrice = updatedCart.reduce((total, item) => {
                return  (item.price * item.itemQty) - total ;
              }, 0);
            return {
              ...state,
              cart: updatedCart,
              totalPrice:totalPrice
            };
          }
    }
    case "REMOVE_ONE_ITEM":{
        const updatedCart = state.cart.filter((item) => item.id !== action.id);
        const totalPrice = updatedCart.reduce((total, item) => {
            return (item.price * item.itemQty)- total  ;
          }, 0);
            return {
              ...state,
              cart: updatedCart,
              totalPrice:totalPrice
            };
    }
    default :
    return state
  }
};
