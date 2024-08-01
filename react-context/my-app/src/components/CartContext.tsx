import { createContext } from 'react';
import { useState } from 'react';

export type CartValue = {
  cart: Product[];
  addToCart: (product: Product) => void;
};

const defaultCartValue: CartValue = {
  cart: [],
  addToCart: () => undefined,
};

export const CartContext = createContext(defaultCartValue);

type Props = {
  children: ReactNode;
};

export function CartProvider({ children }: Props) {
  const [cart, setCart] = useState<Product[]>([]);

  function addToCart(product: Product) {
    setCart([product, ...cart]);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
