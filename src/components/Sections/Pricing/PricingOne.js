import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr"
import classNames from "classnames";

const PricingOne = ({className}) => {
    return (
        <section className={`section pricing sm:py-25 py-15 ${classNames(className)}`}>
            <div className="container flex flex-col items-center">
                <span className="section_tag tag animate">Pricing Plan</span>
                <h3 className="section_tit mt-4 heading3 text-center animate">Choose the Right Plan for Your Home</h3>
                <p className="section_desc lg:mt-5 mt-3 body2 text-variant1 text-center animate">Affordable pricing plans tailored to your home
                    repair needs, from quick fixes to large-scale renovations.</p>
                <ul className="pricing_list grid xl:grid-cols-3 gap-7.5 w-full lg:mt-12 mt-9">
                    <li className="pricing_item animate" style={{ "--i": 1 }}>
                        <div className="relative w-full p-6 border-2 border-outline bg-white duration-300 shadow-sm hover:border-orange">
                            <strong className="pricing_type heading5">Basic Plan</strong>
                            <h3 className="flex items-end mt-4">
                                <span className="heading3">$25.00</span>
                                <span className="text-variant1 font-normal">/ per session</span>
                            </h3>
                            <p className="pricing_desc mt-4 text-variant1">Perfect for small fixes around the house, offering
                                reliable solutions to keep your home in shape.</p>
                            <ul className="feature_list flex flex-col gap-3 mt-6 p-6 bg-orange bg-opacity-5">
                                <li className="feature_item flex gap-2">
                                    <Icon.Check className="flex-shrink-0 text-2xl text-orange" />
                                    <span className="pricing_feature">Minor Repairs & Adjustments</span>
                                </li>
                                <li className="feature_item flex gap-2">
                                    <Icon.Check className="flex-shrink-0 text-2xl text-orange" />
                                    <span className="pricing_feature">Standard Documentation</span>
                                </li>
                                <li className="feature_item flex gap-2">
                                    <Icon.Check className="flex-shrink-0 text-2xl text-orange" />
                                    <span className="pricing_feature">Basic Floor Plan Design (if needed)</span>
                                </li>
                                <li className="feature_item flex gap-2">
                                    <Icon.Check className="flex-shrink-0 text-2xl text-orange" />
                                    <span className="pricing_feature">Consistent Brand Standards</span>
                                </li>
                                <li className="feature_item flex gap-2">
                                    <Icon.Check className="flex-shrink-0 text-2xl text-orange" />
                                    <span className="pricing_feature">Quality Check on Completed Work</span>
                                </li>
                            </ul>
                            <Link href="/pages/our-pricing" className="btn bg-black w-full text-center mt-6">Get This Package</Link>
                        </div>
                    </li>
                    <li className="pricing_item animate" style={{ "--i": 2 }}>
                        <div className="relative w-full p-6 border-2 border-orange bg-white duration-300 shadow-sm">
                            <span className="tag tag_fill absolute top-0 right-0">Popular</span>
                            <strong className="pricing_type heading5">Standard Plan</strong>
                            <h3 className="flex items-end mt-4">
                                <span className="heading3">$50.00</span>
                                <span className="text-variant1 font-normal">/ per session</span>
                            </h3>
                            <p className="pricing_desc mt-4 text-variant1">Ideal for mid-sized projects requiring a higher level of
                                service and maintenance.</p>
                            <ul className="feature_list flex flex-col gap-3 mt-6 p-6 bg-orange bg-opacity-5">
                                <li className="feature_item flex gap-2">
                                    <Icon.Check className="flex-shrink-0 text-2xl text-orange" />
                                    <span className="pricing_feature">Repairs, Installations & Maintenance</span>
                                </li>
                                <li className="feature_item flex gap-2">
                                    <Icon.Check className="flex-shrink-0 text-2xl text-orange" />
                                    <span className="pricing_feature">Complete Documentation & Reports</span>
                                </li>
                                <li className="feature_item flex gap-2">
                                    <Icon.Check className="flex-shrink-0 text-2xl text-orange" />
                                    <span className="pricing_feature">Enhanced Floor Plan Design</span>
                                </li>
                                <li className="feature_item flex gap-2">
                                    <Icon.Check className="flex-shrink-0 text-2xl text-orange" />
                                    <span className="pricing_feature">Consistent Brand Presentation</span>
                                </li>
                                <li className="feature_item flex gap-2">
                                    <Icon.Check className="flex-shrink-0 text-2xl text-orange" />
                                    <span className="pricing_feature">Priority Customer Support</span>
                                </li>
                            </ul>
                            <Link href="/pages/our-pricing" className="btn w-full text-center mt-6">Get This Package</Link>
                        </div>
                    </li>
                    <li className="pricing_item animate" style={{ "--i": 3 }}>
                        <div className="relative w-full p-6 border-2 border-outline bg-white duration-300 shadow-sm hover:border-orange">
                            <strong className="pricing_type heading5">Premium Plan</strong>
                            <h3 className="flex items-end mt-4">
                                <span className="heading3">$65.00</span>
                                <span className="text-variant1 font-normal">/ per session</span>
                            </h3>
                            <p className="pricing_desc mt-4 text-variant1">Best for large-scale projects or homeowners seeking
                                top-tier service and full support.</p>
                            <ul className="feature_list flex flex-col gap-3 mt-6 p-6 bg-orange bg-opacity-5">
                                <li className="feature_item flex gap-2">
                                    <Icon.Check className="flex-shrink-0 text-2xl text-orange" />
                                    <span className="pricing_feature">Full Home Renovations Installations</span>
                                </li>
                                <li className="feature_item flex gap-2">
                                    <Icon.Check className="flex-shrink-0 text-2xl text-orange" />
                                    <span className="pricing_feature">Detailed Documentation & Custom Reports</span>
                                </li>
                                <li className="feature_item flex gap-2">
                                    <Icon.Check className="flex-shrink-0 text-2xl text-orange" />
                                    <span className="pricing_feature">Customized Floor Plan Design</span>
                                </li>
                                <li className="feature_item flex gap-2">
                                    <Icon.Check className="flex-shrink-0 text-2xl text-orange" />
                                    <span className="pricing_feature">Brand Consistency Across All Services</span>
                                </li>
                                <li className="feature_item flex gap-2">
                                    <Icon.Check className="flex-shrink-0 text-2xl text-orange" />
                                    <span className="pricing_feature">24/7 Dedicated Customer Support</span>
                                </li>
                            </ul>
                            <Link href="/pages/our-pricing" className="btn bg-black w-full text-center mt-6">Get This Package</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default PricingOne