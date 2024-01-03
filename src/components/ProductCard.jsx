import { useState } from "react";
import { motion } from "framer-motion";

export default function ProductCard({ plant }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEvent = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className="max-w-[20rem] text-center">
      {!isHovered && (
        <img
          onMouseEnter={handleMouseEvent}
          src={plant.img_1}
          alt={`${plant.title} image 1`}
          className="w-full aspect-square"
        />
      )}
      {isHovered && (
        <motion.img
          onMouseLeave={handleMouseEvent}
          src={plant.img_2}
          alt={`${plant.title} image 2`}
          className="w-full aspect-square"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      )}
      <p className="mt-3 text-2xl text-teal-700">{plant.title}</p>
      <p className="font-bold text-slate-800">{`$${plant.price}`}</p>
    </div>
  );
}
