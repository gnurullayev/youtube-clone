import { memo } from 'react';
import { useSelector } from 'react-redux'

import "./comments.css"

const Comments = (props) => {
  const {chanelLoading,videoLoading,channelImg,commentCount} = props.posts
  const {comments, commentLoading} = useSelector(state => state.commentReduser);

  // console.log(comments);
  // console.log(commentLoading);
  return (
    <>
        {/* {
          commentLoading
          ?
            <p>loading..</p>
          :
          (
            <>
              <div className='comment'>
                <span className='comment-count'>
                  {
                    videoLoading
                    ? <p>loading...</p>
                    :(video.items[0].statistics.commentCount)
                  } 
                  Comments
                </span>
              </div>
              <ul className="comments-list">
                <li className='personal-comment'>
                  
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

                  <div className="personal-cmment__content">
                    <input className='personal-comment__input' type="text"  placeholder='Add a comment...'/>
                  </div>
                </li>


                {
                  comments.map(comment => (
                    <li key={comment.id} className="other-comment">
                      <img 
                      className="left-settings__img" 
                      src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} 
                      alt={comment.snippet.authorDisplayName} 
                      />

                      <div className="other-comment__content">
                        <p className="person-name">
                        {comment.snippet.topLevelComment.snippet.authorDisplayName} <span className="person-name__span">1 hour ago</span>
                        </p>
                        <p className='comment-text'>
                          {`${comment.snippet.topLevelComment.snippet.textDisplay}`}
                        </p>
                        <p className='comment-text'>
                          {`${comment.snippet.topLevelComment.snippet.textDisplay}`} 
                        </p>

                        <div className="other-comment__footer mt-3">
                          <button
                          className='left-settings'
                          >
                            Like
                          </button>

                          <span className='px-2'>{comment.snippet.likeCount}</span>

                          <button 
                          className='left-settings'
                          >
                            Dislike
                          </button>

                          <button 
                          className='left-settings comment-reply ms-2'
                          onClick={() => dispatch(replyComment(comment.id))}
                          >
                            Reply
                          </button>

                          <div className={`personal-comment mt-2 ${!comment.snippet.canReply ? "d-block" : "d-none"}`}>
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

                            <div className="personal-cmment__content">
                              <input className='personal-comment__input' type="text"  placeholder='Add a comment...'/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))
                }
                
              </ul>
            </>
          )
        } */}
    </>
  )
}

export default memo(Comments)