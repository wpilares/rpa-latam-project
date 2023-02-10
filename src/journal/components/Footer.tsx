import { type ReactElement } from 'react';
import '../../styles/footer.scss';

export const Footer = (): ReactElement => {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__left">
          <p className="footer__left__text--title">NotiScope</p>
          <p className="footer__left__text">Phone: (+51) 12312345</p>
          <p className="footer__left__text">Email: hello@notiscope.pe</p>
        </div>
        <div className="footer__center">
          <p className="footer__center__text--title">News Category</p>
          <p className="footer__center__text">Entertainment</p>
          <p className="footer__center__text">Sports</p>
          <p className="footer__center__text">Technology</p>
          <p className="footer__center__text">Science</p>
          <p className="footer__center__text">Business</p>
          <p className="footer__center__text">Health</p>
        </div>
        <div className="footer__right">
          <p className="footer__right__text">Terms and Conditions</p>
          <p className="footer__right__text">Privacy Policy</p>
          <p className="footer__right__text">Complaints book</p>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__bottom__text">Copyright &copy; NotiScope 2023</p>
      </div>
    </div>
  );
};
