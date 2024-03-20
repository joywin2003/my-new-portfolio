import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
       <p>&copy; 2024 Joywin Bennis All rights reserved</p>
    </footer>
  );
}

const footerStyle = {
  color: '#fff',
  textAlign: 'center',
  padding: '1rem',
  bottom: 0,
  width: '100%',
  position: 'relative',
  fontSize: '14px',

};

export default Footer;


export function Announcement() {
  const announcementStyle = {
    backgroundColor: '#451e6d',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const emojiStyle = {
    marginRight: '10px',
  };

  return (
    <div style={announcementStyle}>
      <span role="img" aria-label="Megaphone" style={emojiStyle}>📢</span>
      <p style={{ margin: 0 }}>
        A new portfolio website is in development. Stay tuned!
      </p>
    </div>
  );
}