import React from "react"
import { Link } from "gatsby"
import { useSiteData } from "@lib/useSiteData"
import { motion, useCycle } from "framer-motion"
import NavToggle from "./NavToggle"
import styles from "./Navigation.module.scss"
import NavFooter from "./NavFooter"

const nav = {
  open: {
    left: 0,
  },
  closed: {
    left: "100%",
  },
}

export default function Navigation() {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const { primaryNav, secondaryNav } = useSiteData()
  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      initial={false}
      className={styles.Container}
    >
      <NavToggle toggle={toggleOpen.bind(null)} />
      <motion.nav
        className={`${styles.Nav} xs:pfixed md:pstatic`}
        variants={nav}
      >
        <div className={`${styles.Wrapper} xs:p-1 md:p-0`}>
          <ul className="xs:space-y-1.5 md:space-y-0.5">
            {primaryNav.map(link => (
              <NavItem
                link={link}
                mod={`${styles.Primary} font-secondary`}
                key={link.id}
              />
            ))}
          </ul>
          <ul className="xs:mt-3 xs:space-y-1.5 md:space-y-0.5">
            {secondaryNav.map(link => (
              <NavItem
                link={link}
                mod={`${styles.Secondary} font-secondary`}
                key={link.id}
              />
            ))}
          </ul>
          <NavFooter />
        </div>
      </motion.nav>
    </motion.div>
  )
}

function NavItem({ link, mod }) {
  const title = link.title || link.text
  const url = getUrl()

  return (
    <li>
      <Link className={`${styles.Link} ${mod}`} to={url}>
        {title.toLowerCase()}
      </Link>
    </li>
  )

  function getUrl() {
    if (link?.slug?.current) return `/${link.slug.current}`
    return link.url
  }
}
