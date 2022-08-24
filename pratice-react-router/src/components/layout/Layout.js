import React, { Fragment } from 'react'

import style from './Layout.module.css'
import MainNavigation from './MainNavigation'

function Layout(props) {
  return (
    <Fragment>
      <MainNavigation />
      <main className={style.main}>
        {props.children}
      </main>
    </Fragment>
  )
}

export default Layout