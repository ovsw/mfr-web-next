// a heading group for main section headings

// *********************************
// strings: "eyebrow", "title"

import * as React from "react"
import { SectionThemeContext } from "./section"

const MainHeadingGroup = ({ blok: mainHeadingGroup }) => {
  // console.log("MainHeadingGroup component", mainHeadingGroup)
  const { eyebrow, title, subtitle } = mainHeadingGroup

  // dynamic styles based on section theme
  const sectionTheme = React.useContext(SectionThemeContext)
  const rootStyles = `${sectionTheme.bgValue == "dark" ? "text-white" : ""}`

  return (
    <div className={rootStyles}>
      <h2>
        {eyebrow && (
          <span className="eyebrow block leading-none">{eyebrow}</span>
        )}
        {""}
        <span
          className="block
          pt-4 md:pt-0 mb-20
          text-[46px] leading-none
          md:text-[61px] 
          font-bold text-theme-primary"
        >
          {title}
        </span>
      </h2>
    </div>
  )
}

export default MainHeadingGroup
