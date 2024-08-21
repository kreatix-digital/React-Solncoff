

export const Header = () => {

  return (
    <header className="header">
                        <div className="logo">    
                            <div className="logo__name">
                               <span className="logo__name-left">Солнц</span>
                               <span className="logo__name-right">OFF</span>
                            </div>
                        </div>
                        <nav className="menu">
                         <ul className="menu__list">
                             <li className="menu__item">
                                 <a href="" className="menu__link">Главная</a>
                             </li>
                             <li className="menu__item">
                                 <a href="" className="menu__link">Каталог</a>
                             </li>
                             <li className="menu__item">
                                 <a href="" className="menu__link">Наши работы</a>
                             </li>
                             <li className="menu__item">
                                 <a href="" className="menu__link">О нас</a>
                             </li>
                             <li className="menu__item">
                                 <a href="" className="menu__link">Отзывы</a>
                             </li>
                             <li className="menu__item">
                                 <a href="" className="menu__link">Контакты</a>
                             </li>
                         </ul>
                        </nav>
                        <a href="tel:+73433001096" className="phone-number header__phone-number">
                         <span className="phone-numder__text">+7 (343) 300-10-96</span>
                        </a>  
                    </header>
  );
};