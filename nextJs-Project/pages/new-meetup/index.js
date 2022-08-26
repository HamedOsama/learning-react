import NewMeetupForm from '../../components/meetups/NewMeetupForm'
function index() {
  const addMeetupHandler = meetupData => {
    console.log(meetupData)
  }
  return (
    <NewMeetupForm onAddMeetup={addMeetupHandler} />
  )
}

export default index