import React from "react";
import styles from "./Card.module.scss";

export interface ICardProps {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
}

export const Card: React.FC<ICardProps> = ({title, description, price, images }) => {
  return (
    <div className={styles.card}>
      {images && images.length > 0 && (
        <img src={images[0]} alt={title} className={styles.cardImage} />
      )}
      <div className={styles.cardContent}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardDescription}>{description}</p>
        <p className={styles.cardPrice}>${price}</p>
      </div>
    </div>
  );
};
