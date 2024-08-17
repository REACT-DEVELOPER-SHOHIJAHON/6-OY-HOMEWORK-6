import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';
import './Profile.css';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('auth/profile');
        setUser(response.data);
      } catch (err) {
        console.error('Profilni olishda xatolik yuz berdi:', err);
        setError(err);
        if (err.response && err.response.status === 401) {
          navigate('/register');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [navigate]);

  if (loading) {
    return (
      <section className='profile-page'>
        <div className="profile-container">
          <div className="profile-card">
            <p className='loading-text'>Loading...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className='profile-page'>
        <div className="profile-container">
          <div className="profile-card">
            <p className='error-text'>Xatolik yuz berdi. Keyinroq qayta urinib ko‘ring.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className='profile-page'>
      <div className="profile-container">
        <div className="profile-card">
          {user.avatar ? (
            <img src={user.avatar} alt={user.name} className='profile-avatar' />
          ) : (
            <div className='profile-avatar-placeholder' />
          )}
          <h2 className='profile-name'>{user.name}</h2>
          <p className='profile-email'>{user.email}</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;


