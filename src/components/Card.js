import { CurrentUserContext } from "../contexts/CurrentUserContext";
import React from "react";

function Card(props) {
  function handleCardClick() {
    props.onCardClick(props.card.name, props.card.link);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `element__delete-button ${
    isOwn ? "" : "element__delete-button_hidden"
  }`;
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `element__like-button ${
    isLiked ? "element__like-button_active" : ""
  } `;

  return (
    <li className="element">
      <div className="element__image-container">
        <img
          className="element__image"
          src={props.card.link}
          alt={`Изображение, на котором ${props.card.name}`}
          onClick={handleCardClick}
        />
        <button
          className={cardDeleteButtonClassName}
          onClick={handleDeleteClick}
        ></button>
      </div>
      <div className="element__caption">
        <h2 className="element__heading">{props.card.name}</h2>
        <div className="element__like-wrapper">
          <button
            className={cardLikeButtonClassName}
            onClick={handleLikeClick}
          ></button>
          <h3 className="element__like-counter">{props.card.likes.length}</h3>
        </div>
      </div>
    </li>
  );
}

export default Card;
