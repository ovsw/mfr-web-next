import * as React from "react"
import DynamicComponent from "./Dc"

// import Icon from "components/Icon"

const Page = ({ blok }) => {
  // const setIcon = "AnotherIcon"

  return (
    <main>
      {blok.body
        ? blok.body.map(blok => (
            <DynamicComponent blok={blok} key={blok._uid} />
          ))
        : null}
    </main>
  )
}

export default Page
