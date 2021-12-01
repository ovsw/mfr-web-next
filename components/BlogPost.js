// this page template has the following fields:
//  body: Rich Text
//  date: String (Date Selector)
//  main_image: Asset (Image)
//  title: text

import DynamicComponent from "./Dc"
import RichTextRenderer from "./richTextRenderer"

const Page = ({ blok }) => {
  // console.log("blog post blok", blok)
  const { title, date: postDate, date, body, main_image } = blok

  return (
    <main>
      <h1 className="text-5xl font-bold">{title}</h1>
      {/* {blok.body
      ? blok.body.map(blok => <DynamicComponent blok={blok} key={blok._uid} />)
      : null} */}
      <p>This is a Blog Post.</p>
      <RichTextRenderer data={body} />
    </main>
  )
}

export default Page
