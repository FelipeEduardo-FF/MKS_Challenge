import { Product } from "../../domain/entities/Product";


export interface IProductRepository {
  fetchProducts(): Promise<Product[]>;
}
