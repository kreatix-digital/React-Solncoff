export const Header = () => {

  return (
    <header className="header">
                        <div className="logo">
                            <div className="logo__img">
                            <svg viewBox="0 0 440 440"> 
<path fillRule="evenodd" clipRule="evenodd" d="M282.485 431C262.678 436.857 241.706 440 220 440C198.294 440 177.322 436.857 157.515 431H154V429.928C134.472 423.795 116.116 415.012 99.3562 404H99V403.766C77.4697 389.56 58.5831 371.673 43.2372 351H43V350.68C15.9773 314.14 0 268.936 0 220C0 98.4974 98.4974 0 220 0C341.503 0 440 98.4974 440 220C440 296.803 400.644 364.413 341 403.766V404H340.644C323.884 415.012 305.528 423.795 286 429.928V431H282.485ZM258 412.099C250.161 413.691 242.15 414.812 234 415.432V296H258V412.099ZM286 404.185C295.356 400.762 304.377 396.642 313 391.889V296H286V404.185ZM341 373.131C350.825 365.241 359.87 356.42 368 346.8V296H341V373.131ZM396 302.941C397.062 300.651 398.081 298.337 399.055 296H396V302.941ZM407.792 270C411.764 254.652 413.914 238.57 413.997 222H396V270H407.792ZM412.146 194H275C265.611 194 258 201.611 258 211V222V270H182V222V211C182 201.611 174.389 194 165 194H25.8541C39.0009 99.0829 120.466 26 219 26C317.534 26 398.999 99.0829 412.146 194ZM24.0025 222C24.0857 238.57 26.2357 254.652 30.2079 270H43V222H24.0025ZM38.9449 296C40.2216 299.061 41.5741 302.083 43 305.063V296H38.9449ZM71 347.974C79.4234 357.783 88.8051 366.745 99 374.715V296H71V347.974ZM127 392.976C135.632 397.604 144.652 401.6 154 404.904V296H127V392.976ZM182 412.494C189.843 414.001 197.853 415.037 206 415.574V296H182V412.494ZM76.2543 168C94.7403 106.113 152.102 61 220 61C287.898 61 345.26 106.113 363.746 168H76.2543ZM368 222H341V270H368V222ZM313 222H286V270H313V222ZM127 222H154V270H127V222ZM71 222H99V270H71V222Z" fill="#FFA800"/>
</svg>
                            </div>    
                            <div className="logo__name">
                               <span className="logo__name-left">Солнц</span>
                               <span className="logo__name-right">OFF</span>
                            </div>
                        </div>
                        <nav className="menu">
                         <ul className="menu__list">
                             <li className="menu__item">
                                 <a href="/" className="menu__link">Главная</a>
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
                                 <a href="/contacts" className="menu__link">Контакты</a>
                             </li>
                         </ul>
                        </nav>
                        <a href="tel:+73433001096" className="phone-number header__phone-number">
                         <span className="phone-numder__text">+7 (343) 300-10-96</span>
                        </a>  
                    </header>
  );
};