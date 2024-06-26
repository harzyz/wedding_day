import React, { useEffect } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import styles from "./modal.module.css";

const Modal = ({ isOpen, onClose, children }) => {
  const toggleBodyOverflow = (open) => {
    const body = document.body;
    if (body) {
      body.style.overflow = open ? "hidden" : "unset";
    }
  };

  useEffect(() => {
    toggleBodyOverflow(isOpen);
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className={styles.modalWrapper}
          onClick={onClose}
          style={{ zIndex: 1000 }}>
          <div
            style={{
              background: "#ffffff",
            }}
            className={styles.modal_inner_wrapper}
            onClick={(e) => e.stopPropagation()}>
            <div className={styles.close_icon}>
              <IoMdCloseCircleOutline onClick={onClose} />
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
