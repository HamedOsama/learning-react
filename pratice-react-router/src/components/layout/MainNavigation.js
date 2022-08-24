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
            <NavLink activeClassName={style.active} to="/quotes">All Quotes</NavLink>
          </li>
          <li>
            <NavLink activeClassName={style.active} to="/new-quote">Add Quote</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation