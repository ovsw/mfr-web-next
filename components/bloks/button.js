// a button component

// *********************************
// text: "text"
// link: "link"
// boolean: "target" (checkbox)
// string: "style" (single option)
//    - primary (green bg white text)
//    - accent (red bg white text)
//    - light-primary (green text white bg)
//    - light-accent (red text white bg)
//    - dark (dark bg white text)

// import * as React from "react"
import Link from "next/link"

const Button = ({ blok: button }) => {
  // console.log("button component", button)

  const { url, linktype, cached_url } = button.link
  const { target, style, text } = button

  const styleVariants = {
    primary: "btn-primary",
    accent: "btn-accent",
    "light-primary": "btn-light-primary",
    "light-accent": "btn-light-accent",
    dark: "btn-dark",
  }

  // console.log("BUTTON STYLE PROP", text, button, styleVariants[style])

  const btnStyles = `btn ${
    styleVariants[style] != undefined ? styleVariants[style] : ""
  }`

  if (linktype === "email") {
    // Email links: add `mailto:` scheme and map to <a>
    return (
      <a href={`mailto:${url}`} className={btnStyles}>
        {text}
      </a>
    )
  }
  if (linktype === "url") {
    // External links: map to <a>
    return (
      <a
        href={url}
        target={target ? "_blank" : undefined}
        className={btnStyles}
      >
        {text}
      </a>
    )
  }
  if (linktype === "story") {
    // link to internal page
    // special case where the link points to the home page, which has a Cached URL of 'home'
    // but no actual SLUG to link to
    const destinationPageUrl = cached_url === "home" ? "/" : url
    return (
      <Link
        href={
          destinationPageUrl != undefined
            ? destinationPageUrl
            : "#UNDEFINED LINK"
        }
      >
        <a target={target ? "_blank" : undefined} className={btnStyles}>
          {text}
        </a>
      </Link>
    )
  }

  return (
    <p>
      <strong>ERROR PROCESSING LINK TARGET</strong>
    </p>
  )
}

export default Button
