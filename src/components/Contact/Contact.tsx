import React, { useEffect } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";

const Contact: React.FC = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: false,
        });
      }, []);
  return (
    <section className="Contact" id="Contact">
      <div className="title reveal"  data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
        <div className="section-title">Men Bilan Bog'lanish</div>
      </div>
      <div className="content"  data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
        <div className="row">
          <div className="card reveal">
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>
            <div className="info">
              <h3>Adress</h3>
              <span>Jizzakh Region</span>
            </div>
          </div>
          <div className="card reveal">
            <div className="contact-icon">
              <FaPhone />
            </div>
            <div className="info">
              <h3>Telefon</h3>
              <span>+998 90 667 27 44</span>
            </div>
          </div>
          <div className="card reveal">
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <div className="info">
              <h3>Email</h3>
              <span>example@email.com</span>
            </div>
          </div>
          <div className="card reveal">
            <div className="contact-icon">
              <FaGlobe />
            </div>
            <div className="info">
              <h3>Website</h3>
              <span>Birnima.com</span>
            </div>
          </div>
        </div>
        <div className="row"  data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
          <div className="contact-form reveal">
            <h3>Xabar Yuborish</h3>
            <div className="input-box">
              <input type="text" placeholder="Ism" />
            </div>
            <div className="input-box">
              <input type="text" placeholder="Email" />
            </div>
            <div className="input-box">
              <textarea placeholder="Xabar"></textarea>
            </div>
            <div className="input-box">
              <input type="submit" className="send-btn" value="Yuborish" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
