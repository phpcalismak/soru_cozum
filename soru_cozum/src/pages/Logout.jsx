import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('isLoggedIn', 'false');
    navigate('/login');
  }, [navigate]);

  return (
    <div>
      <h1>Çıkış Yapılıyor...</h1>
    </div>
  );
};

export default Logout;
