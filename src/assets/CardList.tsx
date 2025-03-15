import { Card } from "./card/Card.tsx"
import { useEffect, useState } from "react";

type TData = {
    id: number;
    title: string;
    description: string;
    price: number;
    images: string[];
    category: TCategory;
};

type TCategory = {
    id: number;
    name: string;
    image: string;
    creationAt: Date;
    updatedAt: Date;
};


const CardList = () => {
    
 const [products, setProducts] = useState<TData[]>([]);
 const [categories, setCategories] = useState<TCategory[]>([]);

 useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      if (response.ok) {
        const json = await response.json();
        setProducts(json);
      } else {
        console.error("Ошибка HTTP: " + response.status);
      }
    };

    const getCategories = async () => {
      const response = await fetch("https://api.escuelajs.co/api/v1/categories");
      if (response.ok) {
        const json = await response.json();
        setCategories(json);
      } else {
        console.error("Ошибка HTTP: " + response.status);
      }
    };

    getProducts();
    getCategories();
  }, []);

  console.log(products);
  console.log(categories);

return (
{products.map((product: TData) => (
    <Card
      id = {product.id}
      title={product.title}
      description={product.description}
      price={product.price}
      images={product.images}
    />
  ))}
);
};

export default CardList;

