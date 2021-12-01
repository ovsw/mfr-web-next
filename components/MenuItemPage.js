import DynamicComponent from "./Dc"
import HeroTemplate from "../components/common/hero-template"

const MenuItemPage = ({ blok: menuItemPageData }) => {
  // console.log("menuItemPageData", menuItemPageData)

  const { name, short_description, ingredients, main_image } = menuItemPageData
  return (
    <main>
      <HeroTemplate background_image={main_image}>
        <div className="space-y-10">
          <h1 className="font-bold text-6xl">{name}</h1>
          {/* <p>{short_description}</p> */}
        </div>
      </HeroTemplate>

      {/* {menuItemPageData.body
        ? menuItemPageData.body.map(blok => (
            <DynamicComponent blok={blok} key={blok._uid} />
          ))
        : null} */}
    </main>
  )
}

export default MenuItemPage
