import { Icons } from "../../../assets/Icons";
import "../../../style/main/section/customers.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
const Customers = () => {
    return (
        <div className='customers'>
            <h4 className='customers__heading open'>Our Happy Customers</h4>
            <p className='customers__text average'>
                Know about our clients, we are a woldwide corporate brand
            </p> 
            <Swiper
                width={400}
                scrollbar={{
                    hide: false,
                }}
                modules={[Scrollbar]}
                className='mySwiper customers__card'>
                <SwiperSlide>
                    <div className='card_one'>
                        <img
                            src='../../../../public/first-bro.png'
                            aria-hidden='true'
                            width={83}
                            height={83}
                        />
                        <b className='card_one-name'>Wade Warren</b>
                        <small className='card_one-job'>Louis Vuitton</small>
                        <p className='card_one-text'>
                            Necessary to deliver white glove, fully managed
                            campaigns that surpass industry benchmarks.Take your
                            career to next level.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card_two'>
                        <img
                            src='../../../../public/second-bro.png'
                            aria-hidden='true'
                            width={83}
                            height={83}
                        />
                        <b className='card_one-name text-color'>
                            Albert Florise
                        </b>
                        <small className='card_one-job text-color'>
                            Nintendo
                        </small>
                        <p className='card_one-text text-color'>
                            Necessary to deliver white glove, fully managed
                            campaigns that surpass industry benchmarks.Take your
                            career to next level.
                        </p>
                        <div className='card_two-item'>
                            <Icons.grayTopArrows />
                            <Icons.grayTopArrows />
                            <Icons.grayTopArrows />
                            <Icons.grayTopArrows />
                        </div>
                        <div className='card_two-item--scaled'>
                            <Icons.grayTopArrows />
                            <Icons.grayTopArrows />
                            <Icons.grayTopArrows />
                            <Icons.grayTopArrows />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card_one'>
                        <img
                            src='../../../../public/third-bro.png'
                            aria-hidden='true'
                            width={83}
                            height={83}
                        />
                        <b className='card_one-name'>Jenny Wilson</b>
                        <small className='card_one-job'>Bank of America</small>
                        <p className='card_one-text'>
                            Necessary to deliver white glove, fully managed
                            campaigns that surpass industry benchmarks.Take your
                            career to next level.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card_one'>
                        <img
                            src='../../../../public/first-bro.png'
                            aria-hidden='true'
                            width={83}
                            height={83}
                        />
                        <b className='card_one-name'>Wade Warren</b>
                        <small className='card_one-job'>Louis Vuitton</small>
                        <p className='card_one-text'>
                            Necessary to deliver white glove, fully managed
                            campaigns that surpass industry benchmarks.Take your
                            career to next level.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card_two'>
                        <img
                            src='../../../../public/second-bro.png'
                            aria-hidden='true'
                            width={83}
                            height={83}
                        />
                        <b className='card_one-name text-color'>
                            Albert Florise
                        </b>
                        <small className='card_one-job text-color'>
                            Nintendo
                        </small>
                        <p className='card_one-text text-color'>
                            Necessary to deliver white glove, fully managed
                            campaigns that surpass industry benchmarks.Take your
                            career to next level.
                        </p>
                        <div className='card_two-item'>
                            <Icons.grayTopArrows />
                            <Icons.grayTopArrows />
                            <Icons.grayTopArrows />
                            <Icons.grayTopArrows />
                        </div>
                        <div className='card_two-item--scaled'>
                            <Icons.grayTopArrows />
                            <Icons.grayTopArrows />
                            <Icons.grayTopArrows />
                            <Icons.grayTopArrows />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card_one'>
                        <img
                            src='../../../../public/third-bro.png'
                            aria-hidden='true'
                            width={83}
                            height={83}
                        />
                        <b className='card_one-name'>Jenny Wilson</b>
                        <small className='card_one-job'>Bank of America</small>
                        <p className='card_one-text'>
                            Necessary to deliver white glove, fully managed
                            campaigns that surpass industry benchmarks.Take your
                            career to next level.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card_one'>
                        <img
                            src='../../../../public/first-bro.png'
                            aria-hidden='true'
                            width={83}
                            height={83}
                        />
                        <b className='card_one-name'>Wade Warren</b>
                        <small className='card_one-job'>Louis Vuitton</small>
                        <p className='card_one-text'>
                            Necessary to deliver white glove, fully managed
                            campaigns that surpass industry benchmarks.Take your
                            career to next level.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card_two'>
                        <img
                            src='../../../../public/second-bro.png'
                            aria-hidden='true'
                            width={83}
                            height={83}
                        />
                        <b className='card_one-name text-color'>
                            Albert Florise
                        </b>
                        <small className='card_one-job text-color'>
                            Nintendo
                        </small>
                        <p className='card_one-text text-color'>
                            Necessary to deliver white glove, fully managed
                            campaigns that surpass industry benchmarks.Take your
                            career to next level.
                        </p>
                        <div className='card_two-item'>
                            <Icons.grayTopArrows />
                            <Icons.grayTopArrows />
                            <Icons.grayTopArrows />
                            <Icons.grayTopArrows />
                        </div>
                        <div className='card_two-item--scaled'>
                            <Icons.grayTopArrows />
                            <Icons.grayTopArrows />
                            <Icons.grayTopArrows />
                            <Icons.grayTopArrows />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card_one'>
                        <img
                            src='../../../../public/third-bro.png'
                            aria-hidden='true'
                            width={83}
                            height={83}
                        />
                        <b className='card_one-name'>Jenny Wilson</b>
                        <small className='card_one-job'>Bank of America</small>
                        <p className='card_one-text'>
                            Necessary to deliver white glove, fully managed
                            campaigns that surpass industry benchmarks.Take your
                            career to next level.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Customers;
