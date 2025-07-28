import React from "react";

 function Card(product) {
    const { title, image, price, rating } = product.product;

  return (
    <div className="bg-white mb-3 shadow-md hover:cursor-pointer rounded-lg overflow-hidden w-xs">
      <img
        src={image}
        alt={title}
        className="w-full h-52 object-contain bg-gray-100 p-4"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2 line-clamp-1">{title}</h2>
        <p className="text-blue-600 font-bold text-lg mb-2">${price}</p>
        <div className="text-yellow-500 font-medium">
          ⭐ {rating?.rate ?? "N/A"} ({rating?.count ?? 0})
        </div>
      </div>
    </div>
  );
}

export default Card;