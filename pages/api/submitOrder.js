import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { customer, items, total, date } = req.body;

    await client.connect();
    const db = client.db("apniidukan");
    const collection = db.collection("orders");

    const result = await collection.insertOne({ customer, items, total, date });

    res.status(200).json({ message: "Order saved successfully", id: result.insertedId });
  } catch (error) {
    console.error("MongoDB Error:", error);
    res.status(500).json({ message: "Server error" });
  } finally {
    await client.close();
  }
}
