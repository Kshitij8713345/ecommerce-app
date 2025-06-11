export default function handler(req, res) {
  if (req.method === 'POST') {
    const orderData = req.body;

    console.log('Received order:', orderData); // You’ll see this in Vercel logs

    res.status(200).json({ message: 'Order received successfully' });
  } else {
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
