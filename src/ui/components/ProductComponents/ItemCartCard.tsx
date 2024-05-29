import { CartItem } from "src/domain/entities/CartItem";
import { Card, CardContent } from "../ui/card";
import { useCart } from "../../../application/context/CartContext";
import { MinusIcon, PlusIcon } from "lucide-react";

type ItemCartCardProps = {
  cartItem: CartItem;
};
function ItemCartCard({ cartItem }: ItemCartCardProps) {
  const { addProductToCart, decreaseProductToCart } = useCart();
  return (
    <div
      key={cartItem.product.id}
      className="w-full h-[160px]  sm:h-[90px] flex  justify-center mt-6"
    >
      <Card className="w-full">
        <CardContent className="p-3 flex items-center flex-col sm:flex-row">
          <div className="flex flex-col items-center  sm:flex-row">
            <img
              className="h-[57px] "
              src={cartItem.product.photo}
              alt={cartItem.product.name}
            ></img>
            <p>{cartItem.product.name}</p>
          </div>
          <div className="flex  mx-auto">
            <div className="flex items-center  justify-center">
              <button
                onClick={() => addProductToCart(cartItem.product)}
                className="group rounded-l-full px-1 py-[6px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
              >
                <PlusIcon size={16}></PlusIcon>
              </button>
              <input
                type="text"
                disabled
                className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[30px] min-w-[20px] placeholder:text-gray-900  text-center bg-transparent"
                value={cartItem.quantity}
              />
              <button
                onClick={() => decreaseProductToCart(cartItem.product)}
                className="group rounded-r-full px-1 py-[6px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
              >
                <MinusIcon size={16}></MinusIcon>
              </button>
            </div>
            <p className="font-bold ml-2">
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(Number(cartItem.product.price))}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ItemCartCard;
