import React from "react";
import  {NavLink} from 'react-router-dom'

function Nav() {
  const linkClass = "hover:text-blue-600 transition-colors duration-200";

  const activeClass = "text-blue-600 font-semibold border-b-2 border-blue-600";

  return (
    <nav className="bg-white shadow-md px-4 rounded-xl py-3">
      <div className="container mx-auto flex items-center justify-between">
       
        <NavLink to="/" className="text-2xl font-bold text-blue-600">
          <h1><span  className="text-red-400">D</span>ummy<span className="text-red-400">S</span>tore</h1>
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
