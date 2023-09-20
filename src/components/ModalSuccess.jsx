import React from 'react';
import '../scss/components/ModalSuccess.scss';

import ImageSuccess from '../assets/images/icon-success.svg';

const ModalSuccess = ({ user, handleModal }) => {
  return (
    <div className="container-modal">
      <img src={ImageSuccess} alt="ImageSuccess" />
      <div className="modal">
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to <b>{user}</b> Please open it and
          click the button inside to confirm your subscription.
        </p>
        <button onClick={() => handleModal(false)}>Dismíss message</button>
      </div>
    </div>
  );
};

export default ModalSuccess;
