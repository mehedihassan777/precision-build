import React from "react"
import ServiceItem from "@/components/Service/ServiceItem"
import classNames from "classnames"

const ServiceOne = ({ className, data, start, limit }) => {
    return (
        <section className={`section services sm:py-25 py-15 ${classNames(className)}`}>
            <div className="container flex flex-col items-center">
                <span className="section_tag tag animate">What We Do?</span>
                <h3 className="section_title heading3 mt-4 text-center animate">Our Service That We Offer</h3>
                <p className="section_desc lg:mt-5 mt-3 lg:w-1/2 body2 text-variant1 text-center animate">We pride ourselves on delivering consistent, high-quality services that you can depend on. Whether it’s a small fix or a large-scale renovation</p>
                <ul className="services_list grid xl:grid-cols-3 md:grid-cols-2 lg:gap-7.5 gap-6 lg:mt-12 mt-9">
                    {data.slice(start, limit).map((item, index) => (
                        <li className="services_item animate" style={{ "--i": index }} key={index}>
                            <ServiceItem data={item} type={'style-one'} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
export default ServiceOne