import Check from "./section~one/check"
import "../../style/main/index.css"
import Popular from "./section~two/popular"
import Services from "./section~three/services"
import History from "./section~four/history"
import Customers from "./section~five/customers"
import News from "./section~six/news"
import Contact from "./section~seven/contact"
const Main = () => {
  return (
    <div className="main"> 
      <Check />
      <Popular />
      <Services />
      <History />
      <Customers />
      <News />
      <Contact />
    </div>
  )
}

export default Main
