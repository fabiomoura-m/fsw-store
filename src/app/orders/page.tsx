import { Badge } from "@/components/ui/badge";
import { authOptions } from "@/lib/auth";
import { prismaClient } from "@/lib/prisma";
import { PackageSearchIcon } from "lucide-react";
import { getServerSession } from "next-auth";
import OrderItem from "./components/order-item";

async function OrderPage() {
  const user = getServerSession(authOptions);

  if (!user) {
    return <p>Access Denied</p>;
  }

  const orders = await prismaClient.order.findMany({
    where: {
      userId: (user as any).id,
    },
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  });

  return (
    <div className="flex flex-col gap-8 px-5 pb-14 pt-8">
      <Badge
        className="w-fit gap-1 border-2 border-primary px-3 py-[0.375rem] text-base uppercase"
        variant="outline"
      >
        <PackageSearchIcon size={16} />
        Meus Pedidos
      </Badge>

      <div className="flex flex-col gap-5">
        {orders.map((order) => (
          <OrderItem order={order} key={order.id} />
        ))}
      </div>
    </div>
  );
}

export default OrderPage;