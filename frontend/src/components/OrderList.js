import React from 'react';

function OrderList({ orders }) {
  return (
    <ul>
      {orders.map((order) => (
        <li key={order.id}>
          {order.customerName} ordered {order.quantity} × {order.product} on {new Date(order.date).toLocaleString()}
        </li>
      ))}
    </ul>
  );
}

export default OrderList;
