import { useContext, useState } from "react";
import { ShopContext } from "../App";
import { motion } from "framer-motion";

export default function ProductDetails({ plant }) {
  const [quantity, setQuantity] = useState(1);
  const [buttonContent, setButtonContent] = useState("ADD TO CART");
  const { addToCart } = useContext(ShopContext);

  const handleAddToCart = () => {
    addToCart(plant, quantity);

    setButtonContent(
      <motion.span
        className="material-symbols-outlined flex justify-center items-center"
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
      >
        done
      </motion.span>
    );

    setTimeout(() => {
      setButtonContent("ADD TO CART");
    }, 1000);
  };

  return (
    <div className="p-8 pt-1 w-1/2 flex flex-col items-start gap-6 max-[800px]:w-full">
      <div className="pb-2 w-full flex flex-col gap-2 border-b-2 border-b-slate-400">
        <h1 className="text-3xl text-teal-700">{plant.title}</h1>
        <p className="text-lg font-bold text-slate-800">{`$${plant.price}`}</p>
      </div>
      <div className="flex flex-col gap-6 text-slate-800">
        <p className="">{plant.description}</p>
        <p className="flex items-center text-lg">
          <b>Height (incl. pot):</b>{" "}
          <span className="ml-1">{plant.height}</span>
        </p>
      </div>
      <div className="mt-12 flex flex-col">
        <p className="block mb-2 text-lg font-bold text-gray-900 dark:text-white">
          Quantity:
        </p>
        <div className="flex">
          <button
            className="bg-slate-50 border border-r-0 border-slate-500 rounded-l-lg p-2"
            onClick={() => {
              if (quantity > 1) setQuantity(quantity - 1);
            }}
          >
            -
          </button>
          <div className="w-10 bg-slate-50 border border-x-0 border-slate-500 text-center text-slate-900 text-sm focus:outline-0 p-2.5">
            {quantity}
          </div>
          <button
            className="bg-slate-50 border border-l-0 border-slate-500 rounded-r-lg p-2"
            onClick={() => {
              if (quantity < 10) setQuantity(quantity + 1);
            }}
          >
            +
          </button>
        </div>
      </div>
      <button
        className="mt-2 w-1/2 p-2 border-2 border-teal-800 rounded-lg text-teal-50 bg-teal-800 hover:bg-teal-950 active:bg-teal-800 transition-all"
        onClick={handleAddToCart}
        disabled={buttonContent !== "ADD TO CART"}
      >
        {buttonContent}
      </button>
    </div>
  );
}
