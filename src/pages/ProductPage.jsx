import ProductImages from "../components/ProductImages";
import ProductDetails from "../components/ProductDetails";

export default function ProductPage() {
  return (
    <div className="px-32 w-full flex max-[800px]:flex-col max-[800px]:p-10">
      <ProductImages />
      <ProductDetails />
    </div>
  );
}
