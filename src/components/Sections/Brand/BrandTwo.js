import React from 'react'
import Image from 'next/image'

const BrandTwo = () => {
  return (
    <section className="section brand sm:py-25 py-15">
            <div className="container flex max-xl:flex-col items-center justify-between xl:gap-20 gap-12">
                <ul className="brand_img flex-shrink-0 grid gap-2.5 lg:w-[49%]">
                    <li className="col-start-1 row-start-1 row-span-2 animate animate_right">
                        <Image width={2000} height={2000} src="/images/brand/img2-1.jpg" alt="img2-1" />
                    </li>
                    <li className="col-start-2 row-start-1 row-span-1 animate animate_left">
                        <Image width={2000} height={2000} src="/images/brand/img2-2.jpg" alt="img2-2" />
                    </li>
                    <li className="col-start-1 row-start-3 row-span-1 animate animate_right">
                        <Image width={2000} height={2000} src="/images/brand/img2-3.jpg" alt="img2-3" />
                    </li>
                    <li className="col-start-2 row-start-2 row-span-2 animate animate_left">
                        <Image width={2000} height={2000} src="/images/brand/img2-4.jpg" alt="img2-4" />
                    </li>
                </ul>
                <div className="brand_content">
                    <span className="section_tag tag bg-blue animate">Our Partners</span>
                    <h3 className="section_tit mt-4 heading3 animate">Our Trusted Partners in Quality & Excellence</h3>
                    <p className="section_desc lg:mt-5 mt-3 body2 text-variant1 animate">Collaborating with Industry-Leading Experts to Consistently Deliver Top-Tier Services and Long-Lasting Solutions, Ensuring Every Project Meets Our Highest Standards of Quality, Unmatched Customer Satisfaction Across All Sectors.</p>
                    <ul className="brand_list flex flex-wrap xs:gap-16 gap-8 gap-y-11 lg:mt-12 mt-9">
                        <li className="brand_item xs:max-w-[10.25rem] max-w-32 animate" style={{"--i": 1}}>
                            <Image width={2000} height={2000} src="/images/brand/1.png" alt="maxus" />
                        </li>
                        <li className="brand_item xs:max-w-[10.25rem] max-w-32 animate" style={{"--i": 2}}>
                            <Image width={2000} height={2000} src="/images/brand/2.png" alt="gemstoned" />
                        </li>
                        <li className="brand_item xs:max-w-[10.25rem] max-w-32 animate" style={{"--i": 3}}>
                            <Image width={2000} height={2000} src="/images/brand/3.png" alt="venmo" />
                        </li>
                        <li className="brand_item xs:max-w-[10.25rem] max-w-32 animate" style={{"--i": 4}}>
                            <Image width={2000} height={2000} src="/images/brand/4.png" alt="revlon" />
                        </li>
                        <li className="brand_item xs:max-w-[10.25rem] max-w-32 animate" style={{"--i": 5}}>
                            <Image width={2000} height={2000} src="/images/brand/5.png" alt="customfit" />
                        </li>
                        <li className="brand_item xs:max-w-[10.25rem] max-w-32 animate" style={{"--i": 6}}>
                            <Image width={2000} height={2000} src="/images/brand/6.png" alt="vagoda" />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
  )
}

export default BrandTwo