import ProductImages from "../components/ProductImages";
import ProductDetails from "../components/ProductDetails";

export default function ProductPage() {
  return (
    <div className="px-32 w-full max-w-[100rem] flex">
      <ProductImages />
      <ProductDetails />
    </div>
  );
}
