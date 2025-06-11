// api/submitOrder.js

export default function handler(req, res) {
  if (req.method === 'POST') {
    const orderData = req.body;

    console.log("🛒 New Order Received:", orderData);

    // Normally you'd store this in a DB, for now just respond
    return res.status(200).json({ success: true, message: "Order received successfully", order: orderData });
  }

  res.setHeader("Allow", ["POST"]);
  res.status(405).json({ message: `Method ${req.method} Not Allowed` });
}
