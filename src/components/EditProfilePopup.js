import PopupWithForm from "./PopupWithForm";
import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleInputChange(e) {
    e.target.name === "popup__name"
      ? setName(e.target.value)
      : setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="profile"
      buttonName="Сохранить"
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
        placeholder="Ваше имя"
        value={name}
        onChange={handleInputChange}
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
        value={description}
        onChange={handleInputChange}
      />
      <span className="popup__error" id="job-input-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
