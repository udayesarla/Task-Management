import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Product } from '../types';

interface StoreState {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      cart: [],
      total: 0,
      addToCart: (product) =>
        set((state) => {
          const existingItem = state.cart.find((item) => item.id === product.id);
          if (existingItem) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
              total: state.total + product.price,
            };
          }
          return {
            cart: [...state.cart, { ...product, quantity: 1 }],
            total: state.total + product.price,
          };
        }),
      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
          total: state.total - (state.cart.find((item) => item.id === productId)?.price ?? 0),
        })),
      updateQuantity: (productId, quantity) =>
        set((state) => {
          const item = state.cart.find((item) => item.id === productId);
          if (!item) return state;
          const quantityDiff = quantity - item.quantity;
          return {
            cart: state.cart.map((item) =>
              item.id === productId ? { ...item, quantity } : item
            ),
            total: state.total + item.price * quantityDiff,
          };
        }),
      clearCart: () => set({ cart: [], total: 0 }),
    }),
    {
      name: 'cart-storage',
    }
  )
);