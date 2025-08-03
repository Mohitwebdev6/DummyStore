import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4"
    >
      <div className="flex items-center gap-3 text-4xl md:text-5xl font-bold mb-4 text-blue-600">
        <motion.h1
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Welcome to <span className="text-red-400">D</span>ummy
          <span className="text-red-400">S</span>tore
        </motion.h1>

        <motion.div whileHover={{ rotate: 20 }} transition={{ type: "spring" }}>
          <BsCart4 className="text-red-400 cursor-pointer transition-transform duration-300" />
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-gray-600 text-lg md:text-xl mb-8"
      >
        Discover the best products at unbeatable prices.
      </motion.p>

      <Link to="/products">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 250 }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg shadow-lg"
        >
          Start Shopping
        </motion.button>
      </Link>
    </motion.div>
  );
}
