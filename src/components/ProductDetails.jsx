import plants from "../constants/plants";

export default function ProductDetails() {
  return (
    <div className="p-8 pt-1 w-1/2 flex flex-col items-start gap-6 max-[800px]:w-full">
      <div className="pb-2 w-full flex flex-col gap-2 border-b-2 border-b-slate-400">
        <h1 className="text-3xl text-teal-700">{plants[0].title}</h1>
        <p className="text-lg font-bold text-slate-800">{`$${plants[0].price}`}</p>
      </div>
      <div className="flex flex-col gap-6 text-slate-800">
        <p className="">{plants[0].description}</p>
        <p className="flex items-center text-lg">
          <b>Height (incl. pot):</b>{" "}
          <span className="ml-1">{plants[0].height}</span>
        </p>
      </div>
      <div className="mt-12 flex flex-col">
        <label
          htmlFor="quantity"
          className="block mb-2 text-lg font-bold text-gray-900 dark:text-white"
        >
          Quantity:
        </label>
        <input
          type="number"
          id="quantity"
          className="w-3/4 bg-slate-50 border border-slate-500 text-slate-900 text-sm rounded-lg focus:outline-0 focus:ring-1 focus:ring-teal-700 p-2.5"
          placeholder="1"
          min="1"
          max="10"
        ></input>
      </div>
      <button className="mt-2 w-1/2 p-2 border-2 border-teal-800 rounded-lg text-teal-50 bg-teal-800 hover:bg-teal-950 active:bg-teal-800 transition-all">
        ADD TO CART
      </button>
    </div>
  );
}
