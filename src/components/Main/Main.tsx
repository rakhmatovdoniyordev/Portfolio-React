import React from 'react';
import { FaInstagram, FaTelegram, FaLinkedin } from 'react-icons/fa';

const Main: React.FC = () => {
  return (
    <section className="main" id="main">
      <div className="content">
        <h2>Assalomu Aleykum Men <br /> <span>Rakhmatov Doniyor</span></h2>
        <div className="animated-text">
          <h3>Web Developer</h3>
          <h3>Backend Developer</h3>
          <h3>Student</h3>
        </div>
        <a href="https://github.com/rakhmatovdoniyordev?tab=repositories" className="btn">Ishlarimni Ko'rish</a>
        <div className="media-icons">
          <a href="https://www.instagram.com/rakhmatov_doniyor/"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/doniyor-rakhmatov-4212b2349/"><FaLinkedin /></a>
          <a href="https://t.me/rakhmatov_doniyor"><FaTelegram /></a>
        </div>
      </div>
    </section>
  );
};

export default Main;
