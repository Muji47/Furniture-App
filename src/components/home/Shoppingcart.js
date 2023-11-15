import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeCartProduct,addCartProduct,removeCartitem } from "../../action/actions";
// { showcart, cartinfo, cartProd, remove,Overallprice,increaseQuantity, reduceItem}
 function Modal(props) {
 const { showcart, cartinfo,handleAddCart,cartProducts,handleRemoveCart,handleOneItem,cartProductsPrice}=props
  return (
    <>
      {showcart ? (
        <>
          <div
            className="overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-96 float-right">
        
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col h-screen w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Shopping Cart</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl  font-semibold "
                    onClick={() => cartinfo(false)}
                  >
                    <span className=" text-gray-950 h-6 w-6 text-2xl block">
                      X
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <ul className="overflow-auto h-[24rem]">
                    {cartProducts.map((cartproduct) => (
                      <li className="flex justify-between m-2">
                        <div className="flex ">
                          <img src={cartproduct.image} className="w-16" alt={cartproduct.id}/>
                          <div className="ml-4">
                          <span className=" font-semibold">{cartproduct.subcategory}</span>
                          <div className="flex">
                            <button onClick={()=>handleAddCart(cartproduct)} className="p-1 w-8 h-8
                             border-2">+</button>
                            <p className="w-8 h-8 flex justify-center items-center border-2
                             ">{cartproduct.itemQty}</p>
                            <button className="p-1 w-8 h-8
                             border-2" onClick={()=>handleRemoveCart(cartproduct.id)}>-</button>
                          </div>
                          </div>
                        </div>
                        
                        <div>
                          {/* <Button className={' text-black p-1 border-2 '} onClick={()=>remove(cartproduct)}>X</Button> */}
                          <Button className={' text-black p-1 border-2 '} onClick={()=>handleOneItem(cartproduct.id)}>X</Button>
                          <span>One item$ {cartproduct.price}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <p className=" font-semibold mt-4 float-right">Price :${cartProductsPrice}</p>
                </div>
                <div className="p-12 flex justify-center border-t border-solid border-blueGray-200 rounded-b ">
                  <button
                    className="bg-black text-white hover:bg-[#c19a83] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg mr-5 mb-6 ease-linear transition-all duration-150 fixed bottom-0"
                    onClick={() => cartinfo(false)}
                  >
                    <Link to={'/shopall'}>
                    Continue Shopping
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed z-40 bg-black" onClick={() => cartinfo(false)}></div>
        </>
      ) : null}
    </>
  );
}
const storeStateToProps=state=>({
  cartProducts:state.Cart.cart,
  cartProductsPrice:state.Cart.totalPrice
})
const dispatchStore=dispatch=>({
  handleAddCart:(data)=>dispatch(addCartProduct(data)),
  handleRemoveCart:(id)=>dispatch(removeCartProduct(id)),
  handleOneItem:(id)=>dispatch(removeCartitem(id))
})
export default connect(storeStateToProps,dispatchStore)(Modal)
