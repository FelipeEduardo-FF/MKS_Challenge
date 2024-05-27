import axios from "axios";
import { Product } from "../../domain/entities/Product";
import { IProductRepository } from "../../application/interfaces/IProductRepository";


class ProductRepository  implements IProductRepository{
  private apiUrl: string;

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  public async fetchProducts(): Promise<Product[]> {
    try {
      const response = await axios.get<Product[]>(this.apiUrl);     
      return response.data;
    } catch (error) {
      throw new Error('Error fetching products');
    }
  }
}

export default ProductRepository;
