import React from 'react'
import { useSelector } from 'react-redux'

export default function CommentSection () {
  const commentsArr = useSelector(state => state.commentReducer)

  return (
    <div className='comment-div'>
      <div>
        <p>
          Comments:
          <br></br>
          <br></br>
          {commentsArr}
        </p>
      </div>
    </div>
  )
}
