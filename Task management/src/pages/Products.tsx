import React, { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useStore } from '../store/useStore';
import { Product } from '../types';
import { ShoppingCart } from 'lucide-react';

// Simulated product data (in a real app, this would come from Supabase)
const products: Product[] = [
  {
    id: '1',
    name: 'Summer Floral Dress',
    description: 'Light and breezy floral dress perfect for summer days',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=500',
    category: 'Dresses'
  },
  {
    id: '2',
    name: 'Elegant Evening Gown',
    description: 'Stunning evening gown for special occasions',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=500',
    category: 'Dresses'
  },
  {
    id: '3',
    name: 'Casual Denim Jacket',
    description: 'Classic denim jacket for everyday style',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1527016021513-b09758b777bc?auto=format&fit=crop&w=500',
    category: 'Outerwear'
  },
  {
    id: '4',
    name: 'Boho Maxi Skirt',
    description: 'Flowing maxi skirt with bohemian print',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=500',
    category: 'Skirts'
  }
];

export default function Products() {
  const addToCart = useStore((state) => state.addToCart);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...new Set(products.map(product => product.category))];
  
  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Collection</h1>
      
      <div className="flex space-x-4 mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category
                ? 'bg-pink-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
              <p className="mt-1 text-gray-500">{product.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="flex items-center px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}