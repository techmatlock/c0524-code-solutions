import { useEffect, useState } from "react";
import { type Product, readProduct } from '../lib';
import { useParams } from "react-router-dom";

export function Details() {
  const [item, setItem] = useState<Product>();

  const { productId } = useParams();
  console.log('productId', productId);

  useEffect(() => {
    async function loadItems() {
      try {
        const product = await readProduct(Number(productId));
        console.log(product);
        setItem(product);
      } catch (error) {
        console.log(error);
      }
    }
    loadItems();
  }, [])

  return <div></div>;
}
