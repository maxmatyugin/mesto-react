function Card({ link, name, key, likes, onCardClick }) {
  function handleCardClick() {
    onCardClick(link);
  }

  return (
    <li className="element" key={key}>
      <div className="element__image-container">
        <img
          className="element__image"
          src={link}
          alt={`Изображение, на котором ${name}`}
          onClick={handleCardClick}
        />
        <button className="element__delete-button"></button>
      </div>
      <div className="element__caption">
        <h2 className="element__heading">{name}</h2>
        <div className="element__like-wrapper">
          <button className="element__like-button"></button>
          <h3 className="element__like-counter">{likes.length}</h3>
        </div>
      </div>
    </li>
  );
}

export default Card;
