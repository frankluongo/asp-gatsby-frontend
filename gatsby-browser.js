import React from "react"
import { ElementsProvider } from "@context"
import "@styles/fontImports.css"
import "@styles/application.scss"

export function wrapPageElement({ element, props }) {
  return <ElementsProvider {...props}>{element}</ElementsProvider>
}
