// import * as React from "react"
import DynamicComponent from "../Dc"

const Grid = ({ blok }) => (
  <div>
    <h2>{blok.headline}!</h2>
    <p>
      {blok.columns.length > 0 && (
        <div style={{ display: "flex", gap: "2em" }}>
          {blok.columns.map(column => (
            <DynamicComponent blok={column} key={blok._uid} />
          ))}
        </div>
      )}
    </p>
  </div>
)

export default Grid
