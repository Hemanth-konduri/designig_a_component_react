import React from 'react';
import './usercard.css'; 

const Usercard = () => {
  
  const profilePhoto = 'https://i.pinimg.com/474x/9a/be/ae/9abeae17b16f6f5f48ea3693af620b52.jpg'; 
  const name = 'Lakshmi Prasad Katakam';
  const email = 'lakshmiprasadkatakam@gmail.com';
  const phone = '+9114013988';
  const address = 'A village from Ongole, AP';

  return (
    <div className="user-card">
      <div className="profile-section">
        <img src={profilePhoto} alt="Profile" className="profile-photo" />
        <h2 className="user-name">{name}</h2>
      </div>
      <div className="details-section">
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Address:</strong> {address}</p>
      </div>
    </div>
  );
};

export default Usercard;