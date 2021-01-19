import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  
  const currentUser = React.useContext(CurrentUserContext);





  return (
    <main className="main">
      <section className="profile">
        <div className="profile__block">
          <div
            className="profile__avatar"
            onClick={props.onEditAvatar}
            style={{ backgroundImage: `url(${currentUser.avatar})` }}
          ></div>

          <div className="profile__info">
            <div className="profile__wrapper">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                type="button"
                aria-label="Редактировать"
                className="profile__edit-button"
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p className="profile__caption">{currentUser.about}</p>
          </div>
        </div>
        <button
          type="button"
          aria-label="Добавить"
          className="profile__add-button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {props.cards.map((data) => {
            return (
              <Card
                card={data}
                key={data._id}
                onCardClick={props.onCardClick}
                onCardLike={props.onCardLike}
                onCardDelete={props.onCardDelete}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
