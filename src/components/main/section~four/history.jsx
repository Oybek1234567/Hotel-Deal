import { Icons } from "../../../assets/Icons";
import "../../../style/main/section/history.css";
const History = () => {
  return (
      <div className='history'>
          <div className='history__info'>
              <strong className='open'>Discover Our History</strong>
              <p className='average'>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy.
                  <br />
                  <br />
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable.
              </p>
              <div className='history__btn'>
                  <button className='history__info_btn'>Explore More</button>
                  <button className='history__info_video-btn'>
                      <Icons.videoPaused /> <span>Watch Video</span>
                  </button>
              </div>
              <div className="history__item">
                  <Icons.fourTopArrows />
              </div>
          </div>
          <div className='history__img'>
              <button className="history__img_icon">    
              <Icons.bigVideo />
              </button>
              <img src='../../../../public/office.jpg' alt='office img' />
          </div>
      </div>
  );
}

export default History
