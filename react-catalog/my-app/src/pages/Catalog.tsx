import { useEffect, useState } from "react";
import { type Product, readCatalog } from "../lib"
import { Link } from "react-router-dom";

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
      <div className="flex flex-wrap m-4">
          {items?.map((item) => (
              <ItemCard item={item} />
          ))}
      </div>
  );
}

type CardProps = {
  item: Product;
};

function ItemCard( { item }: CardProps) {
  return (
    <div className="basis-1/4 p-4">
      <Link to={`details/${item.productId}`}>
      <div>
        <img className="w-full max-h-20 object-cover" src={`${item.imageUrl}`} alt="" />
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
