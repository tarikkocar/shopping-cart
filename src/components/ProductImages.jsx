import { useState } from "react";

export default function ProductImages({ plant }) {
  const [displayedImage, setDisplayedImage] = useState(1);

  return (
    <div className="p-8 pt-1 w-1/2 flex flex-col items-center gap-6 max-[800px]:w-full">
      <img
        className="w-full aspect-square"
        src={plant[`img_${displayedImage}`]}
        alt={`${plant.title} image ${displayedImage}`}
      />
      <div className="flex gap-4">
        <button
          className={`w-20 ${
            displayedImage === 1 ? "ring-2 ring-teal-700" : ""
          }`}
          onClick={() => {
            setDisplayedImage(1);
          }}
        >
          <img src={plant.img_1} alt="" />
        </button>
        <button
          className={`w-20 ${
            displayedImage === 2 ? "ring-2 ring-teal-700" : ""
          }`}
          onClick={() => {
            setDisplayedImage(2);
          }}
        >
          <img src={plant.img_2} alt="" />
        </button>
      </div>
    </div>
  );
}
