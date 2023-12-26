import { useState } from "react";
import Header from "./components/Header";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="flex flex-col items-center gap-2 w-full max-w-[110rem]">
      <Header />
      <ProductPage />
    </div>
  );
}

export default App;
