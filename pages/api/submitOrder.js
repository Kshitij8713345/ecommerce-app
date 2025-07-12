import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    console.log("✅ Received request to /api/submitOrder");
    console.log("🔐 MongoDB URI:", uri ? "Found" : "Not Found");

    const { customer, items, total, date } = req.body;

    console.log("📦 Order data:", { customer, items, total, date });

    if (!customer || !items || !total || !date) {
      console.error("❌ Missing required order fields");
      return res.status(400).json({ message: "Missing order fields" });
    }

    await client.connect();
    console.log("✅ Connected to MongoDB");

    const db = client.db("apniidukan");
    const collection = db.collection("orders");

    const result = await collection.insertOne({ customer, items, total, date });

    console.log("✅ Order saved:", result.insertedId);
    res.status(200).json({ message: "Order saved successfully", id: result.insertedId });
  } catch (error) {
    console.error("❌ MongoDB Error:", error);
    res.status(500).json({ message: "Server error" });
  } finally {
    await client.close();
    console.log("🔒 MongoDB connection closed");
  }
}
