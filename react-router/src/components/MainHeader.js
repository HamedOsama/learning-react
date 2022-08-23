import React from 'react'
import { Link } from 'react-router-dom'


function MainHeader() {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/welcome'>Welcome</Link>
        </li>
        <li>
          <Link to='/products'>Products</Link>
        </li>
      </ul>
    </nav>
  )
}

export default MainHeader