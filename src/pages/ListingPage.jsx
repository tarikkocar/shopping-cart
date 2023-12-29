import { useLocation } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";

export default function ListingPage({ collections }) {
  const location = useLocation();
  const { pathname } = location;
  const slug = pathname.substring(1);

  const collection = collections.find((c) => c.slug === slug);

  return (
    <div className="max-w-[110rem]">
      <div className="px-64 mt-8 mb-4 text-center flex flex-col gap-4 max-[1100px]:px-10">
        <h1 className="text-3xl">{collection.title}</h1>
        <p className="text-slate-800">{collection.description}</p>
      </div>
      <ProductGrid collection={collection} />
    </div>
  );
}
