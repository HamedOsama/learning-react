import { Fragment } from "react"
import MeetupDetail from "../../components/meetups/MeetupDetail"

function MeetupDetails({ meetupData }) {
  // console.log(props)
  return <MeetupDetail
    title={meetupData.title}
    description={meetupData.description}
    address={meetupData.address}
    image={meetupData.image}
  />
}

export function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1'
        }
      },
      {
        params: {
          meetupId: 'm1'
        }
      }
    ]
  }
}

export function getStaticProps(context) {
  const req = context
  console.log(req)
  const meetupId = context.params.meetupId
  return {
    props: {
      meetupData: {
        id: meetupId,
        title: "A First Meetup",
        description: "This is first meetup",
        address: "some address 5, 12334 cairo",
        image: "https://th.bing.com/th/id/R.2e256937c5832ae1dbb89e9df2ba073e?rik=71gwaRV6RgxItQ&pid=ImgRaw&r=0",
      }
    }
  }
}

export default MeetupDetails