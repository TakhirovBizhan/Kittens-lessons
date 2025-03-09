import { useEffect, useState } from 'react';

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
          throw new Error('Данные с сервера не палучит');
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

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;
  if (products.length === 0) return <p>Нет данных</p>;

  return (
    <div>
      <h1>Список товаров</h1>
      <div className="product_list">
        {products.map((product) => (
          <div key={product.id} className="product_card">
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Цена: {product.price} руб.</p>
            <img src={product.images[0]} alt={product.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
