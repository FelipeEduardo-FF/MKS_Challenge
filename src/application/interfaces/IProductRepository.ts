import { Product } from "../../domain/entities/Product";
import { ApiResponseDTO } from "../DTO/ApiResponseDTO";


export interface IProductRepository {
  fetchProducts(): Promise<Product[]>;
}
