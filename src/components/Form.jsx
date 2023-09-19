import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ModalSuccess from './ModalSuccess';

import '../scss/components/Form.scss';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ id: '', name: '', email: '' });
  const [usersList, setUsersList] = useState([]);
  const [userRegister, setUserRegister] = useState('');
  const [modal, setModal] = useState(false);

  const handleRegister = (data) => {
    const newUser = {
      id: Math.floor(Math.random() * 100),
      name: data.name,
      email: data.email,
    };

    setUsersList([...usersList, newUser]);
    reset();
    setUserRegister(data.email);
  };

  console.log(usersList);

  return (
    <>
      <form onSubmit={handleSubmit(handleRegister)}>
        <label>
          Nome
          {errors.name?.type === 'minLength' && <small>Nome incompleto</small>}
          {errors.name?.type === 'required' && <small>Digite o nome</small>}
          <input
            type="text"
            name="name"
            placeholder="Nome e sobrenome"
            {...register('name', {
              required: true,
              validate: {
                minLength: (v) => v.length >= 3,
              },
            })}
          />
        </label>
        <label>
          Email address
          {errors.email?.message && <small>{errors.email.message}</small>}
          <input
            type="text"
            name="email"
            placeholder="email@company.com"
            {...register('email', {
              required: 'Email nescessario',
              validate: {
                maxLength: (v) =>
                  v.length <= 30 || 'O e-mail deve ter no máximo 30 caracteres',
                invalidEmail: (v) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                  'O endereço de e-mail deve ser um endereço válido',
              },
            })}
          />
        </label>

        <button type="submit">Subscribe to monthly newsletter</button>
      </form>
      {modal && <ModalSuccess user={userRegister} />}
    </>
  );
};

export default Form;
