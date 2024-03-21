import { Category } from "@prisma/client";
import Image from "next/image";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex h-[150px] w-full items-center justify-center bg-category-item-gradient rounded-tl-lg rounded-tr-lg">
        <Image
          src='https://i.ibb.co/2PWV5Wz/01-mx-master-3s.png'
          alt={category.name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      <div className="bg-accent py-3 rounded-br-lg rounded-bl-lg flex items-center justify-center">
        <p className="font-bold text-sm"> {category.name}</p>
         
      </div>
    </div>
  );
};

export default CategoryItem;
