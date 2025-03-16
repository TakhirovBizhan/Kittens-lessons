import { Card } from "./Card.tsx"
import { useEffect, useState } from "react";
import { useTheme } from "../theme/ThemeContext.tsx";
import "../AppStyle.scss"

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
 const { theme, toggleTheme } = useTheme();

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
  <div className="App">
  
  <div className="header-container">
  <button onClick={toggleTheme}>
        {theme === "light" ? "Dark" : "Light"}
  </button>
  </div>

  <div className="content-container">
  <div className="products">
  <h2>Products</h2>
  {products.map((product) => (
      <div className="cardItem">
      <div className="card">
    <Card
      id = {product.id}
      title={product.title}
      description={product.description}
      price={product.price}
      images={product.images} 
      
    />
        </div>
    </div>
  ))}
  </div>

  <div className="categories">
  <h2>Categories</h2>
    {categories.map((category) => (
      <div className="cardItem" key={category.id}>
        <Card
          id={category.id}
          title={category.name}
          images={[category.image]}
        />
      </div>
    ))}
    </div>
  </div>
</div>
);
};

export default CardList;

