import React, { useState } from 'react';
import axios from 'axios';

function OrderForm({ onOrderAdded }) {
  const [form, setForm] = useState({ customerName: '', product: '', quantity: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/orders`, form);
      onOrderAdded(res.data);
      setForm({ customerName: '', product: '', quantity: '' });
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="customerName" placeholder="Customer Name" value={form.customerName} onChange={handleChange} required />
      <input name="product" placeholder="Product" value={form.product} onChange={handleChange} required />
      <input type="number" name="quantity" placeholder="Quantity" value={form.quantity} onChange={handleChange} required />
      <button type="submit">Add Order</button>
    </form>
  );
}

export default OrderForm;
