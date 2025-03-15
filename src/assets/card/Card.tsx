import React from "react";

type TProductProps = {
  id: number;
  title: string;
  description: string;
  price: number;
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
      <p>{description}</p>
      <p>Цена: {price} руб.</p>
      <img src={images[0]} alt={title} />
    </div>
  );
};
