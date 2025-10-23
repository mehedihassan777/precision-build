import React from 'react'
import Link from 'next/link'
import serviceData from "../../data/service/data.json"
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { convertToSlug } from '@/common/utils'

const ServiceSidebar = ({ initActive }) => {
    return (
        <div className="services_sidebar flex-shrink-0 xl:w-96 lg:w-80 w-full">
            <ul className="flex flex-col gap-7">
                {serviceData.slice(0, 6).map(item => (
                    <li key={item.id}>
                        <Link href={process.env.PUBLIC_URL + "/services/[slug]"}
                            as={
                                process.env.PUBLIC_URL + "/services/" + convertToSlug(item.title)
                            }
                            scroll={false}
                            className={`has_line heading5 text-variant1 hover:text-orange duration-300 ${item.id === initActive ? 'active' : ''}`}
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="services_benefit mt-10 bg-surface">
                <h5 className="services_benefit_heading w-full py-4 px-10 bg-dark heading5 text-white text-center">Why Our Customers Choose Us?</h5>
                <ul className="services_benefit_list grid grid-cols-1 xs:max-lg:grid-cols-2 py-5">
                    <li className="services_benefit_item flex flex-col items-center gap-4 py-5">
                        <span className="services_benefit_icon icon-pencil text-5xl duration-400"></span>
                        <h6 className="heading6">Customized Solutions</h6>
                    </li>
                    <li className="services_benefit_item flex flex-col items-center gap-4 py-5">
                        <span className="services_benefit_icon icon-timer text-5xl duration-400"></span>
                        <h6 className="heading6">Timely Response</h6>
                    </li>
                    <li className="services_benefit_item flex flex-col items-center gap-4 py-5">
                        <span className="services_benefit_icon icon-reward text-5xl duration-400"></span>
                        <h6 className="heading6">High Quality Products</h6>
                    </li>
                    <li className="services_benefit_item flex flex-col items-center gap-4 py-5">
                        <span className="services_benefit_icon icon-hand-coin text-5xl duration-400"></span>
                        <h6 className="heading6">Transparent Pricing</h6>
                    </li>
                </ul>
            </div>
            <div className="form_request_form mt-10 p-7 bg-surface">
                <h5 className="heading5 text-center">Request A Quote</h5>
                <form className="form grid grid-cols-1 gap-5 w-full mt-5">
                    <div className="form_group w-full">
                        <input type="text" name="name" className="form_input w-full py-3 px-4 border border-outline rounded" placeholder="Your Name" required />
                    </div>
                    <div className="form_group w-full">
                        <input type="tel" name="phone" pattern="\d*" className="form_input w-full py-3 px-4 border border-outline rounded" placeholder="Phone Number" required />
                    </div>
                    <div className="form_group w-full">
                        <input type="email" name="email" className="form_input w-full py-3 px-4 border border-outline rounded" placeholder="Email Address" required />
                    </div>
                    <div className="form_group form_select w-full">
                        <select name="services" className="w-full py-3 px-4 border border-outline rounded" required>
                            <option selected disabled value>Choose Services</option>
                            <option value="HVAC Maintenance">HVAC Maintenance</option>
                            <option value="AC Installation">AC Installation</option>
                            <option value="Heating Repair">Heating Repair</option>
                            <option value="Emergency Repair">Emergency Repair</option>
                        </select>
                        <Icon.CaretDown className="arrow_down text-xl" />
                    </div>
                    <div className="form_group w-full">
                        <textarea name="message" className="form_input w-full py-3 px-4 border border-outline rounded" rows={3} placeholder="Your Mesage" required></textarea>
                    </div>
                    <div className="form_group w-full">
                        <button type="submit" className="btn w-full text-center">Make An Appointment</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ServiceSidebar