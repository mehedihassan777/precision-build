'use client'

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import TestimonialItem from "@/components/Testimonial/TestimonialItem";

export default function TestimonialOne({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (item) => {
    setActiveIndex(item.realIndex);
  };

  return (
    <section className="section testimonials style-filter sm:py-25 py-15">
      <div className="container flex max-lg:flex-col items-center gap-y-8">
        <ul className="testimonials_thumb flex-shrink-0 relative lg:w-5/12 sm:w-2/3 w-full aspect-square animate animate_right">
          {data.slice(0, 3).map((item, index) => (
            <li className={`testimonials_img invisible overflow-hidden absolute top-0 left-0 w-full h-full opacity-0 duration-500 ${index === activeIndex ? 'active' : ''}`} key={item.id}>
              <Image width={2000} height={2000} src={item.image} className="h-full object-cover" alt={item.name} />
            </li>
          ))}
        </ul>
        <div className="testimonials_content flex flex-col justify-center overflow-hidden w-full xl:pl-30 lg:pl-14 animate animate_left">
          <span className="section_tag tag w-fit">Testimonials</span>
          <h3 className="section_tit mt-4 heading3">What our clients say?</h3>
          <p className="section_desc lg:mt-5 mt-3 body2 text-variant1">Hear from our satisfied clients who trust us for
            top-quality service.</p>
          <Swiper
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{
              clickable: true
            }}
            modules={[Pagination]}
            className='swiper-pagination-relative w-full lg:mt-12 mt-9'
            onSlideChange={handleSlideChange}
          >
            {data.slice(0, 3).map((item) => (
              <SwiperSlide key={item.id}>
                <TestimonialItem data={item} type={'style-one'} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
