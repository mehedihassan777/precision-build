import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr"
import Image from "next/image";

const PricingThree = () => {
    return (
        <section className="section pricing sm:mt-25 mt-15">
            <div className="container">
                <div className="pricing_inner flex max-lg:flex-col xl:gap-30 gap-10 sm:py-25 py-15 border-t border-outline">
                    <div className="pricing_content flex-shrink-0 lg:w-[34%]">
                        <span className="section_tag tag animate">Pricing Plan</span>
                        <h3 className="section_tit mt-4 heading3 animate">Choose the Right Plan for Your Home</h3>
                        <p className="section_desc lg:mt-5 mt-3 body2 text-variant1 animate">Affordable pricing plans tailored to your home
                            repair needs, from quick fixes to large-scale renovations.</p>
                        <div className="pricing_thumb lg:mt-12 mt-9 max-lg:hidden animate">
                            <Image width={2000} height={2000} src="/images/components/pricing3.jpg" alt="pricing3" />
                        </div>
                    </div>
                    <ul className="pricing_list flex flex-col gap-8 w-full">
                        <li className="pricing_item animate" style={{ "--i": 1 }}>
                            <div className="flex max-sm:flex-col sm:items-center xl:gap-14 gap-7 relative w-full h-full xl:p-8 p-7 border-2 border-outline duration-300 hover:border-yellow">
                                <div className="pricing_info flex-shrink-0 xl:w-[40%] sm:w-[45%]">
                                    <strong className="pricing_type heading5">Basic Plan</strong>
                                    <h3 className="flex items-end mt-4">
                                        <span className="heading3">$25.00</span>
                                        <span className="text-variant1 font-normal">/ per session</span>
                                    </h3>
                                    <p className="pricing_desc mt-4 text-variant1">Perfect for small fixes around the house, offering reliable solutions to keep your home in shape.</p>
                                    <Link href="/pages/our-pricing" className="btn w-full mt-6 bg-black text-center hover:bg-yellow">Get This Package</Link>
                                </div>
                                <div className="line flex-shrink-0 w-px h-full bg-outline max-lg:hidden"></div>
                                <ul className="feature_list flex flex-col gap-4">
                                    <li className="feature_item flex gap-2">
                                        <Icon.Check className="flex-shrink-0 text-2xl text-yellow" />
                                        <span className="pricing_feature">Minor Repairs & Adjustments</span>
                                    </li>
                                    <li className="feature_item flex gap-2">
                                        <Icon.Check className="flex-shrink-0 text-2xl text-yellow" />
                                        <span className="pricing_feature">Standard Documentation</span>
                                    </li>
                                    <li className="feature_item flex gap-2">
                                        <Icon.Check className="flex-shrink-0 text-2xl text-yellow" />
                                        <span className="pricing_feature">Basic Floor Plan Design (if needed)</span>
                                    </li>
                                    <li className="feature_item flex gap-2">
                                        <Icon.Check className="flex-shrink-0 text-2xl text-yellow" />
                                        <span className="pricing_feature">Consistent Brand Standards</span>
                                    </li>
                                    <li className="feature_item flex gap-2">
                                        <Icon.Check className="flex-shrink-0 text-2xl text-yellow" />
                                        <span className="pricing_feature">Quality Check on Completed Work</span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="pricing_item animate" style={{ "--i": 2 }}>
                            <div className="flex max-sm:flex-col sm:items-center xl:gap-14 gap-7 relative w-full h-full xl:p-8 p-7 border-2 border-yellow duration-300">
                                <div className="pricing_info flex-shrink-0 xl:w-[40%] sm:w-[45%]">
                                    <span className="tag tag_fill absolute top-0 right-0">Popular</span>
                                    <strong className="pricing_type heading5">Standard Plan</strong>
                                    <h3 className="flex items-end mt-4">
                                        <span className="heading3">$50.00</span>
                                        <span className="text-variant1 font-normal">/ per session</span>
                                    </h3>
                                    <p className="pricing_desc mt-4 text-variant1">Ideal for mid-sized projects requiring a higher level of service and maintenance.</p>
                                    <Link href="/pages/our-pricing" className="btn w-full mt-6 bg-black text-center hover:bg-yellow">Get This Package</Link>
                                </div>
                                <div className="line flex-shrink-0 w-px h-full bg-outline max-lg:hidden"></div>
                                <ul className="feature_list flex flex-col gap-4">
                                    <li className="feature_item flex gap-2">
                                        <Icon.Check className="flex-shrink-0 text-2xl text-yellow" />
                                        <span className="pricing_feature">Repairs, Installations & Maintenance</span>
                                    </li>
                                    <li className="feature_item flex gap-2">
                                        <Icon.Check className="flex-shrink-0 text-2xl text-yellow" />
                                        <span className="pricing_feature">Complete Documentation & Reports</span>
                                    </li>
                                    <li className="feature_item flex gap-2">
                                        <Icon.Check className="flex-shrink-0 text-2xl text-yellow" />
                                        <span className="pricing_feature">Enhanced Floor Plan Design</span>
                                    </li>
                                    <li className="feature_item flex gap-2">
                                        <Icon.Check className="flex-shrink-0 text-2xl text-yellow" />
                                        <span className="pricing_feature">Consistent Brand Presentation</span>
                                    </li>
                                    <li className="feature_item flex gap-2">
                                        <Icon.Check className="flex-shrink-0 text-2xl text-yellow" />
                                        <span className="pricing_feature">Priority Customer Support</span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="pricing_item animate" style={{ "--i": 3 }}>
                            <div className="flex max-sm:flex-col sm:items-center xl:gap-14 gap-7 relative w-full h-full xl:p-8 p-7 border-2 border-outline duration-300 hover:border-yellow">
                                <div className="pricing_info flex-shrink-0 xl:w-[40%] sm:w-[45%]">
                                    <strong className="pricing_type heading5">Premium Plan</strong>
                                    <h3 className="flex items-end mt-4">
                                        <span className="heading3">$65.00</span>
                                        <span className="text-variant1 font-normal">/ per session</span>
                                    </h3>
                                    <p className="pricing_desc mt-4 text-variant1">Best for large-scale projects or homeowners seeking top-tier service and full support.</p>
                                    <Link href="/pages/our-pricing" className="btn w-full mt-6 bg-black text-center hover:bg-yellow">Get This Package</Link>
                                </div>
                                <div className="line flex-shrink-0 w-px h-full bg-outline max-lg:hidden"></div>
                                <ul className="feature_list flex flex-col gap-4">
                                    <li className="feature_item flex gap-2">
                                        <Icon.Check className="flex-shrink-0 text-2xl text-yellow" />
                                        <span className="pricing_feature">Full Home Renovations Installations</span>
                                    </li>
                                    <li className="feature_item flex gap-2">
                                        <Icon.Check className="flex-shrink-0 text-2xl text-yellow" />
                                        <span className="pricing_feature">Detailed Documentation & Custom Reports</span>
                                    </li>
                                    <li className="feature_item flex gap-2">
                                        <Icon.Check className="flex-shrink-0 text-2xl text-yellow" />
                                        <span className="pricing_feature">Customized Floor Plan Design</span>
                                    </li>
                                    <li className="feature_item flex gap-2">
                                        <Icon.Check className="flex-shrink-0 text-2xl text-yellow" />
                                        <span className="pricing_feature">Brand Consistency Across All Services</span>
                                    </li>
                                    <li className="feature_item flex gap-2">
                                        <Icon.Check className="flex-shrink-0 text-2xl text-yellow" />
                                        <span className="pricing_feature">24/7 Dedicated Customer Support</span>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default PricingThree