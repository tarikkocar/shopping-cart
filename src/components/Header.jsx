import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopProvider";
import Menu from "./Menu";
import SearchPanel from "./SearchPanel";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { cartItems } = useContext(ShopContext);

  return (
    <div className="w-full h-36 flex flex-col justify-center items-center">
      <div className="w-full h-3/4 grid grid-cols-3 justify-center items-center">
        <div className="col-span-1 ml-10 max-[600px]:ml-4">
          <motion.span
            key={isMenuOpen ? "close" : "menu"}
            className={`material-symbols-outlined scale-125 hidden w-fit cursor-pointer max-[800px]:block max-[600px]:scale-90 ${
              isMenuOpen ? "fixed top-10 z-30" : ""
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
        <Link to="/" className="col-span-1 justify-self-center">
          <img
            src="/assets/logo.png"
            className="w-72 flex items-center gap-2"
            alt="logo"
          />
        </Link>
        <div className="mr-10 flex gap-8 justify-self-end max-[600px]:gap-4 max-[600px]:mr-4">
          <span
            className="material-symbols-outlined scale-125 cursor-pointer max-[600px]:scale-90"
            onClick={() => {
              setIsSearchOpen(true);
            }}
          >
            search
          </span>
          <Link to="/cart">
            <span className="relative material-symbols-outlined scale-125 cursor-pointer max-[600px]:scale-90">
              shopping_bag
              {cartItems.length > 0 && (
                <motion.div
                  className="absolute left-[14px] bottom-[0px] p-[5px] bg-red-400 rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                ></motion.div>
              )}
            </span>
          </Link>
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
