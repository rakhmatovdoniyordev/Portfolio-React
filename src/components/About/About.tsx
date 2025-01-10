import React, { useEffect } from 'react';
import img from "../../assets/about.png"
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
      <div className="title" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
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
            Assalomu Aleykum barchaga. Mening ismim Doniyor. Hozirda 21 yoshdaman va Toshkent Axborot Texnologiyalari Univesiteti Qarshi filialida Kompyuter injiniring fakulteti talabasiman. Najot ta'lim o'quv markazining FRONTEND Standart React.js Kursida o'qiyman. Yangi narsalarni o'rganishni va o'zimni rivojlantirishni yaxshi ko'raman. Va kelajakdagi maqsadim shu sohada kuchli mutahasis bo'lib o'zimning shaxsiy IT Kopaniyamni yaratish. 
          </p>
          <a href="#" className="btn">Batafsil</a>
        </div>
      </div>
    </section>
  );
};

export default About;
