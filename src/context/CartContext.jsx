import { createContext, useContext, useEffect, useState } from "react";

// Create the cart context
const CartContext = createContext();

// Custom hook to use cart data in any component
export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  // Load saved cart data from localStorage
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("shopease-cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart data whenever cartItems changes
  useEffect(() => {
    localStorage.setItem("shopease-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add product to cart
  const addToCart = (product) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === product.id
      );

      // If product already exists, increase quantity
      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // Add new product with quantity 1
      return [...currentItems, { ...product, quantity: 1 }];
    });
  };

  // Increase product quantity
  const increaseQuantity = (id) => {
    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease product quantity
  const decreaseQuantity = (id) => {
    setCartItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove product completely
  const removeFromCart = (id) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  };
  const clearCart = () => {
  setCartItems([]);
};

  // Calculate total number of items
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Calculate total cart price
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const value = {
  cartItems,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
  cartCount,
  cartTotal,
};

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};