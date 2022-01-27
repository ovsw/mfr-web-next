// a two column row with a big image on one side

// *********************************
// bloks: "content"
// asset: "image"
// bool: "is_reversed"

import * as React from "react"
import { blockIterator } from "../../utils/blockIterator"
import { Image } from "@storyofams/storyblok-toolkit"

import { SectionThemeContext } from "./section"

const Row = ({ blok: rowBigImage }) => {
  // console.log("two column row component", rowBigImage)

  const sectionTheme = React.useContext(SectionThemeContext)
  const textStyles = sectionTheme.bgValue == "dark" ? "text-white" : ""

  const { content, image, is_reversed, extra_padding, contain_image } =
    rowBigImage

  const alternateContentWrapperStyles = is_reversed
    ? "lg:ml-auto lg:mr-0"
    : "lg:mr-auto lg:ml-0"
  const alternateContentColumnStyles = is_reversed
    ? "lg:col-start-2 lg:pl-8"
    : "lg:pr-8"

  const alternateImageStyles = is_reversed ? "lg:left-0" : "lg:right-0"

  const paddingStyles = extra_padding ? "pt-12 pb-16 px-4 sm:pt-16 sm:px-6" : ""

  return (
    <div className="relative">
      {/* CONTENT */}
      <div
        className={`relative 
      ${paddingStyles}
      lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2 min-h-[400px]`}
      >
        <div className={`${alternateContentColumnStyles}`}>
          <div
            className={`text-base max-w-prose mx-auto lg:max-w-lg ${alternateContentWrapperStyles} space-y-16`}
          >
            {blockIterator(content)}
          </div>
        </div>
      </div>
      {/* END CONTENT */}

      {/* IMAGE */}
      <div
        className={`lg:absolute  lg:top-0 h-full ${alternateImageStyles} lg:w-1/2 `}
      >
        <div
          className="h-56 w-full object-fit lg:absolute lg:h-full 
        before:block before:absolute before:-inset-1 before:rotate-[-1deg] 
        "
        >
          <Image
            className="rounded-2xl"
            src={image?.filename}
            height="100%"
            width="100%"
            fluid={900}
            focus={image?.focus}
            fit={contain_image ? "contain" : "cover"}
          />
          {/* {console.log("image?.focus}", image?.focus)} */}
        </div>
      </div>
      {/* END IMAGE */}
    </div>
  )
}

export default Row
