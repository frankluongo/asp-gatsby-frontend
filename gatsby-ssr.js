import React from "react"
import { ElementsProvider } from "@context"

export function wrapPageElement({ element, props }) {
  return <ElementsProvider {...props}>{element}</ElementsProvider>
}
