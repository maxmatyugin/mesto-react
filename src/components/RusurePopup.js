import PopupWithForm from "./PopupWithForm";
import React from "react";

function RusurePopup({ onDeleteCard, isOpen, onClose }) {
  function handleSubmit(e) {
    e.preventDefault();
    onDeleteCard();
  }

  return (
    <PopupWithForm
      title="Вы уверены?"
      name="rusure"
      buttonName="Удалить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
}

export default RusurePopup;
