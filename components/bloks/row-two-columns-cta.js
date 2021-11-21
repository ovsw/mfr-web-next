// a two column CTA component

// *********************************
// bloks: "main_content" and "buttons"

import * as React from "react";
import { blockIterator } from "../../utils/blockIterator";

import { SectionThemeContext } from "./section";

const Row = ({ blok: rowCta }) => {
  // console.log("two column rowCta component", rowCta)

  const { is_reversed, content_main, content_buttons } = rowCta;

  const sectionTheme = React.useContext(SectionThemeContext);
  const textStyles = sectionTheme.bgValue == "dark" ? "text-white" : "";

  return (
    <div className={textStyles}>
      {/* <h2>This is a two column rowCta</h2> */}
      <div className={`md:flex gap-8 justify-between  items-center`}>
        <div className="space-y-12">{blockIterator(content_main)}</div>
        <div className="pt-16 min-w-max md:pt-0 md:px-20 flex justify-content-start">
          {blockIterator(content_buttons)}
        </div>
      </div>
    </div>
  );
};

export default Row;
