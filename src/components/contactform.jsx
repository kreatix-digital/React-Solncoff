export function ContactForm() {
    return (
        <form class="form" id="myForm">
        <input type="hidden" name="to" value="somewhere@mail.com"/>
            <div class="form__row">
                <label class="form__block">
                    <div class="form__title">Имя</div>
                    <input type="text" name ="name" class="form__input"/>
                </label>
                <label class="form__block">
                    <div class="form__title">Телефон</div>
                    <input type="text" name="phone" class="form__input"/>
                </label>
                <label class="form__block">
                    <div class="form__title">Комментарий</div>
                    <textarea class="form__input form__input--textarea" name="comment"></textarea>
                </label>    
            </div>
            <div class="form__buttons">
                <input type="submit" value="Отправить" class="button button__form"/>
                <input type="reset" value="Очистить" class="button button--transparent"/>
            </div>
    </form>
    );
  }