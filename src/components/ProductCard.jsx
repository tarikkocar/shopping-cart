import { useState } from "react";
import { motion } from "framer-motion";

export default function ProductCard({ plant }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [imageWidth, setImageWidth] = useState(null);

  const handleMouseEnter = (e) => {
    setIsHovered(true);
    setImageWidth(e.target.width);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="max-w-[20rem] text-center">
      {!isHovered && (
        <img
          onMouseEnter={handleMouseEnter}
          src={plant.img_1}
          alt={`${plant.title} image 1`}
          className="w-full aspect-square"
          loading="lazy"
        />
      )}
      {isHovered && (
        <>
          <motion.img
            onMouseLeave={handleMouseLeave}
            onLoad={() => {
              setIsImageLoading(false);
            }}
            src={plant.img_2}
            alt={`${plant.title} image 2`}
            className={`w-full aspect-square ${
              isImageLoading ? "hidden" : "block"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
          <div
            style={{ width: `${imageWidth}px` }}
            className={`w-full w-[${imageWidth}px] h-auto aspect-square ${
              isImageLoading ? "block" : "hidden"
            }`}
          ></div>
        </>
      )}
      <p className="mt-3 text-2xl text-teal-700">{plant.title}</p>
      <p className="font-bold text-slate-800">{`$${plant.price}`}</p>
    </div>
  );
}
