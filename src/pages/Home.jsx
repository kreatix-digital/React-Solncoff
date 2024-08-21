import { Advant } from "../components/advant";
import { Burger } from "../components/burger";
import { Header } from "../components/header";
import { Preview } from "../components/preview";
import { Previewmob } from "../components/previewmob";

export const Home = () => {
  
    return (
      <div className="wrapper">
        <div className="maincontent">
          <section className="section preview">
            <div className="container preview__container">
              <Header />
              <Preview />
              <Previewmob />
              <Advant />
              <Burger />
            </div>
          </section>
        </div>
      </div>
     
    );
  };