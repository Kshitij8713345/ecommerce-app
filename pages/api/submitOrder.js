import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const uri = process.env.MONGODB_URI;

  if (!uri) {
    return res.status(500).json({ message: 'MongoDB URI not found in env' });
  }

  try {
    const client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const db = client.db('apniidukan');
    const collection = db.collection('orders');

    const result = await collection.insertOne(req.body);
    await client.close();

    return res.status(200).json({ message: 'Order saved successfully', orderId: result.insertedId });
  } catch (error) {
    console.error('MongoDB error:', error);
    return res.status(500).json({ message: 'Database error', error: error.message });
  }
}
