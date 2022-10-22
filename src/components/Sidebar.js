import React from 'react'
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



const Sidebar = () => {
  const { pathname } = useLocation()
  console.log(pathname)
  return (
    <div className={style.sidebar}>
      <div className= {style.sidebar__box}>
        <div className={style.sidebar__boxInner}>
          <ul className={style.sidebar__listTop}>
            <li className={style.sidebar__itemTop}>
              <MdHomeFilled 
              className={style.sidebar__itemTopIcon} 
              style ={{color: pathname === "/" ? "#fff" : "rgba(255, 255, 255, 0.5)"}}
              />
                
              <Link 
              to="/" 
              className={style.sidebar__linkTop}
              style ={{color: pathname === "/" ? "#fff" : "rgba(255, 255, 255, 0.5)"}}
              >
                Home
              </Link>
            </li>

            <li className={style.sidebar__itemTop}>
              <GoPlay className={style.sidebar__itemTopIcon}/>
              <Link to="/" className={style.sidebar__linkTop}>
                Shorts
              </Link>
            </li>

            <li className={style.sidebar__itemTop}>
              <BsCollectionPlayFill className={style.sidebar__itemTopIcon} />
              <Link to="/watch/subscribtions" className={style.sidebar__linkTop}>
                Subscriptions
              </Link>
            </li>
          </ul>

          <ul className={style.sidebar__listTop}>
            <li className={style.sidebar__itemTop}>
              <MdVideoLibrary className={style.sidebar__itemTopIcon}/>
              <a href="/" className={style.sidebar__linkTop}>
                Library
              </a>
            </li>

            <li className={style.sidebar__itemTop}>
              <BiHistory className={style.sidebar__itemTopIcon}/>
              <a href="/" className={style.sidebar__linkTop}>
                History
              </a>
            </li>

            <li className={style.sidebar__itemTop}>
              <MdWatchLater className={style.sidebar__itemTopIcon} />
              <a href="/" className={style.sidebar__linkTop}>
                Your videos
              </a>
            </li>

            <li className={style.sidebar__itemTop}>
              <BsCollectionPlayFill className={style.sidebar__itemTopIcon} />
              <a href="/" className={style.sidebar__linkTop}>
                Watch later
              </a>
            </li>

            <li className={style.sidebar__itemTop}>
              <AiFillLike className={style.sidebar__itemTopIcon} />
              <a href="/" className={style.sidebar__linkTop}>
                Liked videos
              </a>
            </li>
            
          </ul>

          <ul className={style.sidebar__listTop}>
            <p className={style.subscription__text}>SUBSCRIPTIONS</p>

            <li className={style.sidebar__itemTop}>
              <MdHomeFilled className={style.sidebar__itemTopIcon}/>
              <a href="/" className={style.sidebar__linkTop}>
                Library
              </a>
            </li>

            <li className={style.sidebar__itemTop}>
              <GoPlay className={style.sidebar__itemTopIcon}/>
              <a href="/" className={style.sidebar__linkTop}>
                History
              </a>
            </li>

            <li className={style.sidebar__itemTop}>
              <BsCollectionPlayFill className={style.sidebar__itemTopIcon} />
              <a href="/" className={style.sidebar__linkTop}>
                Your videos
              </a>
            </li>

            <li className={style.sidebar__itemTop}>
              <BsCollectionPlayFill className={style.sidebar__itemTopIcon} />
              <a href="/" className={style.sidebar__linkTop}>
                Watch later
              </a>
            </li>

            <li className={style.sidebar__itemTop}>
              <BsCollectionPlayFill className={style.sidebar__itemTopIcon} />
              <a href="/" className={style.sidebar__linkTop}>
                Liked videos
              </a>
            </li>
            
          </ul>

          <ul className={style.sidebar__listTop}>
            <p className={style.subscription__text}>EXPLORE</p>

            <li className={style.sidebar__itemTop}>
              <MdHomeFilled className={style.sidebar__itemTopIcon}/>

              <a href="/" className={style.sidebar__linkTop}>
                Trending
              </a>
            </li>

            <li className={style.sidebar__itemTop}>
              <IoMusicalNoteOutline className={style.sidebar__itemTopIcon}/>
              <a href="/" className={style.sidebar__linkTop}>
                Music
              </a>
            </li>

            <li className={style.sidebar__itemTop}>
              <BiStation className={style.sidebar__itemTopIcon} />
              <a href="/" className={style.sidebar__linkTop}>
                Live
              </a>
            </li>

            <li className={style.sidebar__itemTop}>
              <SiYoutubegaming className={style.sidebar__itemTopIcon} />
              <a href="/" className={style.sidebar__linkTop}>
               Gaming
              </a>
            </li>

            <li className={style.sidebar__itemTop}>
              <ImNewspaper className={style.sidebar__itemTopIcon} />
              <a href="/" className={style.sidebar__linkTop}>
                News
              </a>
            </li>
          </ul>

          <ul className={style.sidebar__listTop}>
            <p className={style.subscription__text}>MORE FROM YUOTUBE</p>

            <li className={style.sidebar__itemTop}>
              <MdHomeFilled className={style.sidebar__itemTopIcon}/>
              <a href="/" className={style.sidebar__linkTop}>
                Creator studio
              </a>
            </li>

            <li className={style.sidebar__itemTop}>
              <GoPlay className={style.sidebar__itemTopIcon}/>
              <a href="/" className={style.sidebar__linkTop}>
                YouTube Music
              </a>
            </li>

            <li className={style.sidebar__itemTop}>
              <BsCollectionPlayFill className={style.sidebar__itemTopIcon} />
              <a href="/" className={style.sidebar__linkTop}>
                YouTube Kids
              </a>
            </li>

            <li className={style.sidebar__itemTop}>
              <BsCollectionPlayFill className={style.sidebar__itemTopIcon} />
              <a href="/" className={style.sidebar__linkTop}>
                YouTube TV
              </a>
            </li>
          </ul>

          <ul className={style.sidebar__listTop}>
            <li className={style.sidebar__itemTop}>
              <TbSettings className={style.sidebar__itemTopIcon}/>
              <a href="/" className={style.sidebar__linkTop}>
                Settings
              </a>
            </li>

            <li className={style.sidebar__itemTop}>
              <BsFlagFill className={style.sidebar__itemTopIcon}/>
              <a href="/" className={style.sidebar__linkTop}>
                Report history
              </a>
            </li>

            <li className={style.sidebar__itemTop}>
              <MdHelp className={style.sidebar__itemTopIcon} />
              <a href="/" className={style.sidebar__linkTop}>
                Help
              </a>
            </li>

            <li className={style.sidebar__itemTop}>
              <MdFeedback className={style.sidebar__itemTopIcon} />
              <a href="/" className={style.sidebar__linkTop}>
                Send feedbak
              </a>
            </li>
          </ul>
        </div>
      </div>
    
    </div>
  )
}

export default Sidebar