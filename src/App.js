import Home from "./components/pages/Home";
import { useState } from "react";
import Index from "./components/pages/Index";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Story from "./components/pages/Story";
import Contact from "./components/pages/Contact";
import Trackorder from "./components/pages/Trackorder";
import Help from "./components/pages/Help";
import Detailedproduct from "./components/shop/Detailedproduct";
import CategoryDetails from "./components/shop/CategoryDetails";
import Landedpage from "./components/pages/Landedpage";
import FetchPro from './components/products/productssave.json'


function App() {
  const [showModal, setShowModal] = useState(false);
   
    const Product=FetchPro.furniture
    const router =createBrowserRouter(
      createRoutesFromElements(
        
         <Route path="/" element={<Landedpage Product={Product} setShowModal={setShowModal} showModal={showModal}/>}>
          <Route
            index
            element={<Home Product={Product}
            />}
          />
          
          <Route
            path="/ShopAll"
            element={<Index Product={Product}
            />}
          />
          <Route
            path="/ShopAll/:cateId"
            element={<CategoryDetails />}
          />
          <Route
            path="/story"
            element={<Story />}
          />
          <Route
            path="/contact"
            element={
              <Contact />
            }
          />
          <Route
            path="/trackorder"
            element={
              <Trackorder />
            }
          />
          <Route
            path="/help"
            element={<Help />}
          />
          <Route
            path="/:cateId/:productId"
            
            element={<Detailedproduct />}
          />
            
        </Route>
        )
    )

  return (
    <RouterProvider router={router}/>
  );
}


export default (App);



 // const [cartProd, setCartProd] = useState([]);
    // const[totalPrice,setTotalPrice]=useState(0)
// const storeStateToProps=state=>{
//   cartProducts:state.Cart.cart
// }
// const dispatchStore=dispatch=>{
//   handleAddCart:(data)=>dispatch(addCartProduct(data))
//   handleRemoveCart:(id)=>dispatch(removeCartProduct(id))
// }
 /*const clickToCart=useCallback((item)=>{
      const existingItem = cartProd.find((cartItem) => cartItem.id === item.id)
      if(existingItem){
      const updatedItems = cartProd.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, itemQty: cartItem.itemQty + 1 };
        }
        return cartItem;
      })
      setCartProd(updatedItems)
    }
    else{
      setCartProd([...cartProd, item ]);
      
    }
    setTotalPrice(totalPrice+item.price)
  },[cartProd,totalPrice])*/ 
  // const handleRemove=(item)=>{
    //   const updatedCartItems = cartProd.filter((cartprod) => cartprod.id !== item.id);
    //   setCartProd(updatedCartItems);
    //   setTotalPrice(totalPrice - (item.itemQty*item.price));
    // }
  /*const reduceItem=useCallback((item)=>{
      const existingItem = cartProd.find((cartItem) => cartItem.id === item.id)
      if(existingItem&&existingItem.itemQty>1){
        const updatedItems = cartProd.map((cartItem) => {
          if (cartItem.id === item.id) {
            return { ...cartItem, itemQty: cartItem.itemQty - 1 };
          }
          return cartItem;
        })
        setCartProd(updatedItems)
      }
      else
        handleRemove(item)
        setTotalPrice(totalPrice-item.price)
    },[cartProd,totalPrice])*/

    // <Route path="/" element={<Landedpage Product={Product} setShowModal={setShowModal} showModal={showModal} cartProd={cartProd} remove={handleRemove} Overallprice={totalPrice}  increaseQuantity={clickToCart} reduceItem={reduceItem}/>}>
    // element={<Detailedproduct  increaseQuantity={clickToCart}  selectedProd={selectedProd} />}