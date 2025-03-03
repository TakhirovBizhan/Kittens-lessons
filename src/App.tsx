import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setButtonState(buttonState + 1)}>
          {buttonState}
        </button>
        {products?.map((product) => (
          <>
            <p>HEllo</p>
            <p key={product.id}>{product.description}</p>
          </>
        ))}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
