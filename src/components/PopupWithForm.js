function PopupWithForm({
  name,
  isOpen,
  onSubmit,
  title,
  children,
  buttonName,
  onClose,
}) {
  return (
    <div className={`popup popup_type_${name} ${isOpen && "popup_opened"}`}>
      <form
        className={`popup__container popup__container_type_${name}`}
        name="popup__form"
        onSubmit={onSubmit}
      >
        <h2 className="popup__header">{title}</h2>
        {children}

        <button
          type="submit"
          className="popup__button"
          name="popup__submit-button"
        >
          {buttonName}
        </button>
        <button
          type="reset"
          aria-label="Закрыть"
          className="popup__close-icon"
          name="popup__reset-button"
          onClick={onClose}
        ></button>
      </form>
    </div>
  );
}

export default PopupWithForm;
