import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <p>© 2023 Unimay Media. All rights reserved.</p>
        <div className='socialLinks'>
          <a href="https://www.youtube.com/channel/UCq5qMvmKnBphAE6WCI0-1Bg" className='socialLink'>
            <i className="fab fa-youtube"></i>
          </a>
          <a href="https://www.instagram.com/vladkesh_official/" className='socialLink'>
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/volodymyr-tertyshnyi-ab768625b/" className='socialLink'>
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;