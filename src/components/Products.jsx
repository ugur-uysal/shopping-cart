import productData from "../ProductData";
import ProductItem from "./ProductItem";

const Products = () => {
  return (
    <div className="grid grid-cols-3 max-md:grid-cols-2  max-sm:grid-cols-1 gap-10 mb-8">
      {productData.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
