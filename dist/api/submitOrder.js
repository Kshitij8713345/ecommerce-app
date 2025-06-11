// api/submitOrder.js

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const orderData = req.body;
    console.log("New Order Received:", orderData);

    // ✅ In real project, yahan DB ya email integration hota
    res.status(200).json({ message: 'Order received successfully!', orderData });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
