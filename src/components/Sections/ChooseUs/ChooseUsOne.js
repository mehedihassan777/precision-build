'use client'

import Link from 'next/link'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Grid } from 'swiper/modules';
import 'swiper/css/bundle';

const ChooseUsOne = () => {
    return (
        <section className="section choose_us sm:pt-25 pt-15">
            <div className="container flex max-xl:flex-col gap-y-10">
                <div className="choose_us_content w-full xl:pr-20">
                    <span className="section_tag tag animate">WHY CHOOSE US</span>
                    <h3 className="section_tit mt-4 heading3 animate">Expert HVAC Solutions You Can Rely On for Year-Round Comfort</h3>
                    <p className="section_desc lg:mt-5 mt-3 body2 text-variant1 animate">Our skilled team provides top-notch air conditioning
                        services, from installation to repair and maintenance, ensuring your system runs efficiently for
                        year-round comfort.</p>
                    <div className="btn_area animate">
                        <Link href="/pages/about-us" className="btn w-fit lg:mt-8 mt-6">about us</Link>
                    </div>
                </div>
                <div className="choose_us_list flex-shrink-0 xl:w-1/2 w-full">
                    <Swiper
                        loop={true}
                        allowTouchMove={true}
                        spaceBetween={16}
                        slidesPerView={1}
                        modules={[Grid, Autoplay]}
                        className='choose_us_swiper w-full h-full'
                        autoplay={{
                            delay: 3500,
                        }}
                        breakpoints={{
                            640: {
                                loop: false,
                                allowTouchMove: false,
                                slidesPerView: 2,
                                grid: {
                                    rows: 2,
                                    fill: "row"
                                },
                                spaceBetween: 30,
                                autoplay: false,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <div className="choose_us_item p-8 border border-outline">
                                <span className="icon-pencil text-6xl"></span>
                                <strong className="block mt-6 heading5">Customized Solutions</strong>
                                <p className="mt-3 text-variant1">We tailor our air conditioning services to fit your specific needs and
                                    preferences, ensuring optimal performance and comfort in your home for years to come.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="choose_us_item p-8 border border-outline">
                                <span className="icon-timer text-6xl"></span>
                                <strong className="block mt-6 heading5">Timely Response</strong>
                                <p className="mt-3 text-variant1">Our team is committed to prompt service, guaranteeing quick responses
                                    to your air conditioning issues, minimizing downtime, and restoring your comfort efficiently.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="choose_us_item p-8 border border-outline">
                                <span className="icon-reward text-6xl"></span>
                                <strong className="block mt-6 heading5">Quality Products</strong>
                                <p className="mt-3 text-variant1">We use only high-quality, reliable products and equipment to ensure
                                    that your air conditioning system operates efficiently and lasts longer.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="choose_us_item p-8 border border-outline">
                                <span className="icon-hand-coin text-6xl"></span>
                                <strong className="block mt-6 heading5">Transparent Pricing</strong>
                                <p className="mt-3 text-variant1">We provide straightforward, upfront pricing with no hidden fees, so
                                    you can make informed decisions about your air conditioning services.</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default ChooseUsOne