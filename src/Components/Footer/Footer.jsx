import React from "react";
import "./Footer.scss";
import Logo from "../Logo/Logo";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logoBox">
                  <div className="footer__logoBox-img">
            <Logo size="large" />
          </div>
        <div className="footer__logoBox-text">
          At slam.fit, we make group workouts fun, daily food healthy & tasty,
          mental fitness easy with yoga & meditation, Medical & lifestyle care
          hassle-free.#BeBetterEveryDay
        </div>
      </div>

      <div className="footer__textBoxContainer">
        <div className="footer__textBoxContainer__textBoxOne">
          <div>slam.fit for buisness</div>
          <div>slam.fit franchise</div>
          <div>corporate partnership</div>
          <div>slam pass network</div>
        </div>


        <div className="footer__textBoxContainer__textBoxThree">
          <div>contact us</div>
          <div>privacy policy</div>
          <div>refund policy</div>
          <div>terms & conditions</div>
        </div>
      </div>

      <div className="footer__storeBox">
        {/* <div className="footer__storeBox-links">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/app-store.png"
            alt="apple-store"
          />
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/google-play.png"
            alt="google-store"
          />
        </div> */}

        <div className="footer__storeBox-social-links">
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/youtube.svg"
            alt="youtube"
          />
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/fb-page.svg"
            alt="facebook"
          />
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/twitter-page.svg"
            alt="twitter"
          />
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/insta-page.svg"
            alt="instagram"
          />
          <img
            src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_2,f_auto,fl_progressive//image/footer-web/FooterV3/linked-in-page.svg"
            alt="linkedin"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
