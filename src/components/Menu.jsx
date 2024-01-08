import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Menu({ isMenuOpen, setIsMenuOpen }) {
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          key="menu"
          className="fixed inset-0 z-20 p-10 bg-teal-50 opacity-[97%] text-sm font-bold min-[800px]:hidden"
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "-100%" }}
          transition={{ duration: 0.4 }}
        >
          <ul className="flex flex-col gap-6 justify-center items-center">
            <h3 className="p-4 w-full text-center text-xl border-b-2 border-b-slate-400">
              COLLECTIONS
            </h3>
            <li
              className="hover:text-teal-700 transition-all"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              <Link to="easy-to-care">EASY TO CARE PLANTS</Link>
            </li>
            <li
              className="hover:text-teal-700 transition-all"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              <Link to="pet-safe">PET-SAFE PLANTS</Link>
            </li>
            <li
              className="hover:text-teal-700 transition-all"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              <Link to="succulents">SUCCULENTS</Link>
            </li>
            <li
              className="hover:text-teal-700 transition-all"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              <Link to="palms">PALMS</Link>
            </li>
            <li
              className="hover:text-teal-700 transition-all"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              <Link to="all-houseplants">ALL HOUSEPLANTS</Link>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
