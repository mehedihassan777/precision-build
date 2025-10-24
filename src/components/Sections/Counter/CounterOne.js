import Image from "next/image"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr"

const CounterOne = () => {
    return (
        <section className="section counter">
            <div className="counter_list sm:pt-25 pt-15 sm:pb-[23rem] pb-60 bg-dark">
                <ul className="container flex max-xl:flex-wrap items-center justify-between gap-y-10">
                    <li className="counter_item flex flex-col items-center gap-4 max-xl:w-1/2 max-sm:w-full text-white animate" style={{"--i": 1}}>
                        <h2 className="heading1"><span id="counter_number1" className="counter_number">20</span>k+</h2>
                        <strong className="heading6">Services Completed</strong>
                    </li>
                    <li className="line max-xl:hidden flex-shrink-0 w-px h-32 bg-white bg-opacity-20"></li>
                    <li className="counter_item flex flex-col items-center gap-4 max-xl:w-1/2 max-sm:w-full text-white animate" style={{"--i": 2}}>
                        <h2 className="heading1"><span id="counter_number2" className="counter_number">4.8</span>/5</h2>
                        <strong className="heading6">By 1,200 customers</strong>
                    </li>
                    <li className="line max-xl:hidden flex-shrink-0 w-px h-32 bg-white bg-opacity-20"></li>
                    <li className="counter_item flex flex-col items-center gap-4 max-xl:w-1/2 max-sm:w-full text-white animate" style={{"--i": 3}}>
                        <h2 className="heading1"><span id="counter_number3" className="counter_number">10</span>k+</h2>
                        <strong className="heading6">Satisfied Customers</strong>
                    </li>
                    <li className="line max-xl:hidden flex-shrink-0 w-px h-32 bg-white bg-opacity-20"></li>
                    <li className="counter_item flex flex-col items-center gap-4 max-xl:w-1/2 max-sm:w-full text-white animate" style={{"--i": 4}}>
                        <h2 className="heading1"><span id="counter_number4" className="counter_number">10</span>+</h2>
                        <strong className="heading6">Years Of Experience</strong>
                    </li>
                </ul>
            </div>
            <div className="counter_banner sm:-mt-72 -mt-44">
                <div className="container">
                    <div className="flex max-md:flex-col items-center md:justify-end relative bg-white">
                        <div
                            className="bg_img flex-shrink-0 md:absolute top-0 left-0 md:w-1/2 w-full md:h-full max-md:relative">
                            <Image width={3000} height={3000} src="/images/components/counter1.jpg" className="h-full object-cover animate animate_left" alt="Book Our Expert Handyman Today!" />
                                <div className="banner_area animate animate_right" style={{"--i": 1}}>
                                    <Link href="tel:+1555678888" className="banner_link flex items-center gap-4 absolute right-0 bottom-0 p-5 bg-dark text-white duration-400 group hover:bg-navy">
                                        <span
                                            className="icon inline-flex items-center justify-center sm:w-20 w-15 sm:h-20 h-15 rounded-full bg-navy duration-400 group-hover:bg-white group-hover:text-navy">
                                            <Icon.PhoneCall weight="fill" className="sm:text-5xl text-3xl" />
                                        </span>
                                        <span>
                                            <span className="body2">Call Us Now:</span>
                                            <strong className="block heading4 mt-1 max-md:text-2xl">512-524-6935</strong>
                                        </span>
                                    </Link>
                                </div>
                        </div>
                        <div
                            className="counter_content flex flex-col justify-center md:w-1/2 h-full xl:p-20 md:p-9 max-md:p-8 border border-outline">
                            <span className="section_tag tag w-fit animate">Get A Quote</span>
                            <h3 className="section_tit mt-4 heading3 animate">Book Our Expert Handyman Today!</h3>
                            <p className="section_desc lg:mt-5 mt-3 body2 text-variant1 animate">From plumbing to electrical and HVAC, our
                                skilled experts are ready to handle all your home repair & maintenance needs. Schedule your
                                service today!</p>
                            <div className="btn_area animate">
                                <Link href="/contact" className="btn w-fit lg:mt-8 mt-6">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default CounterOne