import { createContext, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const ShopContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  changeQuantity: () => {},
});

function App() {
  const [cartItems, setCartItems] = useState([]);
  const { pathname } = useLocation();

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ShopContext.Provider
      value={{ cartItems, addToCart, removeFromCart, changeQuantity }}
    >
      <div className="flex flex-col items-center w-full">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </ShopContext.Provider>
  );
}

export default App;
