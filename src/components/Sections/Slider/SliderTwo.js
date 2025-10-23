'use client'

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import * as Icon from "@phosphor-icons/react/dist/ssr"

export default function SliderTwo() {
  return (
    <section className="section slider style-two sm:h-[53.75rem] h-[40rem] relative">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay, Navigation]}
        className='w-full h-full swiper-pagination-white'
        autoplay={{
          delay: 5000,
        }}
      >
        <SwiperSlide>
          <div className="slider_bg absolute top-0 left-0 w-full h-full pointer-events-none">
            <Image width={2000} height={2000} src="/images/slider/slider2_1.jpg" alt="Quick, Reliable Plumer Solutions" className="h-full object-cover" />
          </div>
          <div className="container flex flex-col justify-center relative h-full max-sm:-mt-4">
            <h2 className="section_tit_two lg:w-2/3 text-white heading1">Quick, Reliable Plumer Solutions</h2>
            <p className="section_desc mt-4 text-white body2" style={{"--i": 1}}>Leaky pipes? Blocked drains? We’ve got you covered 24/7 with expert repairs and fast service.</p>
            <ul className="slider_btn_group flex flex-wrap gap-4 mt-9">
              <li className="slider_btn_item" style={{"--i": 2}}>
                <Link href="/pages/our-services" className="slider_btn btn btn_icon bg-blue">
                  <span>Book a Service</span>
                  <Icon.ArrowUpRight className="text-2xl" />
                </Link>
              </li>
              <li className="slider_btn_item" style={{"--i": 3}}>
                <Link href="/contact" className="slider_btn btn btn_icon bg-white">
                  <span>Get A quote</span>
                  <Icon.ArrowUpRight className="text-2xl" />
                </Link>
              </li>
            </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider_bg absolute top-0 left-0 w-full h-full pointer-events-none">
            <Image width={2000} height={2000} src="/images/slider/slider2_2.jpg" alt="Your Go-To for Plumbing Repairs" className="h-full object-cover" />
          </div>
          <div className="container flex flex-col justify-center relative h-full max-sm:-mt-4">
            <h2 className="section_tit_two lg:w-2/3 text-white heading1">Your Go-To for Plumbing Repairs</h2>
            <p className="section_desc mt-4 text-white body2" style={{"--i": 1}}>Whether it's a small leak or a major issue, we provide fast, dependable plumbing <br className="max-md:hidden" />services you can rely on.</p>
            <ul className="slider_btn_group flex flex-wrap gap-4 mt-9">
              <li className="slider_btn_item" style={{"--i": 2}}>
                <Link href="/pages/our-services" className="slider_btn btn btn_icon bg-blue">
                  <span>Book a Service</span>
                  <Icon.ArrowUpRight className="text-2xl" />
                </Link>
              </li>
              <li className="slider_btn_item" style={{"--i": 3}}>
                <Link href="/contact" className="slider_btn btn btn_icon bg-white">
                  <span>Get A quote</span>
                  <Icon.ArrowUpRight className="text-2xl" />
                </Link>
              </li>
            </ul>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
