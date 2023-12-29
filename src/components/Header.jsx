import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import SearchPanel from "./SearchPanel";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="w-full h-36 flex flex-col justify-center items-center">
      <div className="w-full h-3/4 grid grid-cols-3 justify-center items-center">
        <div className="col-span-1 ml-10">
          <motion.span
            key={isMenuOpen ? "close" : "menu"}
            className={`material-symbols-outlined scale-125 hidden w-fit cursor-pointer max-[800px]:block max-[600px]:scale-90 ${
              isMenuOpen ? "fixed top-10 z-10" : ""
            }`}
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {isMenuOpen ? "close" : "menu"}
          </motion.span>
        </div>
        <img
          src="/assets/logo.png"
          className="w-72 col-span-1 flex items-center gap-2 justify-self-center"
          alt="logo"
        />
        <div className="mr-10 flex gap-8 justify-self-end max-[600px]:gap-4">
          <span
            className="material-symbols-outlined scale-125 cursor-pointer max-[600px]:scale-90"
            onClick={() => {
              setIsSearchOpen(true);
            }}
          >
            search
          </span>
          <span className="material-symbols-outlined scale-125 cursor-pointer max-[600px]:scale-90">
            shopping_bag
          </span>
        </div>
      </div>
      <nav className="w-full p-5 h-1/4 bg-teal-800 text-sm text-teal-50 flex justify-center items-center">
        <ul className="flex gap-8 justify-center items-center max-[800px]:hidden">
          <li className="hover:text-teal-200 transition-all">
            <Link to="easy-to-care">EASY TO CARE PLANTS</Link>
          </li>
          <li className="hover:text-teal-200 transition-all">
            <Link to="pet-safe">PET-SAFE PLANTS</Link>
          </li>
          <li className="hover:text-teal-200 transition-all">
            <Link to="succulents">SUCCULENTS</Link>
          </li>
          <li className="hover:text-teal-200 transition-all">
            <Link to="palms">PALMS</Link>
          </li>
          <li className="hover:text-teal-200 transition-all">
            <Link to="all-houseplants">ALL HOUSEPLANTS</Link>
          </li>
        </ul>
      </nav>
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <SearchPanel
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
      />
    </div>
  );
}
