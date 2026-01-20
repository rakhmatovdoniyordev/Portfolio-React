import React, { useEffect, useRef } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_REACT_APP_SERVICE_ID || "",
          import.meta.env.VITE_REACT_APP_TEMPLATE_ID || "",
          form.current,
          import.meta.env.VITE_REACT_APP_PUBLIC_KEY || ""
        )
        .then(
          (result) => {
            console.log("Email sent successfully:", result.text);
            alert("Xabar muvaffaqiyatli yuborildi ✅");
            form.current?.reset();
          },
          (error) => {
            console.error("EmailJS error:", error);
            alert(
              `Xatolik yuz berdi: ${
                error.text || "Iltimos, keyinroq qayta urinib ko'ring"
              }`
            );
          }
        );
    } else {
      alert("Formani topishda xatolik yuz berdi");
    }
  };

  return (
    <section className="Contact" id="Contact">
      <div className="title reveal" data-aos="fade-up">
        <div className="section-title">Men bilan bog‘lanish</div>
      </div>

      <div className="content" data-aos="fade-up">
        <div className="row">
          <div className="card reveal">
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>
            <div className="info">
              <h3>Manzil</h3>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Tashkent"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "black" }}
              >
                Tashkent
              </a>
            </div>
          </div>

          <div className="card reveal">
            <div className="contact-icon">
              <FaPhone />
            </div>
            <div className="info">
              <h3>Telefon</h3>
              <a
                href="tel:+998906672744"
                style={{ textDecoration: "none", color: "black" }}
              >
                +998 90 667 27 44
              </a>
            </div>
          </div>

          <div className="card reveal">
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <div className="info">
              <h3>Email</h3>
              <a
                href={
                  window.innerWidth < 768
                    ? "mailto:rakhmatovdoniyordev@gmail.com"
                    : "https://mail.google.com/mail/?view=cm&fs=1&to=rakhmatovdoniyordev@gmail.com"
                }
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "14px",
                }}
              >
                rakhmatovdoniyordev@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="row" data-aos="fade-up">
          <form ref={form} onSubmit={sendEmail} className="contact-form reveal">
            <h3>Xabar yuborish</h3>

            <div className="input-box">
              <input
                type="text"
                name="name"
                placeholder="Ismingizni kiriting"
                required
              />
            </div>

            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Email manzilingizni kiriting"
                required
              />
            </div>

            <div className="input-box">
              <textarea name="message" placeholder="Xabar" required />
            </div>

            <div className="input-box">
              <button
                type="submit"
                className="btn"
                style={{ width: "100%", margin: "0", cursor: "pointer" }}
              >
                Yuborish
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
