function ImagePopup(props) {
  return (
    <div className={`popup popup_type_image ${props.isOpen}`}>
      <div className="popup__figure">
        <img className="popup__image" alt="" src={props.card} />
        <h2 className="popup__caption"></h2>
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
