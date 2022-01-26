import React from "react";
import Form from "../form/Form";
import styles from "./Modal.module.css";
import { ReactComponent as Close } from "./svg/Close.svg";

const Modal = ({ onModalClose, onAddData }) => {
  const onModalCloser = () => {
    onModalClose();
  };
  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal}>
        <Form onAddData={onAddData} />
        <div onClick={onModalCloser} className={styles.close_container}>
          <Close className={styles.close} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
