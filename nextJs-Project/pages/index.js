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
  console.log(props.meetups)
  return (
    <MeetupList meetups={props.meetups} />
  )
}

// export function getStaticProps() {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     revalidate: 10
//   }
// }

export function getServerSideProps(context) {
  const req = context.req;
  // console.log(req)
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    }
  }
}
export default HomePage