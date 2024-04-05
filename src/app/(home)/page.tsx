import Categories from "./components/categories";
import { prismaClient } from "@/lib/prisma";
import ProductList from "../../components/ui/product-list";
import SectionTitle from "../../components/ui/section-title";
import PromoBanner from "./components/promo-banner";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards",
      },
    },
  });

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses",
      },
    },
  });

  return (
    <>
      <div className="mx-auto max-w-[1920px]">
        <Link href="/deals">
          <Image
            src="/deals-banner.png"
            className="hidden h-auto w-full lg:block"
            width={0}
            height={0}
            sizes="100vw"
            alt="Até 55% de desconto esse mês!"
          />
        </Link>
      </div>
      <div className="lg:container px-5 flex flex-col gap-8 py-8 lg:pt-0 lg:gap-10">
        <Link href="/deals">
          <PromoBanner
            src="/banner-home-01.png"
            alt="Até 55% de desconto esse mês."
            className="lg:hidden"
          />
        </Link>
        <div className="lg:mt-2">
          <Categories />
        </div>

        <div className="flex flex-col gap-3 lg:gap-5">
          <SectionTitle>Ofertas</SectionTitle>
          <ProductList products={deals} />
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-5">
          <Link href="/category/mouses" className="flex flex-1">
            <PromoBanner
              src="/banner-home-02.png"
              alt="Até 55% de desconto em mouses!"
              className="flex-1 lg:w-0"
            />
          </Link>
          <Link href="/category/headphones" className="flex flex-1">
            <PromoBanner
              src="/banner-home-03.png"
              alt="Até 55% de desconto em fones!"
              className="hidden flex-1 lg:block lg:w-0"
            />
          </Link>
        </div>

        <div className="flex flex-col gap-3 lg:gap-5">
          <SectionTitle>Teclados</SectionTitle>
          <ProductList products={keyboards} />
        </div>

        <Link href="/category/headphones" className="lg:hidden flex flex-1">
          <PromoBanner
            src="/banner-home-03.png"
            alt="Até 20% de desconto em fones."
          />
        </Link>
        <Link href="/catalog" className="hidden lg:block">
          <PromoBanner
            src="/free-shipping-banner.png"
            alt="Frete grátis para todo o brasil"
          />
        </Link>

        <div className="flex flex-col gap-3 lg:gap-5">
          <SectionTitle>Mouses</SectionTitle>
          <ProductList products={mouses} />
        </div>
      </div>
    </>
  );
}
