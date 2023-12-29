import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import plants from "../constants/plants";

export default function ProductGrid({ collection }) {
  const [sortBy, setSortBy] = useState("recommended");

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
  };

  const filteredPlants = plants.filter((plant) =>
    plant.collections.includes(collection.slug)
  );

  let sortedPlants;

  switch (sortBy) {
    case "recommended":
      sortedPlants = filteredPlants;
      break;
    case "aZ":
      sortedPlants = [...filteredPlants].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      break;
    case "zA":
      sortedPlants = [...filteredPlants].sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      break;
    case "priceInc":
      sortedPlants = [...filteredPlants].sort((a, b) => a.price - b.price);
      break;
    case "priceDec":
      sortedPlants = [...filteredPlants].sort((a, b) => b.price - a.price);
      break;
  }

  return (
    <div className="p-10">
      <div className="p-4 pt-0 mb-4 w-full flex justify-end border-b-2 border-b-slate-300">
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
          {sortedPlants.map((plant) => (
            <Link key={plant.id} to={`/${plant.id}`}>
              <ProductCard key={plant.id} plant={plant} />
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
