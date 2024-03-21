import { ComponentProps } from "react";

const SectionTitle = ({ children, ...props }: ComponentProps<"h3">) => {
  return (
    <h3 className="mb-3 font-bold uppercase" {...props}>
      {children}
    </h3>
  );
};

export default SectionTitle;
