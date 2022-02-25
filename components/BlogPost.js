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
      <section className="max-w-5xl mx-auto max-w space-y-10">
        <div className="prose prose-xl my-10 mb-20 mx-auto">
          <h1 className="text-primary">{title}</h1>
          <RichTextRenderer data={body} />
        </div>
      </section>
    </main>
  )
}

export default Page
