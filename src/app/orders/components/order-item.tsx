import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Prisma } from "@prisma/client";
import { format } from "date-fns";
import OrderProductItem from "./order-product-item";
import { Separator } from "@/components/ui/separator";
import { computeProductTotalPrice, priceToRealMoney } from "@/helpers/products";
import { useMemo } from "react";
import { getOrderStatus } from "../helpers/status";

interface OrderItemProps {
  order: Prisma.OrderGetPayload<{
    include: {
      orderProducts: {
        include: {
          product: true;
        };
      };
    };
  }>;
}

const OrderItem = ({ order }: OrderItemProps) => {
  const subTotal = useMemo(() => {
    return order.orderProducts.reduce((acc, orderProduct) => {
      return (
        acc + Number(orderProduct.product.basePrice) * orderProduct.quantity
      );
    }, 0);
  }, [order.orderProducts]);

  const total = useMemo(() => {
    return order.orderProducts.reduce((acc, orderProduct) => {
      const productWithTotalPrice = computeProductTotalPrice(
        orderProduct.product,
      );
      return acc + productWithTotalPrice.totalPrice * orderProduct.quantity;
    }, 0);
  }, [order.orderProducts]);

  const totalDiscount = subTotal - total;

  return (
    <Card className="px-5">
      <Accordion type="single" collapsible>
        <AccordionItem value={order.id}>
          <AccordionTrigger>
            <div className="flex w-full text-left">
              <div className="flex flex-1 flex-col gap-1 text-left">
                <p className="text-sm font-bold uppercase">
                  Pedido com {order.orderProducts.length} produto(s)
                </p>
                <p className="text-sm opacity-60">
                  Feito em {format(order.createdAt, "dd/MM/yy 'às' HH:mm")}
                </p>
              </div>
              <div className="hidden flex-1 font-bold lg:block">
                <p className="text-xs lg:text-sm">Status</p>
                <p className="text-xs text-[#8162FF] lg:text-sm">
                  {getOrderStatus(order.status)}
                </p>
              </div>

              <div className="hidden flex-1 lg:block">
                <p className="text-xs font-bold lg:text-sm ">Data</p>
                <p className="text-xs opacity-60 lg:text-sm">
                  {format(order.createdAt, "d/MM/y")}
                </p>
              </div>

              <div className="hidden flex-1 lg:block">
                <p className="text-xs font-bold lg:text-sm">Pagamento</p>
                <p className="text-xs opacity-60 lg:text-sm">Cartão</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between lg:hidden">
                <div className="font-bold">
                  <p className="uppercase">Status</p>
                  <p className="text-[#8162ff]">
                    {getOrderStatus(order.status)}
                  </p>
                </div>
                <div>
                  <p className="font-bold uppercase">Data</p>
                  <p className="opacity-60">
                    {format(order.createdAt, "dd/MM/yy")}
                  </p>
                </div>
                <div>
                  <p className="font-bold uppercase">Pagamento</p>
                  <p className="opacity-60">Cartão</p>
                </div>
              </div>
              {order.orderProducts.map((orderProduct) => (
                <OrderProductItem
                  orderProduct={orderProduct}
                  key={orderProduct.id}
                />
              ))}

              <div className="flex flex-col gap-3 text-xs lg:text-sm">
                <Separator />
                <div className="flex items-center justify-between ">
                  <p>Subtotal</p>
                  <p>{priceToRealMoney(subTotal)}</p>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <p>Entrega</p>
                  <p className="uppercase">Grátis</p>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <p>Descontos</p>
                  <p>- {priceToRealMoney(totalDiscount)}</p>
                </div>
                <Separator />
                <div className="flex items-center justify-between font-bold lg:text-base">
                  <p>Total</p>
                  <p>{priceToRealMoney(total)}</p>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default OrderItem;
