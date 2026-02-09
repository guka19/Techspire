import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, ChevronLeft, ShieldCheck, Truck, Cpu } from 'lucide-react';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <div className="py-24 text-center">Product not found.</div>;

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Link to="/shop" className="inline-flex items-center text-sm text-gray-500 hover:text-black mb-8">
          <ChevronLeft className="mr-1 h-4 w-4" /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl bg-gray-50 border border-gray-100">
            <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
          </div>

          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-black">{product.name}</h1>
            <p className="mt-2 text-lg font-medium text-gray-400 uppercase tracking-widest">{product.category}</p>
            <p className="mt-4 text-3xl font-black text-black">${product.price}</p>
            <p className="mt-8 text-base text-gray-600 leading-relaxed">{product.description}</p>

            <div className="mt-8 grid grid-cols-3 gap-4 border-y border-gray-100 py-6">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="text-center">
                  <span className="text-[10px] uppercase font-bold text-gray-400">{key}</span>
                  <p className="text-xs font-bold">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex items-center border border-gray-200 rounded-full px-4 py-2">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-2 text-xl">-</button>
                <span className="px-4 font-bold">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-2 text-xl">+</button>
              </div>
              <button className="grow flex items-center justify-center rounded-full bg-black py-4 text-white font-bold hover:bg-gray-800 transition-all">
                Add to Cart <ShoppingBag className="ml-2 h-5 w-5" />
              </button>
            </div>

            <div className="mt-8 space-y-3">
              <div className="flex items-center text-sm text-gray-500">
                <Truck className="mr-3 h-5 w-5 text-black" />
                <span>Free express shipping for Techspire orders</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <ShieldCheck className="mr-3 h-5 w-5 text-black" />
                <span>2-Year limited warranty included</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;