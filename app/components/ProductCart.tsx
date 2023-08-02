import { productCartStyle } from "@/theme/productCart";
import { Data } from "@/types/formdata";
import React from "react";

const ProductCart = ({
  name,
  price,
  tags,
  description,
}: Data): React.JSX.Element => {
  return (
    <div className={productCartStyle.container}>
      <div className={productCartStyle.head}>
        <h3 className={productCartStyle.title}>{name}</h3>
        <span className={productCartStyle.price}>{price}$</span>
      </div>
      <p className={productCartStyle.description}>{description}</p>
      <div className="flex gap-2 flex-wrap">
        {tags.map((t) => (
          <span className={productCartStyle.tag}>{t}</span>
        ))}
      </div>
    </div>
  );
};

export default ProductCart;
