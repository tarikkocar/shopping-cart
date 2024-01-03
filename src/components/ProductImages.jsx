import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ProductImages({ plant }) {
  const [displayedImage, setDisplayedImage] = useState(1);

  return (
    <div className="p-8 pt-1 w-1/2 flex flex-col items-center gap-6 max-[800px]:w-full">
      <AnimatePresence mode="wait" initial={false}>
        {displayedImage === 1 && (
          <motion.img
            key="img1"
            src={plant.img_1}
            alt={`${plant.title} image 1`}
            className="w-full aspect-square"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{
              duration: 0.35,
              type: "spring",
            }}
          />
        )}
        {displayedImage === 2 && (
          <motion.img
            key="img2"
            src={plant.img_2}
            alt={`${plant.title} image 2`}
            className="w-full aspect-square"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{
              duration: 0.35,
              type: "spring",
            }}
          />
        )}
      </AnimatePresence>
      <div className="flex gap-4">
        <button
          className={`w-20 ${
            displayedImage === 1 ? "ring-2 ring-teal-700" : ""
          }`}
          onClick={() => {
            setDisplayedImage(1);
          }}
        >
          <img src={plant.img_1} alt={`${plant.title} icon 1`} />
        </button>
        <button
          className={`w-20 ${
            displayedImage === 2 ? "ring-2 ring-teal-700" : ""
          }`}
          onClick={() => {
            setDisplayedImage(2);
          }}
        >
          <img src={plant.img_2} alt={`${plant.title} icon 2`} />
        </button>
      </div>
    </div>
  );
}
