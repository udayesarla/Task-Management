import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=2000"
          alt="Fashion Banner"
          className="w-full h-[600px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>
      
      <div className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">Welcome to</span>
            <span className="block text-pink-400">Rabbit Boutique</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Discover the latest fashion trends and express your unique style
          </p>
          <div className="mt-10">
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-500 hover:bg-pink-600 md:text-lg"
            >
              Shop Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="relative bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group relative">
              <img
                src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=600"
                alt="Summer Collection"
                className="w-full h-96 object-cover rounded-lg"
              />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Summer Collection</h3>
            </div>
            <div className="group relative">
              <img
                src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=600"
                alt="Accessories"
                className="w-full h-96 object-cover rounded-lg"
              />
              <h3 className="mt-4 text-lg font-medium text-gray-900">Accessories</h3>
            </div>
            <div className="group relative">
              <img
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=600"
                alt="New Arrivals"
                className="w-full h-96 object-cover rounded-lg"
              />
              <h3 className="mt-4 text-lg font-medium text-gray-900">New Arrivals</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}