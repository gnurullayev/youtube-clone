import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./searchVideosPages.css"
import { useDispatch, useSelector } from 'react-redux'
import { fetchNextVideo } from '../redux/reduser'

const SearchVideoPages = () => {
    const [searchTitle, setSearchTitle] = useState(localStorage.getItem("searchVideoTitle"))
    const {searchVideos,searchVideosLoading} = useSelector(state => state.commentReduser)
    const dispatch = useDispatch()
    const chanelHandler1 = (channelId) => {
        localStorage.setItem("chanelId", channelId)
    }
    const chanelHandler2 = (channelId,videoId) => {
        dispatch(fetchNextVideo(videoId))
        localStorage.setItem("chanelId", channelId)
    }

    useEffect(() => {
        setSearchTitle(localStorage.getItem("searchVideoTitle"))
    }, [searchVideos])

    console.log(searchVideos);
    
    return (
        <div className='searchVideos'>
            <h3 className='searchVideos-title'>
                Latest from
                <span className='text-success ps-3'>{searchTitle.toLocaleUpperCase()}</span>
            </h3>
            <ul className="row">
                {
                    searchVideosLoading
                    ?<p>loading...</p>
                    :searchVideos.length === 0
                    ?<p>Kechirasiz siz kiritgan malumot bo'yicha hech narsa topilmadi</p>
                    :
                    (
                        searchVideos.map(el => (
                            <>
                                {
                                    el.id.videoId === undefined
                                    ?(
                                        <li  key={el.id.channelId} className="col-12 mb-4" onClick={() => chanelHandler1(el.id.channelId)}>
                                            <Link to={`/chanel/${el.id.channelId}`}  >
                                                <div className="searchVideo-inner card watch__right-cart">
                                                    <div className="row g-0">
                                                        <div className="col-md-4">
                                                            <img 
                                                            className={`img-fluid ${el.id.playlistId !== undefined ? "" : "search-channel-img"}`} 
                                                            src={el.snippet.thumbnails.medium.url} 
                                                            alt={el.snippet.title}
                                                            />
                                                        </div>
                                    
                                                        <div className="col-md-8">
                                                            <div className="card-body ps-3 pt-0 pb-0">
                                                                <h5 className="card-title1">
                                                                    {el.snippet.title}
                                                                </h5>
                                                                <p className="card-text1 mb-1">
                                                                    <span className="text-muted text-muted1">
                                                                        378K views 
                                                                    </span> 
                                        
                                                                    <small className="ms-2 text-muted text-muted1"> 3 week ago</small>
                                                                </p>
                                        
                                                                <Link className='search-channel-title' to={`/chanel/${el.snippet.channelId}`}>
                                                                {el.snippet.title}
                                                                </Link>
            
                                                                <p className="card-desc">
                                                                    {
                                                                    el.snippet.description 
                                                                    ? el.snippet.description
                                                                    : "Tafsifi mavjud emas"
                                                                    }
                                                                </p>
                                                            
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    )
                                    :(
                                        <li  key={el.id.videoId} className="col-12 mb-4" onClick={() => chanelHandler2(el.snippet.channelId,el.id.videoId)}>
                                            <Link to={`/watch-video/${el.id.videoId}`}  >
                                                <div className="searchVideo-inner card watch__right-cart">
                                                    <div className="row g-0">
                                                        <div className="col-md-4">
                                                            <img 
                                                            className=' img-fluid ' 
                                                            src={el.snippet.thumbnails.medium.url} 
                                                            alt={el.snippet.title}
                                                            />
                                                        </div>
                                    
                                                        <div className="col-md-8">
                                                            <div className="card-body ps-3 pt-0 pb-0">
                                                                <h5 className="card-title1">
                                                                    {el.snippet.title}
                                                                </h5>
                                                                <p className="card-text1 mb-1">
                                                                    <span className="text-muted text-muted1">
                                                                        378K views 
                                                                    </span> 
                                        
                                                                    <small className="ms-2 text-muted text-muted1"> 3 week ago</small>
                                                                </p>
                                        
                                                                <Link className='search-channel-title' to={`/chanel/${el.snippet.channelId}`}>
                                                                {el.snippet.title}
                                                                </Link>
            
                                                                <p className="card-desc">
                                                                    {
                                                                    el.snippet.description 
                                                                    ? el.snippet.description
                                                                    : "Tafsifi mavjud emas"
                                                                    }
                                                                </p>
                                                            
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    )
                                }
                            
                            </>

                           
                        ))
                    )
                }
            </ul>

        </div>
    )
}

export default SearchVideoPages