'use client'

import { useState } from "react";
import Image from "next/image"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Modal from "@/components/Control/Modal";

const AboutFour = () => {
    const [openVideo, setOpenVideo] = useState(false)
    const text = 'ABOUTUS*Precision Design & Build*ELECTRIC*'

    return (
        <>
            <section className="section about style-four sm:py-25 py-15">
                <div className="container flex max-xl:flex-col-reverse items-center xl:gap-20 gap-10">
                    <div className="about_content w-full">
                        <span className="section_tag tag bg-red animate">Leading the Way in Handyman Electrical</span>
                        <h3 className="section_tit mt-4 heading3 animate">Your Trusted & Reliable Electrical Services, Every Step of the Way</h3>
                        <p className="section_desc lg:mt-5 mt-3 body2 text-variant1 animate">We’re committed to providing dependable, high-quality electrical solutions you can trust. From minor repairs to full installations, our expert team ensures safe and efficient service.</p>
                        <ul className="about_benefit flex flex-wrap gap-10 gap-y-6 mt-10">
                            <li className="flex items-center gap-5 animate" style={{"--i": 1}}>
                                <div className="flex flex-shrink-0 items-center justify-center w-18 h-18 bg-surface">
                                    <Icon.Lightning className="text-4xl" />
                                </div>
                                <strong className="heading6 whitespace-nowrap">Experienced, <br />Skilled Team</strong>
                            </li>
                            <li className="animate" style={{"--i": 2}}>
                                <ul>
                                    <li className="flex items-center gap-3">
                                        <Icon.Check className="text-2xl text-red" />
                                        <strong className="body2">Fast, Minimal Disruption</strong>
                                    </li>
                                    <li className="flex items-center gap-3 mt-2">
                                        <Icon.Check className="text-2xl text-red" />
                                        <strong className="body2">24/7 Emergency Support</strong>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="about_btn flex flex-wrap gap-8 gap-y-6 mt-10">
                            <li className="animate" style={{"--i": 1}}>
                                <Link href="/pages/about-us" className="btn bg-red">About Us</Link>
                            </li>
                            <li className="animate" style={{"--i": 2}}>
                                <Link href="tel:+1555678888" className="flex items-center gap-3 group">
                                    <span
                                        className="flex items-center justify-center w-14 h-14 border-2 border-red duration-400 group-hover:bg-red group-hover:text-white">
                                        <Icon.PhoneCall className="text-3xl" />
                                    </span>
                                    <div>
                                        <span className="text-variant1">Have any Question?</span>
                                        <strong className="heading6 block mt-0.5">512-524-6935</strong>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="about_img flex-shrink-0 grid grid-cols-2 sm:gap-7.5 gap-6 relative xl:w-[55%] sm:w-2/3 w-full">
                        <div className="about_bg animate animate_right">
                            <Image width={2000} height={2000} src="/images/components/about3_1.jpg" alt="about3_1" />
                        </div>
                        <div className="about_bg sm:pt-20 pt-12 animate animate_left">
                            <Image width={2000} height={2000} src="/images/components/about4_2.jpg" alt="about4_2" />
                        </div>
                        <button 
                            className="btn_play absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-30 h-30 p-2.5 bg-white rounded-full duration-300 hover:bg-black hover:text-white"
                            onClick={() => setOpenVideo(true)}
                        >
                            <Icon.Play weight="fill" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl" />
                            <span className="txt absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full p-1">
                                {text.split('').map((char, i) => (
                                    <span key={i} style={{ transform: `rotate(${i * 14.5}deg)` }}>{char}</span>
                                ))}
                            </span>
                        </button>
                    </div>
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
export default AboutFour