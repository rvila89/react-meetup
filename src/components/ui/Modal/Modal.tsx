import React from 'react'
import classes from './Modal.module.css'

const Modal: React.FC<{ handleCloseModal: () => void }> = ({
  handleCloseModal,
}) => {
  return (
    <>
      <div className={classes.darkBG} onClick={handleCloseModal} />
      <div className={classes.centered}>
        <div className={classes.modal}>
          <div className={classes.modalContent}>
            Meetup añadido correctamente
          </div>

          <div className={classes.modalContainer}>
            <button className={classes.continueBtn} onClick={handleCloseModal}>
              Continuar
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
