import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import collections from "../constants/collections";

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <div className="relative">
        <img
          src="/assets/homepage_img.webp"
          alt="Indoor houseplants"
          className="pb-10"
        />
        <div className="absolute bottom-1/2 w-full p-16 flex flex-col gap-6 items-end bg-teal-900 bg-opacity-80 max-[1000px]:p-6 max-[1000px]:gap-2 max-[600px]:p-4">
          <h1 className="text-4xl text-teal-50 max-[1000px]:text-xl max-[600px]:text-lg">
            Breathe Life into Your Space
          </h1>
          <Link
            to="/all-houseplants"
            className="p-2 text-lg text-teal-50 border-2 border-teal-50 rounded-lg hover:text-slate-900 hover:bg-teal-50 transition-all max-[1000px]:text-sm max-[600px]:text-xs"
          >
            Shop Houseplants
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-8 items-center py-6 px-20 max-[1000px]:px-4 max-w-[110rem]">
        <h2 className="text-2xl max-[600px]:text-lg">Shop by Collection</h2>
        <div className="flex justify-center gap-8 max-[1000px]:flex-wrap">
          {collections.slice(1).map((collection) => (
            <Link
              key={collection.id}
              to={`/${collection.slug}`}
              className="w-1/4 flex flex-col items-center max-[1000px]:w-1/3"
            >
              <img
                src={collection.img}
                alt={`${collection.title} image`}
                loading="lazy"
              />
              <p className="mt-3 text-xl max-[1000px]:text-base max-[600px]:text-sm">
                {collection.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-8 items-center py-6 px-20 mt-8 max-[1000px]:px-8 max-w-[110rem]">
        <h2 className="text-2xl max-[600px]:text-lg">From Our Blog</h2>
        <div className="flex gap-8">
          <div className="w-1/3 flex flex-col items-center">
            <img
              src="/assets/blog_1.webp"
              alt="Blog post image 1"
              loading="lazy"
            />
            <p className="mt-3 text-xl max-[1000px]:text-base max-[600px]:text-sm">
              A Beginner's Guide to Houseplants
            </p>
          </div>
          <div className="w-1/3 flex flex-col items-center">
            <img
              src="/assets/blog_2.webp"
              alt="Blog post image 2"
              loading="lazy"
            />
            <p className="mt-3 text-xl max-[1000px]:text-base max-[600px]:text-sm">
              Exploring the Aesthetics of Houseplants
            </p>
          </div>
          <div className="w-1/3 flex flex-col items-center">
            <img
              src="/assets/blog_3.webp"
              alt="Blog post image 3"
              loading="lazy"
            />
            <p className="mt-3 text-xl max-[1000px]:text-base max-[600px]:text-sm">
              The Healing Power of Houseplants
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
