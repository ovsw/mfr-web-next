// a heading component

// *********************************
// text: "title"
// text: "level" -  what level should the heading be?

// import * as React from "react"

const headingStyles = {
  h1: "text-5xl",
  h2: "text-3xl",
  h3: "text-2xl",
  h4: "text-lg",
}

const Heading = ({ blok: heading }) => {
  const HeadingLevel = heading.level || "h2"
  const HeadingStyle = heading.style || "h2"
  // console.log("heading component", heading.title, headingStyles[HeadingLevel]);

  return (
    <HeadingLevel
      className={`${headingStyles[HeadingStyle]} font-bold text-theme-primary`}
    >
      {heading.title}
    </HeadingLevel>
  )
}

export default Heading
