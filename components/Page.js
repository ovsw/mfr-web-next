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

      <div>
        {/* <Icon name="TestIcon" /> */}
        {/* <div style={{ margin: "0 auto", maxWidth: "600px" }}>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div className="text-red-500">
              <IconSmort name="group" />
              <p>Fire</p>
            </div>
            <div className="text-red-500">
              <IconSmort name="chevronRight" />
              <p>Fire</p>
            </div>
          </div>
        </div> */}
      </div>
    </main>
  )
}

export default Page
