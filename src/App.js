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

