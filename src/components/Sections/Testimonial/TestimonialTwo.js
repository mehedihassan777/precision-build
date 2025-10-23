'use client'

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import TestimonialItem from "@/components/Testimonial/TestimonialItem";
import classNames from "classnames";

export default function TestimonialTwo({ data, start, limit, className, color }) {
  return (
    <section className={`section testimonials sm:py-25 py-15 ${classNames(className)}`}>
      <div className="container">
        <div className="testimonials_inner flex flex-col items-center">
          <span className={`section_tag tag mx-auto ${color !== 'orange' ? `bg-${color}` : ''} animate`}>Testimonials</span>
          <h3 className="section_tit mt-4 heading3 text-center animate">What our clients say?</h3>
          <p className="section_desc lg:mt-5 mt-3 body2 text-variant1 text-center animate">Hear from our satisfied clients who trust us for top-quality service.</p>
          <div className="testimonials_content relative w-full lg:mt-12 mt-9 animate">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              navigation={true}
              autoplay={{
                delay: 5000,
              }}
              modules={[Navigation, Autoplay]}
              breakpoints={{
                576: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
                1440: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                }
              }}
              className={`overflow-unset ${classNames(className)}`}
            >
              {data.slice(start, limit).map((item, index) => (
                <SwiperSlide key={index}>
                  <TestimonialItem data={item} type={'style-two'} color={color} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
