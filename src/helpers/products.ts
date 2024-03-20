import { Product } from "@prisma/client";

export interface ProductWithTotalPrice extends Product {
  totalPrice: number;
}

export const computeProductTotalPrice = (
  product: Product,
): ProductWithTotalPrice => {
  if (product.discountPercentage === 0) {
    return {
      ...product,
      totalPrice: Number(product.basePrice),
    };
  }

  const discountPrice =
    Number(product.basePrice) * (product.discountPercentage / 100);

  const totalPrice = Number(product.basePrice) - discountPrice;

  return {
    ...product,
    totalPrice,
  };
};

export const priceToRealMoney = (price: number) => {
  return price.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
};
