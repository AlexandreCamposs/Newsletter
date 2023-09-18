import React, { useState } from 'react';

import '../scss/components/Form.scss';

const Form = () => {
  const [usersList, setUsersList] = useState([]);
  const [users, setUsers] = useState({ name: '', email: '' });

  const handleInputRegister = (e) => {
    const { name, value } = e.target;
    setUsers({ ...users, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const newUser = {
      id: Math.floor(Math.random() * 100),
      name: users.name,
      email: users.email,
    };
    setUsersList([...usersList, newUser]);
    setUsers({ name: '', email: '' });
  };
  console.log(usersList);
  console.log(users);
  return (
    <>
      <form onSubmit={handleRegister}>
        <label>
          Nome
          <input
            type="text"
            name="name"
            value={users.name}
            onChange={handleInputRegister}
          />
        </label>
        <label>
          Email address
          <input
            type="text"
            name="email"
            placeholder="email@company.com"
            value={users.email}
            onChange={handleInputRegister}
          />
        </label>
        <button type="submit">Subscribe to monthly newsletter</button>
      </form>
    </>
  );
};

export default Form;
