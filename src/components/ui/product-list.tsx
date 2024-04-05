import ProductItem from "@/components/ui/product-item";
import { computeProductTotalPrice } from "@/helpers/products";
import { Product } from "@prisma/client";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex w-full gap-4 lg:gap-6 overflow-x-auto [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <div className="w-[156px] lg:w-[200px] lg:min-w-[200px]" key={product.id}>
          <ProductItem product={computeProductTotalPrice(product)} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
