import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/ui/product-item";
import { computeProductTotalPrice } from "@/helpers/products";
import { prismaClient } from "@/lib/prisma";
import { PercentIcon } from "lucide-react";

const DealsPage = async () => {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });
  return (
    <div className="lg:container mx-auto flex flex-col gap-8 px-5 py-8">
      <Badge variant="heading">
        <PercentIcon size={16} />
        Ofertas
      </Badge>

      <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
        {deals.map((product) => (
          <ProductItem
            key={product.id}
            product={computeProductTotalPrice(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default DealsPage;
