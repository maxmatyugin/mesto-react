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
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState("");

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleImageClick(link) {
    setSelectedCard(link);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard("");
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
        isOpen={isEditProfilePopupOpen ? "popup_opened" : ""}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        title="Новое место"
        name="add_card"
        isOpen={isAddPlacePopupOpen ? "popup_opened" : ""}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        isOpen={isEditAvatarPopupOpen ? "popup_opened" : ""}
        onClose={closeAllPopups}
      />
      <PopupWithForm title="Вы уверены?" name="rusure" />
      <ImagePopup
        card={selectedCard}
        isOpen={selectedCard ? "popup_opened" : ""}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
