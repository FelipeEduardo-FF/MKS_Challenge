import axios from "axios";
import { Product } from "../../domain/entities/Product";
import { IProductRepository } from "../../application/interfaces/IProductRepository";


class ProductRepository  implements IProductRepository{
  private apiUrl: string;

  constructor() {
    this.apiUrl = "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=50&sortBy=id&orderBy=ASC";
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
