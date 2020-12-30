function Card(props) {
  function handleCardClick() {
    props.onCardClick(props.card.name, props.card.link);
  }

  return (
    <li className="element">
      <div className="element__image-container">
        <img
          className="element__image"
          src={props.card.link}
          alt={`Изображение, на котором ${props.card.name}`}
          onClick={handleCardClick}
        />
        <button className="element__delete-button"></button>
      </div>
      <div className="element__caption">
        <h2 className="element__heading">{props.card.name}</h2>
        <div className="element__like-wrapper">
          <button className="element__like-button"></button>
          <h3 className="element__like-counter">{props.card.likes.length}</h3>
        </div>
      </div>
    </li>
  );
}

export default Card;
