"use client";

import { ProductWithTotalPrice } from "@/helpers/products";
import { ReactNode, createContext, useState } from "react";

export interface CartProdut extends ProductWithTotalPrice {
  quantity: number;
}

interface ICartContext {
  products: CartProdut[];
  cartTotalPrice: number;
  cartBasePrice: number;
  cartTotalDiscount: number;
  addProductToCart: (product: CartProdut) => void;
  decreaseProductQuantity: (productId: string) => void;
  increaseProductQuantity: (productId: string) => void;
}

export const CartContext = createContext<ICartContext>({
  products: [],
  cartTotalPrice: 0,
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  addProductToCart: () => {},
  decreaseProductQuantity: () => {},
  increaseProductQuantity: () => {}
});

const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProdut[]>([]);

  const addProductToCart = (product: CartProdut) => {
    // se o produto já estiver no carrinho, apenas aumente a sua quantidade
    const productIsAlreadyOnCart = products.some(
      (cartProduct) => cartProduct.id === product.id,
    );

    if (productIsAlreadyOnCart) {
      setProducts((prev) =>
        prev.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + product.quantity,
            };
          }

          return cartProduct;
        }),
      );

      return;
    }

    // se não, adicione o produto na lista.
    setProducts((prev) => [...prev, product]);
  };

  const decreaseProductQuantity = (productID: string) => {
    // se a quantidade for 1, remova o produto do carrinho
    // se não, diminua a quantidade no carrinho
    setProducts((prev) =>
      prev.map((cartProduct) => {
        if (cartProduct.id === productID) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity - 1,
          };
        }
        return cartProduct;
      }).filter(cartProduct => cartProduct.quantity > 0 )
    );
  };

  const increaseProductQuantity = (productID: string) => {
    setProducts((prev) =>
      prev.map((cartProduct) => {
        if (cartProduct.id === productID) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
          };
        }
        return cartProduct;
      })
    );
  };

  return (
    <CartContext.Provider
      value={{
        products,
        addProductToCart,
        decreaseProductQuantity,
        increaseProductQuantity,
        cartTotalPrice: 0,
        cartBasePrice: 0,
        cartTotalDiscount: 0,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
