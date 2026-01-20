import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import nornlight from "../../assets/logo.svg"
import biletick from "../../assets/biletick.png"

const Work: React.FC = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: false,
        });
      }, []);
  return (
    <section className="Work" id="Work" data-aos="fade-up"
    data-aos-anchor-placement="top-bottom">
      <div className="title reveal" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
        <div className="section-title">Mening Ishlarim</div>
      </div>
      <div className="content" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
        <div className="card reveal">
          <div className="card-img">
            <a href="https://nornlight-delta.vercel.app/">
              <img src={nornlight}  alt="Work 1" />
            </a>
          </div>
        </div>
        <div className="card reveal">
          <div className="card-img">
          <a href="https://biletick.vercel.app/" style={{ textDecoration: "none"}}>
              <img src={biletick} alt="" />
            </a>
          </div>
        </div>
        <div className="title" data-aos="fade-up"
        data-aos-anchor-placement="top-bottom">
          <a href="https://github.com/rakhmatovdoniyordev?tab=repositories" className="btn">Barchasini ko'rish</a>
        </div>
      </div>
    </section>
  );
};

export default Work;
