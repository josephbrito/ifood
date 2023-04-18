import { createContext, useState, useContext } from "react";
import { CART_DEFAULT_VALUE, ICart, ICartData, IChildren } from "./types";

const CartContext = createContext<ICartData>(CART_DEFAULT_VALUE);

export function CartProvider({ children }: IChildren) {
  const [cart, setCart] = useState<ICart[]>([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const { cart, setCart } = useContext(CartContext);

  return { cart, setCart };
}
