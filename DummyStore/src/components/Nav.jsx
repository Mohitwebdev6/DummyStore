import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ProductContext } from "../context/Context";

function Nav() {
  
  const linkClass = "hover:text-blue-600 transition-colors duration-200 hover:text-blue-500 hover:scale-105 transition-all duration-300";

  const activeClass = "text-blue-600 font-semibold border-b-2 border-blue-600 ";

  const products = useContext(ProductContext);

  let distinct_category = products
    ? products.reduce((acc, curr) => [...acc, curr.category], [])
    : "";

  distinct_category = [...new Set(distinct_category)];

  const hoverClass = "hover:scale-110 transition-transform duration-300 ease-in-out";

  return (
    <nav className="bg-white shadow-md px-4 rounded-xl py-3">
      <div className={`container mx-auto flex items-center justify-between ` }>
        <NavLink to="/" className="text-2xl font-bold text-blue-600">
          <h1>
            <span className="text-red-400">D</span>ummy
            <span className="text-red-400">S</span>tore
          </h1>
        </NavLink>

        <ul className="flex gap-6 text-gray-700 font-medium">
          

          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? `${activeClass}` : `${linkClass}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? `${activeClass}` : `${linkClass}`
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? `${activeClass}` : `${linkClass}`
              }
            >
              Cart
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
