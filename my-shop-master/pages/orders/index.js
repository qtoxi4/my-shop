import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/order').then((response) => {
      setOrders(response.data);
    });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Замовлення</h1>
      {orders.length > 0 &&
        orders.map((order, index) => (
          <div key={order._id} className="bg-white rounded-lg shadow-md p-4 mb-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h2 className="text-xl font-semibold mb-2">Замовлення #{index + 1}</h2>
                <h3 className="text-gray-600 mb-2">Id: {order._id}</h3>
                <h3 className="text-md font-medium mb-2">Від: {order.name}</h3>
                <h3 className="text-md font-medium mb-2">Email: {order.email}</h3>
              </div>
              <div>
                <h3 className="text-md font-medium mb-2">Країна: {order.country}</h3>
                <h3 className="text-md font-medium mb-2">Адреса: {order.address}</h3>
                <h3 className="text-md font-medium mb-2">Місто: {order.city}</h3>
                <h3 className="text-gray-600 mb-2">Індекс: {order.zip}</h3>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full table-auto border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4">Товар</th>
                    <th className="py-2 px-4">Кількість</th>
                    <th className="py-2 px-4">Ціна</th>
                  </tr>
                </thead>
                <tbody>
                  {order.line_items &&
                    order.line_items.map((product) => (
                      <tr key={product.id}>
                        <td className="py-2 px-4">{product.price_data?.product_data?.name}</td>
                        <td className="py-2 px-4">{product.quantity}</td>
                        <td className="py-2 px-4">{(product.price_data?.unit_amount / 100).toFixed(2)} UAH</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Orders;
