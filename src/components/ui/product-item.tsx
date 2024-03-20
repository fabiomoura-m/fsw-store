import { ProductWithTotalPrice, priceToRealMoney } from "@/helpers/products";
import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDownIcon } from "lucide-react";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}
const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className=" flex max-w-[156px] flex-col gap-4">
      <div className="relative flex h-[170px] w-[156px] items-center justify-center rounded-lg bg-accent">
        <Image
          src="https://i.ibb.co/2PWV5Wz/01-mx-master-3s.png"
          width={0}
          height={0}
          alt={product.name}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{ objectFit: "contain" }}
        />
        {product.discountPercentage > 0 && (
          <Badge className="absolute left-2 top-2 px-2 py-[2px]">
            <ArrowDownIcon size={14} /> {product.discountPercentage}%
          </Badge>
        )}
      </div>

      <div>
        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
          {product.name}
        </p>

        <div className="flex items-center gap-1">
          {product.discountPercentage > 0 ? (
            <>
              <p className="font-semibold">
                {priceToRealMoney(product.totalPrice)}
              </p>
              <p className="text-xs line-through opacity-75 overflow-hidden text-ellipsis whitespace-nowrap">
                {priceToRealMoney(Number(product.basePrice))}
              </p>
            </>
          ) : (
            <p className="text-xs line-through opacity-75">
              {priceToRealMoney(Number(product.basePrice))}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
