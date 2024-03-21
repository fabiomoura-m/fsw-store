import Image, { ImageProps } from "next/image";

const PromoBanner = ({ alt, ...props }: ImageProps) => {
  return (
    <Image
      height={0}
      width={0}
      className="mt-8 h-auto w-full"
      sizes="100vw"
      alt={alt}
      {...props}
    />
  );
};

export default PromoBanner;
