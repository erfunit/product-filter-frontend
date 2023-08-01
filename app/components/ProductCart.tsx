import { productCart } from "@/theme/productCart";
import { Data } from "@/types/formdata";
import React from "react";

const ProductCart = ({
  name,
  price,
  tags,
  description,
}: Data): React.JSX.Element => {
  return (
    <div className={productCart.container}>
      <div className={productCart.head}>
        <h3 className={productCart.title}>{name}</h3>
        <span className={productCart.price}>{price}$</span>
      </div>
      <p className={productCart.description}>{description}</p>
      <div className="flex gap-3">
        {tags.map((t) => (
          <span className={productCart.tag}>{t}</span>
        ))}
      </div>
    </div>
  );
};

export default ProductCart;
