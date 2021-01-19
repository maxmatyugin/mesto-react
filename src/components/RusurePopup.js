import PopupWithForm from "./PopupWithForm";
import React from "react";

function RusurePopup(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.onDeleteCard();
  }

  return (
    <PopupWithForm
      title="Вы уверены?"
      name="rusure"
      buttonName="Удалить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    />
  );
}

export default RusurePopup;
