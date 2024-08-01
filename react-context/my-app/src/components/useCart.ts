import { CartContext } from './CartContext';
import { useContext } from 'react';

export function useCart() {
  const context = useContext(CartContext);
  if (!context)
    throw new Error('useCart must be used inside of the CartProvider');
  return context;
}
