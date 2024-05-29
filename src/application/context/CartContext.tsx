import { ReactNode, createContext, useContext, useState } from "react";
import { CartItem } from "src/domain/entities/CartItem";
import { Product } from "src/domain/entities/Product";

type CartContextType = {
  addProductToCart: (product: Product) => void;
  decreaseProductToCart: (product: Product) => void;
  removeProductToCart: (product: Product) => void;
  cart: CartItem[];
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

type CartProviderProps = {
  children: ReactNode;
};
export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addProductToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.product.id === product.id
      );

      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { product, quantity: 1 }];
      }
    });
  };

  const decreaseProductToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.product.id === product.id
      );

      const updatedCart = [...prevCart];
      updatedCart[existingProductIndex].quantity -= 1;
      if (updatedCart[existingProductIndex].quantity === 0) {
        updatedCart.splice(existingProductIndex, 1);
      }
      return updatedCart;
    });
  };

  const removeProductToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.product.id === product.id
      );

      const updatedCart = [...prevCart];
      updatedCart.splice(existingProductIndex, 1);
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        decreaseProductToCart,
        removeProductToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
