import { Card, CardContent, CardFooter, CardTitle } from "../ui/card";
import { Product } from "src/domain/entities/Product";
import { Badge } from "../ui/badge";
import { ShoppingBagIcon } from "lucide-react";
import { useCart } from "../../../application/context/CartContext";

type ProductCardProperty = {
  product: Product;
};
function ProductCard({ product }: ProductCardProperty) {
  const { addProductToCart } = useCart();
  return (
    <Card className=" flex flex-col justify-between">
      <CardTitle></CardTitle>
      <CardContent>
        <div className="flex w-full justify-center mt-3">
          <img
            className="h-[138px]"
            src={product.photo}
            alt={product.name}
          ></img>
        </div>

        <div className="flex justify-between">
          <h1 className="text-lg">{product.name}</h1>
          <div>
            <Badge>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(Number(product.price))}
            </Badge>
          </div>
        </div>

        <p className="text-sm text-slate-500">{product.description}</p>
      </CardContent>
      <CardFooter className="p-0 h-[50px] ">
        <div
          className="cursor-pointer flex text-white  w-full h-full justify-center bg-[#0F52BA] items-center"
          onClick={() => addProductToCart(product)}
        >
          <ShoppingBagIcon className="mr-4" />
          <p className="font-bold">Comprar</p>
        </div>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
