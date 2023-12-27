import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductPage from "./pages/ProductPage";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <Header />
      {/* <ProductPage /> */}
      <ProductCard />
      <Footer />
    </div>
  );
}

export default App;
