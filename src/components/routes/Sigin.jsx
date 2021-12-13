import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthContext';
import { useHistory } from 'react-router-dom';

import { OptionSubtitle } from '../../styles/app'
import { useEffect } from 'react';

export default function Sigin() {
  return (
    <>
      <div className="menu-title">
        <OptionSubtitle>Vacinômetro Flex - Login</OptionSubtitle>
      </div>
      <FormLogin />
    </>
  )
}

export function FormLogin() {

  const { handleLogin } = useContext(AuthContext);
  const history = useHistory();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('')

  useEffect(() => {
    setMsg('');
  }, [login, password]);

  async function handleSubmit(){

      try {
        await handleLogin({
          login,
          password,
        });

        history.push('/menu');

      } catch (err) {
        setMsg('User/login invalid!');
      }

  };


  return (
    <>
      <div className="cadastro-colaborador">
        <div className="form-login">
          <form  onSubmit={(e) => handleSubmit(e.preventDefault())}>
            <label className="login-label">Username</label>
            <input className="login-input" type="text" id="login" name="" placeholder="Username" autoFocus required onChange={(e) => setLogin(e.target.value)} value={login} />
            <label className="login-label">Password</label>
            <input className="login-input" type="password" id="password" name="" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
            <button className="login-button" type="submit">Login</button>
            <strong className="setError">{msg}</strong>
          </form>
        </div>
      </div>
    </>
  )
}