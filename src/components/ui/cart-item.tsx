import { priceToRealMoney } from "@/helpers/products";
import { CartContext, CartProdut } from "@/providers/cart";
import Image from "next/image";
import { Button } from "./button";
import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from "lucide-react";
import { useContext } from "react";

interface CartItemProps {
  product: CartProdut;
}

const CartItem = ({ product }: CartItemProps) => {
  const {
    decreaseProductQuantity,
    increaseProductQuantity,
    removeProductFromCart,
  } = useContext(CartContext);

  const handleDecreaseProductQuantityClick = () => {
    decreaseProductQuantity(product.id);
  };

  const handleIncreaseProductQuantityClick = () => {
    increaseProductQuantity(product.id);
  };

  const handleRemoveProductClick = () => {
    removeProductFromCart(product.id);
  };

  return (
    <div className="flex items-center justify-between">
      <div className=" flex items-center gap-4">
        {/* PARTE DIREITA (FOTO E NOME) */}
        <div className="flex h-[77px] w-[77px] items-center justify-center rounded-lg bg-accent lg:h-[120px] lg:w-[120px]">
          <Image
            src={product.imageUrls[0]}
            width={0}
            height={0}
            sizes="100vw"
            alt={product.name}
            className="h-auto max-h-[70%] w-auto max-w-[80%]"
          />
        </div>
        <div className="flex flex-col gap-1 lg:gap-2">
          <p className="text-sm">{product.name}</p>
          <div className="flex items-center gap-2">
            <p className="text-sm font-bold lg:text-base">
              {priceToRealMoney(product.totalPrice)}
            </p>
            {product.discountPercentage > 0 && (
              <p className="text-xs  line-through opacity-75 lg:text-sm">
                {priceToRealMoney(Number(product.basePrice))}
              </p>
            )}
          </div>
          <div className="mt-1 flex items-center gap-2 lg:gap-3">
            <Button
              size="icon"
              variant="outline"
              className="h-8 w-8 lg:h-9 lg:w-9"
              onClick={handleDecreaseProductQuantityClick}
            >
              <ArrowLeftIcon className="h-4 w-4 lg:h-5 lg:w-5" />
            </Button>

            <span className="text-xs lg:text-sm">{product.quantity}</span>

            <Button
              size="icon"
              variant="outline"
              className="h-8 w-8 lg:h-9 lg:w-9"
              onClick={handleIncreaseProductQuantityClick}
            >
              <ArrowRightIcon className="h-4 w-4 lg:h-5 lg:w-5" />
            </Button>
          </div>
        </div>
      </div>
      <Button
        size="icon"
        variant="outline"
        className="h-8 w-8 lg:h-9 lg:w-9"
        onClick={handleRemoveProductClick}
      >
        <TrashIcon className="h-4 w-4 lg:h-5 lg:w-5" />
      </Button>
    </div>
  );
};

export default CartItem;
