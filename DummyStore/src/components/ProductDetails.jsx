import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../context/Context";

function ProductDetails() {
  const {id} = useParams();
  const {products} = useContext(UserContext);
  const product=products.filter((product)=>(product.id == id))[0];
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
        <p className="text-xl text-blue-600 font-semibold">${product.price}</p>

        <div className="text-yellow-500 font-medium">
          ⭐ {product.rating?.rate ?? "N/A"} ({product.rating?.count ?? 0}{" "}
          reviews)
        </div>

        <p className="text-sm text-gray-500">
          Category: <span className="italic">{product.category}</span>
        </p>

        <p className="text-gray-700 leading-relaxed">{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetails;
