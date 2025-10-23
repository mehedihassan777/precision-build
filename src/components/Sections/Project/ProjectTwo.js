'use client'

import React from "react"
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import * as Icon from "@phosphor-icons/react/dist/ssr"
import ProjectItem from "@/components/Project/ProjectItem";

const ProjectTwo = ({data, start, limit}) => {

    return (
        <section className="section projects sm:py-25 py-15 bg-surface">
            <div className="container">
                <div className="heading flex max-lg:flex-col justify-center gap-7 gap-y-5">
                    <div className="lg:w-1/2 animate animate_right">
                        <span className="section_tag tag bg-blue">Our Projects</span>
                        <h3 className="section_tit mt-4 heading3">Amazing Work Results</h3>
                    </div>
                    <div className="lg:w-1/2 animate animate_left">
                        <p className="section_desc body2 text-variant1">We pride ourselves on delivering consistent, high-quality services that you can depend on. Whether it’s a small fix or a large-scale renovation</p>
                        <Link href="/pages/our-projects1" className="inline-flex items-center gap-2 mt-4 mx-auto duration-300 hover:text-blue">
                            <span className="has_line line_blue animate_width txt-button">View All Projects</span>
                            <Icon.ArrowUpRight className="text-2xl" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="projects_list lg:mt-12 mt-9 lg:px-10 px-4">
                <Swiper
                    spaceBetween={16}
                    slidesPerView={1}
                    loop={true}
                    pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]}
                    className='swiper-pagination-relative text-center'
                    autoplay={{
                        delay: 5000,
                    }}
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
                        <SwiperSlide key={index}>
                            <ProjectItem data={item} type={'style-two'} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default ProjectTwo;
