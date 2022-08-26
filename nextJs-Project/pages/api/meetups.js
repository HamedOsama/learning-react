// import { MongoClient } from 'mongodb'

// const handler = async (req, res) => {
//   if (req.method === 'GET') {
//     const client = await MongoClient.connect('mongodb+srv://hamed:OMQ0DgFIIlMqQw0Q@cluster0.vk7otrn.mongodb.net/meetups?retryWrites=true&w=majority')
//     const db = client.db();
//     const meetupsCollections = db.collection('meetups');
//     const result = await meetupsCollections.find().toArray()
//     console.log(result);
//     client.close();
//     res.status(200).json({
//       message: 'data retrieved successfully',
//       ok: true,
//       data: result
//     })
//   }
// };

// export default handler;