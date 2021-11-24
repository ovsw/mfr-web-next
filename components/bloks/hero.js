// a hero component

// *************************
// - content: Bloks
// - background_image: Asset (image)
// - is_tall: Boolean - adds extra padding to the hero to make it bigger (ie: homepage)

// import * as React from "react"
import { Image } from "@storyofams/storyblok-toolkit"
import RichTextRenderer from "@/components/richTextRenderer"
import { blockIterator } from "../../utils/blockIterator"

const Hero = ({ blok: hero }) => {
  // console.log("hero component", hero);

  const { background_image, is_tall, content } = hero

  return (
    <div>
      {/* Hero card */}
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-green-600" />
        {/* IMAGE */}
        <div className="absolute inset-0">
          <Image
            src={hero.background_image?.filename}
            alt={hero.background_image?.alt}
            height="100%"
            width="100%"
            fluid={1200}
            focus={hero.background_image?.focus}
            className=""
          />
          <div className="absolute inset-0 bg-gray-700 mix-blend-multiply" />
        </div>
        {/* END IMAGE */}

        <div className="max-w-7xl mx-auto ">
          <div className="relative sm:overflow-hidden">
            <div className="relative px-4 py-16 sm:px-6 sm:py-24  lg:py-60 lg:px-8 text-white">
              <h1 className="text-left text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                <span className="block text-white">{hero.title}</span>
                {/* <span className="block text-green-200">customer support</span> */}
              </h1>
              <div className="mt-6 max-w-lg text-left text-xl text-green-200 sm:max-w-3xl">
                <RichTextRenderer data={hero.text} />
              </div>
              {/* <p className="mt-6 max-w-lg text-left text-xl text-green-200 sm:max-w-3xl">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.
              </p> */}

              {/* BUTTONS */}
              {hero.buttons.length > 0 && (
                <div className="mt-10 max-w-sm sm:max-w-none sm:flex">
                  <div className="space-y-4 sm:space-y-0  sm:inline-grid sm:grid-cols-2 sm:gap-5">
                    {blockIterator(hero.buttons)}
                    {/* <a
                    href="#"
                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-red-700 bg-white hover:bg-red-50 sm:px-8"
                  >
                    Get started
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                  >
                    Live demo
                  </a> */}
                  </div>
                </div>
              )}

              {/* END BUTTONS */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
