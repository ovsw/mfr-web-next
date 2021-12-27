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
        {eyebrow && <span className="eyebrow block leading-8">{eyebrow}</span>}
        {""}
        <span className="block text-[61px] font-bold text-theme-primary">
          {title}
        </span>
      </h2>
    </div>
  )
}

export default MainHeadingGroup
