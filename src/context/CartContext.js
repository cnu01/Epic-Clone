import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [finalCartAmount, setFinalCartAmount] = useState(0);
  const [finalCartItem, setFinalCartItem] = useState([]);
  const handleFinalCartItem = (item) => {
    setFinalCartItem(() => item);
  };
  const handleFinalCartAmount = (sum) => {
    setFinalCartAmount(() => {
      return sum;
    });
  };
  return (
    <CartContext.Provider
      value={{
        finalCartItem,
        handleFinalCartItem,
        finalCartAmount,
        handleFinalCartAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
