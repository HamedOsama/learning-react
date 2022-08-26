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

function HomePage() {
  return (
    <MeetupList meetups={DUMMY_MEETUPS} />
  )
}

export default HomePage