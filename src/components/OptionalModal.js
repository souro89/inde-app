import React from "react";
import Modal from "react-modal";

const OptionalModal = (props) => {
  console.log(props.selectedOption);
  return (
    <Modal
      isOpen={!!props.selectedOption}
      contentLabel="Selected Option"
      closeTimeoutMS={200}
      className="modal"
    >
      <h3 className="modal__title">Som text</h3>
      <p className="modal__body">{props.selectedOption}</p>
      <button className="button" onClick={props.onCloseModal}>
        Okay
      </button>
    </Modal>
  );
};

export default OptionalModal;
