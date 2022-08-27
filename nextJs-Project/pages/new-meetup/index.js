import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment } from 'react';

import NewMeetupForm from '../../components/meetups/NewMeetupForm'

function index() {
  const router = useRouter();
  const addMeetupHandler = async meetupData => {
    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      Headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data)
    if (data.ok)
      router.push('/')
  }
  return (
    <Fragment>
      <Head>
        <title>Add a New Meetup</title>
        <meta
          name='description'
          content='Add your own meetups and create amazing networking opportunities.'
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  )
}

export default index