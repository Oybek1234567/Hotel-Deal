import { Icons } from "../../../assets/Icons";
import "../../../style/main/section/contact.css"
const Contact = () => {
  return (
      <div className='contact'>
          <div className='contact__form'>
              <p className='form_name average'>Stay in Touch</p>
              <h4 className='form_title open'>
                  Signup to receive news and updates from our hotel.
              </h4>
              <span className='form__input'>
                  <input
                      type='text'
                      placeholder='Enter Your Email Address'
                      className='open'
                  />
                  <button type='submit' className='open'>
                      subscribe
                  </button>
              </span>
          </div>
          <div className='contact__items'>
              <Icons.lightGrayTopArrow />
              <Icons.lightGrayTopArrow />
              <Icons.lightGrayTopArrow />
              <Icons.lightGrayTopArrow />
          </div>{" "}
          <div className='contact__items-two'>
              <Icons.lightGrayTopArrow />
              <Icons.lightGrayTopArrow />
              <Icons.lightGrayTopArrow />
              <Icons.lightGrayTopArrow />
          </div>
      </div>
  );
}

export default Contact
