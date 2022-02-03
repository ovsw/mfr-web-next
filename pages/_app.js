import { useEffect } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        document.querySelector(hash).scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest",
        })
      }, 100)
    }
  })
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
