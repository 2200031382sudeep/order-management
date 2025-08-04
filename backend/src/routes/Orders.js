const express = require("express");
const { v4: uuidv4 } = require("uuid");

const router = express.Router();

// Temporary in-memory DB
let orders = [];

// Get all orders
router.get("/", (req, res) => {
  res.json(orders);
});

// Create a new order
router.post("/", (req, res) => {
  const { customerName, product, quantity } = req.body;
  const newOrder = { id: uuidv4(), customerName, product, quantity, status: "Pending" };
  orders.push(newOrder);
  res.status(201).json(newOrder);
});

// Update order status
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const order = orders.find((o) => o.id === id);
  if (!order) return res.status(404).json({ message: "Order not found" });

  order.status = status || order.status;
  res.json(order);
});

module.exports = router;
