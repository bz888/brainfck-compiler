import React, { createContext, useContext, useState } from 'react'

const FormContext = createContext()

export function useGlobalStateVal () {
  return useContext(FormContext)
}

export function FormProvider ({ children }) {
  const [toggle, setToggle] = useState(false)
  const [loading, setLoading] = useState(false)
  const value = {
    loading,
    setLoading,
    toggle,
    setToggle
  }
  return (
    <FormContext.Provider value={value}>
      {children}
    </FormContext.Provider>
  )
}
