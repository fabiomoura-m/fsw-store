"use client";
import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
  name: string;
  imageUrls: string[];
}

const ProductImages = ({ imageUrls, name }: ProductImagesProps) => {
  const [currentImage, setCurrentImage] = useState(imageUrls[0]);

  const handleImageClick = (imageUrl: string) => {
    setCurrentImage(imageUrl);
  };

  return (
    <div className="flex flex-col lg:min-h-full lg:w-3/5">
      <div className="flex  h-[380px] w-full items-center justify-center bg-accent lg:h-full lg:rounded-lg">
        <Image
          src={currentImage}
          alt={name}
          height={0}
          width={0}
          className="h-auto max-h-[70%] w-auto max-w-[80%]"
          sizes="100vw"
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="mt-8 grid grid-cols-4 gap-4 px-5 lg:px-0 lg:gap-6">
        {imageUrls.map((imageUrl) => (
          <button
            key={imageUrl}
            className={`flex h-[100px] lg:h-[140px] items-center justify-center rounded-lg bg-accent ${imageUrl === currentImage && "border-2 border-solid border-primary"}`}
            onClick={() => handleImageClick(imageUrl)}
          >
            <Image
              src={imageUrl}
              width={0}
              height={0}
              sizes="100vw"
              alt={name}
              className="h-auto max-h-[70%] w-auto max-w-[80%]"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
