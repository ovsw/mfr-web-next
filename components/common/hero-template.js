import { Image } from "@storyofams/storyblok-toolkit"
import SectionBrush1 from "../svg/section-brush-1"

const HeroTemplate = ({ background_image, children, border_color }) => {
  // console.log("background_image", background_image)

  const brushBorderThemes = {
    light: "fill-theme-white",
    shaded: "fill-theme-offWhite",
    green: "fill-theme-primary",
    red: "fill-theme-accent",
  }
  // const dynamicBrushStyles =
  //   border_color !== undefined
  //     ? brushBorderThemes[border_color]
  //     : "fill-theme-white"

  return (
    <div className="Hero">
      <div className="relative bg-stone-300">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-600" />
        {/* IMAGE */}
        {background_image?.filename && (
          <div className="absolute inset-0">
            <Image
              src={background_image?.filename}
              alt={background_image?.alt}
              height="100%"
              width="100%"
              fluid={1920}
              focus={background_image?.focus}
              className=""
            />
            <div className="absolute inset-0  mix-blend-multiply bg-gradient-to-r from-gray-500 via-gray-100 to-transparent" />
          </div>
        )}
        {/* END IMAGE */}

        <div className="max-w-7xl mx-auto ">
          <div className="relative sm:overflow-hidden">
            <div className="relative px-4 py-16 sm:px-6 sm:py-24  lg:py-80 lg:px-8 text-white">
              {children}
            </div>
          </div>
        </div>
        <SectionBrush1
          className={`absolute -bottom-20 z-30 ${brushBorderThemes[border_color]}`}
        />
      </div>
    </div>
  )
}

export default HeroTemplate
