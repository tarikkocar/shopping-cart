import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductPage from "./pages/ProductPage";
import ListingPage from "./pages/ListingPage";

function App() {
  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <Header />
      {/* <ProductPage /> */}
      <ListingPage />
      <Footer />
    </div>
  );
}

export default App;
