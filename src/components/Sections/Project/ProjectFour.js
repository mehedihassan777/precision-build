'use client'

import React, { useState } from "react"
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr"
import ProjectItem from "@/components/Project/ProjectItem";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectFour = ({ data, start, limit }) => {
    const settings = {
        dots: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 3,
        speed: 500,
        // draggable: false,
        centerMode: true,
        centerPadding: '200px',
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
        infinite: true,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '16px',
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '50px',
                }
            },
            {
                breakpoint: 1170,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '150px',
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '200px',
                }
            },
            {
                breakpoint: 1700,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '300px',
                }
            },
            {
                breakpoint: 2100,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '490px',
                }
            },
        ]
    };

    return (
        <section className="section projects style-four w-full sm:py-25 py-15 bg-surface">
            <div className="container">
                <div className="heading flex max-lg:flex-col justify-center gap-7 gap-y-5">
                    <div className="lg:w-1/2 animate animate_right">
                        <span className="section_tag tag bg-red">Our Projects</span>
                        <h3 className="section_tit mt-4 heading3">Amazing Work Results</h3>
                    </div>
                    <div className="lg:w-1/2 animate animate_left">
                        <p className="section_desc body2 text-variant1">We pride ourselves on delivering consistent, high-quality services that you can depend on. Whether it’s a small fix or a large-scale renovation</p>
                        <Link href="/pages/our-projects1" className="inline-flex items-center gap-2 mt-4 mx-auto">
                            <span className="has_line line_black animate_width txt-button">View All Projects</span>
                            <Icon.ArrowUpRight className="text-2xl" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="services_list lg:mt-12 mt-9 animate">
                <Slider {...settings}>
                    {data.slice(start, limit).map((item, index) => (
                        <ProjectItem key={index} data={item} type={'style-four'} />
                    ))}
                </Slider>
            </div>
        </section>
    )
}
export default ProjectFour