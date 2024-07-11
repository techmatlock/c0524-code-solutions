import { useEffect, useState } from 'react';
import { type Product, readCatalog } from '../lib';
import { Link } from 'react-router-dom';

export function Catalog() {
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    async function loadItems() {
      try {
        const items = await readCatalog();
        setItems(items);
      } catch (error) {
        console.log(error);
      }
    }
    loadItems();
  }, []);

  return (
    <>
      <div className="flex m-4 p-4">
        <div className="basis-full">
          <h1 className="text-3xl mb-4">Catalog</h1>
          <div className="border-2 border-gray-500"></div>
        </div>
      </div>
      <div className="flex flex-wrap m-4">
        {items?.map((item) => (
          <ItemCard key={item.productId} item={item} />
        ))}
      </div>
    </>
  );
}

type CardProps = {
  item: Product;
};

function ItemCard({ item }: CardProps) {
  return (
    <div className="basis-1/4 p-8 border-2">
      <Link to={`details/${item.productId}`}>
        <div className="max-w-40">
          <img className="w-full" src={`${item.imageUrl}`} alt="" />
        </div>
        <div className="card-content">
          <h2>{item.name}</h2>
          <h3>{item.price}</h3>
          <p>{item.shortDescription}</p>
        </div>
      </Link>
    </div>
  );
}
