import { Icons } from "../../assets/Icons";
import "../../style/header/header.css";
import "../../style/header/media.css";
const Header = () => {
    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='navbar__logo open'>
                    <Icons.Logo /> <span>HOTEL</span>
                </a>
                <ul className='navbar-lists average'>
                    <li className='navbar-lists__item'>
                        <a href='#'>Home</a>
                    </li>
                    <li className='navbar-lists__item'>
                        <a href='#'>Branch</a>
                    </li>
                    <li className='navbar-lists__item'>
                        <a href='#'>Search</a>
                    </li>
                    <li className='navbar-lists__item'>
                        <a href='#'>About Us</a>
                    </li>
                    <li className='navbar-lists__item'>
                        <a href='#'>Pages</a>
                    </li>
                    <li className='navbar-lists__item'>
                        <a href='#'>Blog</a>
                    </li>
                </ul>
                <button className='navbar__btn open'>Reservation</button>
            </nav>
            <header className='header-content container'>
                <div className='header-content__info'>
                    <h1 className='header-content__info_title open'>
                        Discover a hotel that defies a new dimension of luxury.
                    </h1>
                    <p className='header-content__info_text average'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                        standard dummy.
                    </p>
                    <div className='header-content__line'></div>
                    <span className='header-content__media'>
                        <button className='header-content__info_btn open'>
                            Get Started
                        </button>
                        <button className='header-content__info_video open'>
                            <Icons.videoPaused /> <span>Watch Video</span>
                        </button>
                    </span>
                </div>
                <div className='header-content__actions'>
                    <img
                        src='../../../public/building.png'
                        alt='hello world'
                        className='header-content__actions_img'
                    />
                    <div className='header-content__actions_statics'>
                        <p className='header-content_statics-list open'>
                            <svg
                                width='5'
                                height='5'
                                viewBox='0 0 5 5'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <circle
                                    cx='2.5'
                                    cy='2.5'
                                    r='2.5'
                                    fill='#4C6487'
                                />
                            </svg>
                            Market Static
                        </p>
                        <span className='header-content_stats-course'>
                            <p className='header-content_course-title open'>
                                Course <br /> overview
                            </p>
                            <p>+15%</p>
                        </span>
                        <Icons.headerLine />
                        <div className='header-content_line-circle'></div>
                        <ul className='header-content_course-month'>
                            <li>Jan</li>
                            <li>Feb</li>
                            <li>Mar</li>
                            <li>Apr</li>
                            <li>May</li>
                            <li className='filled-month'>Jun</li>
                            <li>Jul</li>
                        </ul>
                    </div>
                    <div className='header-content__actions_payment'>
                        <div className='header-content_payment-img'>
                            <Icons.Card />
                        </div>
                        <p className="work">Payment</p>
                        <span className="work">on internet</span>
                    </div>
                    <div className='header-content__actions_big-line'></div>
                    <div className='header-content__actions_line'></div>
                    <div className='header-content__actions_line-two'></div>
                    <div className='header-content__actions_line-three'></div>
                </div>
            </header>
        </div>
    );
};

export default Header;
