'use client'

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import * as Icon from "@phosphor-icons/react/dist/ssr"

export default function SliderOne() {
  return (
    <section className="section slider sm:h-[47.5rem] h-[34rem] relative">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        effect="fade"
        modules={[Pagination, Autoplay, Navigation, EffectFade]}
        className='w-full h-full swiper-pagination-white'
        autoplay={{
          delay: 5000,
        }}
      >
        <SwiperSlide>
          <div className="slider_bg absolute top-0 left-0 w-full h-full pointer-events-none">
            <Image width={2000} height={2000} src="/images/slider/slider1_1.jpg" alt="Fast & Professional Home Repairs" className="h-full object-cover" />
          </div>
          <div className="container flex flex-col justify-center relative h-full max-sm:-mt-10">
            <h2 className="section_tit_two lg:w-2/3 text-white heading1">Fast & Professional Home Repairs</h2>
            <p className="section_desc mt-4 text-white body2" style={{"--i": 1}}>Our expert handyman team is here to help with any
              project, big or small.</p>
            <ul className="slider_btn_group flex flex-wrap gap-4 mt-9">
              <li className="slider_btn_item" style={{"--i": 2}}>
                <Link href="/pages/our-services" className="slider_btn btn btn_icon">
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
            <Image width={2000} height={2000} src="/images/slider/slider1_2.jpg" alt="Expert Renovation & Improvement Services" className="h-full object-cover" />
          </div>
          <div className="container flex flex-col justify-center relative h-full max-sm:-mt-10">
            <h2 className="section_tit_two lg:w-2/3 text-white heading1">Expert Renovation & Improvement Services</h2>
            <p className="section_desc mt-4 text-white body2" style={{"--i": 1}}>Skilled handymen delivering quality craftsmanship
              for all your home upgrades.</p>
            <ul className="slider_btn_group flex flex-wrap gap-4 mt-9">
              <li className="slider_btn_item" style={{"--i": 2}}>
                <Link href="/pages/our-services" className="slider_btn btn btn_icon">
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
            <Image width={2000} height={2000} src="/images/slider/slider1_3.jpg" alt="Comprehensive Maintenance Services" className="h-full object-cover" />
          </div>
          <div className="container flex flex-col justify-center relative h-full max-sm:-mt-10">
            <h2 className="section_tit_two lg:w-2/3 text-white heading1">Comprehensive Maintenance Services</h2>
            <p className="section_desc mt-4 text-white body2" style={{"--i": 1}}>From electrical fixes to plumbing repairs, we
              handle all your home’s needs efficiently and affordably.</p>
            <ul className="slider_btn_group flex flex-wrap gap-4 mt-9">
              <li className="slider_btn_item" style={{"--i": 2}}>
                <Link href="/pages/our-services" className="slider_btn btn btn_icon">
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
