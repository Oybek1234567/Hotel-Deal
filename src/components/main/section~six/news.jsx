import "../../../style/main/section/news.css" 
import { Icons } from "../../../assets/Icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
const News = () => {
  return (
      <div className='news'>
          <p className='news__name average'>HOTEL BLOG</p>
          <h4 className='news__heading open'>Our News</h4>
          <Swiper
              width={400}
              scrollbar={{
                  hide: false,
              }}
              modules={[Scrollbar]}
              className='mySwiper news__card'>
              <SwiperSlide>
                  <div className='news__card_one'>
                      <img
                          src='../../../../public/house-with-trees.jpg'
                          alt='house-one'
                      />
                      <div className='news__card_info'>
                          <div>
                              <Icons.worldWithPlane />
                              <span className='open'>Travel</span>
                              <Icons.comment />
                              <span className='open'>2 Comment</span>
                          </div>
                          <b className='open'>How To Travel With Map</b>
                          <p className='average'>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                          </p>
                          <a href='#' className='open'>
                              Read More <Icons.rightArrow />
                          </a>
                      </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className='news__card_two'>
                      {" "}
                      <img
                          src='../../../../public/average-house.jpg'
                          alt='house-two'
                      />
                      <div className='news__card_info'>
                          <div>
                              <Icons.worldWithPlane />
                              <span className='open'>Travel</span>
                              <Icons.comment />
                              <span className='open'>2 Comment</span>
                          </div>
                          <b className='open'>Single Contrast Room</b>
                          <p className='average'>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                          </p>
                          <a href='#' className='open'>
                              Read More <Icons.rightArrow />
                          </a>
                      </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className='news__card_three'>
                      <img
                          src='../../../../public/buildings.jpg'
                          alt='house-one'
                      />
                      <div className='news__card_info'>
                          <div>
                              <Icons.worldWithPlane />
                              <span className='open'>Travel</span>
                              <Icons.comment />
                              <span className='open'>2 Comment</span>
                          </div>
                          <b className='open'>Luxury Twin Room</b>
                          <p className='average'>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                          </p>
                          <a href='#' className='open'>
                              Read More <Icons.rightArrow />
                          </a>
                      </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className='news__card_one'>
                      <img
                          src='../../../../public/house-with-trees.jpg'
                          alt='house-one'
                      />
                      <div className='news__card_info'>
                          <div>
                              <Icons.worldWithPlane />
                              <span className='open'>Travel</span>
                              <Icons.comment />
                              <span className='open'>2 Comment</span>
                          </div>
                          <b className='open'>How To Travel With Map</b>
                          <p className='average'>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                          </p>
                          <a href='#' className='open'>
                              Read More <Icons.rightArrow />
                          </a>
                      </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className='news__card_two'>
                      {" "}
                      <img
                          src='../../../../public/average-house.jpg'
                          alt='house-two'
                      />
                      <div className='news__card_info'>
                          <div>
                              <Icons.worldWithPlane />
                              <span className='open'>Travel</span>
                              <Icons.comment />
                              <span className='open'>2 Comment</span>
                          </div>
                          <b className='open'>Single Contrast Room</b>
                          <p className='average'>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                          </p>
                          <a href='#' className='open'>
                              Read More <Icons.rightArrow />
                          </a>
                      </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className='news__card_three'>
                      <img
                          src='../../../../public/buildings.jpg'
                          alt='house-one'
                      />
                      <div className='news__card_info'>
                          <div>
                              <Icons.worldWithPlane />
                              <span className='open'>Travel</span>
                              <Icons.comment />
                              <span className='open'>2 Comment</span>
                          </div>
                          <b className='open'>Luxury Twin Room</b>
                          <p className='average'>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                          </p>
                          <a href='#' className='open'>
                              Read More <Icons.rightArrow />
                          </a>
                      </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className='news__card_one'>
                      <img
                          src='../../../../public/house-with-trees.jpg'
                          alt='house-one'
                      />
                      <div className='news__card_info'>
                          <div>
                              <Icons.worldWithPlane />
                              <span className='open'>Travel</span>
                              <Icons.comment />
                              <span className='open'>2 Comment</span>
                          </div>
                          <b className='open'>How To Travel With Map</b>
                          <p className='average'>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                          </p>
                          <a href='#' className='open'>
                              Read More <Icons.rightArrow />
                          </a>
                      </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className='news__card_two'>
                      {" "}
                      <img
                          src='../../../../public/average-house.jpg'
                          alt='house-two'
                      />
                      <div className='news__card_info'>
                          <div>
                              <Icons.worldWithPlane />
                              <span className='open'>Travel</span>
                              <Icons.comment />
                              <span className='open'>2 Comment</span>
                          </div>
                          <b className='open'>Single Contrast Room</b>
                          <p className='average'>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                          </p>
                          <a href='#' className='open'>
                              Read More <Icons.rightArrow />
                          </a>
                      </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className='news__card_three'>
                      <img
                          src='../../../../public/buildings.jpg'
                          alt='house-one'
                      />
                      <div className='news__card_info'>
                          <div>
                              <Icons.worldWithPlane />
                              <span className='open'>Travel</span>
                              <Icons.comment />
                              <span className='open'>2 Comment</span>
                          </div>
                          <b className='open'>Luxury Twin Room</b>
                          <p className='average'>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                          </p>
                          <a href='#' className='open'>
                              Read More <Icons.rightArrow />
                          </a>
                      </div>
                  </div>
              </SwiperSlide>
          </Swiper>
      </div>
  );
}

export default News
