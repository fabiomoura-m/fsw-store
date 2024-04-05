import { ProductWithTotalPrice, priceToRealMoney } from "@/helpers/products";
import Image from "next/image";
import Link from "next/link";
import DiscountBadge from "./discount-badge";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}
const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Link href={`/product/${product.slug}`}>
      <div className=" flex min-w-[156px] flex-col gap-4">
        <div className="relative flex w-full items-center justify-center rounded-lg bg-accent aspect-square">
          <Image
            src={product.imageUrls[0]}
            width={0}
            height={0}
            alt={product.name}
            sizes="100vw"
            className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
          />
          {product.discountPercentage > 0 && (
            <DiscountBadge className="absolute left-2 top-2">
              {product.discountPercentage}
            </DiscountBadge>
          )}
        </div>

        <div>
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm">
            {product.name}
          </p>

          <div className="flex items-center gap-1">
            {product.discountPercentage > 0 ? (
              <>
                <p className="font-semibold lg:text-lg">
                  {priceToRealMoney(product.totalPrice)}
                </p>
                <p className="overflow-hidden text-ellipsis whitespace-nowrap text-xs line-through opacity-75 lg:text-sm">
                  {priceToRealMoney(Number(product.basePrice))}
                </p>
              </>
            ) : (
              <p className="font-semibold">
                {priceToRealMoney(Number(product.basePrice))}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
