'use client'

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import TestimonialItem from "@/components/Testimonial/TestimonialItem";

export default function TestimonialFour({ data, start, limit }) {
  return (
    <section className="section testimonials sm:py-25 py-15">
      <div className="container">
        <div className="testimonials_inner relative">
          <span className="section_tag tag bg-red animate">Testimonials</span>
          <h3 className="section_tit mt-4 heading3 animate">What our clients say?</h3>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            breakpoints={{
              576: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: 60,
              }
            }}
            className="style-four"
          >
            {data.slice(start, limit).map((item, index) => (
              <SwiperSlide key={index}>
                <TestimonialItem data={item} type={'style-four'} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
