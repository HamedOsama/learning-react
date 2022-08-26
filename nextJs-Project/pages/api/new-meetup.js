import { MongoClient } from 'mongodb'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const data = req.body;
    // const { title, image, address, description } = data;
    console.log(data);
    const client = await MongoClient.connect('mongodb+srv://hamed:OMQ0DgFIIlMqQw0Q@cluster0.vk7otrn.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db();
    const meetupsCollections = db.collection('meetups');
    const result = await meetupsCollections.insertOne({ data })
    console.log(result);
    client.close();
    res.status(201).json({
      message: 'meetup added',
      ok: true,
    })
  }
};

export default handler;