import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function CommentSection () {
  const commentsArr = useSelector(state => state.commentReducer)
  const [updateComment, setUpdateComment] = useState([])

  const placeHoldingComments = ['Only: + - , . [ ] < > are acceptable', 'All other input will be treated as a comment']

  useEffect(() => {
    commentsArr === ''
      ? setUpdateComment(placeHoldingComments)
      : setUpdateComment(commentsArr)
  }, [commentsArr])
  return (
    <div className='comment-div'>
      <div>
        <p>
          Comments:
          <br></br>
          <br></br>
          {updateComment}
        </p>
      </div>
    </div>
  )
}
