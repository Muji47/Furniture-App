import Subcategories from "../home/Subcategories";

import { Link } from "react-router-dom";
export default function Index({Product}) {
  return (
    <div>
        <hr className='border-[.3px] mt-5'/>
        <div>
        <div>
          <header className="ml-2">
            <h4 className="text-lg">Home/Shop</h4>
            <h1 className="text-7xl">Shop</h1>
          </header>
          <ul className="flex justify-center ml-10 mt-7">
            <div className="grid grid-cols-5 gap-4">
              {Product.map((product) => (
                <li key={product.category}>
                  {product.subcategories.map((subCategory) => (
                    <>
                      <div >
                      <Link to={`/${product.category}/${subCategory.id}`}><Subcategories
                          sub={subCategory}
                        /></Link>
                      </div>
                    </>
                  ))}
                </li>
              ))}
            </div>
          </ul>
          <div className="flex justify-center">
            <h4 className="text-2xl p-3 border-solid border-2  m-16">
              No more product
            </h4>
          </div>
        </div>
     
      
    </div>
        
    </div>
  )
}
