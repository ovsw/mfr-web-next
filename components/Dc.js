import React from "react"
// import SbEditable from "storyblok-react" - old package
import { sbEditable } from "@storyblok/storyblok-editable"

import Teaser from "./bloks/teaser"
import Grid from "./bloks/grid"
import Page from "./Page"
import BlogPost from "./BlogPost"
import MenuItemPage from "./MenuItemPage"

import Section from "./bloks/section"
import RowSingleColumn from "./bloks/row-single-column"
import RowTwoColumns from "./bloks/row-two-columns"
import RowThreeColumns from "./bloks/row-three-columns"
import Card from "./bloks/card"
import Heading from "./bloks/heading"
import RichTextBasic from "./bloks/rich-text-basic"
import Button from "./bloks/button"
import ButtonGroup from "./bloks/button-group"
import HeadingGroup from "./bloks/heading-group"
import Image from "./bloks/image"
import Hero from "./bloks/hero"
import RowTwoColumnsCta from "./bloks/row-two-columns-cta"
import RowBigImage from "./bloks/row-big-image"
import RowTestimonials from "./bloks/row-testimonials"
import RowMenuListing from "./bloks/row-menu-listing"
import Hoagie from "./bloks/hoagie"

const BlokComponents = {
  page: Page,
  "blog-post": BlogPost,
  "menu-item-page": MenuItemPage,
  teaser: Teaser,
  grid: Grid,
  section: Section,
  "row-single-column": RowSingleColumn,
  "row-two-columns": RowTwoColumns,
  "row-three-columns": RowThreeColumns,
  card: Card,
  heading: Heading,
  "rich-text-basic": RichTextBasic,
  button: Button,
  "button-group": ButtonGroup,
  "heading-group": HeadingGroup,
  image: Image,
  hero: Hero,
  "row-two-columns-cta": RowTwoColumnsCta,
  "row-big-image": RowBigImage,
  "row-testimonials": RowTestimonials,
  "row-menu-listing": RowMenuListing,
  hoagie: Hoagie,
}

const Dc = ({ blok }) => {
  const BlokComponent = BlokComponents[blok.component]

  if (BlokComponent) {
    return (
      <div {...sbEditable(blok)} key={blok.uid}>
        <BlokComponent blok={blok} />
      </div>
    )
  }

  return (
    <p>
      The component <strong>{blok.component}</strong> has not been created yet.
    </p>
  )
}

export default Dc
