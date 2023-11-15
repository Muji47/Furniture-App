import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

export default function OverviewBody({showdescription,imageWidth,setScroll,contentWidth}) {
  return (
    <div>
        <div className={contentWidth}>
                  <img src={showdescription.image} className={imageWidth} alt={showdescription.subcategory}/>
                  <div className={setScroll}>
                    <h2 className="text-4xl ">{showdescription.subcategory}</h2>
                    <h6>
                      <span className="text-2xl text-[#c19a83] font-bold p-2">
                        ${showdescription.price}
                      </span>
                      & Free shipping
                    </h6>
                    <p>
                      {showdescription.description}Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit. Proin vestibulum erat leo, id
                      pulvinar lorem maximus sit amet. Quisque mauris sem,
                      sagittis sed blandit eu, varius a tor.
                    </p>
                    <h6 className="text-lg text-gray-500 font-bold">
                      Free shipping on orders over $50!
                    </h6>
                    <div className="flex">
                      <FaCheckCircle />
                      <p className="ml-5">No-Risk Money Back Guarantee!</p>
                    </div>
                    <div className="flex">
                      <FaCheckCircle />
                      <p className="ml-5">No Hassle Refunds</p>
                    </div>
                    <div className="flex">
                      <FaCheckCircle />
                      <p className="ml-5">Secure Payments</p>
                    </div>
                  </div>
                </div>
    </div>
  )
}
