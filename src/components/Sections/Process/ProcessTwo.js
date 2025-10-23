'use client'

import React, { useState } from "react"
import Image from "next/image"

const ProcessTwo = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(-1)

    const handleHover = (index) => {
        setActiveIndex(index)
    }

    const handleMouseLeave = () => {
        setActiveIndex(-1)
    }

    return (
        <section className="section process style-two">
            <div className="container flex max-lg:flex-col lg:items-center xl:gap-[8.5rem] gap-10 relative sm:pb-25 pb-15 border-b border-outline">
                <div className="flex-shrink-0 lg:w-[44%] animate animate_right">
                    <div className="process_img flex items-center justify-center relative">
                        <Image width={1000} height={1000} src="/images/components/process2.jpg" alt="process2" />
                    </div>
                </div>
                <div className="process_content">
                    <span className="section_tag tag animate">Our Process</span>
                    <h3 className="section_title mt-4 heading3 animate">Our Renovation Process</h3>
                    <p className="section_desc lg:mt-5 mt-3 body2 text-variant1 animate">We take you through every stage of the renovation journey, ensuring your vision becomes reality with precision and care.</p>
                    <ul className="process_list flex flex-col gap-12 relative lg:mt-12 mt-9 pl-12" onMouseLeave={handleMouseLeave}>
                        <li className="process_line">
                            <span className="process_line_progress" style={{ height: activeIndex > 0 ? `${(activeIndex - 1) * (100 / 3)}%` : '0' }}></span>
                        </li>
                        {data.slice(0, 4).map((item, index) => (
                            <li className={`process_item flex gap-7 group animate`} key={index} onMouseEnter={() => handleHover(item.id)}>
                                <span
                                    className={`process_icon flex flex-shrink-0 items-center justify-center relative sm:w-25 w-20 sm:h-25 h-20 border border-outline rounded-full duration-400 group-hover:bg-black group-hover:text-white ${item.id <= activeIndex ? 'active' : ''}`}>
                                    <span className={`${item.icon} sm:text-5xl text-4xl`}></span>
                                    <span className="process_ordinal flex items-center justify-center absolute sm:top-0 -top-2 sm:right-0 -right-2 w-[26px] h-[26px] border-[3px] border-white rounded-full bg-blue text-white txt-button">{item.id}</span>
                                </span>
                                <div className="process_info">
                                    <strong className="heading5 line-clamp-1">{item.title}</strong>
                                    <p className="mt-3 line-clamp-2 text-variant1">{item.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ProcessTwo