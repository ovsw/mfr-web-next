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
          <span className=" uppercase text-base font-bold text-gray-500 block">
            {eyebrow}
          </span>
        )}
        {""}
        <span className="block text-6xl font-bold">{title}</span>
      </h2>
    </div>
  )
}

export default MainHeadingGroup
