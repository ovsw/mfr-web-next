// the main root blok component: section
// it accepts only row bloks as children

// *****************************
// - background: String (single option)
// - width: String (single option)
// - content: Bloks

import * as React from "react"
import { blockIterator } from "../../utils/blockIterator"

export const SectionThemeContext = React.createContext(null)

// SVGs
import SectionBrushMenu from "../svg/section-brush-menu"

const Section = ({ blok: section }) => {
  // console.log("section component", section)

  const { background, content } = section

  // style props form SB
  const width = section.width || "default"
  const decoration_top = section.decoration_top
  const margin_top = section.margin_top || "default"
  const margin_bottom = section.margin_bottom || "default"

  const bgStyles = {
    light: "bg-themeFill",
    shaded: "bg-themeFill-offWhite",
    dark: "bg-gray-700",
  }

  const contentWidthStyles = {
    default: "max-w-7xl mx-auto max-w space-y-10",
    full: "",
    narrow: "max-w-5xl mx-auto max-w space-y-10",
  }

  const topDecorationStyles = {
    default: "",
    brushed: "mt-28",
  }

  const topMarginStyles = {
    default: "pt-20",
    none: "",
    large: "pt-36",
  }

  const bottomMarginStyles = {
    default: "pb-20",
    none: "",
  }

  const themeContextValues = {
    bgValue: background,
  }

  // const dynamicBrushStyles =
  //   border_color !== undefined
  //     ? brushBorderThemes[border_color]
  //     : "fill-theme-white"

  return (
    <SectionThemeContext.Provider value={themeContextValues}>
      <section
        className={`px-4 
        ${bgStyles[background]} 
        ${topMarginStyles[margin_top]} 
        ${bottomMarginStyles[margin_bottom]} 
        ${topDecorationStyles[decoration_top]}
        relative
        
        `}
      >
        {decoration_top == "brushed" && (
          <SectionBrushMenu className=" z-30 fill-theme-offWhite" />
        )}
        <div className={`${contentWidthStyles[width]}`}>
          {blockIterator(content)}
        </div>
      </section>
    </SectionThemeContext.Provider>
  )
}

export default Section
