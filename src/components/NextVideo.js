import { useDispatch, useSelector } from 'react-redux'
import { Link} from 'react-router-dom'
import {fetchNextVideo } from '../redux/reduser'

import "./nextVideo.css"

const NextVideo = () => {
    const {nextVideoLoading,nextVideos} = useSelector(state => state.videoReduser)

    const dispatch = useDispatch();
    // console.log(nextVideoLoading);
    // console.log(nextVideos);

    const chanelHandler = (channelId, videoId) => {
      dispatch(fetchNextVideo(videoId))
      localStorage.setItem("chanelId", channelId)
    }

  return (
    <>
        {
            nextVideoLoading
            ?
            <p>loading...</p>
            :
            (
              nextVideos.map(video => (
                <Link key={video.id.videoId}  to={`/watch-video/${video.id.videoId}`} onClick = {() => chanelHandler(video.snippet.channelId,video.id.videoId)}>
                   <li  className="card watch__right-cart mb-3">
                     <div className="row g-0">
                       <div className="col-md-5">
                         <img className='watch__right-img' src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
                       </div>
   
                       <div className="col-md-7">
                         <div className="card-body ps-3 pt-0 pe-0 pb-0">
                            <h5 className="card-title next-vide-title">
                              {video.snippet.title.slice(0,50)}...
                            </h5>
   
                           <Link to = {`/chanel/${video.snippet.channelId}`} className="card-text1">
                            {video.snippet.channelTitle}
                           </Link>
                           <p className="card-text1">
                             <span className="text-muted">
                                378K views 
                             </span> 
   
                             <small className="ms-2 text-muted"> 3 week ago</small>
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