import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import NextVideo from '../components/NextVideo';
import { fetchChanelDetails,fetchVideoDetails, isActiveSidebar,} from "../redux/reduser"
import {AiOutlineLike} from "react-icons/ai"
import {AiOutlineDislike} from "react-icons/ai"
import {RiShareForwardLine} from "react-icons/ri"
import {TfiMoreAlt} from "react-icons/tfi"
import "./watch.css"

const Watch = () => {
  const [channelId, setCHanelId] = useState(localStorage.getItem("chanelId"))
  const {video,chanelDetails,videoLoading,chanelLoading,} = useSelector(state => state.videoReduser)

  const {id} = useParams()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isActiveSidebar());
    dispatch(fetchVideoDetails(id))
  }, [id]);

  useEffect(() => {
    dispatch(fetchChanelDetails(channelId))
  }, [channelId,dispatch]);

  // useEffect(() => {
  //   dispatch(newNextVideos(nextVideos))
  //   localStorage.setItem("localNextVideos", nextVideos)
  // }, []);

  // console.log(chanelD  etails);

  return (
    <div className="watch">
      <div className='row watch__list'>
        <div className="col-md-7 p-0 watch__left">
          <div className="watch_left-inner">
            <iframe className='watch__left-innerVideo' src={`https://www.youtube.com/embed/${id}`}
              frameBorder='0'
              allow='autoplay; encrypted-media'
              allowFullScreen
              title='video'
            />

            <h3 className='watch_left-inner-title'>
              {
                videoLoading
                ? <span>loading</span>
                : video.items[0].snippet.title
              }
            </h3>

            <div className="watch_left-settings left-setings">
              <ul className="left-settings__list1">
                <li className="left-settings__item2">
                  {
                    chanelLoading
                    ? <span>loading...</span>
                    :(
                      <img 
                        className="left-settings__img" 
                        src={chanelDetails.items[0].snippet.thumbnails.default.url} 
                        alt="" 
                      />
                    )
                  }
                  
                </li>

                <li className="watch_left-settings-item1">
                  <h4 className="left-settings__title">
                    {
                      videoLoading
                      ? <span>loading</span>
                      :video.items[0].snippet.channelTitle
                    }
                  </h4>
                  <h5 className="left-settings__subtitle">
                    {
                      chanelLoading
                      ? <span>loading...</span>
                      : chanelDetails.items[0].statistics.subscriberCount + " "
                    }
                    subscription
                  </h5>
                </li>

                <li className="watch_left-settings-item1">
                  <button className='btn btn-light  watch-subscribe'>Subscribe</button>
                </li>
              </ul>

              <ul className="left-settings__list1">
                <li className="left-settings__item1">
                  <button className='left-settings left-settings-like'>
                    <AiOutlineLike className='left-settings-icon'/>
                  </button>
                  <button className='left-settings left-settings-dislike'>
                    <AiOutlineDislike className='left-settings-icon'/>
                  </button>
                </li>

                <li className="watch_left-settings-item1">
                  <button className='left-settings-btn'>
                    <RiShareForwardLine className='left-settings-icon'/>
                  </button>
                </li>

                <li className="watch_left-settings-item1">
                  <button className='left-settings-btn'>
                    <TfiMoreAlt className='left-settings-icon'/>
                  </button>
                </li>
              </ul>
            </div>

            {/* <Comments 
            posts = {{
              chanelLoading: chanelLoading,
              videoLoading: videoLoading,
              channelImg: chanelDetails.items[0].snippet.thumbnails.default.url,
              commentCount:video.items[0].statistics.commentCount,
            }}
            /> */}
            
          </div>
        </div>

        <div className="col-md-5 watch__right">
          <ul className="watch_right-inner">
            <NextVideo/>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Watch