import React from 'react';

import ImageSuccess from '../assets/images/icon-success.svg';

const ModalSuccess = ({ user }) => {
  return (
    <div className="modal">
      <img src={ImageSuccess} alt="ImageSuccess" />
      <h1>Thanksfor subscribing!</h1>
      <p>
        A confirmation email has been sent to <b>{user}</b> Please open it and
        click the button inside to confirm your subscription.
      </p>
      <button>Dismíss message</button>
    </div>
  );
};

export default ModalSuccess;
