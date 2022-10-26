import React, { useEffect } from 'react'
import {useSelector,useDispatch} from "react-redux"
import {fetchNextVideo, fetchVideos} from "../redux/reduser"
import "./home.css"
import { Link } from 'react-router-dom'

const Home = () => {
  const dispatch = useDispatch()
  const {videos} = useSelector(state => state.videoReduser)

  useEffect(() => {
    dispatch(fetchVideos())
  },[])

  const chanelHandler = (channelId,videoId) => {
    dispatch(fetchNextVideo(videoId))
    // dispatch(commentsFetching(videoId))
    localStorage.setItem("chanelId", channelId)
  }

  return (
   <div className="home">
      <ul className= 'row gy-3 home-list'>
        {videos.map(video => (
          <li key={video.id.videoId} className='col-md-3' onClick={() => chanelHandler(video.snippet.channelId,video.id.videoId)}>
            <Link to={`/watch-video/${video.id.videoId}`}>
              <div className="card cart home-card">
                <img className="card-im rounded-0"  src= {video.snippet.thumbnails.high.url} alt=""/>

                <div className="card-body">
                  <h4 
                  className="card-title home-card__title">
                    {video.snippet.title.length > 25 ? video.snippet.title.slice(0,20) + "..." : video.snippet.title}
                  </h4>
                  <p 
                  className='home-card__time'>
                    97K views 22 hours ago
                    {/* {(video.viewCount*1) >= 1000 ? (video.viewCount.slice(0,video.viewCount.length - 3) + "k"): video.viewCount} views   ·  {video.publishedTimeText} */}
                  </p>
                  <Link to={`/chanel/${video.snippet.channelId}`} className='home-card__author'>{video.snippet.channelTitle}</Link>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home