import PopupWithForm from "./PopupWithForm";
import React from "react";

function AddPlacePopup(props){

  const [name, setName] = React.useState('');
const [link, setLink] = React.useState('');

function handleInputChange(e) {
  e.target.name === "popup__name"
      ? setName(e.target.value)
      : setLink(e.target.value);
}

  function handleSubmit(e) {
    e.preventDefault();
  props.onAddPlace({name, link});
  
  } 

  return(
<PopupWithForm
        title="Новое место"
        name="add_card"
        buttonName="Добавить"
        isOpen={props.isOpen}
        onClose={props.onClose}
        onSubmit={handleSubmit}
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
          value={name}
          onChange={handleInputChange}
        />
        <span className="popup__error" id="name-input-error"></span>
        <input
          type="url"
          id="job-input"
          className="popup__input-text popup__input-text_type_job"
          name="popup__job"
          required
          minLength="2"
          placeholder="Ссылка на картинку"
          value={link}
          onChange={handleInputChange}
        />
        <span className="popup__error" id="job-input-error"></span>
      </PopupWithForm>
  )
}

export default AddPlacePopup;