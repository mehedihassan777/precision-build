'use client'

import React from "react"
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import ServiceItem from "@/components/Service/ServiceItem"

const ServiceThree = ({ data, start, limit }) => {
    return (
        <section className="section services style-three sm:py-25 py-15 bg-dark">
            <div className="container flex flex-col items-center">
                <div className="heading flex max-lg:flex-col justify-center gap-7 gap-y-5 text-white">
                    <div className="lg:w-1/2 animate animate_right">
                        <span className="section_tag tag bg-yellow">What We Do?</span>
                        <h3 className="section_tit mt-4 heading3">Our Service That We Offer</h3>
                    </div>
                    <div className="lg:w-5/12 animate animate_left">
                        <p className="section_desc body2">We pride ourselves on delivering consistent, high-quality services that you can depend on. Whether it’s a small fix or a large-scale renovation</p>
                        <Link href="/pages/our-services" className="inline-flex items-center gap-2 mt-3">
                            <span className="has_line line_white animate_width txt-button">View All Services</span>
                            <Icon.ArrowUpRight className="text-2xl" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="services_list w-full lg:mt-12 mt-9 lg:px-10 px-4">
                <Swiper
                    spaceBetween={16}
                    slidesPerView={1}
                    loop={true}
                    pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]}
                    className='swiper-pagination-relative swiper-pagination-white text-center'
                    // autoplay={{
                    //     delay: 5000,
                    // }}
                    breakpoints={{
                        576: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1280: {
                            slidesPerView: 4,
                            spaceBetween: 24,
                        },
                        1440: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                >
                    {data.slice(start, limit).map((item, index) => (
                        <SwiperSlide key={index} className="services_item">
                            <ServiceItem data={item} type={'style-three'} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
export default ServiceThree