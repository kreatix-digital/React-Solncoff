import { Header } from "../components/header";
import { Burger } from "../components/burger";

export const Contacts = () => {
    return (
        <div className="wrapper">
        <div className="maincontent">
          <section className="section preview">
            <div className="container preview__container">
              <Header />
              <Burger />
            </div>
          </section>
        </div>
      </div> 
    )
}