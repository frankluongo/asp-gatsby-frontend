import React, { createContext, useContext, useState } from "react"

const defaults = {}

export const ElementsContext = createContext(defaults)

export const ElementsProvider = ({ children }) => {
  const [footerSize, setFooterSize] = useState({})
  const [headerSize, setHeaderSize] = useState({})

  return (
    <ElementsContext.Provider
      value={{
        ...defaults,
        footerSize,
        setFooterSize,
        headerSize,
        setHeaderSize,
      }}
    >
      {children}
    </ElementsContext.Provider>
  )
}

export const useElementsContext = () => useContext(ElementsContext)
