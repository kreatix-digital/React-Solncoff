import { Header } from "../components/header";
import { Burger } from "../components/burger";
import { Footer } from "../components/footer";

export const Contacts = () => {
    return (
        <div className="wrapper">
        <div className="maincontent">
          <section className="section preview">
            <div className="container preview__container">
              <Header />
              <Burger />
              <Footer />
            </div>
          </section>
        </div>
      </div> 
    )
}