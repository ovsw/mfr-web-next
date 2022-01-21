// a three column steps component

// *********************************
// bloks: step

import * as React from "react"
import RichTextRenderer from "../richTextRenderer"
import { Image } from "@storyofams/storyblok-toolkit"

import { SectionThemeContext } from "./section"

// svgs
import DottedPathSteps from "../svg/dotted-path-steps"

const RowThreeSteps = ({ blok: row }) => {
  // console.log("two column row component", row)

  const sectionTheme = React.useContext(SectionThemeContext)
  const textStyles = sectionTheme.bgValue == "dark" ? "text-white" : ""

  return (
    <div className={textStyles}>
      {/* <h2>This is a thre column row</h2> */}
      <div className="flex flex-col md:flex-row space-y-14 md:space-y-0 mb-28 relative z-30 pt-5">
        {row.steps.map((step, i) => {
          return (
            <div className="w-full md:w-1/3" key={i}>
              <div className="hidden w-[80px] md:block md:w-[160px] mx-auto pb-16">
                <Image src={step.image?.filename} width="200" />
              </div>

              <div className="pl-20">
                <h3 className="text-3xl relative">
                  <span
                    className="block
                  text-2xl  w-[1.2em]
                  lg:text-3xl  
                  absolute font-semibold bg-themeFill-accent text-white rounded-full text-center top-2
                   
                  "
                  >
                    {i + 1}
                  </span>

                  <span className="inline-block pt-2 pl-20 md:pl-12">
                    {step.title}
                  </span>
                </h3>
                <div className="pl-24 md:pl-14 pt-4 custom-list-bullets text-lg">
                  <RichTextRenderer data={step.description} className="" />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* dotted path */}
      <DottedPathSteps className="w-full absolute top-60 h-32" />
    </div>
  )
}

export default RowThreeSteps
