import React from "react"
import { useSiteData } from "@lib/useSiteData"
import styles from "./NavFooter.module.scss"

export default function NavFooter() {
  const {
    emailAddress,
    phoneNumber,
    instagramHandle,
    instagramUrl,
  } = useSiteData()
  return (
    <div className={`${styles.NavFooter} mt-3 pt-3`}>
      <div className="p-0.5">
        <a className="link font-secondary" href={`mailto:${emailAddress}`}>
          mail: {emailAddress}
        </a>
      </div>
      <div className="p-0.5">
        <a className="link font-secondary" href={`tel:${phoneNumber}`}>
          tel: {phoneNumber}
        </a>
      </div>
      <div className="p-0.5">
        <a
          className="link font-secondary"
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          insta: {instagramHandle}
        </a>
      </div>
    </div>
  )
}
