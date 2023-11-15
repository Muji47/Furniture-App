import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import ProductData from "./ProductData";
import FetchData from "../products/productssave.json";

export default function CategoryDetails() {
  const saleProducts = FetchData.furniture;
  const params = useParams();
  const [filterOption, setFilterOption] = useState("none");
  const [searchText, setSearchText] = useState(""); 

  const filterArray = saleProducts.find((catego) => {
    return catego.category === params.cateId;
  });

  useEffect(() => {
    setSearchText("");
  }, [params.cateId]);
  

  const handleSearchInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const filteredSubcategories = filterArray.subcategories.filter((item) => {
    return item.subcategory.toLowerCase().includes(searchText.toLowerCase());
  });
  if (filterOption === "price") {
    filteredSubcategories.sort((a, b) =>
       (a.price > b.price) ?1: (a.price < b.price)?-1:0
    );
  } else if (filterOption === "name") {
    filteredSubcategories.sort((a, b) =>
      a.subcategory.toLowerCase() > b.subcategory.toLowerCase() ? 1 : -1
    );
  }

  return (
    <div>
      <hr className="border-[.3px] mt-5" />
      <div className="flex flex-col justify-center items-center m-3">
        <div className="flex justify-center items-center">
          <div className="flex border-2 rounded-full p-2">
            <input
              className="w-52 outline-none"
              placeholder="Search products"
              value={searchText}
              onChange={handleSearchInputChange}
            />
            <button className="cursor-pointer">
              <FaSearch />
            </button>
          </div>
          <div className="border-2 ml-4">
            <label className="p-1">Sort by</label>
            <select
              className="m-3 outline-none z-30 rounded-sm"
              onChange={(e) => setFilterOption(e.target.value)}
            >
              <option value="none">None</option>
              <option value="price">Price</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>
        <ul className="flex justify-center p-6">
          {filteredSubcategories.map((item) => (
            <div key={item.id}>
              <Link to={`/${params.cateId}/${item.id}`}>
                <ProductData item={item} />
              </Link>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
