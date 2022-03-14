import React from 'react'
import { useGlobalStateVal } from '../../context/useContext'

export default function CommentSection () {
  const { commentVal } = useGlobalStateVal()

  return (
    <div className='comment-div'>
      <div>
        <p>
          Comments:
          <br></br>
          <br></br>
          {commentVal && commentVal}
        </p>
      </div>
    </div>
  )
}
