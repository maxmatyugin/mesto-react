function ImagePopup(props) {
  return (
    <div className={`popup popup_type_image ${props.isOpen ? "popup_opened" : ""}`}>
      <div className="popup__figure">
        <img className="popup__image" alt={`Изображение ${props.card.name}`} src={props.card.link} />
        <h2 className="popup__caption">{props.card.name}</h2>
        <button
          type="button"
          aria-label="Закрыть"
          className="popup__close-icon popup__close-icon_position_corner"
          name="popup__close-button"
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
