import Image from "next/image"
import React from "react"

const ProcessFour = ({ data }) => {
    return (
        <section className="section process style-three style-four sm:py-25 py-15">
            <div className="container flex flex-col items-center">
                <span className="section_tag tag bg-red animate">Our Process</span>
                <h3 className="section_title mt-4 heading3 text-center animate">Our Renovation Process</h3>
                <p className="section_desc lg:mt-5 mt-3 body2 text-variant1 text-center animate">We take you through every stage of the renovation journey, ensuring your vision becomes reality with precision and care.</p>
                <ul className="process_list grid xl:grid-cols-4 sm:grid-cols-2 gap-[4.375rem] gap-y-10 lg:mt-12 mt-9">
                    {data.slice(0, 4).map((item, index) => (
                        <li className="process_item flex flex-col items-center gap-7 relative group animate" style={{"--i": index}} key={index}>
                            <div className="process_img overflow-hidden w-[12.5rem] h-[12.5rem] p-1.5 border-2 border-transparent rounded-full duration-400 group-hover:border-red">
                                <Image width={2000} height={2000} src={item.image} className="h-full object-cover rounded-full" alt={item.title} />
                            </div>
                            <div className="process_info">
                                <span className="block txt-label text-red text-center">Step {index + 1}</span>
                                <h5 className="mt-4 heading5 text-center">{item.title}</h5>
                                <p className="mt-3 text-variant1 text-center">{item.desc}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default ProcessFour