import { useEffect, useState } from 'react';
import { type Product } from '../lib';
import { Link } from 'react-router-dom';
import { toDollars } from '../lib';

export function Catalog() {
  const [items, setItems] = useState<Products[]>([]);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function loadItems() {
      try {
        const response = await fetch('/api/products');
        if (!response.ok)
          throw new Error(`Response status: ${response.status}`);
        const products = (await response.json()) as Product[];
        setItems(products);
      } catch (error) {
        setError(error);
      }
    }
    loadItems();
  }, []);

  if (error || !items) {
    return (
      <div>
        Error! {error instanceof Error ? error.message : 'Unknown error'}
      </div>
    );
  }

  return (
    <>
      <div className="flex m-4 p-4">
        <div className="basis-full">
          <h1 className="text-3xl mb-4">Catalog</h1>
          <div className="border-2 bg-gray-400"></div>
        </div>
      </div>
      <div className="flex items-center flex-wrap m-4">
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
    <div className="basis-1/4 pt-4 m-2 shadow-md">
      <Link to={`details/${item.productId}`}>
        <div className=" min-h-56 max-h-56 overflow-y-hidden flex items-center justify-center">
          <img
            className="w-full object-cover"
            src={`${item.imageUrl}`}
            alt=""
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl">{item.name}</h2>
          <p className="text-gray-400">{toDollars(item.price)}</p>
          <p>{item.shortDescription}</p>
        </div>
      </Link>
    </div>
  );
}
