import React from 'react'
import "./subscription.css"
import img from "../assets/bg-img.png"
import { HiBellAlert} from 'react-icons/hi2'
import user  from "../assets/User.png";

import { Link } from 'react-router-dom';
import {FiSearch} from 'react-icons/fi';

const Subscription = () => {

  function clicked () {

  }

  
  return (
    <div className="subscription">
      <div className="suubscription-bg-img">
        <img className="subscription__img" src={img} alt="" />
      </div>

      <div className="subscription__profile">
        <div className="subscription-settings mt-3">
          <div className="subscription-settings-top">
            <ul className="subscription__list1">
              <li className="subscription__item2">
                <img 
                  className="subscription-profile__img" 
                  src={user} 
                  alt="" 
                />
              </li>

              <li className="subscription-item1">
                <h4 className="subscription__title">
                  Music Music  
                </h4>
                <h5 className="subscription__subtitle">
                  11500 subscription
                  subscription
                </h5>
              </li>
            </ul>

            <ul className="subscription__list1">
              <li className="subscription-item1">
                <button className='btn btn-light  watch-subscribe'>Subscribe</button>
              </li>

              <li className="watch_left-settings-item1">
                <button className='subscription-btn'>
                  <HiBellAlert className='subscription-icon'/>
                </button>
              </li>
            </ul>
          </div>
          <ul className="subscription_navigate-list">
            <li className="subscription_navigate-item">
              <Link className="subscription_navigate-link" to="">
                  HOME
              </Link>
            </li>

            <li className="subscription_navigate-item">
              <Link className="subscription_navigate-link" to="">
                  VIDEOS
              </Link>
            </li>

            <li className="subscription_navigate-item">
              <Link className="subscription_navigate-link" to="">
                  PLAYLISTS
              </Link>
            </li>

            <li className="subscription_navigate-item">
              <Link className="subscription_navigate-link" to="">
                  COMMUNITY
              </Link>
            </li>

            <li className="subscription_navigate-item">
              <Link className="subscription_navigate-link" to="">
                CHANNELS
              </Link>
            </li>

            <li className="subscription_navigate-item">
              <Link className="subscription_navigate-link" to="">
                 ABOUT
              </Link>
            </li>

            <li className="subscription_navigate-item">
              <Link className="subscription_navigate-link" to="">
                <FiSearch className="subscription_navigate-icon text-light"/>
              </Link>
            </li>

            <li className="subscription_navigate-item">
              <Link className="subscription_navigate-link" to="">
                <input type="text" placeholder='Search'/>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Subscription