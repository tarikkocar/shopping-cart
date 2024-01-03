import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import plants from "../constants/plants";

export default function SearchPanel({ isSearchOpen, setIsSearchOpen }) {
  const [filteredPlants, setFilteredPlants] = useState(plants);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    setTimeout(() => {
      const filteredResults = plants.filter((plant) =>
        plant.title.toLowerCase().includes(searchInput.toLowerCase())
      );

      setFilteredPlants(filteredResults);
    }, 300);
  }, [searchInput]);

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <motion.div
          key="searchPanel"
          className="fixed z-20 w-1/2 max-w-4xl right-0 bottom-0 top-0 p-10 rounded-lg bg-teal-50 opacity-[97%] text-sm font-bold max-[800px]:w-full"
          initial={{ opacity: 0, x: "200%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "200%" }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="material-symbols-outlined scale-125 cursor-pointer max-[600px]:scale-90"
            onClick={() => {
              setIsSearchOpen(false);
              setSearchInput("");
            }}
          >
            close
          </span>
          <h3 className="mb-10 w-full text-center text-xl">
            SEARCH HOUSEPLANTS
          </h3>
          <div className="flex gap-2 mt-4">
            <input
              type="text"
              className="p-2 w-full bg-slate-50 border border-slate-500 text-slate-900 text-sm rounded-lg focus:outline-0"
              onChange={handleSearchInputChange}
              autoFocus
            />
            <button className="text-sm hover:text-teal-700 transition-all">
              SEARCH
            </button>
          </div>
          <div className="flex items-center gap-6 mt-10 max-[600px]:flex-wrap">
            {searchInput &&
              filteredPlants.slice(0, 3).map((plant) => (
                <motion.div
                  key={plant.id}
                  className="w-1/3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={() => {
                    setIsSearchOpen(false);
                    setSearchInput("");
                  }}
                >
                  <Link key={plant.id} to={`/${plant.id}`}>
                    <ProductCard plant={plant} />
                  </Link>
                </motion.div>
              ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
