import { useState, createContext } from "react";

const ShopContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  changeQuantity: () => {},
});

function ShopProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item, quantity) => {
    const isItemInCart = cartItems.some((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      const updatedCart = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + quantity }
          : cartItem
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...item, quantity: quantity }]);
    }
  };

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
  };

  const changeQuantity = (item, isIncrease) => {
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? {
              ...cartItem,
              quantity: Math.max(
                1,
                Math.min(cartItem.quantity + (isIncrease ? 1 : -1), 10)
              ),
            }
          : cartItem
      )
    );
  };

  return (
    <ShopContext.Provider
      value={{ cartItems, addToCart, removeFromCart, changeQuantity }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export { ShopContext, ShopProvider };
