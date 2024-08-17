import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../../api/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSuccess = () => toast.success('Kirish muvaffaqiyatli');
  const handleLoginError = () => toast.error('Tizimga kirishda xatolik yuz berdi. Hisob maʼlumotlaringizni tekshiring');

  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('auth/login/', { email, password });
      if (response.status === 201 && response.data.access_token) {
        handleLoginSuccess();
        localStorage.setItem('token', response.data.access_token);
        navigate('/profile');
      }
    } catch (error) {
      handleLoginError();
    }
  };

  return (
    <div className='login-page'>
      <div className='login-container'>
        <div className='login-card'>
          <form onSubmit={handleSubmitLogin} className='login-form'>
            <input
              type='email'
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='login-input'
            />
            <input
              type='password'
              placeholder='Enter your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='login-input'
            />
            <p className='login-text'>
              Don't have an account? <Link to='/register' className='login-link'>Register</Link>
            </p>
            <button type='submit' className='login-button'>Login</button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Login;


