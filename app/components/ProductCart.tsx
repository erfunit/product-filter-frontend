import { Data } from "@/types/formdata";
import React from "react";

const ProductCart = ({
  name,
  price,
  tags,
  description,
}: Data): React.JSX.Element => {
  return (
    <div className="rounded-xl w-full p-3 text-gray-900 bg-white/70">
      <div className="w-full flex justify-between mb-5">
        <h3 className="text-xl font-semibold">{name}</h3>
        <span className="text-lg font-light text-gray-800/70">{price}$</span>
      </div>
      <p className="font-light text-black/70 mb-9">{description}</p>
      <div className="flex gap-3">
        {tags.map((t) => (
          <span className="py-1 px-2 rounded-full bg-gray-600/50 text-white/60 text-sm font-light">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProductCart;
