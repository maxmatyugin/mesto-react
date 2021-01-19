import PopupWithForm from "./PopupWithForm";
import React from "react";

function EditAvatarPopup(props){
const avatarRef = React.useRef();

function handleSubmit(e) {
  e.preventDefault();

  props.onUpdateAvatar({
    avatar: avatarRef.current.value,
  });
} 

  return(
<PopupWithForm
        title="Обновить аватар"
        name="avatar"
        buttonName="Обновить"
        isOpen={props.isOpen}
        onClose={props.onClose}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          id="name-input"
          className="popup__input-text popup__input-text_type_avatar"
          name="popup__name"
          required
          minLength="2"
          placeholder="Ссылка на картинку"
          ref={avatarRef}
        />
        <span className="popup__error" id="name-input-error"></span>
      </PopupWithForm>

  )
}

export default EditAvatarPopup;