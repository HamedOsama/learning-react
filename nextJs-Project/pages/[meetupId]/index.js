import { ObjectID } from 'bson';
import { MongoClient } from 'mongodb'
import Head from 'next/head';
import { Fragment } from 'react';
// import { Fragment } from "react"

import MeetupDetail from "../../components/meetups/MeetupDetail"

function MeetupDetails({ meetupData }) {
  // console.log(props)
  return (
    <Fragment>
      <Head>
        <title>{meetupData.title}</title>
        <meta
          name='description'
          content={meetupData.description}
        />
      </Head>
      <MeetupDetail
        title={meetupData.title}
        description={meetupData.description}
        address={meetupData.address}
        image={meetupData.image}
      />
    </Fragment>
  )
}


const getMeetupHandler = async (ids, id) => {
  const client = await MongoClient.connect('mongodb+srv://hamed:OMQ0DgFIIlMqQw0Q@cluster0.vk7otrn.mongodb.net/meetups?retryWrites=true&w=majority')
  const db = client.db();
  const meetupsCollections = db.collection('meetups');
  let result;
  if (ids)
    result = await meetupsCollections.find({}, { id: 1 }).toArray()
  else {
    result = await meetupsCollections.findOne({ _id: ObjectID(id) })
  }
  client.close();
  return result;
};

export async function getStaticPaths() {
  const ids = await getMeetupHandler(true);
  return {
    fallback: 'blocking',
    paths: ids.map(el => {
      return {
        params: {
          meetupId: el._id.toString()
        }
      }
    })
    // [
    //   {
    //     params: {
    //       meetupId: 'm1'
    //     }
    //   },
    //   {
    //     params: {
    //       meetupId: 'm1'
    //     }
    //   }
    // ]
  }
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId
  const meetup = await getMeetupHandler(false, meetupId)
  const meetupData = JSON.parse(meetup.data)
  const modifiedData = {
    id: meetup._id.toString(),
    ...meetupData
  }
  return {
    props: {
      meetupData: { ...modifiedData }
    }
  }
}

export default MeetupDetails