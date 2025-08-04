import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OrderForm from '../components/OrderForm';
import OrderList from '../components/OrderList';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/orders`)
      .then(res => setOrders(res.data))
      .catch(err => console.error("Error fetching orders:", err));
  }, []);

  const handleOrderAdded = (newOrder) => setOrders([...orders, newOrder]);

  return (
    <div>
      <h2>Orders</h2>
      <OrderForm onOrderAdded={handleOrderAdded} />
      <OrderList orders={orders} />
    </div>
  );
}

export default Orders;
