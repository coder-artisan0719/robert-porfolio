import React from 'react';
import { Link } from 'react-router-dom';
// testimonials data
import { testimonials } from '../data';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../swiper.css';
// import required modules
import { Autoplay, Pagination } from 'swiper';


const TestiSlider = () => {

  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className='mySwiper'
      >
        {testimonials.map((item, index) => {
          const { authorImg, authorText, authorName, authorPosition, link } = item;
          return (
            <SwiperSlide key={index}>
              <div
                className='flex flex-col lg:flex-row gap-12 lg:gap-32 mb-12'
              >
                <div
                  className='w-48 h-40 lg:w-[328px] lg:h-[328px]'
                >
                  <Link to={link}><img className='rounded-2xl' src={authorImg} alt='' /></Link>
                </div>
                <div
                  className='flex flex-col max-w-3xl'
                >
                  <h5 className='font-body text-2xl mb-8 italic font-normal'>
                    {authorText}
                  </h5>
                  <Link to={link}><div>
                    <p className='text-lg text-accent'>{authorName}</p>
                     <p>{authorPosition}</p>
                  </div>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default TestiSlider;
