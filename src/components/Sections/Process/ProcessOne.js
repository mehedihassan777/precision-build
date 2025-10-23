'use client'

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr"
import Modal from "@/components/Control/Modal"

const ProcessOne = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(-1)
    const [openVideo, setOpenVideo] = useState(false)

    const handleHover = (index) => {
        setActiveIndex(index)
    }

    const handleMouseLeave = () => {
        setActiveIndex(-1)
    }

    return (
        <>
            <section className="section process style-one sm:py-25 py-15">
                <div className="container flex max-lg:flex-col lg:items-center xl:gap-20 gap-10 relative">
                    <div className="process_bg absolute top-0 left-32 h-full pointer-events-none max-lg:hidden">
                        <Image width={1000} height={1000} src="/images/components/bg_process1.png" alt="bg_process1" className="h-full" />
                    </div>
                    <div className="flex-shrink-0 lg:w-5/12">
                        <div className="process_img flex items-center justify-center relative animate">
                            <button
                                className="btn_play inline-flex items-center justify-center absolute w-18 h-18 rounded-full bg-white duration-400 hover:bg-orange hover:text-white"
                                onClick={() => setOpenVideo(true)}
                            >
                                <Icon.Play weight="fill" className="text-3xl" />
                                <span className="blind">button play video</span>
                            </button>
                            <Image width={1000} height={1000} src="/images/components/process1.jpg" alt="How We Work?" />
                        </div>
                        <span className="section_tag tag block w-fit mt-10 animate">Our Process</span>
                        <h3 className="section_title heading3 mt-4 animate">How We Work?</h3>
                        <p className="section_desc lg:mt-5 mt-3 body2 text-variant1 animate">A streamlined process designed to bring you the
                            highest quality renovation, from start to finish.</p>
                        <div className="btn_area animate">
                            <Link href="/contact" className="btn lg:mt-8 mt-6">Contact Us</Link>
                        </div>
                    </div>
                    <ul className="process_list flex flex-col gap-12 relative lg:w-1/2" onMouseLeave={handleMouseLeave}>
                        <li className="process_line">
                            <span className="process_line_progress" style={{ height: activeIndex > 0 ? `${(activeIndex - 1) * (100 / 3)}%` : '0' }}></span>
                        </li>
                        {data.slice(0, 4).map((item, index) => (
                            <li className={`process_item flex gap-7 group animate`} key={index} onMouseEnter={() => handleHover(item.id)}>
                                <span
                                    className={`process_icon flex flex-shrink-0 items-center justify-center relative sm:w-25 w-20 sm:h-25 h-20 border border-outline rounded-full bg-white duration-400 group-hover:bg-black group-hover:text-white ${item.id <= activeIndex ? 'active' : ''}`}>
                                    <span className={`${item.icon} sm:text-5xl text-4xl`}></span>
                                    <span className="process_ordinal flex items-center justify-center absolute sm:top-0 -top-2 sm:right-0 -right-2 w-[26px] h-[26px] border-[3px] border-white rounded-full bg-orange text-white txt-button">{item.id}</span>
                                </span>
                                <div className="process_info pb-12 border-b border-outline">
                                    <strong className="heading5 line-clamp-1">{item.title}</strong>
                                    <p className="mt-3 line-clamp-2 text-variant1">{item.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <Modal
                showModal={openVideo}
                setShowModal={setOpenVideo}
            >
                <div className={`fixed top-1/2 left-1/2 z-[100] -translate-x-1/2 -translate-y-1/2 md:w-[50vw] w-[90vw] aspect-[16/9] bg-white duration-400 ${openVideo ? 'opacity-100' : 'opacity-0'}`}>
                    <iframe className="w-full h-full object-cover" src="https://www.youtube.com/embed/eoiRkkmg2NA?si=Q4WVpTusWMVT5Eej&controls=1&rel=0&enablejsapi=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </Modal>
        </>
    )
}

export default ProcessOne