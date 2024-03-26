import { priceToRealMoney } from "@/helpers/products";
import { CartProdut } from "@/providers/cart";
import Image from "next/image";
import { Button } from "./button";
import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from "lucide-react";

interface CartItemProps {
  product: CartProdut;
}

const CartItem = ({ product }: CartItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className=" flex items-center gap-4">
        {/* PARTE DIREITA (FOTO E NOME) */}
        <div className="flex h-[77px] w-[77px] items-center justify-center rounded-lg bg-accent">
          <Image
            src={product.imageUrls[0]}
            width={0}
            height={0}
            sizes="100vw"
            alt={product.name}
            className="h-auto max-h-[70%] w-auto max-w-[80%]"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-sm">{product.name}</p>
          <div className="flex items-center gap-2">
            <p className="text-sm font-bold">
              {priceToRealMoney(product.totalPrice)}
            </p>
            {product.discountPercentage > 0 && (
              <p className="text-xs  line-through opacity-75">
                {priceToRealMoney(Number(product.basePrice))}
              </p>
            )}
          </div>
          <div className="mt-1 flex items-center gap-2">
            <Button size="icon" variant="outline" className="h-8 w-8">
              <ArrowLeftIcon size={16} />
            </Button>

            <span className="text-xs">{product.quantity}</span>

            <Button size="icon" variant="outline" className="h-8 w-8">
              <ArrowRightIcon size={16} />
            </Button>
          </div>
        </div>
      </div>
      <Button size="icon" variant="outline" className="w-8 h-8">
        <TrashIcon size={14} />
      </Button>
    </div>
  );
};

export default CartItem;
