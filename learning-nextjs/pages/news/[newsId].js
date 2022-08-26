import { useRouter } from 'next/router'

function newsId() {
  const router = useRouter()
  const id = router.query.newsId
  console.log(id)
  return (
    <h1>newsId</h1>
  )
}

export default newsId