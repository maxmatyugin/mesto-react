

function PopupWithForm(props) {

  

  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? "popup_opened" : ""}`}>
      <form
        className="popup__container popup__container_type_profile"
        name="popup__form"
        noValidate
      >
        <h2 className="popup__header">{props.title}</h2>
        <input
          type="text"
          id="name-input"
          className="popup__input-text popup__input-text_type_name"
          name="popup__name"
          required
          minLength="2"
          maxLength="40"
          placeholder="Ваше имя"
        />
        <span className="popup__error" id="name-input-error"></span>
        <input
          type="text"
          id="job-input"
          className="popup__input-text popup__input-text_type_job"
          name="popup__job"
          required
          minLength="2"
          maxLength="200"
          placeholder="Род деятельности"
        />
        <span className="popup__error" id="job-input-error"></span>
        <button
          type="submit"
          className="popup__button"
          name="popup__submit-button"
        >
          Сохранить
        </button>
        <button
          type="reset"
          aria-label="Закрыть"
          className="popup__close-icon"
          name="popup__reset-button"
          onClick={props.onClose}
        ></button>
      </form>
    </div>
  );
}

export default PopupWithForm;
