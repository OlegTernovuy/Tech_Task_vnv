import "./contact.scss";

import { PiTelegramLogoDuotone } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import { FaViber } from "react-icons/fa";
import { MdWhatsapp } from "react-icons/md";
import { ContactForm } from "../../ui/form/ContactForm";

export const Contact = () => {
  return (
    <div className="contact-wrapper" id="contact">
      <h1 className="contact-title">Contact us</h1>
      <div className="contact">
        <div className="our-contact" data-aos="fade-right">
          <ul className="our-contact-ul">
            <li className="our-contact-li">
              <TfiEmail className="our-contact-li-icon" />
              Email
            </li>
            <li className="our-contact-li">
              <PiTelegramLogoDuotone className="our-contact-li-icon" />
              Telegram
            </li>
            <li className="our-contact-li">
              <MdWhatsapp className="our-contact-li-icon" />
              Whatsapp
            </li>
            <li className="our-contact-li">
              <FaViber className="our-contact-li-icon" />
              Viber
            </li>
          </ul>
        </div>
        <div data-aos="fade-left">
          <ContactForm />
        </div>
      </div>
      <div className="contact-social">
        <ul className="contact-social-ul">
          <li className="contact-social-li">
            <a
              href="https://www.facebook.com/profile.php?id=100088433736254"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>{" "}
          </li>
          <li className="contact-social-li">
            <a
              href="https://www.instagram.com/vnv_solutions/?igshid=MWI4MTIyMDE%3D"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </li>
          <li className="contact-social-li">
            <a
              href="https://www.linkedin.com/company/vnv-tech/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li className="contact-social-li">
            <a
              href="https://t.me/vnv_solutions"
              target="_blank"
              rel="noreferrer"
            >
              Telegram
            </a>
          </li>
          <li className="contact-social-li">
            <a
              href="https://www.tiktok.com/@vnvsolutions?_t=8YVB28bloQP&_r=1"
              target="_blank"
              rel="noreferrer"
            >
              TikTok
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
