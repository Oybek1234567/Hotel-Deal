import { Icons } from "../../assets/Icons";
import "../../style/footer/footer.css";
const Footer = () => {
  return (
      <>
          <div className='footer'>
              <div className='footer__logo footer__info'>
                  <Icons.Logo />
                  <span className='open'>HOTEL</span>
                  <p className='average'>
                      Itawa is a responsive real estate landing page
                      template.Itawa is a landing page template.Itawa template.
                  </p>
              </div>
              <div className='footer__contact'>
                  <p className='open'>Contact Us</p>
                  <span className='footer__contact_item'>
                      <Icons.location />{" "}
                      <span>123 Business Centre London SW1A 1AA</span>
                      <br />
                      <br />
                      <Icons.call />
                      <span>+1 0000 000 00</span>
                      <br />
                      <br />
                      <Icons.mail />
                      <span>info@businessname.com</span>
                  </span>
              </div>
              <div className='footer__follow'>
                  <p className='open'>Follow Us</p>
                  <div className='footer__follow_media'>
                      <span>
                          <Icons.facebook />
                      </span>
                      <span>
                          <Icons.instagram />
                      </span>
                      <span>
                          <Icons.twitter />
                      </span>
                  </div>
                  <span className='footer__follow_text average'>
                      Itawa is a responsive real estate landing page
                      template.Itawa is a landing page template.Itawa template.
                  </span>
              </div>
          </div>
          <div className='footer-sm'>
        <h4>©HOTEL Official 2022</h4>
        <ul className="open">
          <li>Privacy Policy</li>
          <li>Cookies</li>
          <li>Terms of service</li>
        </ul>
          </div>
      </>
  );
};

export default Footer;
