import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import style from './sidebar.module.css'
import { MdHomeFilled } from "react-icons/md"
import { BsCollectionPlayFill } from "react-icons/bs"
import { GoPlay } from "react-icons/go"
import { TbSettings } from "react-icons/tb"
import { BsFlagFill } from "react-icons/bs"
import { MdHelp } from "react-icons/md"
import { MdFeedback } from "react-icons/md"
import { MdVideoLibrary  } from "react-icons/md"
import { BiHistory } from "react-icons/bi"
import { MdWatchLater } from "react-icons/md"
import { AiFillLike } from "react-icons/ai"
import { IoMusicalNoteOutline } from "react-icons/io5"
import { BiStation } from "react-icons/bi"
import { SiYoutubegaming } from "react-icons/si"
import { ImNewspaper } from "react-icons/im"
import { useDispatch, useSelector } from 'react-redux'



const Sidebar = () => {

  const { pathname } = useLocation();
  const { sidebareActive } = useSelector(state => state.videoReduser);
 
  const activeLink = (value) => {
    return `${style.sidebar__linkTop} ${pathname === value ? style.active : null}`
  }

  return (
    <div className={`${style.sidebar} ${sidebareActive ? style.sidebar_active :null}`}>
      <div className= {`${style.sidebar__box}`}>
        <div className={style.sidebar__boxInner}>
          <ul className={style.sidebar__listTop}>
            <li className={style.sidebar__itemTop}>   
              <Link 
              to="/" 
              className={activeLink("/")}
              >
                <MdHomeFilled 
                className={`${style.sidebar__itemTopIcon} ${pathname === "/" ? style.active__icon : null}`}
                />
                <span>Home</span>
              </Link>
            </li>

            <li className={style.sidebar__itemTop}>
              <Link 
              to="/shorts" 
              className={activeLink("/shorts")}
              >
                <GoPlay
                 className={`${style.sidebar__itemTopIcon} ${pathname === "/shorts" ? style.active__icon : null}`}
                 />
                <span>Shorts</span>
              </Link>
            </li>

            <li className={style.sidebar__itemTop}>
              
              <Link
               to="/watch/subscribtions" 
               className={activeLink("/watch/subscribtions")}
               >
              <BsCollectionPlayFill
               className={`${style.sidebar__itemTopIcon} ${pathname === "/watch/subscribtions" ? style.active__icon : null}`}
              />
                <span>Subscriptions</span>
              </Link>
            </li>
          </ul>

          <ul className={style.sidebar__listTop}>
            <li className={style.sidebar__itemTop}>
              <a href="/" className={style.sidebar__linkTop}>
                <MdVideoLibrary className={style.sidebar__itemTopIcon}/>
                <span>Library</span>
              </a>
            </li>

            <li className={style.sidebar__itemTop}>
              <a href="/" className={style.sidebar__linkTop}>
                <BiHistory className={style.sidebar__itemTopIcon}/>
                <span>History</span>
              </a>
            </li>

            <li className={style.sidebar__itemTop}>
              <a href="/" className={style.sidebar__linkTop}>
                <MdWatchLater className={style.sidebar__itemTopIcon} />
                <span>Your videos</span>
              </a>
            </li>

            <li className={style.sidebar__itemTop}>
              <a href="/" className={style.sidebar__linkTop}>
                <BsCollectionPlayFill className={style.sidebar__itemTopIcon} />
                <span>Watch later</span>
              </a>
            </li>

            <li className={style.sidebar__itemTop}>
              <a href="/" className={style.sidebar__linkTop}>
                <AiFillLike className={style.sidebar__itemTopIcon} />
               <span> Liked videos</span>
              </a>
            </li>
            
          </ul>

          <ul className={style.sidebar__listTop}>
            <p className={style.subscription__text}>SUBSCRIPTIONS</p>

            <li className={style.sidebar__itemTop}>
              <a href="/" className={style.sidebar__linkTop}>
                <MdHomeFilled className={style.sidebar__itemTopIcon}/>
                <span>Library</span>
              </a>
            </li>

            <li className={style.sidebar__itemTop}>
              <a href="/" className={style.sidebar__linkTop}>
                <GoPlay className={style.sidebar__itemTopIcon}/>
                <span>History</span>
              </a>
            </li>

            <li className={style.sidebar__itemTop}>
              <a href="/" className={style.sidebar__linkTop}>
                <BsCollectionPlayFill className={style.sidebar__itemTopIcon} />
                <span>Your videos</span>
              </a>
            </li>

            <li className={style.sidebar__itemTop}>
              <a href="/" className={style.sidebar__linkTop}>
                <BsCollectionPlayFill className={style.sidebar__itemTopIcon} />
                <span>Watch later</span>
              </a>
            </li>

            <li className={style.sidebar__itemTop}>
              <a href="/" className={style.sidebar__linkTop}>
                <BsCollectionPlayFill className={style.sidebar__itemTopIcon} />
                <span>Liked videos</span>
              </a>
            </li>
            
          </ul>

          <ul className={style.sidebar__listTop}>
            <p className={style.subscription__text}>EXPLORE</p>

            <li className={style.sidebar__itemTop}>
              <a href="/" className={style.sidebar__linkTop}>
                <MdHomeFilled className={style.sidebar__itemTopIcon}/>
                <span>Trending</span>
              </a>
            </li>

            <li className={style.sidebar__itemTop}>
              <a href="/" className={style.sidebar__linkTop}>
                <IoMusicalNoteOutline className={style.sidebar__itemTopIcon}/>
                <span>Music</span>
              </a>
            </li>

            <li className={style.sidebar__itemTop}>
              <a href="/" className={style.sidebar__linkTop}>
                <BiStation className={style.sidebar__itemTopIcon} />
                <span>Live</span>
              </a>
            </li>

            <li className={style.sidebar__itemTop}>
              <a href="/" className={style.sidebar__linkTop}>
                <SiYoutubegaming className={style.sidebar__itemTopIcon} />
                <span>Gaming</span>
               
              </a>
            </li>

            <li className={style.sidebar__itemTop}>
              <a href="/" className={style.sidebar__linkTop}>
                <ImNewspaper className={style.sidebar__itemTopIcon} />
                <span>News</span>
              </a>
            </li>
          </ul>

          <ul className={style.sidebar__listTop}>
            <p className={style.subscription__text}>MORE FROM YUOTUBE</p>

            <li className={style.sidebar__itemTop}>
              <a href="/" className={style.sidebar__linkTop}>
                <MdHomeFilled className={style.sidebar__itemTopIcon}/>
                <span>Creator studio</span>
              </a>
            </li>

            <li className={style.sidebar__itemTop}>
              <a href="/" className={style.sidebar__linkTop}>
                <GoPlay className={style.sidebar__itemTopIcon}/>
                <span>YouTube Music</span>
              </a>
            </li>

            <li className={style.sidebar__itemTop}>
              <BsCollectionPlayFill className={style.sidebar__itemTopIcon} />
              <a href="/" className={style.sidebar__linkTop}>
                <span>YouTube Kids</span>
              </a>
            </li>

            <li className={style.sidebar__itemTop}>
              <a href="/" className={style.sidebar__linkTop}>
                <BsCollectionPlayFill className={style.sidebar__itemTopIcon} />
                <span>YouTube TV</span>
              </a>
            </li>
          </ul>

          <ul className={style.sidebar__listTop}>
            <li className={style.sidebar__itemTop}>
              <a href="/" className={style.sidebar__linkTop}>
                <TbSettings className={style.sidebar__itemTopIcon}/>
                <span>Settings</span>
              </a>
            </li>

            <li className={style.sidebar__itemTop}>
              <a href="/" className={style.sidebar__linkTop}>
                <BsFlagFill className={style.sidebar__itemTopIcon}/>
                <span>Report history</span>
              </a>
            </li>

            <li className={style.sidebar__itemTop}>
              <a href="/" className={style.sidebar__linkTop}>
                <MdHelp className={style.sidebar__itemTopIcon} />
                <span>Help</span>
              </a>
            </li>

            <li className={style.sidebar__itemTop}>
              <a href="/" className={style.sidebar__linkTop}>
                <MdFeedback className={style.sidebar__itemTopIcon} />
                <span>Send feedbak</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    
    </div>
  )
}

export default Sidebar