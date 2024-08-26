import { LogoIcon } from "/src/icon/LogoIcon"
import { Link } from "react-router-dom";
export const Header = () => {

  return (
    <header className="header">
                        <div className="logo">
                            <div className="logo__img">
                            <LogoIcon />
                            </div>    
                            <div className="logo__name">
                               <span className="logo__name-left">Солнц</span>
                               <span className="logo__name-right">OFF</span>
                            </div>
                        </div>
                        <nav className="menu">
                         <ul className="menu__list">
                             <li className="menu__item">
                                 <Link to="/" className="menu__link">Главная</Link>
                             </li>
                             <li className="menu__item">
                                 <Link to="" className="menu__link">Каталог</Link>
                             </li>
                             <li className="menu__item">
                                 <Link to="" className="menu__link">Наши работы</Link>
                             </li>
                             <li className="menu__item">
                                 <Link to="" className="menu__link">О нас</Link>
                             </li>
                             <li className="menu__item">
                                 <Link to="" className="menu__link">Отзывы</Link>
                             </li>
                             <li className="menu__item">
                                 <Link to="/contacts" className="menu__link">Контакты</Link>
                             </li>
                         </ul>
                        </nav>
                        <Link to="tel:+73433001096" className="phone-number header__phone-number">
                         <span className="phone-numder__text">+7 (343) 300-10-96</span>
                        </Link>  
                    </header>
  );
};