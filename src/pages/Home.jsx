import React, { useState } from 'react';

import Form from '../components/Form';
import ModalSuccess from '../components/ModalSuccess';

import Svg from '../assets//images/icon-list.svg';
import '../scss/components/Home.scss';

const Home = () => {
  const [userRegister, setUserRegister] = useState('');

  const [modal, setModal] = useState(false);
  console.log(modal);

  const userEmail = (email) => {
    setUserRegister(email);
  };
  return (
    <>
      {!modal && (
        <div className="container-home">
          <div className="home">
            <h1>Stay updated!</h1>
            <p>Join 60,00+ product managers receiving monthly updates on:</p>
            <ul>
              <li>
                <img src={Svg} /> Product discovery and building what matters
              </li>
              <li>
                <img src={Svg} />
                Measuring to ensure updates are a success
              </li>
              <li>
                <img src={Svg} />
                And much more!
              </li>
            </ul>
            <Form handleModal={setModal} handleUser={userEmail} />
          </div>
          <div className="image-bg"></div>
        </div>
      )}
      {modal && <ModalSuccess user={userRegister} handleModal={setModal} />}
    </>
  );
};

export default Home;
