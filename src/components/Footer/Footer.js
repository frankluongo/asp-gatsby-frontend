import React, { useEffect } from "react"
import { useSiteData } from "@lib/useSiteData"
import { useBreakpoint, useDimensions } from "@hooks"
import styles from "./Footer.module.scss"
export default function Footer() {
  const {
    emailAddress,
    phoneNumber,
    instagramHandle,
    instagramUrl,
  } = useSiteData()
  const { ref, dimensions } = useDimensions()
  const { matches } = useBreakpoint({ type: "max-width", breakpoint: "767px" })
  const style = matches ? { opacity: 0, pointerEvents: "none" } : {}
  useEffect(updateFooter, [ref.current, dimensions])
  return (
    <footer
      className={`${styles.Footer} xs:p-1 md:col-span-4 dflex`}
      style={style}
      ref={ref}
    >
      <div className="flex-1 text-align-center">
        <a className="link font-secondary" href={`mailto:${emailAddress}`}>
          mail: {emailAddress}
        </a>
      </div>
      <div className="flex-1 text-align-center">
        <a className="link font-secondary" href={`tel:${phoneNumber}`}>
          tel: {phoneNumber}
        </a>
      </div>
      <div className="flex-1 text-align-center">
        <a
          className="link font-secondary"
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          insta: {instagramHandle}
        </a>
      </div>
    </footer>
  )

  function updateFooter() {
    document.documentElement.style.setProperty(
      "--footer-height",
      `${dimensions.height}px`
    )
  }
}
