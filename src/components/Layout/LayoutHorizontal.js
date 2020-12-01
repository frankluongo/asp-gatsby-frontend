import React from "react"
import Footer from "@components/Footer"
import Header from "@components/Header"
import styles from "./Layout.module.scss"
import { useHorizontalScroll } from "@hooks"
export default function LayoutHorizontal({ children }) {
  const { el } = useHorizontalScroll()

  return (
    <div className={styles.AppWrapper}>
      <Header />
      <main className={`${styles.Main} xs:overflow-y-auto dflex`} ref={el}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
