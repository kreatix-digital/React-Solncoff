export const Preview = () => {
    return (
        <div className="preview__section">
                        <div className="preview__title-section">
                            <h1 className="preview__main-title">Ваш дом будет одет</h1>
                            <div className="preview__title-desc">
                                <p>Ворота всех видов</p>
                                <p>Рольставни</p>
                                <p>Жалюзи и шторы</p>
                            </div>
                            <a href="" className="button">Заказать</a>
                        </div>
                        <div className="preview__image-section">
                        <img src={'./src/images/logo.png'} className="image__section"/>
                        </div>
        </div>

    );
};