import React from "react"
import { Helmet } from "react-helmet-async"
import { useLocation } from "react-router-dom"

import config from "../core/config"

function SEO() {
  const { title, description } = config
  const { href } = useLocation()
  const location = useLocation()
  console.log(href, location)
  return (
    <Helmet titleTemplate={`%s | ${title}`} defaultTitle={title}>
      <html lang="en" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#9b5de5" />
      <meta name="description" content={description} />
      <meta property="og:url" content={href} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={`${window.location.origin}/logo512.png`}
      />
    </Helmet>
  )
}

export default SEO
