import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ProductContext } from "../context/Context";
import { motion } from "framer-motion";

function Nav() {
  const linkClass =
    "relative text-gray-700 hover:text-blue-600 transition duration-300 hover:scale-105";

  const activeClass =
    "text-blue-600 font-semibold border-b-2 border-blue-600";

  const products = useContext(ProductContext);

  let distinct_category = products
    ? products.reduce((acc, curr) => [...acc, curr.category], [])
    : [];

  distinct_category = [...new Set(distinct_category)];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="bg-white shadow-md px-4 rounded-xl py-3 z-100 sticky top-0"
    >
      <div className="container mx-auto flex items-center justify-between">
        
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-bold text-blue-600 cursor-pointer"
        >
          <NavLink to="/">
            <h1>
              <span className="text-red-400">D</span>ummy
              <span className="text-red-400">S</span>tore
            </h1>
          </NavLink>
        </motion.div>

      
        <ul className="flex gap-6 font-medium text-lg">
          {["/", "/products", "/cart"].map((path, i) => {
            const label = path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2);
            return (
              <motion.li
                key={path}
                whileHover={{ scale: 1.1 }}
                
              >
                <NavLink
                  to={path}
                  end={path === "/"}
                  className={({ isActive }) =>
                    isActive ? activeClass : linkClass
                  }
                >
                  <span className="relative group">
                    {label}
                   
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </NavLink>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </motion.nav>
  );
}

export default Nav;
