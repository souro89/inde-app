import React from "react";
import Modal from "react-modal";

const OptionalModal = (props) => {
  console.log(props.selectedOption);
  return (
    <Modal isOpen={!!props.selectedOption} contentLabel="Selected Option">
      <h3>Som text</h3>
      <p>{props.selectedOption}</p>
      <button onClick={props.onCloseModal}>Okay</button>
    </Modal>
  );
};

export default OptionalModal;
