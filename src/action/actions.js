export const addCartProduct=(data)=>{
    return{
        type:"ADD_TO_CART",
        data
    }
}
export const removeCartitem=(id)=>{
    return{
        type:"REMOVE_ONE_ITEM",
        id
    }
}
export const removeCartProduct=(id)=>{
    return{
        type:"REMOVE_FROM_CART",
        id
    }
}