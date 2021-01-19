function PopupWithForm(props) {
  return (
    <div
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <form
        className={`popup__container popup__container_type_${props.name}`}
        name="popup__form"
        
        onSubmit={props.onSubmit}
      >
        <h2 className="popup__header">{props.title}</h2>
        {props.children}

        <button
          type="submit"
          className="popup__button"
          name="popup__submit-button"
        >
          {props.buttonName}
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
