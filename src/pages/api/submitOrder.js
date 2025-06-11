import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // MONGODB_URI ko .env file me daalo

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const orderData = req.body;

    try {
      const client = new MongoClient(uri);
      await client.connect();
      const db = client.db('apniidukan'); // Tumhara DB naam
      const orders = db.collection('orders'); // Collection jaha store hoga

      await orders.insertOne(orderData);

      await client.close();

      res.status(200).json({ message: 'Order stored successfully!' });
    } catch (error) {
      console.error('MongoDB Error:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
