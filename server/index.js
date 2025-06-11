const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

// Order Schema
const orderSchema = new mongoose.Schema({
  customer: Object,
  items: Array,
  total: Number,
  date: String
});

const Order = mongoose.model('Order', orderSchema);

// API endpoint
app.post('/api/submitOrder', async (req, res) => {
  try {
    const newOrder = new Order(req.body);
    await newOrder.save();
    res.status(200).json({ message: 'Order saved successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Error saving order' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
