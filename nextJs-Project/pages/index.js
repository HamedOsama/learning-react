import { MongoClient } from 'mongodb'
import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    address: "some address 5, 12334 cairo",
    image: 'https://th.bing.com/th/id/R.2e256937c5832ae1dbb89e9df2ba073e?rik=71gwaRV6RgxItQ&pid=ImgRaw&r=0',
    description: 'This is first meetup!'
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    address: "some address 15, 12334 cairo",
    image: 'https://th.bing.com/th/id/R.2e256937c5832ae1dbb89e9df2ba073e?rik=71gwaRV6RgxItQ&pid=ImgRaw&r=0',
    description: 'This is second meetup!'
  }
]

function HomePage(props) {
  return (
    <MeetupList meetups={props.meetups} />
  )
}




const handler = async () => {
  const client = await MongoClient.connect('mongodb+srv://hamed:OMQ0DgFIIlMqQw0Q@cluster0.vk7otrn.mongodb.net/meetups?retryWrites=true&w=majority')
  const db = client.db();
  const meetupsCollections = db.collection('meetups');
  const result = await meetupsCollections.find().toArray()
  client.close();
  return result;
};

export async function getStaticProps() {
  let loadedData = await handler();
  const modifiedData = loadedData.map(el => {
    return {
      id: el._id.toString(),
      ...JSON.parse(el.data)
    }
  })
  // console.log(modifiedData);
  // loadedData = JSON.parse(loadedData);
  // data = JSON(loadedData.data)
  const data = modifiedData.map(el => {
    return {
      title: el.title,
      address: el.address,
      description: el.description,
      image: el.image,
      id: el.id,
    }
  })
  return {
    props: {
      meetups: data,
    },
    revalidate: 10
  }
}

// export function getServerSideProps(context) {
//   const req = context.req;
//   // console.log(req)
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     }
//   }
// }
export default HomePage