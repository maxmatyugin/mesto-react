import React from "react";
import { api } from "../utils/Api.js";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUseravatar] = React.useState("");
  const [cards, setCards] = React.useState([]);
  const userInfo = api.getUserInfo();
  const initialCards = api.getInitialCards();

  React.useEffect(() => {
    userInfo.then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUseravatar(data.avatar);
    });
  }, []);

  React.useEffect(() => {
    initialCards.then((data) => {
      setCards(data);
    });
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__block">
          <div
            className="profile__avatar"
            onClick={props.onEditAvatar}
            style={{ backgroundImage: `url(${userAvatar})` }}
          ></div>

          <div className="profile__info">
            <div className="profile__wrapper">
              <h1 className="profile__name">{userName}</h1>
              <button
                type="button"
                aria-label="Редактировать"
                className="profile__edit-button"
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p className="profile__caption">{userDescription}</p>
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
          {cards.map((data) => {
            return (
              <Card
                link={data.link}
                name={data.name}
                key={data._id}
                likes={data.likes}
                onCardClick={props.onCardClick}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
