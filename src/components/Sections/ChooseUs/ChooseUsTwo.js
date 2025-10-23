import classNames from "classnames"
import Image from "next/image"

const ChooseUsTwo = ({className, color}) => {
    return (
        <section className={`section choose_us`}>
            <div className={`container flex flex-col items-center sm:py-25 py-15 ${classNames(className)}`}>
                <span className={`section_tag tag w-fit ${color !== 'orange' ? `bg-${color}` : ''} animate`}>WHY CHOOSE US</span>
                <h3 className="section_tit mt-4 heading3 text-center animate">Why We’re the Best Choice</h3>
                <p className="section_desc lg:mt-5 mt-3 body2 text-variant1 text-center animate">We go the extra mile to ensure your satisfaction with every step of the process.</p>
                <div className="choose_us_content flex max-lg:flex-col items-center gap-15 mt-12">
                    <ul className="choose_us_list flex flex-col lg:gap-12 gap-8 max-lg:w-full">
                        <li className="choose_us_item flex flex-col lg:items-end group animate animate_right">
                            <span className={`icon-pencil text-6xl duration-300 group-hover:text-${color}`}></span>
                            <strong className="block mt-5 heading5">Customized Solutions</strong>
                            <p className="mt-3 text-variant1 lg:text-right">We tailor our air conditioning services to fit your specific needs and preferences, ensuring optimal performance and comfort in your home for years to come.</p>
                        </li>
                        <li className="line flex-shrink-0 w-full h-px bg-outline"></li>
                        <li className="choose_us_item flex flex-col lg:items-end group animate animate_right">
                            <span className={`icon-timer text-6xl duration-300 group-hover:text-${color}`}></span>
                            <strong className="block mt-5 heading5">Timely Response</strong>
                            <p className="mt-3 text-variant1 lg:text-right">Our team is committed to prompt service, guaranteeing quick responses to your air conditioning issues, minimizing downtime, and restoring your comfort efficiently.
                            </p>
                        </li>
                    </ul>
                    <div className="choose_us_bg flex-shrink-0 lg:w-1/3 sm:w-3/4 w-full">
                        <Image width={2000} height={2000} src="/images/components/choose_us2.png" alt="choose_us2" />
                    </div>
                    <ul className="choose_us_list flex flex-col lg:gap-12 gap-8 max-lg:w-full">
                        <li className="choose_us_item group animate animate_left">
                            <span className={`icon-reward text-6xl duration-300 group-hover:text-${color}`}></span>
                            <strong className="block mt-5 heading5">Quality Products</strong>
                            <p className="mt-3 text-variant1">We use only high-quality, reliable products and equipment to ensure
                                that your air conditioning system operates efficiently and lasts longer.</p>
                        </li>
                        <li className="line flex-shrink-0 w-full h-px bg-outline"></li>
                        <li className="choose_us_item group animate animate_left">
                            <span className={`icon-hand-coin text-6xl duration-300 group-hover:text-${color}`}></span>
                            <strong className="block mt-5 heading5">Transparent Pricing</strong>
                            <p className="mt-3 text-variant1">We provide straightforward, upfront pricing with no hidden fees, so you can make informed decisions about your air conditioning services.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ChooseUsTwo