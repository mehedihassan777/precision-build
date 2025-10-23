import React from "react"
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import ServiceItem from "@/components/Service/ServiceItem"

const ServiceTwo = ({ data, start, limit }) => {
    return (
        <section className="section services sm:py-25 py-15 bg-surface">
            <div className="container flex flex-col items-center">
                <div className="heading flex max-lg:flex-col justify-center gap-7 gap-y-5">
                    <div className="lg:w-1/2 animate animate_right">
                        <span className="section_tag tag bg-blue">What We Do?</span>
                        <h3 className="section_tit mt-4 heading3">Our Service That We Offer</h3>
                    </div>
                    <div className="lg:w-1/2 animate animate_left">
                        <p className="section_desc body2">We pride ourselves on delivering consistent, high-quality services that you can depend on. Whether it’s a small fix or a large-scale renovation</p>
                        <Link href="/pages/our-services" className="inline-flex items-center gap-2 mt-3 mx-auto">
                            <span className="has_line line_black animate_width txt-button">View All Services</span>
                            <Icon.ArrowUpRight className="text-2xl" />
                        </Link>
                    </div>
                </div>
                <ul className="services_list grid xl:grid-cols-3 md:grid-cols-2 lg:gap-11 gap-6 lg:mt-12 mt-9">
                    {data.slice(start, limit).map((item, index) => (
                        <li className="services_item animate" style={{ "--i": index }} key={index}>
                            <ServiceItem data={item} type={'style-two'} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
export default ServiceTwo