'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as Icon from "@phosphor-icons/react/dist/ssr"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';

const TeamThree = ({ data, color }) => {
    return (
        <section className="section team sm:py-25 py-15">
            <div className="container flex flex-col items-center">
                <span className={`section_tag tag ${color !== 'orange' ? `bg-${color}` : ''} animate`}>Our teams</span>
                <h3 className="section_tit mt-4 heading3 animate">Meet the Our Experts</h3>
                <p className="section_desc lg:w-1/2 lg:mt-5 mt-3 body2 text-variant1 text-center animate">Our team of skilled professionals brings years of experience, ensuring top-quality service and attention to detail in every task.</p>
                <Swiper
                    loop={true}
                    allowTouchMove={true}
                    spaceBetween={16}
                    slidesPerView={1}
                    modules={[Autoplay]}
                    className='w-full lg:mt-12 mt-9'
                    autoplay={{
                        delay: 3000,
                    }}
                    breakpoints={{
                        450: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 24,
                        },
                        1280: {
                            loop: false,
                            allowTouchMove: false,
                            slidesPerView: 4,
                            spaceBetween: 30,
                            autoplay: false,
                        },
                    }}
                >
                    {data.slice(0, 4).map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="team_item group animate" style={{ "--i": index + 1 }}>
                                <div className="team_img overflow-hidden relative aspect-[3/4]">
                                    <Image width={2000} height={2000} src={item.image} className="h-full object-cover duration-400 group-hover:scale-110" alt={item.name} />
                                    <ul className="team_socials flex flex-col gap-2 absolute top-3 right-3 translate-x-25 duration-400 group-hover:translate-x-0 max-lg:translate-x-0">
                                        <li className="translate-x-20 duration-400 delay-0 group-hover:translate-x-0">
                                            <Link href="https://www.facebook.com/"
                                                className={`inline-flex items-center justify-center w-11 h-11 bg-white duration-400 hover:bg-${color} hover:text-white`}
                                                target="_blank">
                                                <Icon.FacebookLogo className="text-2xl" />
                                            </Link>
                                        </li>
                                        <li className="translate-x-20 duration-400 delay-100 group-hover:translate-x-0">
                                            <Link href="https://www.x.com/"
                                                className={`inline-flex items-center justify-center w-11 h-11 bg-white duration-400 hover:bg-${color} hover:text-white`}
                                                target="_blank">
                                                <Icon.XLogo className="text-2xl" />
                                            </Link>
                                        </li>
                                        <li className="translate-x-20 duration-400 delay-200 group-hover:translate-x-0">
                                            <Link href="https://www.linkedin.com/"
                                                className={`inline-flex items-center justify-center w-11 h-11 bg-white duration-400 hover:bg-${color} hover:text-white`}
                                                target="_blank">
                                                <Icon.LinkedinLogo className="text-2xl" />
                                            </Link>
                                        </li>
                                        <li className="translate-x-20 duration-400 delay-300 group-hover:translate-x-0">
                                            <Link href="https://www.instagram.com/"
                                                className={`inline-flex items-center justify-center w-11 h-11 bg-white duration-400 hover:bg-${color} hover:text-white`}
                                                target="_blank">
                                                <Icon.InstagramLogo className="text-2xl" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="team_info mt-5">
                                    <strong className={`team_name line-clamp-2 heading5 duration-300 group-hover:text-${color}`}>{item.name}</strong>
                                    <span className="team_position mt-2 text-variant1 line-clamp-2">{item.position}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default TeamThree