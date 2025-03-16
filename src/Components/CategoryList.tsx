import React, { useEffect, useState } from "react";
import { Card } from "./Card/Card";
import styles from "./Card/Card.module.scss";

interface ICategory {
  id: number;
  name: string;
  image: string;
}

const CategoryList: React.FC = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Данные с сервера не получены");
        }
        return response.json();
      })
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className={styles.loading}>Загрузка категорий...</p>;
  if (error) return <p className={styles.error}>Ошибка: {error}</p>;
  if (categories.length === 0) return <p className={styles.noData}>Нет категорий</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Список категорий</h1>
      <div className={styles.productList}>
        {categories.map((category) => (
          <Card
            key={category.id}
            id={category.id}
            title={category.name}
            description={""} 
            price={0}     
            images={[category.image]} 
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
