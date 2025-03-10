import { useEffect, useState } from "react";
import styles from "./card.module.css";
import { Card } from "./Card/Card";

interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
}

const CardList = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Данные с сервера не получены");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className={styles.loading}>Загрузка...</p>;
  if (error) return <p className={styles.error}>Ошибка: {error}</p>;
  if (products.length === 0) return <p className={styles.noData}>Нет данных</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Список товаров</h1>
      <div className={styles.productList}>
        {products.map((product) => (
          <Card
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            images={product.images}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
