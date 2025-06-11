// pages/api/submitOrder.js
import { connectToDatabase } from "@/lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { db } = await connectToDatabase();
      const order = req.body;

      const result = await db.collection("orders").insertOne(order);
      res.status(200).json({ message: "Order saved", orderId: result.insertedId });
    } catch (error) {
      console.error("Error saving order:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
