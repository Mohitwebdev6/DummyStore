import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoIosStar } from "react-icons/io";
import axios from "../utils/axios";
import { motion } from "framer-motion";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  async function getProductDetails() {
    try {
      const { data } = await axios(`/products/${id}`);
      setProduct(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getProductDetails();
  }, []);

  if (product) {
    return (
      <motion.div
        initial={{ opacity: 0, rotate: -15, scale: 0.95 }}
        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row gap-8 overflow-hidden"
      >
        <div className="flex-1 group">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[400px] object-contain bg-gray-100 rounded transform transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>

          <p className="text-xl text-blue-600 font-semibold">
            ${product.price}
          </p>

          <div className="text-yellow-500 font-medium flex items-center gap-1">
            <IoIosStar className="text-xl" />
            {product.rating?.rate ?? "N/A"} ({product.rating?.count ?? 0}{" "}
            reviews)
          </div>

          <p className="text-sm text-gray-500">
            Category: <span className="italic">{product.category}</span>
          </p>

          <p className="text-gray-700 leading-relaxed">{product.description}</p>

          <div className="flex gap-4 pt-4">
            <button className="bg-red-500 text-white font-semibold py-2 px-4 rounded-md transition-transform hover:scale-105 hover:shadow-md">
              Buy Now
            </button>

            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 hover:bg-blue-600 hover:-translate-y-1 hover:shadow-lg">
              Add to Cart
            </button>
          </div>
        </div>
      </motion.div>
    );
  } else {
    return "Loading...";
  }
}

export default ProductDetails;
