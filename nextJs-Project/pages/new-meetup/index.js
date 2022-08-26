import { useRouter } from 'next/router';

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
    <NewMeetupForm onAddMeetup={addMeetupHandler} />
  )
}

export default index