import React from 'react'
import { NavLink } from 'react-router-dom'

import style from './MainHeader.module.css'

function MainHeader() {
  return (
    <header className={style.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={style.active} to='/welcome'>Welcome</NavLink>
          </li>
          <li>
            <NavLink activeClassName={style.active} to='/products'>Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default MainHeader