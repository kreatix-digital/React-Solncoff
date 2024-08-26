import { TimeIcon } from "../icon/TimeIcon";
export const Advant = () => {
    return (
        <div className="preview__icon-section">
                       <ul className="features">
                        <li className="features__item feature">
                           <div className="feature__icon">
                            <TimeIcon />
                           </div>
                           <div className="feature__text">Установка от 2-х дней</div> 
                        </li>
                        <li className="features__item feature">
                            <div className="feature__icon">
                            <TimeIcon />
                            </div>
                            <div className="feature__text">Гарантия до 2-х лет</div> 
                         </li>
                         <li className="features__item feature">
                            <div className="feature__icon">
                            <TimeIcon />
                            </div>
                            <div className="feature__text">Предоплата от 30%</div> 
                         </li>
                       </ul> 
                    </div>
    );
};