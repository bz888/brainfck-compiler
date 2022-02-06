import React from 'react'
import { useSelector } from 'react-redux'

import CommentVals from './CommentVals'

export default function CommentSection () {
  const commentsArr = useSelector(state => state.commentReducer)
  // const [commentVal, setCommentVal] = useState([])
  return (
    <div className='comment-div'>
      <div>
        {commentsArr && commentsArr.map((inputComment, idx) => {
          return (
            <CommentVals
              key={idx}
              commentVal={inputComment}
            />
          )
        })}
      </div>
    </div>
  )
}
