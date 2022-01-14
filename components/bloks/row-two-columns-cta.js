// a two column CTA component

// *********************************
// bloks: "main_content" and "buttons"

import * as React from "react"
import { blockIterator } from "../../utils/blockIterator"
import { Image } from "@storyofams/storyblok-toolkit"

import { SectionThemeContext } from "./section"

const Row = ({ blok: rowCta }) => {
  // console.log("two column rowCta component", rowCta)

  const { is_reversed, content_main, content_buttons, image } = rowCta

  const sectionTheme = React.useContext(SectionThemeContext)
  const textStyles = sectionTheme.bgValue == "dark" ? "text-white" : ""

  return (
    <div className={`${textStyles}  flex`}>
      {/* <h2>This is a two column rowCta</h2> */}
      <div className={`md:flex gap-8 justify-between  items-center`}>
        <div className="space-y-12 max-w-2xl">
          {blockIterator(content_main)}
          {blockIterator(content_buttons)}
        </div>
      </div>

      {/* image */}
      <div
        className="
        absolute -top-36 -bottom-28 right-0 z-40
          md:pt-0 
         aspect-[496/552]
        "
      >
        <Image
          className=""
          src={image?.filename}
          height="100%"
          width="100%"
          fluid={[496, 552]}
          focus={image?.focus}
        />
      </div>
    </div>
  )
}

export default Row
