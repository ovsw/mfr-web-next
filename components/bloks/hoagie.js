// a hoagie menu item
// *********************************

import { Image } from "@storyofams/storyblok-toolkit"
import Link from "next/link"

// import * as React from "react"

const Hoagie = ({ blok: hoagie }) => {
  // console.log("hoagie", hoagie.link)

  return (
    <li className="rounded md:flex items-center">
      {/* IMAGE */}
      <div className="md:w-1/2">
        {hoagie.image && (
          <Image
            className="object-cover"
            src={hoagie.image?.filename}
            width="100%"
            height="100%"
            fluid={600}
            focus={hoagie.image?.focus}
          />
        )}
      </div>
      {/* END IMAGE */}

      {/* CONTENT */}
      <div className="content md:w-1/2 space-y-6 md:pl-10">
        <h3 className="text-4xl">
          14" <strong>{hoagie.name}</strong> hoagie
        </h3>
        {hoagie.dressing == "italian" ? (
          <p className="uppercase">
            with Marianna's <strong>Itallian Dressing</strong>
          </p>
        ) : (
          <p className="uppercase">
            with Marianna's <strong>Sweet & Sassy Mayo</strong>
          </p>
        )}

        <p className="max-w-lg">{hoagie.description}</p>

        {hoagie.link.cached_url != "" && (
          <div className="inline-grid">
            <Link href={`/${hoagie.link.cached_url}`}>
              <a className="btn btn-primary">Details</a>
            </Link>
          </div>
        )}
      </div>
      {/* END CONTENT */}
    </li>
  )
}

export default Hoagie
