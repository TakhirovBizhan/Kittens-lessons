import React from "react";
import styles from "./Card.module.css";

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
    <div key={id} className={styles.productCard}>
      <h2 className={styles.productTitle}>{title}</h2>
      <p className={styles.productDescription}>{description}</p>
      <p className={styles.productPrice}>Цена: {price} руб.</p>
      <img className={styles.productImage} src={images[0]} alt={title} />
    </div>
  );
};
