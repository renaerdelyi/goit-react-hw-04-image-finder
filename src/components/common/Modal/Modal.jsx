import { useEffect } from "react";

const Modal = (props) =>  {

  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.code === 'Escape') {
        props.onClose();
      }
    };

    window.addEventListener('keydown', handleEscClose);

    return () => {
      window.removeEventListener('keydown', handleEscClose);
    };
  }, []);  

  const handleClickOverlay = (e) => {
    if (e.target === e.currentTarget) {
      props.onClose();
    }
  };

  return (
    <div className="overlay" onClick={handleClickOverlay}>
      <div className="modal">
        <img src={props.imageURL} alt="Modal content" />
      </div>
    </div>
  );  
}

export default Modal;