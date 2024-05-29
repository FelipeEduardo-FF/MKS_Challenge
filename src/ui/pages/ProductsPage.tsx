import { useState } from "react";
import { useQuery } from "react-query";
import { Product } from "src/domain/entities/Product";
import ProductRepository from "../../insfrastructure/repositories/ProductRepository";
import ProductListSkeleton from "@/components/ListSkeleton";
import ProductList from "@/components/ProductComponents/ProductList";

//Seria melhor utilizar um usecase mas nao achei necessidade por ser uma aplicacao pequena

function ProductsPage() {
  const productRepositoy = new ProductRepository();

  const { data, error, isLoading } = useQuery<Product[]>(
    "featchProdutos",
    async () => await productRepositoy.fetchProducts()
  );

  return (
    <div className="container mt-16">
      {isLoading && <ProductListSkeleton />}
      {data && <ProductList products={data} />}
    </div>
  );
}

export default ProductsPage;
