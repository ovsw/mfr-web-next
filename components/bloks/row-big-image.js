// a two column row with a big image on one side

// *********************************
// bloks: "content"
// asset: "image"
// bool: "is_reversed"

import * as React from "react";
import { blockIterator } from "../../utils/blockIterator";
import { Image } from "@storyofams/storyblok-toolkit";

import { SectionThemeContext } from "./section";

const Row = ({ blok: rowBigImage }) => {
  // console.log("two column row component", rowBigImage)

  const sectionTheme = React.useContext(SectionThemeContext);
  const textStyles = sectionTheme.bgValue == "dark" ? "text-white" : "";

  const { content, image, is_reversed } = rowBigImage;

  const alternateContentWrapperStyles = is_reversed
    ? "lg:ml-auto lg:mr-0"
    : "lg:mr-auto lg:ml-0";
  const alternateContentColumnStyles = is_reversed
    ? "lg:col-start-2 lg:pl-8"
    : "lg:pr-8";

  const alternateImageStyles = is_reversed ? "lg:left-0" : "lg:right-0";

  return (
    <div className="relative bg-white">
      {/* CONTENT */}
      <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
        <div className={`${alternateContentColumnStyles}`}>
          <div
            className={`text-base max-w-prose mx-auto lg:max-w-lg ${alternateContentWrapperStyles} space-y-10`}
          >
            {blockIterator(content)}
          </div>
        </div>
      </div>
      {/* END CONTENT */}

      {/* IMAGE */}
      <div className="lg:absolute lg:inset-0">
        <div
          className={`lg:absolute lg:inset-y-0 ${alternateImageStyles} lg:w-1/2`}
        >
          <div className="h-56 w-full object-cover lg:absolute lg:h-full">
            <Image
              className=""
              src={image?.filename}
              height="100%"
              width="100%"
              fluid={[600, 600]}
              focus={image?.focus}
            />
            {/* {console.log("image?.focus}", image?.focus)} */}
          </div>
        </div>
      </div>
      {/* END IMAGE */}
    </div>
  );
};

export default Row;
