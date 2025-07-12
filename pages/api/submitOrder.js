// pages/api/submitOrder.js

import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable in Vercel.");
}

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, {
    serverApi: {
      version: "1",
      strict: true,
      deprecationErrors: true,
    },
  });
  global._mongoClientPromise = client.connect();
}
clientPromise = global._mongoClientPromise;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { customer, items, total, date } = req.body;

    if (!customer || !items || !total || !date) {
      return res.status(400).json({ message: "Missing required order fields" });
    }

    const client = await clientPromise;
    const db = client.db("apniidukan");
    const collection = db.collection("orders");

    const result = await collection.insertOne({ customer, items, total, date });

    return res.status(200).json({
      message: "Order saved successfully",
      id: result.insertedId,
    });
  } catch (err) {
    console.error("❌ MongoDB Submit Order Error:", err);
    return res.status(500).json({ message: "Server error" });
  }
}
