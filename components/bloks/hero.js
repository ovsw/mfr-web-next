// a hero component

// *************************
// - content: Bloks
// - background_image: Asset (image)
// - is_tall: Boolean - adds extra padding to the hero to make it bigger (ie: homepage)

import HeroTemplate from "../common/hero-template"
import RichTextRenderer from "@/components/richTextRenderer"
import { blockIterator } from "../../utils/blockIterator"

const Hero = ({ blok: hero }) => {
  // console.log("hero component", hero)

  const { background_image, buttons, is_tall, text, title, border_color } = hero

  return (
    <>
      <HeroTemplate
        title={title}
        background_image={background_image}
        text={text}
        buttons={buttons}
        border_color={border_color}
      >
        <h1 className="text-left text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
          <span className="block text-white lg:max-w-xl tracking-wide">
            {title}
          </span>
          {/* <span className="block text-green-200">customer support</span> */}
        </h1>
        <div className="mt-6 xl:max-w-lg text-left text-xl text-gray-400 leading-relaxed tracking-wide">
          <RichTextRenderer data={text} />
        </div>

        {/* BUTTONS */}
        {buttons.length > 0 && (
          <div className="mt-10 max-w-sm sm:max-w-none sm:flex">
            <div className="space-y-4 sm:space-y-0 sm:inline-grid sm:grid-cols-2 sm:gap-5">
              {blockIterator(buttons)}
            </div>
          </div>
        )}

        {/* END BUTTONS */}
      </HeroTemplate>
    </>
  )
}

export default Hero
