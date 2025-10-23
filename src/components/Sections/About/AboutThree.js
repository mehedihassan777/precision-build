import Link from "next/link"
import Image from "next/image"
import * as Icon from "@phosphor-icons/react/dist/ssr"

const AboutThree = ({color}) => {
    return (
        <section className={`section about sm:py-25 py-15}`}>
            <div className="container flex max-lg:flex-col items-center xl:gap-20 gap-10">
                <div className="about_img flex-shrink-0 relative lg:w-[49%] sm:w-2/3 w-full pb-15 animate animate_right">
                    <Image width={2000} height={2000} src="/images/components/about3_1.jpg" className="w-2/3" alt="Reliable Home Repairs And Renovations, Every Time" />
                    <div className={`about_banner absolute xl:top-13 top-6 xl:right-4 right-0 sm:py-7.5 py-4 sm:px-10 px-6 bg-${color} text-white animate animate_left`} style={{ "--i": 3 }}>
                        <h2 className="heading2 text-center">25+</h2>
                        <p className="block mt-1 text-center">Year Of <br />Experience</p>
                    </div>
                    <div className="absolute right-0 bottom-0 w-[54%] border-t-[20px] border-l-[20px] border-white animate" style={{ "--i": 2 }}>
                        <Image width={2000} height={2000} src="/images/components/about3_2.jpg" alt="about3_2" />
                    </div>
                </div>
                <div className="about_content">
                    <span className={`section_tag tag ${color !== 'orange' ? `bg-${color}` : ''} animate`}>about us</span>
                    <h3 className="section_tit mt-4 heading3 animate">Reliable Home Repairs And Renovations, Every Time</h3>
                    <p className="section_desc lg:mt-5 mt-3 body2 text-variant1 animate">We pride ourselves on delivering consistent, high-quality services that you can depend on. Whether it’s a small fix or a large-scale renovation, our team is committed to getting it right the first time.</p>
                    <ul className="about_benefit flex max-sm:flex-col gap-7.5 gap-y-5 mt-10">
                        <li className="animate" style={{ "--i": 1 }}>
                            <Icon.Trophy className="text-6xl" />
                            <strong className="block mt-5 heading6">Experienced, Skilled Team</strong>
                            <p className="mt-3 text-variant1">Our experienced team provides expert solutions tailored to your renovation.</p>
                        </li>
                        <li className="animate" style={{ "--i": 2 }}>
                            <Icon.Headset className="text-6xl" />
                            <strong className="block mt-5 heading6">Support 24/7</strong>
                            <p className="mt-3 text-variant1">Emergency services are available 24/7 to quickly respond when urgent repairs arise.</p>
                        </li>
                    </ul>
                    <div className="btn_area animate">
                        <Link href="/pages/about-us" className={`btn mt-10 ${color !== 'orange' ? `bg-${color}` : ''}`}>About Us</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutThree