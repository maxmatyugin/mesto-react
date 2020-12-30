import React from "react";

import Header from "./Header";
import "../index.css";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App(props) {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(
    false
  );
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(
    false
  );
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    name: "",
    link: "",
  });

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleImageClick(caption, path) {
    setSelectedCard({ name: caption, link: path });
    setIsImagePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({ name: "", link: "" });
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleImageClick}
      />
      <Footer />
      <PopupWithForm
        title="Редактировать профиль"
        name="profile"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
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
      </PopupWithForm>
      <PopupWithForm
        title="Новое место"
        name="add_card"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          id="name-input"
          className="popup__input-text popup__input-text_type_name"
          name="popup__name"
          required
          minLength="2"
          maxLength="40"
          placeholder="Название"
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
          placeholder="Ссылка на картинку"
        />
        <span className="popup__error" id="job-input-error"></span>
      </PopupWithForm>

      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          id="name-input"
          className="popup__input-text popup__input-text_type_avatar"
          name="popup__name"
          required
          minLength="2"
          maxLength="40"
          placeholder="Сылка на картинку"
        />
        <span className="popup__error" id="name-input-error"></span>
      </PopupWithForm>

      <PopupWithForm title="Вы уверены?" name="rusure" />
      <ImagePopup
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
