import { Car } from "../components/carousel"
import { Header } from "../components/header"

export const Portfolio = () => {
    return (
        <div className="wrapper">
        <div className="maincontent">
          <section className="section preview">
          <div className="container preview__container">
            <Header />
            <Car />
            </div>
          </section>
          </div></div>
    )
}