import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const SignUp = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [profession, setProfession] = useState('');
  const [isAllFieldsFilled, setIsAllFieldsFilled] = useState(false);
  const [showModal, setShowModal] = useState(false);



  const areAllFieldsFilled = () => {
    return firstName && lastName && age && city && profession;
  };


  const handleSignUp = () => {
    setIsAllFieldsFilled(areAllFieldsFilled())
    if (firstName && lastName && age && city && profession) {
      setIsAllFieldsFilled(true);
    } else {
      setIsAllFieldsFilled(false);
      setShowModal(true); 
    }
  };


  const handleContinue = () => {
    navigate('/manage-payment');
  };


  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (showModal && e.target.className === 'modal') {
        setShowModal(false);
      }
    };

    window.addEventListener('mousedown', handleOutsideClick);

    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [showModal]);


  return (
    <div className='signup-form'>
      <h1>Sign Up</h1>
      <input
      className='signup-input'
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
      className='signup-input'
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
      className='signup-input'
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
      className='signup-input'
        type="text"
        placeholder="City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <input
      className='signup-input'
        type="text"
        placeholder="Profession"
        value={profession}
        onChange={(e) => setProfession(e.target.value)}
      />
      <button className={`login-input ${isAllFieldsFilled ? 'filled' : ''}`} onClick={handleSignUp}>Sign Up</button>

      {isAllFieldsFilled && (
        <div className="modal">
          <div className="modal-content">
            <h2>Welcome {firstName} {lastName}!</h2>
            <p>TERMS AND CONDITION:</p>
            <p></p>
            <button className='login-input' onClick={handleContinue}>Agree and Continue</button>
          </div>
        </div>
      )}

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <p>Please fill in all fields.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
