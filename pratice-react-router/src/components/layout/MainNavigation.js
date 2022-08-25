import React from 'react'
import { NavLink } from 'react-router-dom'

import style from './MainNavigation.module.css'
function MainNavigation() {
  return (
    <header className={style.header}>
      <div className={style.logo}>Great Quotes</div>
      <nav className={style.nav}>
        <ul>
          <li>
            {/* className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")} */}
            <NavLink className={({ isActive }) => isActive ? style.active : ''} to="/quotes">All Quotes</NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => isActive ? style.active : ''} to="/new-quote">Add Quote</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation