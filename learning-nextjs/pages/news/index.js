import { Fragment } from "react"
import Link from 'next/link'
function news() {
  return (
    <Fragment>
      <h1>news</h1>
      <ul>
        <li>
          <Link href="/news/nextJs-is-a-great-framework">
            NextJs is A Great Framework
          </Link>
        </li>
        <li>Something Else</li>
      </ul>
    </Fragment>
  )
}

export default news