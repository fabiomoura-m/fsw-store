"use server";

import { prismaClient } from "@/lib/prisma";
import { CartProdut } from "@/providers/cart";

export const createOrder = async (cartProducts: CartProdut[], userId: string) => {
  const order = await prismaClient.order.create({
    data: {
      userId: userId,
      status: 'WAITING_FOR_PAYMENT',
      orderProducts: {
        createMany: {
          data: cartProducts.map((product) => ({
            basePrice: product.basePrice,
            discountPercentage: product.discountPercentage,
            productId: product.id,
            quantity: product.quantity,
          })),
        },
      },
    },
  });

  return order;
};
