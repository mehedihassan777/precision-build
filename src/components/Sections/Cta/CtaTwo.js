import Link from "next/link"

const CtaTwo = () => {
    return (
        <section className="section cta style-two relative">
            <div className="container relative sm:py-25 py-15 text-white">
                <span className="section_tag tag bg-white text-white animate">Get A qUOTE</span>
                <h3 className="section_title lg:w-1/2 mt-4 heading3 animate">Book Your Plumbing Service Today!</h3>
                <p className="section_desc lg:w-1/2 lg:mt-5 mt-3 body2 animate">Got a leak or clog? Our expert plumbers are ready to solve any problem quickly. Schedule your appointment now for reliable service you can trust!</p>
                <div className="btn_area animate">
                    <Link href="tel:+1555678888" className="btn mt-10 bg-blue">Call now: 512-524-6935</Link>
                </div>
            </div>
        </section>
    )
}
export default CtaTwo