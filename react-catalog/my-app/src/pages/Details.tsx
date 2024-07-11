import { useEffect, useState } from 'react';
import { type Product, readProduct } from '../lib';
import { Link, useNavigate, useParams } from 'react-router-dom';

export function Details() {
  const [product, setProduct] = useState<Product>();
  const [error, setError] = useState<unknown>();

  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadItems() {
      try {
        const product = await readProduct(Number(productId));
        setProduct(product);
      } catch (error) {
        setError(error);
      }
    }
    loadItems();
  }, [productId]);

  if (error || !product) {
    return (
      <div className="flex flex-wrap justify-center items-center">
        <p className="flex justify-center w-full">{`Error: ${error}`}</p>
        <Link to="/">&lt; Back to Catalog</Link>
      </div>
    );
  }

  function handleClick(name: string) {
    alert(`Added ${name} to cart.`);
    navigate('/');
  }

  return (
    <>
      <div className="flex flex-wrap mx-6 p-8 border-2 border-gray-500 rounded-md">
        <div className="basis-full px-4 mb-4">
          <Link to="/">&lt; Back to Catalog</Link>
        </div>
        <div className="flex basis-full">
          <div className="flex">
            <div className="basis-half max-w-lg">
              <img
                className="w-full object-cover mb-4 px-4"
                src={`${product.imageUrl}`}
                alt={`A picture of ${product.name}`}
              />
            </div>
          </div>
          <div className="flex px-10">
            <div className="basis-half">
              <h1 className="text-3xl">{product.name}</h1>
              <h2 className="pt-4 text-xl">{product.price}</h2>
              <p className="pt-4">{product.shortDescription}</p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="basis-full px-4">
            <p>{product.longDescription}</p>
          </div>
        </div>
      </div>
      <div className="mx-6 px-12">
        <button
          onClick={() => handleClick(product.name)}
          className="p-2 rounded-md bg-gray-500">
          Add to Cart
        </button>
      </div>
    </>
  );
}
