import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PageNotFound() {
  return (
    <div className="flex flex-col justify-between items-center w-full min-h-screen">
      <Header />
      <motion.div
        className="p-20 mb-auto flex flex-col gap-4 items-center max-[600px]:p-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-3xl font-bold text-center">
          This page doesn't exist.
        </p>
        <Link
          to="/"
          className="text-lg text-center underline underline-offset-4"
        >
          Return to home page
        </Link>
      </motion.div>
      <Footer />
    </div>
  );
}
