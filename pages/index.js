import Head from "next/head"
import styles from "../styles/Home.module.css"

// The Storyblok Client & hook
import Storyblok, { useStoryblok } from "../lib/storyblok"
import DynamicComponent from "@/components/Dc"
import { blockIterator } from "utils/blockIterator"
import PostListFeatured from "@/components/posts-list-featured"

export default function Home({ story, preview, recentPosts }) {
  // console.log("recentPosts", recentPosts)
  // const enableBridge = true; // load the storyblok bridge everywhere
  const enableBridge = preview // enable bridge only in prevew mode

  story = useStoryblok(story, enableBridge)

  return (
    <div className={styles.container}>
      <Head>
        <title>{story ? story.name : "My Site"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DynamicComponent blok={story.content} />

      <PostListFeatured posts={recentPosts.stories} />
    </div>
  )
}

export async function getStaticProps({ preview = false }) {
  // home is the default slug for the homepage in Storyblok
  let slug = "home"
  // load the published content outside of the preview mode
  let sbParams = {
    // version: process.env.NODE_ENV == "production" ? "published" : "draft", // or 'published'
    version: "draft", // or 'published'
  }

  let recentPostsSbParams = {
    starts_with: "posts",
    per_page: "3",
  }

  if (preview) {
    // load the draft version inside of the preview mode
    sbParams.version = "draft"
    sbParams.cv = Date.now()
  }

  let { data } = await Storyblok.get(`cdn/stories/${slug}`, sbParams)
  let { data: recentPostsData } = await Storyblok.get(
    `cdn/stories/`,
    recentPostsSbParams
  )

  return {
    props: {
      story: data ? data.story : null,
      preview,
      recentPosts: recentPostsData,
    },
    //revalidate: 3600, // revalidate every hour
  }
}
