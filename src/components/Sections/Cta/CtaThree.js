import Image from "next/image"
import Link from "next/link"

const CtaThree = () => {
    return (
        <section className="section cta style-three">
            <div className="container relative sm:py-25 py-15 text-white">
                <div className="cta_img absolute bottom-0 xl:left-[45%] left-1/3 xl:w-[63%] lg:w-3/4 w-full max-md:hidden animate animate_left">
                    <Image width={2000} height={2000} src="/images/components/cta3.png" alt="cta3" />
                </div>
                <span className="section_tag tag relative bg-white text-white animate">Support</span>
                <h3 className="section_title relative xl:w-1/2 sm:w-2/3 mt-4 heading3 animate">Explore Comprehensive Cooling Solutions Now!</h3>
                <p className="section_desc relative xl:w-1/2 sm:w-2/3 lg:mt-5 mt-3 body2 animate">We offer comprehensive AC services tailored to your needs. Contact us now to learn more about how we can keep your home cool and comfortable!</p>
                <ul className="group_btn flex flex-wrap items-center gap-10 gap-y-6 relative mt-10">
                    <li className="animate" style={{ "--i": 1 }}>
                        <Link href="/contact" className="btn bg-yellow hover:bg-white">Contact Us</Link>
                    </li>
                    <li className="animate" style={{ "--i": 2 }}>
                        <Link href="tel:+1555678888" className="block duration-300 hover:text-yellow">
                            <span className="caption1 text-white">Have any Question?</span>
                            <strong className="heading6 block mt-1">512-524-6935</strong>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default CtaThree