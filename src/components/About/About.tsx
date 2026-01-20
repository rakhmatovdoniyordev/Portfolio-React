import React, { useEffect } from "react";
import img from "../../assets/about.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const About: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
  return (
    <section className="About" id="About">
      <div
        className="title"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <div className="section-title">Men Haqimda</div>
      </div>
      <div className="content">
        <div className="column col-left" data-aos="fade-right">
          <div className="img-card">
            <img src={img} alt="Doniyor Rakhmatov" />
          </div>
        </div>
        <div className="column col-right" data-aos="fade-left">
          <h2 className="content-title">Salom! Men Rakhmatov Doniyor</h2>
          <p className="paragraph-text">
            Mening ismim Doniyor. Hozirda 22
            yoshdaman va Qarshi davlat texnika universitetida Raqamli texnologiyalar va sun'iy intellekt kafedrasi Kompyuter injiniring fakultetida sirtqi ta'lim talabasiman. Najot ta'lim
            o'quv markazining FRONTEND Standart React.js Kursini tamomlaganman.
            Hozirda "Limon Pay" kompaniyasida amaliyot o'tamoqdaman va Backend dasturlashni o'rganmoqdaman(Python, Django). Va kelajakdagi maqsadim shu sohada kuchli mutahasis bo'lib o'zimning shaxsiy IT Kopaniyamni yaratish.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
