import React from "react";
import { Product } from "src/domain/entities/Product";
import ProductCard from "./ProductCard";

type ProductListParameter = {
  products: Product[];
};
function ProductList({ products }: ProductListParameter) {
  return (
    <div className="grid grid-cols-4 gap-4 w-full">
      {products?.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductList;
