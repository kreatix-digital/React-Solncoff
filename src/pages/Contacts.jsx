import { Header } from "../components/header";
import { Burger } from "../components/burger";
import { Footer } from "../components/footer";
import { Map } from "../components/map";
import { Adress } from "../components/adress";
import { Form } from "../components/form";

export const Contacts = () => {
    return (
        <div className="wrapper">
        <div className="maincontent">
          <section className="section footer">
            <div className="container footer__container">
              <Header />
              <div className="contacts">
                <Map />
                <Adress />
                <Form />
              </div>
              <Footer />
              <Burger />
            </div>
          </section>
        </div>
      </div> 
    )
}