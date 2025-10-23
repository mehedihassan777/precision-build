'use client'

import React, { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import ProjectItem from "@/components/Project/ProjectItem";
import Image from "next/image";

const ProjectThree = ({ data, start, limit }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);

    const handleSlideChange = (item) => {
        setActiveIndex(item.realIndex);
    };

    const handleHover = (index) => {
        setActiveIndex(index);
        if (swiperRef.current) {
            swiperRef.current.slideToLoop(index); // Dùng slideToLoop để hỗ trợ loop
        }
    };

    return (
        <section className="section projects style-three">
            <h3 className="blind">Projects</h3>
            <div className="animate">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    modules={[Autoplay, EffectFade]}
                    autoplay={{
                        delay: 5000,
                    }}
                    effect="fade"
                    speed={500}
                    onSlideChange={handleSlideChange}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    className="h-[43rem] max-sm:h-96"
                >
                    {data.slice(start, limit).map((item, index) => (
                        <SwiperSlide className="projects_thumb_item h-full" key={index}>
                            <Image width={2000} height={2000} src={item.image} className="h-full object-cover" alt={item.title} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <ul className="projects_list grid xl:grid-cols-4 sm:grid-cols-2 w-full">
                {data.slice(start, limit).map((item, index) => (
                    <li key={index} className={`projects_item animate`} style={{ "--i": index }} onMouseEnter={() => handleHover(index)}>
                        <ProjectItem data={item} type={'style-three'} isActive={`${index === activeIndex ? 'active' : ''}`} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectThree;
