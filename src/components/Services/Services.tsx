import React, { useEffect } from "react";
import { FaPalette, FaFileCode, FaObjectGroup } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Services: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <section className="Services" id="Services" data-aos="fade-up"
    data-aos-anchor-placement="top-bottom">
      <div className="title">
        <div className="section-title">Mening Xizmatlarim</div>
      </div>
      <div className="content">
        <div className="card reveal">
          <div className="service-icon">
            <FaPalette />
          </div>
          <div className="info">
            <h3>Web Dizayner</h3>
            <p>
              Sizning saytingiz uchun turli xil Dizaynlar qilish hizmatini talif
              qilaman.
            </p>
          </div>
        </div>
        <div className="card reveal">
          <div className="service-icon">
            <FaFileCode />
          </div>
          <div className="info">
            <h3>Web Dasturchi</h3>
            <p>
              Frontend dasturchi sifatida saytingizning frontend qismini mo'jaz
              ko'rinishda yasab beraman. Va o'z hizmatlarimga kafolat beraman.
            </p>
          </div>
        </div>
        <div className="card reveal">
          <div className="service-icon">
            <FaObjectGroup />
          </div>
          <div className="info">
            <h3>You Tuber</h3>
            <p>
              Video montaj sohasini ham o'zlashtirganman. Sizga Videolaringizni
              montaj qilish bo'yicha yordam berishim mumkin. Adobe Premier Pro
              ilovasida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
