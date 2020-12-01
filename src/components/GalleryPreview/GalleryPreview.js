import React from 'react'
import { Link } from "gatsby"
import Img from "gatsby-image"

import styles from "./GalleryPreview.module.scss"
export default function GalleryPreview({gallery}) {
  console.log(gallery);
  return (
    <Link className={`${styles.Preview} dblock`} to={`/gallery/${gallery.slug.current}`}>
      <Img
        className={styles.Cover}
        fluid={gallery.cover.asset.fluid}
        alt={`${gallery.title} | Alicia Stepp Photography`}
        objectFit="contain"
      />
    </Link>
  )
}
