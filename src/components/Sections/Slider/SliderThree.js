'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCreative, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import * as Icon from "@phosphor-icons/react/dist/ssr";

const SliderTwo = () => {
  return (
    <section className="section style-three slider sm:h-[43.5rem] h-[32rem] relative">
      <div className="slider_swiper_three swiper w-full h-full">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay, Navigation, EffectCreative]}
          className='w-full h-full swiper-pagination-white'
          speed={800}
          effect="creative"
          creativeEffect= {{
            prev: {
              shadow: true,
              origin: "left center",
              translate: ["-5%", 0, -200],
              rotate: [0, 100, 0],
            },
            next: {
              origin: "right center",
              translate: ["5%", 0, -200],
              rotate: [0, -100, 0],
            },
          }}
        >
          <SwiperSlide className="relative">
            <div className="slider_bg absolute top-0 left-0 w-full h-full pointer-events-none">
              <Image width={2000} height={2000} src="/images/slider/slider3_1.jpg" alt="Fast, Dependable HVAC Solutions" className="h-full object-cover" />
            </div>
            <div className="container flex flex-col justify-center relative h-full max-sm:-mt-10">
              <h2 className="section_tit_three lg:w-2/3 text-white heading1" style={{ "--i": 6 }}>Fast, Dependable HVAC Solutions</h2>
              <p className="section_desc mt-4 text-white body2" style={{ "--i": 7 }}>Is your AC struggling? Need heating repairs? We’ve got you covered all year round!</p>
              <ul className="slider_btn_group flex flex-wrap gap-4 mt-9">
                <li className="slider_btn_item" style={{ "--i": 8 }}>
                  <Link href="/pages/our-services" className="slider_btn btn btn_icon bg-yellow">
                    <span>Book a Service</span>
                    <Icon.ArrowUpRight className="text-2xl" />
                  </Link>
                </li>
                <li className="slider_btn_item" style={{ "--i": 9 }}>
                  <Link href="/contact" className="slider_btn btn btn_icon bg-white">
                    <span>Get A quote</span>
                    <Icon.ArrowUpRight className="text-2xl" />
                  </Link>
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="slider_bg absolute top-0 left-0 w-full h-full pointer-events-none">
              <Image width={2000} height={2000} src="/images/slider/slider3_2.jpg" alt="Stay Cool, Stay Comfortable" className="h-full object-cover" />
            </div>
            <div className="container flex flex-col justify-center relative h-full max-sm:-mt-10">
              <h2 className="section_tit_three lg:w-2/3 text-white heading1" style={{ "--i": 6 }}>Stay Cool, Stay Comfortable</h2>
              <p className="section_desc mt-4 text-white body2" style={{ "--i": 7 }}>Beat the heat with our reliable air conditioning services. We handle repairs, <br className="max-md:hidden" />installations, and regular maintenance.</p>
              <ul className="slider_btn_group flex flex-wrap gap-4 mt-9">
                <li className="slider_btn_item" style={{ "--i": 8 }}>
                  <Link href="/pages/our-services" className="slider_btn btn btn_icon bg-yellow">
                    <span>Book a Service</span>
                    <Icon.ArrowUpRight className="text-2xl" />
                  </Link>
                </li>
                <li className="slider_btn_item" style={{ "--i": 9 }}>
                  <Link href="/contact" className="slider_btn btn btn_icon bg-white">
                    <span>Get A quote</span>
                    <Icon.ArrowUpRight className="text-2xl" />
                  </Link>
                </li>
              </ul>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative">
            <div className="slider_bg absolute top-0 left-0 w-full h-full pointer-events-none">
              <Image width={2000} height={2000} src="/images/slider/slider3_3.jpg" alt="Year-Round HVAC Support" className="h-full object-cover" />
            </div>
            <div className="container flex flex-col justify-center relative h-full max-sm:-mt-10">
              <h2 className="section_tit_three lg:w-2/3 text-white heading1" style={{ "--i": 6 }}>Year-Round HVAC Support</h2>
              <p className="section_desc mt-4 text-white body2" style={{ "--i": 7 }}>From summer cooling to winter heating, our HVAC experts provide comprehensive <br className="max-md:hidden" />solutions to keep your system running smoothly.</p>
              <ul className="slider_btn_group flex flex-wrap gap-4 mt-9">
                <li className="slider_btn_item" style={{ "--i": 8 }}>
                  <Link href="/pages/our-services" className="slider_btn btn btn_icon bg-yellow">
                    <span>Book a Service</span>
                    <Icon.ArrowUpRight className="text-2xl" />
                  </Link>
                </li>
                <li className="slider_btn_item" style={{ "--i": 9 }}>
                  <Link href="/contact" className="slider_btn btn btn_icon bg-white">
                    <span>Get A quote</span>
                    <Icon.ArrowUpRight className="text-2xl" />
                  </Link>
                </li>
              </ul>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default SliderTwo