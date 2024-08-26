import { Header } from "../components/header";
import { Burger } from "../components/burger";
import { Footer } from "../components/footer";
import { Maptitle } from "../components/maptitle";
import { Adress } from "../components/adress";
import { FormTitle } from "../components/formtitle";
import { Clients } from "../components/clients";
import { ContactForm } from "../components/contactform";
import { Yamap } from "../components/yamap";

export const Contacts = () => {
    return (
        <div className="wrapper">
        <div className="maincontent">
          <section className="section footer">
            <div className="container footer__container">
              <Header />
              <Clients />
              <div className="contacts">
                 <div className="contacts__map">
                    <Maptitle />
                    <Yamap />
                 </div>
                <Adress />
                      <div class="contacts__form">  
                         <FormTitle /> 
                         <ContactForm /> 
                      </div>        
              </div>
              <Footer />
              <Burger />
            </div>
          </section>
        </div>
      </div> 
    )
}