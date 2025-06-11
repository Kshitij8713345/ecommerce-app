import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("apniidukan");
    const orders = db.collection("orders");

    const order = req.body;
    await orders.insertOne(order);

    res.status(200).json({ message: "Order saved successfully" });
  } catch (error) {
    console.error("Error saving order:", error);
    res.status(500).json({ message: "Failed to save order" });
  } finally {
    await client.close();
  }
}
