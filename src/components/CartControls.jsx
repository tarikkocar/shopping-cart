import { useContext } from "react";
import { ShopContext } from "../App";
import { Link } from "react-router-dom";

export default function CartControls() {
  const { cartItems } = useContext(ShopContext);

  const subtotal = cartItems.reduce(
    (total, plant) => total + plant.price * plant.quantity,
    0
  );

  return (
    <div className="w-1/3 p-6 max-[1000px]:w-full">
      <div className="flex mb-4">
        <p className="text-xl font-bold">Subtotal</p>
        <p className="text-xl font-bold ml-auto">{`$${subtotal.toFixed(2)}`}</p>
      </div>
      <div className="flex flex-col gap-3">
        <label htmlFor="gift" className="text-sm font-bold">
          Add a gift message
        </label>
        <textarea
          name="text"
          id="gift"
          cols="40"
          rows="6"
          className="p-1 border-2 border-slate-400 rounded-lg text-sm focus:outline-0 focus:border-teal-800"
        />
        <button className="mt-2 p-2 border-2 border-teal-800 rounded-lg text-teal-50 bg-teal-800 hover:bg-teal-950 active:bg-teal-800 transition-all">
          CHECKOUT
        </button>
        <Link
          to="/all-houseplants"
          className="m-auto underline underline-offset-4"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
