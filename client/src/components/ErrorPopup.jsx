import React from 'react';

const ErrorPopup = ({ message, onClose }) => {
  const popupStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(255, 0, 0, 0.9)',
    padding: '50px',
    borderRadius: '10px',
    zIndex: '999',
    textAlign: 'center',
    color: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
    maxWidth: '80%',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '5px',
    right: '5px',
    cursor: 'pointer',
    fontSize: '20px',
  };

  return (
    <div style={popupStyle}>
      <span onClick={onClose} style={closeButtonStyle}>&times;</span>
      <h2>Error</h2>
      <p>{message}</p>
    </div>
  );
}

export default ErrorPopup;
