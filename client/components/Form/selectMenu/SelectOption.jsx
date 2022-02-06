import React from 'react'

export default function SelectOption ({ val, name }) {
  return (
    <>
      <option value={val}>{name}</option>
    </>
  )
}
