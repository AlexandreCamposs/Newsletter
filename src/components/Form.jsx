import { useState } from 'react';
import { useForm } from 'react-hook-form';

import '../scss/components/Form.scss';

const Form = ({ handleModal, handleUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ id: '', name: '', email: '' });
  const [usersList, setUsersList] = useState([]);

  const handleRegister = (data) => {
    const newUser = {
      id: Math.floor(Math.random() * 100),
      name: data.name,
      email: data.email,
    };

    setUsersList([...usersList, newUser]);
    reset();
    handleUser(data.email);
    handleModal(true);
  };

  console.log(usersList);

  return (
    <>
      <form onSubmit={handleSubmit(handleRegister)}>
        <label>
          <div className="label-form">
            Nome
            {errors.name?.type === 'minLength' && (
              <small>Nome incompleto</small>
            )}
            {errors.name?.type === 'required' && <small>Digite o nome</small>}
          </div>
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
          <div className="label-form">
            Email address
            {errors.email?.message && <small>{errors.email.message}</small>}
          </div>
          <input
            type="text"
            name="email"
            placeholder="email@company.com"
            {...register('email', {
              required: 'Email obrigatório',
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
    </>
  );
};

export default Form;
