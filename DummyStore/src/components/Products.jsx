import React, { useContext } from "react";
import Card from "./Card";
import { ProductContext } from "../context/Context";
import { Link, useLocation } from "react-router-dom";
import { getfilteredProducts } from "../utils/GetData";
import Category from "./Category";


function Products() {
  let products = useContext(ProductContext);
  const { search } = useLocation();
  const category = search ? decodeURIComponent(search.split("=")[1]) : null;
  const [filteredProducts, setFilteredProducts] = React.useState(null);

 ;
  React.useEffect(() => {
    if (category) {
      getfilteredProducts(setFilteredProducts,category);
    } else {
      setFilteredProducts(products);
    }
  }, [category, products]);

  console.log("filteredProducts", filteredProducts);

  return (
      <div className="flex flex-wrap gap-5  my-5">
        {filteredProducts ? (
          filteredProducts.map((product, index) => {
            return (
              <Link className="justify-self-end" key={index} to={`/products/${product.id}`}>
                <Card product={product} />
              </Link>
            );
          })
        ) : (
          <div className="text-red-500 mt-20">
            No products found or no internet connection
          </div>
        )}
        <Category/>

      </div>
  );
}

export default Products;
