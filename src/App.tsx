import "./App.css";
import { useEffect, useState } from "react";

export type TData = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  category: TCategory;
  creationAt: string;
  updatedAt: string;
};

export type TCategory = {
  id: number;
  name: string;
  image: string;
  creationAt: Date;
  updatedAt: Date;
};

function App() {
  const [buttonState, setButtonState] = useState<number>(0);
  const [products, setProducts] = useState<TData[] | null>(null);

  useEffect(() => {
    const getItems = async () => {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      if (response.ok) {
        const json = await response.json();
        setProducts(json);
      } else {
        console.error("Ошибка HTTP: " + response.status);
      }
    };

    getItems();
  }, []);

  console.log(products);

  return (
    <>
      <div className="card">
        {products?.map((product) => (
          <div key = {product.id}>
            <h3>{product.title}</h3>
            <img src={product.images[0]} alt={product.title} className="cardImage"></img>
            <p>Description: </p>
            <p>{product.description}</p>
            <p style={{fontSize: 14}}>Price: {product.price}$</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
