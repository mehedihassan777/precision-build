'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as Icon from "@phosphor-icons/react/dist/ssr"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Grid } from 'swiper/modules';
import 'swiper/css/bundle';

const TeamOne = ({ data }) => {
    return (
        <section className="section team sm:py-25 py-15 bg-dark">
            <div className="container">
                <div className="heading flex max-lg:flex-col justify-center gap-y-5">
                    <div className="lg:w-1/2 animate animate_right">
                        <span className="section_tag tag bg-white">Our teams</span>
                        <h3 className="section_tit mt-4 heading3 text-white">Meet the Our Experts</h3>
                    </div>
                    <div className="lg:w-1/2 animate animate_left">
                        <p className="section_desc body2 text-white">Our team of skilled professionals brings years of experience, ensuring top-quality service and attention to detail in every task.</p>
                        <Link href="/pages/our-services" className="inline-flex items-center gap-2 mt-3 mx-auto text-white">
                            <span className="has_line line_white animate_width txt-button">View All Services</span>
                            <Icon.ArrowUpRight weight='bold' className="text-2xl" />
                        </Link>
                    </div>
                </div>
                <Swiper
                    loop={true}
                    allowTouchMove={true}
                    spaceBetween={16}
                    slidesPerView={1}
                    modules={[Grid, Autoplay]}
                    className='lg:mt-12 mt-9'
                    autoplay={{
                        delay: 3000,
                    }}
                    breakpoints={{
                        1024: {
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
                    {data.slice(0, 4).map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="team_item flex max-xs:flex-col gap-7 gap-y-5 p-6 bg-white group animate" style={{ "--i": index + 1 }}>
                                <div className="team_img flex-shrink-0 overflow-hidden xs:w-[45%]">
                                    <Image width={2000} height={2000} src={item.image} className="duration-400 group-hover:scale-110" alt={item.name} />
                                </div>
                                <div className="team_info flex flex-col justify-between gap-4">
                                    <div>
                                        <strong className="team_name line-clamp-2 heading5">{item.name}</strong>
                                        <span className="team_position mt-3 text-variant1 line-clamp-2">{item.position}</span>
                                    </div>
                                    <ul className="team_socials flex flex-wrap gap-2">
                                        <li>
                                            <Link href="https://www.facebook.com/"
                                                className="inline-flex items-center justify-center w-11 h-11 border border-outline bg-white duration-400 hover:bg-orange hover:text-white"
                                                target="_blank">
                                                <Icon.FacebookLogo className="text-2xl" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.x.com/"
                                                className="inline-flex items-center justify-center w-11 h-11 border border-outline bg-white duration-400 hover:bg-orange hover:text-white"
                                                target="_blank">
                                                <Icon.XLogo className="text-2xl" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.linkedin.com/"
                                                className="inline-flex items-center justify-center w-11 h-11 border border-outline bg-white duration-400 hover:bg-orange hover:text-white"
                                                target="_blank">
                                                <Icon.LinkedinLogo className="text-2xl" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.instagram.com/"
                                                className="inline-flex items-center justify-center w-11 h-11 border border-outline bg-white duration-400 hover:bg-orange hover:text-white"
                                                target="_blank">
                                                <Icon.InstagramLogo className="text-2xl" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default TeamOne