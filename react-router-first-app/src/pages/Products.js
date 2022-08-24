import React from 'react'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

function Products() {
  return (
    <section>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to='/products/1'>Book</Link>
        </li>
        <li>
          <Link to='/products/2'>An Online Course</Link>
        </li>
        <li>
          <Link to='/products/3'>Keyboard</Link>
        </li>
      </ul>
    </section>
  )
}

export default Products