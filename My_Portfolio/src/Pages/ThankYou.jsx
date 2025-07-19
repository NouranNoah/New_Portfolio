import React from 'react';
import './pages.css'; 

export default function ThankYou() {
  return (
    <div className="thankYouPage" style={{ textAlign: 'center', padding: '100px 20px' }}>
      <h1 style={{ fontSize: '40px', color: '#0090b0' }}>Thank You!</h1>
      <p style={{ fontSize: '20px', color: '#4b0011', marginTop: '20px' }}>
        Your message has been sent successfully. I’ll get back to you soon!
      </p>
    </div>
  );
}
