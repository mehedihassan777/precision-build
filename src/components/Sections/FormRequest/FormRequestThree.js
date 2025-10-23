'use client'

import React, { useState } from 'react'
import * as Icon from "@phosphor-icons/react/dist/ssr"
import Image from 'next/image'
import classNames from 'classnames'
import Modal from '@/components/Control/Modal'

const FormRequestThree = ({className}) => {
    const [openVideo, setOpenVideo] = useState(false)

    return (
        <>
            <section className={`section form_request sm:pb-25 pb-15 ${classNames(className)}`}>
                <div className="form_request_banner cta relative">
                    <div className="container flex flex-col items-center relative sm:pt-25 pt-15 pb-[16.25rem] text-white">
                        <button 
                            className={`btn_play inline-flex items-center justify-center w-18 h-18 rounded-full ${className === 'style-three' ? 'bg-yellow' : 'bg-orange'} duration-400 hover:bg-white hover:text-black`} 
                            onClick={() => setOpenVideo(true)}
                        >
                            <Icon.Play weight='fill' className="text-3xl" />
                            <span className="blind">button play video</span>
                        </button>
                        <strong className="block mt-10 heading6 text-center animate">Not Sure Where to Begin?</strong>
                        <h3 className="section_tit sm:w-2/3 mt-3 heading2 text-center animate">Get Quick, Reliable Air Conditioning Solutions Today.</h3>
                    </div>
                </div>
                <div className="container -mt-[12.5rem]">
                    <div className="relative sm:w-[83%] mx-auto bg-white box_shadow_sm">
                        <div className="form_request_form relative xl:w-[52%] sm:p-12 p-8">
                            <h4 className="heading4 animate">Request A Quote</h4>
                            <p className="mt-3 text-variant1 animate">We’ll work with you for a customized cleaning plan that meets your needs and fits your budget.</p>
                            <form className="form grid sm:grid-cols-2 grid-cols-1 gap-5 w-full mt-6">
                                <div className="form_group w-full animate" style={{"--i": 1}}>
                                    <input type="text" name="name" className="form_input w-full py-3 px-4 border border-outline rounded" placeholder="Your Name" required />
                                </div>
                                <div className="form_group w-full animate" style={{"--i": 2}}>
                                    <input type="tel" name="phone" pattern="\d*" className="form_input w-full py-3 px-4 border border-outline rounded" placeholder="Phone Number" required />
                                </div>
                                <div className="form_group w-full animate" style={{"--i": 3}}>
                                    <input type="email" name="email" className="form_input w-full py-3 px-4 border border-outline rounded" placeholder="Email Address" required />
                                </div>
                                <div className="form_group form_select w-full animate" style={{"--i": 4}}>
                                    <select name="services" className="w-full py-3 px-4 border border-outline rounded" required>
                                        <option selected disabled value>Choose Services</option>
                                        <option value="HVAC Maintenance">HVAC Maintenance</option>
                                        <option value="AC Installation">AC Installation</option>
                                        <option value="Heating Repair">Heating Repair</option>
                                        <option value="Emergency Repair">Emergency Repair</option>
                                    </select>
                                    <Icon.CaretDown className="arrow_down text-xl" />
                                </div>
                                <div className="form_group sm:col-span-2 w-full animate" style={{"--i": 5}}>
                                    <textarea name="message" className="form_input w-full py-3 px-4 border border-outline rounded" rows="3" placeholder="Your Mesage" required></textarea>
                                </div>
                                <div className="form_group sm:col-span-2 mt-1 w-full animate" style={{"--i": 6}}>
                                    <button type="submit" className={`btn w-full ${className === 'style-three' ? 'bg-yellow' : ''} text-center`}>Make An Appointment</button>
                                </div>
                            </form>
                        </div>
                        <div className="form_request_img overflow-hidden absolute top-0 right-0 w-[48%] h-full max-xl:hidden group animate animate_left">
                            <Image width={2000} height={2000} src="/images/components/form_request_img3.jpg" className="h-full object-cover duration-400 group-hover:scale-110" alt="Request A Quote" />
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

export default FormRequestThree