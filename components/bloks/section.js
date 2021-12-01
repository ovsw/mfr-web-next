// the main root blok component: section
// it accepts only row bloks as children

// *****************************
// - background: String (single option)
// - width: String (single option)
// - content: Bloks

import * as React from "react"
import { blockIterator } from "../../utils/blockIterator"

export const SectionThemeContext = React.createContext(null)

const Section = ({ blok: section }) => {
  // console.log("section component", section)

  const { background, content } = section

  const width = section.width || "default"
  const margin_top = section.margin_top || "default"
  const margin_bottom = section.margin_bottom || "default"

  const bgStyles = {
    light: "bg-white",
    shaded: "bg-gray-100",
    dark: "bg-gray-700",
  }

  const contentWidthStyles = {
    default: "max-w-7xl mx-auto max-w space-y-10",
    full: "",
    narrow: "max-w-5xl mx-auto max-w space-y-10",
  }

  const topMarginStyles = {
    default: "pt-20",
    none: "",
  }

  const bottomMarginStyles = {
    default: "pb-20",
    none: "",
  }

  const themeContextValues = {
    bgValue: background,
  }

  return (
    <SectionThemeContext.Provider value={themeContextValues}>
      <section
        className={`px-4 
        ${bgStyles[background]} 
        ${topMarginStyles[margin_top]} 
        ${bottomMarginStyles[margin_bottom]}`}
      >
        <div className={`${contentWidthStyles[width]}`}>
          {blockIterator(content)}
        </div>
      </section>
    </SectionThemeContext.Provider>
  )
}

export default Section
