import { Link } from "react-router-dom";
import ProductImages from "../components/ProductImages";
import ProductDetails from "../components/ProductDetails";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import plants from "../constants/plants";

export default function ProductPage() {
  const { id } = useParams();

  const plant = plants.find((plant) => plant.id === parseInt(id));

  return (
    <motion.div
      className="max-w-[110rem]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="px-32 w-full py-6 text-xs text-slate-800">
        <Link to="/" className="mr-2 underline underline-offset-2">
          HOME
        </Link>
        /
        <Link
          to="../all-houseplants"
          className="mr-2 ml-2 underline underline-offset-2"
        >
          ALL HOUSEPLANTS
        </Link>
        /<span className="ml-2">{plant.title.toUpperCase()}</span>
      </div>
      <div className="px-32 w-full flex max-[800px]:flex-col max-[800px]:p-10">
        <ProductImages plant={plant} />
        <ProductDetails plant={plant} />
      </div>
    </motion.div>
  );
}
