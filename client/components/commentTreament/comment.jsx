import React from 'react'

export default function Comment ({ commentVal }) {
  return (
    <div className='comments'>
      <ul>
        <li>{commentVal}</li>
      </ul>
    </div>
  )
}
