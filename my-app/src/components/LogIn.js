import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    const closeModalOnOutsideClick = (e) => {
      if (showModal && e.target.className === 'modal') {
        setShowModal(false);
      }
    };

    window.addEventListener('mousedown', closeModalOnOutsideClick);

    return () => {
      window.removeEventListener('mousedown', closeModalOnOutsideClick);
    };
  }, [showModal]);


  const handleLogin = () => {
    if (email === 'userid' && password === 'userpassword') {
        navigate('/manage-payment'); 
    } else {
      setShowModal(true);
      setModalMessage("At this time, the site is not available in your Country.");
    }
  };

  const handleSignUp = () => {
    navigate('/signup'); 
  };

  const closeModal = () => {
    setShowModal(false);
    setModalMessage('');
  };

  return (
    <div className='login-form'>
      <h1>Login</h1>
      <input
        className='login-input'
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
      className='login-input'
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className='login-button' onClick={handleLogin}>Login</button>
      <p>If you don't have an account, <span onClick={handleSignUp}>sign up here</span></p>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>{modalMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogIn;
