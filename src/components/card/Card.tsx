import React from "react";
import "../AppStyle.scss"
type TProductProps = {
  id: number;
  title: string;
  description?: string;
  price?: number;
  images: string[];
};

export const Card: React.FC<TProductProps> = ({
  id,
  title,
  description,
  price,
  images,
}) => {
  return (
    <div key={id}>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      {price !== undefined && price > 0 && <p>Цена: {price}$</p>}
      <img className="cardImage" src={images[0]} alt={title} />
    </div>
  );
};
