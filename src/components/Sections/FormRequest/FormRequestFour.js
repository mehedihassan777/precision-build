import React from 'react'
import * as Icon from "@phosphor-icons/react/dist/ssr"
import Image from 'next/image'

const FormRequestFour = () => {
    return (
        <section className="section form_request sm:py-25 py-15 bg-dark">
            <div className="container flex items-center max-xl:flex-col gap-30 gap-y-14">
                <div className="form_request_content w-full text-white">
                    <span className="section_tag tag bg-white animate">Contact US</span>
                    <h3 className="section_tit mt-4 heading3 animate">Get in Touch with Us</h3>
                    <p className="section_desc lg:mt-5 mt-3 body2 animate">Reach out today for expert guidance, service inquiries, or personalized solutions. We're here to support your project every step of the way!</p>
                    <ul className="list_feature grid sm:grid-cols-2 gap-14 gap-y-4 mt-5">
                        <li className="flex items-center gap-3 animate" style={{"--i": 1}}>
                            <Icon.Check className="text-xl" />
                            <span>24/7 Electrical Support</span>
                        </li>
                        <li className="flex items-center gap-3 animate" style={{"--i": 2}}>
                            <Icon.Check className="text-xl" />
                            <span>Free Assessment Before You Decide</span>
                        </li>
                        <li className="flex items-center gap-3 animate" style={{"--i": 3}}>
                            <Icon.Check className="text-xl" />
                            <span>Trusted, Skilled Electricians</span>
                        </li>
                        <li className="flex items-center gap-3 animate" style={{"--i": 4}}>
                            <Icon.Check className="text-xl" />
                            <span>Customized Solutions for Your Needs</span>
                        </li>
                    </ul>
                    <ul className="list_info grid md:grid-cols-3 gap-8 mt-10 pt-10 border-t border-white border-opacity-10">
                        <li className="item flex gap-3 animate" style={{"--i": 1}}>
                            <span className="flex flex-shrink-0 items-center justify-center w-15 h-15 rounded-full bg-white bg-opacity-10">
                                <Icon.MapPin className="text-3xl" />
                            </span>
                            <div>
                                <span className="caption1 text-variant2">Working Time</span>
                                <p className="mt-1">101 E 129th St, East Chicago, IN 46312, US</p>
                            </div>
                        </li>
                        <li className="item flex gap-3 animate" style={{"--i": 2}}>
                            <span className="flex flex-shrink-0 items-center justify-center w-15 h-15 rounded-full bg-white bg-opacity-10">
                                <Icon.Alarm className="text-3xl" />
                            </span>
                            <div>
                                <span className="caption1 text-variant2">Contact Us</span>
                                <p className="mt-1">Weekday: 8:00 - 18:00 Sunday: Closed</p>
                            </div>
                        </li>
                        <li className="item flex gap-3 animate" style={{"--i": 3}}>
                            <span className="flex flex-shrink-0 items-center justify-center w-15 h-15 rounded-full bg-white bg-opacity-10">
                                <Icon.PhoneCall className="text-3xl" />
                            </span>
                            <div>
                                <span className="caption1 text-variant2">Address Business</span>
                                <p className="mt-1">512-524-6935</p>
                                <p className="mt-1">1-333-123-6666</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="form_request_form flex-shrink-0 relative xl:w-5/12 w-full p-8 bg-white animate animate_left" style={{"--i": 3}}>
                    <h4 className="heading4">Request A Quote</h4>
                    <p className="mt-3 text-variant1">We’ll work with you for a customized cleaning plan that meets your needs and fits your budget.</p>
                    <form className="form grid sm:grid-cols-2 grid-cols-1 gap-5 w-full mt-6">
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
                        <div className="form_group sm:col-span-2 w-full">
                            <textarea name="message" className="form_input w-full py-3 px-4 border border-outline rounded" rows={3} placeholder="Your Mesage" required></textarea>
                        </div>
                        <div className="form_group sm:col-span-2 mt-1 w-full">
                            <button type="submit" className="btn w-full bg-red text-center">Make An Appointment</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default FormRequestFour