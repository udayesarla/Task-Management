import React from 'react';
import { Package } from 'lucide-react';

// Simulated orders (in a real app, this would come from Supabase)
const orders = [
  {
    id: '1',
    date: '2024-02-20',
    status: 'completed',
    total: 159.98,
    items: [
      { name: 'Summer Floral Dress', quantity: 2, price: 79.99 }
    ]
  },
  {
    id: '2',
    date: '2024-02-18',
    status: 'processing',
    total: 199.99,
    items: [
      { name: 'Elegant Evening Gown', quantity: 1, price: 199.99 }
    ]
  }
];

export default function Orders() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Orders</h1>
      
      {orders.length === 0 ? (
        <div className="text-center py-16">
          <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-xl font-medium text-gray-900">No orders yet</h2>
          <p className="text-gray-500 mt-2">When you place an order, it will appear here.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Order #{order.id}
                  </h3>
                  <p className="text-gray-500">Placed on {order.date}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  order.status === 'completed'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between py-2">
                    <span className="text-gray-600">
                      {item.name} x {item.quantity}
                    </span>
                    <span className="font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
                
                <div className="border-t mt-4 pt-4">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${order.total.toFixed(2)}</span>
                  </div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}