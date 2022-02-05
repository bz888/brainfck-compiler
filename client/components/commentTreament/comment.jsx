import React from 'react'

export default function Comment ({ commentVal }) {
  return (
    <>
      <ul className='comments'>
        <li>{commentVal}</li>
      </ul>
    </>
  )
}
