import classNames from "classnames"
import React from "react"

const ProcessThree = ({data, className, color}) => {
    return (
        <section className={`section process ${classNames(className)}`}>
            <div className="container flex flex-col items-center">
                <span className={`section_tag tag ${color !== 'orange' ? `bg-${color}` : ''} animate`}>Our Process</span>
                <h3 className="section_title mt-4 heading3 text-center animate">Our Renovation Process</h3>
                <p className="section_desc lg:mt-5 mt-3 body2 text-variant1 text-center animate">We take you through every stage of the renovation journey, ensuring your vision becomes reality with precision and care.</p>
                <ul className="process_list grid xl:grid-cols-4 sm:grid-cols-2 gap-7.5 gap-y-10 lg:mt-12 mt-9">
                    {data.slice(0, 4).map((item, index) => (
                        <li className={`process_item flex flex-col items-center gap-7 relative group animate`} key={index}>
                            <span className="process_icon flex flex-shrink-0 items-center justify-center relative sm:w-25 w-20 sm:h-25 h-20 border border-outline rounded-full duration-400 group-hover:bg-black group-hover:text-white">
                                <span className={`${item.icon} sm:text-5xl text-4xl`}></span>
                                <span className={`process_ordinal flex items-center justify-center absolute sm:top-0 -top-2 sm:right-0 -right-2 w-[26px] h-[26px] border-[3px] border-white rounded-full bg-${color} text-white txt-button`}>{item.id}</span>
                            </span>
                            <div className="process_info">
                                <h5 className="heading5 text-center">{item.title}</h5>
                                <p className="mt-3 text-variant1 text-center">{item.desc}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default ProcessThree