import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { IoIosStar } from "react-icons/io";
import axios from "../utils/axios";

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
      <div className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[400px] object-contain bg-gray-100 rounded"
          />
        </div>

        <div className="flex-1 space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-xl text-blue-600 font-semibold">
            ${product.price}
          </p>

          <div className="text-yellow-500 font-medium">
            <IoIosStar /> {product.rating?.rate ?? "N/A"} (
            {product.rating?.count ?? 0} reviews)
          </div>

          <p className="text-sm text-gray-500">
            Category: <span className="italic">{product.category}</span>
          </p>

          <p className="text-gray-700 leading-relaxed">{product.description}</p>

          <button className="bg-red-500 mr-4 text-white font-semibold py-2 px-4 rounded-md">
            Buy Now
          </button>
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md">
            Add to Cart
          </button>
        </div>
      </div>
    );
  } else {
    return "Loading...";
  }
}

export default ProductDetails;
