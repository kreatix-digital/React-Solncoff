import { Gazprom } from "../icon/clients/Gazprom"
import { Plus } from "../icon/clients/Plus"
import { Urgpu } from "../icon/clients/Urgpu"

export const Clients = () => {
    return (
        <div className="clients">
        <div className="title">
            <h1 className="footer__title clients__title">Наши клиенты</h1>
        </div>
        <div className="clients__pic">
            <ul className="clients__list">
                <li className="clients__item">
                    <div className="clients__logo">
                    <Urgpu />
                    </div>
                </li>
                <li className="clients__item">
                    <div className="clients__logo">
                    <Gazprom />
                    </div>
                </li>
                <li className="clients__item">
                    <div className="clients__logo">
                    <Plus />
                    </div>
                </li>
                <li className="clients__item">
                    <div className="clients__logo">
                    Лого
                    </div>
                </li>
                <li className="clients__item">
                    <div className="clients__logo">
                    Лого
                    </div>
                </li>
                <li className="clients__item">
                    <div className="clients__logo">
                        Лого
                    </div>
                </li>
            </ul>
        </div>
    </div>
    )
}