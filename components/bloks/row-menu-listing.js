import { blockIterator } from "../../utils/blockIterator"

const RowMenuListing = ({ blok: rowMenuListing }) => {
  // console.log("row menu listing", rowMenuListing)

  return (
    <ul className="menuListingWrapper space-y-4 ">
      {blockIterator(rowMenuListing.items)}
    </ul>
  )
}

export default RowMenuListing
