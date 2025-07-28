import React from "react";
import { createContext } from "react";
import axios from "axios";

export const UserContext = createContext();

function Context(props) {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  },[]);

  return (
    <UserContext.Provider value={{products}}>
      {props.children}
    </UserContext.Provider>
  );
}

export default Context;
