import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { chanelId, fetchNextVideo } from '../redux/reduser'

import "./nextVideo.css"

const NextVideo = () => {
    const {nextVideoLoading,nextVideos} = useSelector(state => state.videoReduser)

    const {id} = useParams()
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchNextVideo(id))
    }, [id]);

    console.log(nextVideoLoading);
    console.log(nextVideos);

  return (
    <>
        {
            nextVideoLoading
            ?
            <p>loading...</p>
            :
            (
              nextVideos.map(video => (
                <Link to={`/watch-video/${video.id.videoId}`} onClick = {() => dispatch(chanelId(video.snippet.channelId))}>
                   <li class="card watch__right-cart mb-3">
                     <div class="row g-0">
                       <div class="col-md-4">
                         <img className=' img-fluid watch__right-img' src={video.snippet.thumbnails.default.url} alt={video.snippet.title}/>
                       </div>
   
                       <div class="col-md-8">
                         <div class="card-body ps-3">
                           <h5 class="card-title1">{video.snippet.title}</h5>
   
                           <p class="card-text1">{video.snippet.channelTitle}</p>
                           <p class="card-text1">
                             <span class="text-muted">
                                378K views 
                             </span> 
   
                             <small class="ms-2 text-muted"> 3 week ago</small>
                           </p>
                         </div>
                       </div>
                     </div>
                   </li>
                </Link>
               ))
            )
           }
    </>
  )
}

export default NextVideo