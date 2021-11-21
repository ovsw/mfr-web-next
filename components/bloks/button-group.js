// a button container

// *********************************
// bloks: "content"

// import * as React from "react"
import { blockIterator } from "../../utils/blockIterator";

const ButtonGroup = ({ blok: buttonGroup }) => {
  // console.log("buttonGroup component", buttonGroup)

  return (
    <div className="py-4 flex space-x-4">
      {blockIterator(buttonGroup.content)}
    </div>
  );
};

export default ButtonGroup;
