// a three column steps component

// *********************************
// bloks: step

import * as React from "react"
import RichTextRenderer from "../richTextRenderer"
import { Image } from "@storyofams/storyblok-toolkit"

import { SectionThemeContext } from "./section"

const RowThreeSteps = ({ blok: row }) => {
  // console.log("two column row component", row)

  const sectionTheme = React.useContext(SectionThemeContext)
  const textStyles = sectionTheme.bgValue == "dark" ? "text-white" : ""

  return (
    <div className={textStyles}>
      {/* <h2>This is a thre column row</h2> */}
      <div className="flex flex-col md:flex-row space-y-14 md:space-y-0">
        {row.steps.map((step, i) => {
          return (
            <div className="w-full md:w-1/3" key={i}>
              <div className="hidden w-[100px] md:block md:w-[200px] mx-auto pb-16">
                <Image src={step.image?.filename} width="200" />
              </div>

              <h3 className="text-3xl relative">
                <span
                  className="inline-block
                  text-3xl py-[0.25em] w-[1.7em]
                  lg:text-5xl lg:py-[0.35em] lg:w-[1.7em]
                  absolute font-bold   bg-themeFill-accent text-white rounded-full text-center"
                >
                  {i + 1}
                </span>

                <span className="inline-block pt-2 pl-20 md:pl-24">
                  {step.title}
                </span>
              </h3>
              <div className="pl-24 md:pl-28 pt-4 custom-list-bullets">
                <RichTextRenderer data={step.description} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RowThreeSteps
