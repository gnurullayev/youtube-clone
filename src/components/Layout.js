import React from 'react'
import Sidebar from './Sidebar'
import style from "./layout.module.css"
import PrivateRoute from './PrivateRoute'
import Header from './Header'

const Layout = () => {
  return (
    <div className={style.root}>
      <Header/>

      <div className= {style.root_content}>
        <Sidebar/>
        
        <div className="main">
          <PrivateRoute/>
        </div>
      </div>
    </div>
  )
}

export default Layout