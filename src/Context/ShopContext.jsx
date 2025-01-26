import { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";
import { toast } from "sonner"; // Importing the toast function

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [itemId]: prev[itemId] + 1 };

      // Find the product information by its ID
      const addedProduct = all_product.find((product) => product.id === itemId);

      if (addedProduct) {
        // Show toast notification in green for added product
        toast.success(`${addedProduct.name} added to cart!`, {
          style: { backgroundColor: 'green', color: 'white' },
        });
      }

      return updatedCart;
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = { ...prev, [itemId]: prev[itemId] - 1 };

      // Find the product information by its ID
      const removedProduct = all_product.find((product) => product.id === itemId);

      if (removedProduct) {
        // Show toast notification in red for removed product
        toast.error(`${removedProduct.name} removed from cart!`, {
          style: { backgroundColor: 'red', color: 'white' },
        });
      }

      return updatedCart;
    });
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = all_product.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
    }

    return totalAmount; // Ensure return is outside the loop
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
