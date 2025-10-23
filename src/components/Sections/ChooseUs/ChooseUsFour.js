'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as Icon from "@phosphor-icons/react/dist/ssr"

const ChooseUsFour = () => {
    const [activeTab, setActiveTab] = useState(1)
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
    const tabRefs = useRef([]);

    useEffect(() => {
        // Update indicator position origin to active tab
        if (tabRefs.current[activeTab - 1]) {
            const menuRect = document.querySelector('.menu_tab .menu').getBoundingClientRect()
            const rect = tabRefs.current[activeTab - 1].getBoundingClientRect();
            setIndicatorStyle({ left: rect.left - menuRect.left, width: rect.width });
        }
    }, [activeTab]);

    const handleActiveTab = (tab, event) => {
        setActiveTab(tab);

        // Get position and width of active button
        const menuRect = document.querySelector('.menu_tab .menu').getBoundingClientRect()
        const rect = event.target.getBoundingClientRect();
        
        setIndicatorStyle({ left: rect.left - menuRect.left, width: rect.width });
    }

    return (
        <section className="section choose_us sm:py-25 py-15 bg-surface">
            <div className="container flex max-lg:flex-col items-center xl:gap-20 gap-10">
                <div className="choose_us_img flex-shrink-0 lg:w-[45%] sm:w-2/3 w-full animate animate_right">
                    <Image width={2000} height={2000} src="/images/components/form_request_img3.jpg" alt="WHY CHOOSE US" />
                </div>
                <div className="choose_us_content w-full">
                    <span className="section_tag tag bg-red animate">WHY CHOOSE US</span>
                    <h3 className="section_tit mt-4 heading3 animate">Why We’re the Best Choice</h3>
                    <p className="section_desc lg:mt-5 mt-3 body2 text-variant1 animate">Our skilled team provides top-notch air conditioning services, from installation to repair and maintenance, ensuring your system runs efficiently for year-round comfort.</p>
                    <div className="heading_menu mt-10 border-b-2 border-outline animate">
                        <div className="menu_tab style-red -mb-0.5">
                            <ul className="menu flex relative gap-10">
                                <li
                                    className="indicator absolute bottom-0 h-0.5 bg-red duration-300"
                                    style={{ left: `${indicatorStyle.left}px`, width: `${indicatorStyle.width}px` }}
                                ></li>
                                {['What Do We Have', 'Our History', 'Our Award'].map((tab, index) => (
                                    <li className="tab_item" key={index}>
                                        <button
                                            className={`tab_btn tab_btn_border pb-2.5 heading6 hover:text-red duration-300 ${activeTab === index + 1 ? 'active' : ''}`}
                                            ref={el => tabRefs.current[index] = el}
                                            onClick={(e) => handleActiveTab(index + 1, e)}
                                        >
                                            {tab}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={`tab_panel mt-6 ${activeTab === 1 ? 'active' : ''}`}>
                        <p className="text-variant1">We’re committed to providing dependable, high-quality electrical solutions you can trust. From minor repairs to full installations, our expert team ensures safe and efficient service.</p>
                        <ul className="list_feature grid xs:grid-cols-2 gap-10 gap-y-5 mt-5">
                            <li className="flex gap-1">
                                <Icon.Check className="text-red text-xl" />
                                <strong className="txt-button">Highly Experienced, Skilled Team</strong>
                            </li>
                            <li className="flex gap-1">
                                <Icon.Check className="text-red text-xl" />
                                <strong className="txt-button">Competitive, Transparent Pricing</strong>
                            </li>
                            <li className="flex gap-1">
                                <Icon.Check className="text-red text-xl" />
                                <strong className="txt-button">Fast Turnaround, Minimal Disruption</strong>
                            </li>
                            <li className="flex gap-1">
                                <Icon.Check className="text-red text-xl" />
                                <strong className="txt-button">24/7 Emergency Support</strong>
                            </li>
                            <li className="flex gap-1">
                                <Icon.Check className="text-red text-xl" />
                                <strong className="txt-button">Durable Quality Materials</strong>
                            </li>
                            <li className="flex gap-1">
                                <Icon.Check className="text-red text-xl" />
                                <strong className="txt-button">Satisfaction Guaranteed</strong>
                            </li>
                        </ul>
                    </div>
                    <div className={`tab_panel mt-6 ${activeTab === 2 ? 'active' : ''}`}>
                        <p className="text-variant1">Our story began with a simple mission: to deliver reliable and expert electrical services that make a difference. Over the years, we've grown from a small local team into a trusted name in the industry, thanks to our commitment to innovation, safety, and customer satisfaction.</p>
                        <p className="text-variant1 mt-2"> Every project, big or small, reflects our dedication to quality and the relationships we've built with our community. Join us as we continue to illuminate the future, one connection at a time.</p>
                    </div>
                    <div className={`tab_panel mt-6 ${activeTab === 3 ? 'active' : ''}`}>
                        <p className="text-variant1">These accolades reflect our unwavering commitment to quality, innovation, and customer satisfaction. We strive to set higher standards every year.</p>
                        <ul className="list_feature flex flex-col gap-5 mt-5">
                            <li className="flex gap-1">
                                <Icon.Check className="text-red text-xl" />
                                <strong className="txt-button">2020 – Best Electrical Services Provider by Industry Excellence Awards.</strong>
                            </li>
                            <li className="flex gap-1">
                                <Icon.Check className="text-red text-xl" />
                                <strong className="txt-button">2021 – Customer Satisfaction Champion from Local Business Awards.</strong>
                            </li>
                            <li className="flex gap-1">
                                <Icon.Check className="text-red text-xl" />
                                <strong className="txt-button">2022 – Innovative Energy Solutions Award by GreenTech Network.</strong>
                            </li>
                        </ul>
                    </div>
                    <div className="btn_area animate">
                        <Link href="/pages/about-us" className="btn mt-10 bg-red">Learn more</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChooseUsFour