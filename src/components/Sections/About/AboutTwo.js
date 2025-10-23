'use client'

import { useState } from "react";
import Image from "next/image"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Modal from "@/components/Control/Modal";

const AboutTwo = () => {
    const [openVideo, setOpenVideo] = useState(false)

    return (
        <>
            <section className="section about sm:py-25 py-15">
                <div className="container flex flex-col items-center">
                    <span className="section_tag tag bg-blue animate">about us</span>
                    <h3 className="section_tit mt-4 heading3 text-center animate">Reliable Plumbing Services You Can Trust</h3>
                    <p className="section_desc body2 lg:w-2/3 lg:mt-5 mt-3 text-variant1 text-center animate">We deliver reliable plumbing solutions for everything from small repairs to major installations. Whether it’s a leak or a full replacement, our skilled plumbers ensure top-quality results every time.</p>
                    <div className="about_content flex max-lg:flex-col items-center justify-between gap-y-12 lg:mt-12 mt-9">
                        <div className="about_img flex items-center justify-center flex-shrink-0 relative lg:w-[48%] sm:w-2/3 w-full animate animate_right">
                            <Image width={2000} height={2000} src="/images/components/about2.jpg" alt="Reliable Plumbing Services You Can Trust" />
                            <div className="about_banner flex items-center gap-4 absolute bottom-0 right-0 py-5 px-7.5 sm:border-l-[16px] border-l-8 sm:border-t-[16px] border-t-8 border-white bg-blue text-white animate animate_left" style={{ "--i": 4 }}>
                                <h2 className="heading2">25+</h2>
                                <h6 className="heading6">Year Of <br />Experience</h6>
                            </div>
                            <button className="btn_play inline-flex items-center justify-center absolute w-18 h-18 rounded-full bg-white duration-400 hover:bg-blue hover:text-white" onClick={() => setOpenVideo(true)}>
                                <Icon.Play weight="fill" className="text-3xl" />
                                <span className="blind">button play video</span>
                            </button>
                        </div>
                        <div className="about_info w-full xl:pl-25 lg:pl-14">
                            <ul className="about_benefit flex flex-col gap-8">
                                <li className="flex gap-6 animate">
                                    <span className="icon-reward-fill flex-shrink-0 text-5xl"></span>
                                    <div>
                                        <strong className="block heading6">Experienced, Skilled Team</strong>
                                        <p className="mt-3 text-variant1">"Our team brings years of hands-on experience to every project, ensuring expert solutions for all your renovation, plumbing.</p>
                                    </div>
                                </li>
                                <li className="flex gap-6 animate">
                                    <span className="icon-hand-coin-fill flex-shrink-0 text-5xl"></span>
                                    <div>
                                        <strong className="block heading6">Competitive Pricing</strong>
                                        <p className="mt-3 text-variant1">"We offer fair, transparent pricing without compromising on the quality of our work, so you always know what to expect.</p>
                                    </div>
                                </li>
                                <li className="flex gap-6 animate">
                                    <span className="icon-hourglass flex-shrink-0 text-5xl"></span>
                                    <div>
                                        <strong className="block heading6">Fast, Minimal Disruption</strong>
                                        <p className="mt-3 text-variant1">"We work quickly and efficiently to minimize disruptions to your home while still delivering top-quality results you can rely on.</p>
                                    </div>
                                </li>
                                <li className="flex gap-6 animate">
                                    <span className="icon-hand-user flex-shrink-0 text-5xl"></span>
                                    <div>
                                        <strong className="block heading6">24/7 Emergency Support</strong>
                                        <p className="mt-3 text-variant1">"Our emergency services are available 24/7, ready to respond whenever you need urgent repairs or immediate assistance.</p>
                                    </div>
                                </li>
                            </ul>
                            <ul className="about_btn flex flex-wrap gap-8 gap-y-6 mt-10">
                                <li className="animate" style={{ "--i": 1 }}>
                                    <Link href="/pages/about-us" className="btn bg-blue">About Us</Link>
                                </li>
                                <li className="animate" style={{ "--i": 2 }}>
                                    <Link href="tel:+1555678888" className="flex items-center gap-3 group">
                                        <span className="flex items-center justify-center w-14 h-14 border-2 border-blue duration-400 group-hover:bg-blue group-hover:text-white">
                                            <Icon.PhoneCall className="text-3xl" />
                                        </span>
                                        <div>
                                            <span className="text-variant1">Call Us Now:</span>
                                            <strong className="heading6 block mt-0.5">512-524-6935</strong>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
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

export default AboutTwo