// // /api/submitOrder.js
// import { MongoClient } from 'mongodb';

// const uri = process.env.MONGODB_URI;

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Only POST requests allowed' });
//   }

//   if (!uri) {
//     return res.status(500).json({ message: 'MongoDB URI not set in environment variables' });
//   }

//   try {
//     const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//     const db = client.db('apnidukan'); // You can name it what you want
//     const collection = db.collection('orders');

//     await collection.insertOne(req.body);

//     client.close();
//     res.status(200).json({ message: '✅ Order stored successfully!' });
//   } catch (error) {
//     console.error("MongoDB Insert Error:", error);
//     res.status(500).json({ message: 'MongoDB insert failed ❌', error });
//   }
// }
