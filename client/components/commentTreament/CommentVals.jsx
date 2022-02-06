import React from 'react'

export default function CommentVals ({ commentVal }) {
  return (
    <>
      <ul className='comments'>
        <li>{commentVal}</li>
      </ul>
    </>
  )
}
