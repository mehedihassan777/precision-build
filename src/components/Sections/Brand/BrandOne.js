'use client'

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import Image from "next/image";
import Link from "next/link";

const brands = [
  {
    "name": "maxus",
    "image": "/images/brand/1.png",
  },
  {
    "name": "gemstoned",
    "image": "/images/brand/2.png",
  },
  {
    "name": "venmo",
    "image": "/images/brand/3.png",
  },
  {
    "name": "revlon",
    "image": "/images/brand/4.png",
  },
  {
    "name": "customfit",
    "image": "/images/brand/5.png",
  },
  {
    "name": "vagoda",
    "image": "/images/brand/6.png",
  },
  {
    "name": "venmo",
    "image": "/images/brand/3.png",
  }
]

export default function BrandOne() {
  return (
    <section className="section brand sm:pb-25 pb-15">
      <div className="container">
        <div className="brand_inner sm:py-15 py-12 lg:px-20 px-10 bg-surface">
          <h6 className="heading6 text-center animate">Trusted by homeowners and businesses alike for expert handyman solutions.</h6>
          <Swiper
            spaceBetween={40}
            slidesPerView={2}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 4000,
            }}
            breakpoints={{
              576: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 60,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 70,
              },
              1440: {
                slidesPerView: 6,
                spaceBetween: 80,
              },
            }}
            className="mt-10 animate"
          >
            {brands.map((item, index) => (
              <SwiperSlide key={index}>
                <Link href={'#!'} scroll={false} className="brand_item swiper-slide flex items-center justify-center">
                  <Image width={4000} height={3000} src={item.image} alt={item.name} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
