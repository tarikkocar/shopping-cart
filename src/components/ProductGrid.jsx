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
            <li
              className={`hover:text-teal-700 transition-all ${
                collection.slug === "all-houseplants"
                  ? "underline underline-offset-4 decoration-teal-700 text-teal-700"
                  : ""
              }`}
            >
              <Link to="/all-houseplants">All Houseplants</Link>
            </li>
            <li
              className={`hover:text-teal-700 transition-all ${
                collection.slug === "easy-to-care"
                  ? "underline underline-offset-4 decoration-teal-700 text-teal-700"
                  : ""
              }`}
            >
              <Link to="/easy-to-care">Easy to Care</Link>
            </li>
            <li
              className={`hover:text-teal-700 transition-all ${
                collection.slug === "pet-safe"
                  ? "underline underline-offset-4 decoration-teal-700 text-teal-700"
                  : ""
              }`}
            >
              <Link to="/pet-safe">Pet-safe</Link>
            </li>
            <li
              className={`hover:text-teal-700 transition-all ${
                collection.slug === "succulents"
                  ? "underline underline-offset-4 decoration-teal-700 text-teal-700"
                  : ""
              }`}
            >
              <Link to="/succulents">Succulents</Link>
            </li>
            <li
              className={`hover:text-teal-700 transition-all ${
                collection.slug === "palms"
                  ? "underline underline-offset-4 decoration-teal-700 text-teal-700"
                  : ""
              }`}
            >
              <Link to="/palms">Palms</Link>
            </li>
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
