import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";
import { ShapesIcon } from "lucide-react";
import CategoryItem from "./components/category-item";

const CatalogPage = async () => {
  const categories = await prismaClient.category.findMany({});

  return (
    <div className="container mx-auto flex flex-col gap-8 py-8 lg:gap-10 lg:py-10">
      <Badge variant="heading">
        <ShapesIcon size={16} />
        Catálogo
      </Badge>
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-3 lg:gap-10">
        {categories.map((category) => (
          <CategoryItem category={category} key={category.id} />
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
