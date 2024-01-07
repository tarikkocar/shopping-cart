import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ShopProvider } from "./context/ShopProvider";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ShopProvider>
      <div className="flex flex-col justify-between items-center w-full min-h-screen">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </ShopProvider>
  );
}

export default App;
