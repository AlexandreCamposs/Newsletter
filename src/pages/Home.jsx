import React, { useState } from 'react';
import Form from '../components/Form';
import '../scss/components/Home.scss';
import Image from '../assets//images/illustration-sign-up-desktop.svg';
import Svg from '../assets//images/icon-list.svg';

const Home = () => {
  const [user, setUser] = useState('');

  const userRegister = (dadosDoFilho) => {
    setUser(dadosDoFilho);
  };
  return (
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
        <Form />
      </div>

      <img src={Image} alt="" />
    </div>
  );
};

export default Home;
