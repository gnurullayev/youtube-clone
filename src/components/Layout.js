import React from 'react'
import Sidebar from './Sidebar'
import style from "./layout.module.css"
import PrivateRoute from './PrivateRoute'
import Header from './Header'
import { useSelector } from 'react-redux'
import { useLocation} from 'react-router-dom'

const Layout = () => {
  const { sidebareActive } = useSelector(state => state.videoReduser);
  const {pathname} = useLocation()

  return (
    <div className={style.root}>
      <Header/>

      <div className={style.root_content}>
        <Sidebar />
        
        <div 
        className={`main ${sidebareActive ? ""  : "main-active"} ${pathname.slice(0,13) === "/watch-video/" ? "main-right" : ""} `
        }>
          <PrivateRoute/>
        </div>
      </div>
    </div>
  )
}

export default Layout