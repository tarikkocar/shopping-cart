import ProductCard from "./ProductCard";
import plants from "../constants/plants";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ProductGrid() {
  const [sortBy, setSortBy] = useState("recommended");

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
  };

  let displayedProducts;

  switch (sortBy) {
    case "recommended":
      displayedProducts = plants;
      break;
    case "aZ":
      displayedProducts = [...plants].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      break;
    case "zA":
      displayedProducts = [...plants].sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      break;
    case "priceInc":
      displayedProducts = [...plants].sort((a, b) => a.price - b.price);
      break;
    case "priceDec":
      displayedProducts = [...plants].sort((a, b) => b.price - a.price);
      break;
  }

  return (
    <div className="p-10 max-w-[110rem]">
      <div className="px-64 mb-4 text-center flex flex-col gap-4 max-[1100px]:px-10">
        <h1 className="text-3xl">All Houseplants</h1>
        <p className="text-slate-800">
          Discover a diverse collection of houseplants, each bringing its unique
          charm and greenery to your indoor space. From lush foliage to
          flowering wonders, our collection offers a delightful variety for
          every plant enthusiast.
        </p>
      </div>
      <div>
        <div className="p-4 mb-4 w-full flex justify-end border-b-2 border-b-slate-300">
          <select
            name="sortBy"
            id="sortBy"
            className="focus:outline-0"
            onChange={handleSortByChange}
          >
            <option value="recommended">Recommended</option>
            <option value="aZ">A to Z</option>
            <option value="zA">Z to A</option>
            <option value="priceInc">Price: Low to High</option>
            <option value="priceDec">Price: High to Low</option>
          </select>
        </div>
        <div className="flex gap-16 justify-center">
          <div className="px-10 border-r-2 border-r-slate-300 text-slate-1000 max-[800px]:hidden">
            <ul className="flex flex-col gap-3">
              <li>All Houseplants</li>
              <li>Easy to Care</li>
              <li>Pet-safe</li>
              <li>Succulents</li>
              <li>Palms</li>
            </ul>
          </div>
          <motion.div
            key={sortBy}
            className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {displayedProducts.map((plant) => (
              <ProductCard key={plant.id} plant={plant} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
