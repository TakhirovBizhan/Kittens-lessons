import { useEffect, useState } from 'react';
import styles from './card.module.css';

interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
}

const Card = () => {
  const [products, setProducts] = useState<IProduct[]>([]);  
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Данные с сервера не получены');
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
          <div key={product.id} className={styles.productCard}>
            <h2 className={styles.productTitle}>{product.title}</h2>
            <p className={styles.productDescription}>{product.description}</p>
            <p className={styles.productPrice}>Цена: {product.price} руб.</p>
            <img className={styles.productImage} src={product.images[0]} alt={product.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;