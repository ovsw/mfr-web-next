import { Image } from "@storyofams/storyblok-toolkit"

const HeroTemplate = ({ background_image, children }) => {
  // console.log("background_image", background_image)
  return (
    <div>
      {/* Hero card */}
      <div className="relative bg-gray-300">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-green-600" />
        {/* IMAGE */}
        {background_image?.filename && (
          <div className="absolute inset-0">
            <Image
              src={background_image?.filename}
              alt={background_image?.alt}
              height="100%"
              width="100%"
              fluid={1200}
              focus={background_image?.focus}
              className=""
            />
            <div className="absolute inset-0 bg-gray-700 mix-blend-multiply" />
          </div>
        )}
        {/* END IMAGE */}

        <div className="max-w-7xl mx-auto ">
          <div className="relative sm:overflow-hidden">
            <div className="relative px-4 py-16 sm:px-6 sm:py-24  lg:py-60 lg:px-8 text-white">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroTemplate
