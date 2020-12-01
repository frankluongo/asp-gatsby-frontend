import React, { useEffect } from "react"
import { Link } from "gatsby"
import Logo from "@components/Logo"
import styles from "./Header.module.scss"
import Navigation from "@components/Navigation"
import { useDimensions } from "@hooks"

export default function Header() {
  const { ref, dimensions } = useDimensions()
  useEffect(updateHeader, [ref.current, dimensions])
  return (
    <header
      className={`${styles.Header} xs:p-1 md:py-1.5 md:px-2 z-10`}
      ref={ref}
    >
      <h1 className={styles.H1}>
        <Link to="/">
          <span className="visually-hidden">Alicia Stepp Photography</span>
          <Logo />
        </Link>
      </h1>
      <Navigation />
    </header>
  )

  function updateHeader() {
    document.documentElement.style.setProperty(
      "--header-height",
      `${dimensions.height}px`
    )
  }
}
