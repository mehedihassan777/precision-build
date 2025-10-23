'use client'

import React from "react";
import classNames from "classnames";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import TestimonialItem from "@/components/Testimonial/TestimonialItem";

export default function TestimonialThree({ className, data, start, limit }) {
  return (
    <section className={`section testimonials ${classNames(className)}`}>
      <div className="container flex max-lg:flex-col xl:gap-20 gap-10 gap-y-8">
        <div className="flex-shrink-0 lg:w-[30%] sm:w-2/3 w-full">
          <span className="section_tag tag bg-yellow animate">Testimonials</span>
          <h3 className="section_tit mt-4 heading3 animate">What Our Clients Are Saying?</h3>
          <p className="section_desc lg:mt-5 mt-3 body2 text-variant1 animate">Hear from our satisfied clients who trust us for top-quality service, reliable results, and exceptional customer care on every project.</p>
        </div>
        <div className="testimonials_content overflow-hidden w-full xl:pl-20 lg:pl-10 lg:border-l border-outline animate animate_left" style={{"--i": 1}}>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
            }}
            pagination={{
              clickable: true
            }}
            modules={[Autoplay, Pagination]}
            className='swiper-pagination-relative'
          >
            {data.slice(start, limit).map((item, index) => (
              <SwiperSlide key={index}>
                <TestimonialItem data={item} type={'style-three'} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
