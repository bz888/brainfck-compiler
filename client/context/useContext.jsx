import React, { createContext, useContext, useState } from 'react'

const FormContext = createContext()

export function useGlobalStateVal () {
  return useContext(FormContext)
}

export function FormProvider ({ children }) {
  const placeHoldingComments = ['Only: + - , . [ ] < > are acceptable', 'All other input will be treated as a comment']
  const [commentVal, setCommentVal] = useState(placeHoldingComments)
  const [toggle, setToggle] = useState(false)
  const [outputVal, setOutputVal] = useState(['Code output'])
  // const [loading, setLoading] = useState(false)
  const [arrDisplay, setArrDisplay] = useState([])
  const [input, setInput] = useState({ code: '', memory: 30 })

  const value = {
    // loading,
    // setLoading,
    setOutputVal,
    outputVal,
    toggle,
    setToggle,
    commentVal,
    setCommentVal,
    arrDisplay,
    setArrDisplay,
    input,
    setInput,
    placeHoldingComments
  }
  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  )
}
