const { v4: uuidv4 } = require('uuid');
let orders = require('../models/OrderModel');

// Get all orders
exports.getOrders = (req, res) => {
  res.json(orders);
};

// Create a new order
exports.createOrder = (req, res) => {
  const { customerName, product, quantity } = req.body;

  if (!customerName || !product || !quantity) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const newOrder = {
    id: uuidv4(),
    customerName,
    product,
    quantity,
    date: new Date().toISOString(),
  };

  orders.push(newOrder);
  res.status(201).json(newOrder);
};
