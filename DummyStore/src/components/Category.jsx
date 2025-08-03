import React, { useRef } from "react";
import { ProductContext } from "../context/Context";
import { NavLink } from "react-router-dom";
import { useContext } from "react";

export default function category() {
  const products = useContext(ProductContext);
  const scrollRef = useRef(null);

  let distinct_category = products
    ? products.reduce((acc, curr) => [...acc, curr.category], [])
    : "";

  distinct_category = [...new Set(distinct_category)];

  const handleMouseLeave = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const hidescrollbarStyle = {
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  };
  return (
    <div
      ref={scrollRef}
      onMouseLeave={handleMouseLeave}
      style={hidescrollbarStyle}
      className="bg-red-500  hover:h-28 h-12 hover:transition-all transition-all hover:duration-500 duration-500  hover:overflow-y-scroll hover overflow-hidden text-white px-3 fixed rounded-md right-10 bottom-3"
    >
      <ul className=" list-none">
        <h1 className="text-black uppercase py-1  my-2 px-2 rounded-md cursor-pointer">
          categorys
        </h1>
        <NavLink to="/products">
          <li className="hover:bg-white active:bg-blue-500 hover:text-black my-2 px-2 py-1 hover:transition-all hover:duration-300 rounded-md cursor-pointer">
            All
          </li>
        </NavLink>
        {distinct_category.map((category, i) => (
          <NavLink to={`/products/?category=${category}`}>
            <li className="hover:bg-white hover:text-black my-2 px-2 py-1 hover:transition-all hover:duration-300 rounded-md cursor-pointer">
              {category}
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
}
