import React from "react"

import Footer from "@components/Footer"
import Header from "@components/Header"
import styles from "./Layout.module.scss"
export default function Layout({ children }) {
  return (
    <div className={styles.AppWrapper}>
      <Header />
      <main className={`${styles.Main}`}>{children}</main>
      <Footer />
    </div>
  )
}
