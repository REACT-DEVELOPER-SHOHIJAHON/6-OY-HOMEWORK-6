import React, { useState } from 'react';
import './Register.css';
import axios from "../../api/axios";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    avatar: ""
  });

  const { name, email, password, avatar } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("users", formData);
      if (response.status === 201) {
        toast.success("User successfully created");
        navigate("/login");
      } else if (response.status === 400) {
        toast.error("Ro‘yxatdan o‘tish noto‘g‘ri. Iltimos, kiritishlaringizni tekshiring.");
      }
    } catch (error) {
      toast.error("Xatolik yuz berdi. Iltimos, qayta urinib koʻring.");
    }
  };

  return (
    <div className='register-page'>
      <div className="register-container">
        <div className="register-form-wrapper">
          <form onSubmit={handleSubmit} className='register-form'>
            <input
              type="text"
              name="name"
              placeholder='Enter your name'
              value={name}
              onChange={handleChange}
              className='register-input'
              required
            />
            <input
              type="email"
              name="email"
              placeholder='Enter your email'
              value={email}
              onChange={handleChange}
              className='register-input'
              required
            />
            <input
              type="password"
              name="password"
              placeholder='Enter your password'
              value={password}
              onChange={handleChange}
              className='register-input'
              required
            />
            <input
              type="url"
              name="avatar"
              placeholder='Enter avatar URL'
              value={avatar}
              onChange={handleChange}
              className='register-input'
            />
            <p className='register-text'>
              Already have an account? <Link to="/login" className='register-link'>Login</Link>
            </p>
            <button type='submit' className='register-button'>Register</button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Register;


