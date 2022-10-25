import React, { useState } from 'react'
import style from "./header.module.css"
import { HiMenu } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import videoCamera from "../assets/camera.svg"
import Shape from "../assets/Combined Shape.svg"
import newsAllarm from "../assets/news-alarmklog.svg"
import user from "../assets/../assets/User.png"

import logo from "../assets/Black.svg"
import { useDispatch} from 'react-redux';
import { activeSidebar } from '../redux/reduser';
import { searchVideosFetching } from '../redux/reducer2';
import { Link, useLocation, useNavigate,  } from 'react-router-dom';

const Header = () => {
  const [value,setValue] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate()
  // console.log(navigate);

  const sideBarAktiveHandlar = () => {
    dispatch(activeSidebar())
  }

  const searchHandler = (e) => {
    e.preventDefault()
    dispatch(searchVideosFetching(value))
    setValue("")
    navigate("/search-video")
    localStorage.setItem("searchVideoTitle", value)
  }

  return (
    <header className={style.header}>
      <div className={style.header__content}>
        <div className={style.header_start}>
          <HiMenu className={style.header__menu} onClick ={sideBarAktiveHandlar}/>
          <img src={logo} alt="" />
        </div>

        <div  className={style.header__midle}>
         <form className={style.header_form} onSubmit={searchHandler}>
          <label className={style.header_label} htmlFor="search" >
              <input
              className={style.header_input}
              type="text" name="search"
              id="search" placeholder='Search...'
              autoComplete='off'
              value={value}
              onChange = {e => setValue(e.target.value)}
              />
                <Link to="/search-video"
                type='submit' 
                className={style.header_search} 
                onSubmit={searchHandler}
                >
                  <BiSearch className={style.header_inputIcon}/>
                </Link>
            </label>
         </form>

          <ul className={style.leader__list}>
            <li className={style.header__item}>
              <img src={videoCamera} alt="" />
            </li>

            <li className={style.header__item}>
              <img src={Shape} alt="" />
            </li>

            <li className={style.header__item}>
              <img src={newsAllarm} alt="" />
            </li>

            <li className={style.header__item}>
              <img src={user} alt="profil avatar" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header