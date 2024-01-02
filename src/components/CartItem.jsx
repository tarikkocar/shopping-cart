import { useContext } from "react";
import { ShopContext } from "../App";
import { Link } from "react-router-dom";

export default function CartItem({ plant }) {
  const { removeFromCart, changeQuantity } = useContext(ShopContext);

  return (
    <div className="p-6 flex gap-10 max-[600px]:px-0">
      <div className="max-w-[250px]">
        <Link to={`/${plant.id}`}>
          <img
            src={plant.img_1}
            alt={`${plant.title} image`}
            className="aspect-square"
          />
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <Link to={`/${plant.id}`}>
          <h2 className="text-xl text-teal-700">{plant.title}</h2>
        </Link>
        <p className="text-lg font-bold text-slate-800">{`$${(
          plant.price * plant.quantity
        ).toFixed(2)}`}</p>
        <div className="mt-12 flex flex-col">
          <p className="block mb-2 text-lg font-bold text-gray-900 dark:text-white">
            Quantity:
          </p>
          <div className="flex">
            <button
              className="bg-slate-50 border border-r-0 border-slate-500 rounded-l-lg p-2"
              onClick={() => changeQuantity(plant, false)}
            >
              -
            </button>
            <div className="w-10 bg-slate-50 border border-x-0 border-slate-500 text-center text-slate-900 text-sm focus:outline-0 p-2.5">
              {plant.quantity}
            </div>
            <button
              className="bg-slate-50 border border-l-0 border-slate-500 rounded-r-lg p-2"
              onClick={() => changeQuantity(plant, true)}
            >
              +
            </button>
            <button className="ml-6 mt-2" onClick={() => removeFromCart(plant)}>
              <span className="material-symbols-outlined">delete</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
