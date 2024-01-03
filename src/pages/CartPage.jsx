import { useContext } from "react";
import { ShopContext } from "../App";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CartItem from "../components/CartItem";
import CartControls from "../components/CartControls";

export default function CartPage() {
  const { cartItems } = useContext(ShopContext);

  return (
    <>
      {cartItems.length !== 0 && (
        <motion.div
          className="w-4/5 max-w-[110rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="px-64 pb-6 mt-8 mb-4 text-center border-b-2 border-b-slate-400 max-[1000px]:px-10">
            <h1 className="text-3xl">Your Cart</h1>
          </div>
          <div className="flex gap-10 max-[1000px]:flex-col">
            <div className="w-2/3 divide-y-2 divide-slate-300 max-[1000px]:w-full">
              {cartItems.map((plant) => (
                <CartItem key={plant.id} plant={plant} />
              ))}
            </div>
            <CartControls />
          </div>
        </motion.div>
      )}
      {cartItems.length === 0 && (
        <motion.div
          className="w-4/5 max-w-[110rem] flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-20 flex flex-col gap-4 items-center max-[600px]:p-10">
            <p className="text-2xl font-bold text-center">Your Cart is Empty</p>
            <Link
              to="/all-houseplants"
              className="text-lg text-center underline underline-offset-4"
            >
              Continue Shopping
            </Link>
          </div>
        </motion.div>
      )}
    </>
  );
}
