'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames";
import * as Icon from '@phosphor-icons/react/dist/ssr'
import serviceData from "@/data/service/data.json"
import { convertToSlug } from "@/common/utils";

export default function FooterOne({className, color}) {
  const [activeLink, setActiveLink] = useState(null)

  const handleActiveLink = function(link) {
    setActiveLink(prevLink => prevLink === link ? null : link)
  }
  
  return (
    <footer className={`footer sm:pt-20 pt-12 bg-dark text-white ${classNames(className)}`}>
      <div className="container flex flex-wrap justify-between gap-10">
        <div className="footer_info md:w-1/4 w-full">
          <h1>
            <Link href="/" className="footer_logo flex items-center gap-3">
              <Image width={2000} height={2000} src={`/images/logo.jpg`} className="flex-shrink-0 w-28 bg-white" alt="logo" />
              <strong className="heading4">Precision Design & Build</strong>
            </Link>
          </h1>
          <div className="footer_map mt-7">
            <div className="flex items-center gap-2 pb-2">
              <Icon.MapPin className="text-2xl" />
              <span>4023 Dominion Cove, Austin Texas 78759</span>
            </div>
            <Link href="https://maps.app.goo.gl/Y6gQTTNuxhrqbrcX8" className="text-sm font-bold underline duration-300 hover:text-orange" target="_blank">Google map</Link>
          </div>
          <div className="footer_mail flex flex-wrap items-center gap-2 mt-4">
            <Icon.Envelope className="text-2xl" />
            <span>info@precisionbuild.com</span>
          </div>
          <div className="footer_time mt-4">
            <span className="block pb-1 text-variant2">Opening Times:</span>
            <span className="block">Mon - Fri: 9am - 5pm</span>
            <span className="block">Weekend: 10am - 4pm</span>
          </div>
          <ul className="footer_social flex flex-wrap items-center gap-3 mt-7">
            <li className="social_item">
              <Link href="https://www.messenger.com/"
                className="social_link flex items-center justify-center w-10 h-10 border border-white border-opacity-10 rounded-full text-white duration-400 hover:bg-white hover:text-orange"
                target="_blank">
                <Icon.MessengerLogo className="text-xl" />
                <span className="blind">link messenger</span>
              </Link>
            </li>
            <li className="social_item">
              <Link href="https://www.x.com/"
                className="social_link flex items-center justify-center w-10 h-10 border border-white border-opacity-10 rounded-full text-white duration-400 hover:bg-white hover:text-orange"
                target="_blank">
                <Icon.XLogo className="text-xl" />
                <span className="blind">link x</span>
              </Link>
            </li>
            <li className="social_item">
              <Link href="https://www.instagram.com/"
                className="social_link flex items-center justify-center w-10 h-10 border border-white border-opacity-10 rounded-full text-white duration-400 hover:bg-white hover:text-orange"
                target="_blank">
                <Icon.InstagramLogo className="text-xl" />
                <span className="blind">link instagram</span>
              </Link>
            </li>
            <li className="social_item">
              <Link href="https://www.skype.com/"
                className="social_link flex items-center justify-center w-10 h-10 border border-white border-opacity-10 rounded-full text-white duration-400 hover:bg-white hover:text-orange"
                target="_blank">
                <Icon.SkypeLogo className="text-xl" />
                <span className="blind">link skype</span>
              </Link>
            </li>
            <li className="social_item">
              <Link href="https://www.telegram.com/"
                className="social_link flex items-center justify-center w-10 h-10 border border-white border-opacity-10 rounded-full text-white duration-400 hover:bg-white hover:text-orange"
                target="_blank">
                <Icon.TelegramLogo className="text-xl" />
                <span className="blind">link telegram</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer_content md:w-2/3 w-full">
          <div className="footer_newsletter flex max-lg:flex-col gap-15 gap-y-6 pb-10 border-b border-white border-opacity-10">
            <h4 className="heading4">Subscribe <br className="max-lg:hidden" />Newsletter</h4>
            <div className="w-full">
              <form className='flex w-full'>
                <input type="email" placeholder='Enter your e-mail'
                  className='caption1 w-full h-14 px-6 border border-white border-opacity-10 duration-300 focus:border-white'
                  required />
                <button type="submit" className={`btn flex-shrink-0 h-fit bg-${color} hover:bg-white`}>Subscribe</button>
              </form>
              <p className="mt-4 text-variant2">Sign up to get the latest news and events—we promise no spam.</p>
            </div>
          </div>
          <div className="footer_nav flex max-xl:flex-wrap justify-between gap-10 gap-y-6 mt-10">
            <div className="footer_nav_area max-sm:w-full">
              <strong className="footer_nav_heading txt-label max-sm:hidden">About</strong>
              <button 
                type="button" 
                className={`footer_nav_btn btn_toggle flex items-center justify-between relative w-full py-2 border-b border-variant1 text-lg font-bold uppercase sm:hidden ${activeLink === 1 ? 'active' : ''}`}
                onClick={() => handleActiveLink(1)}
              >
                <span>About</span>
                <Icon.Plus className="ph ph-plus" />
                <Icon.Minus className="ph ph-minus absolute top-1/2 right-0 -translate-y-1/2" />
              </button>
              <ul className="footer_nav_list flex flex-col gap-2 mt-3">
                <li>
                  <Link href="/pages/about-us" className="footer_nav_link has_line line_white capitalize text-variant2 hover:text-white duration-300">About Us</Link>
                </li>
                <li>
                  <Link href="/pages/our-services" className="footer_nav_link has_line line_white capitalize text-variant2 hover:text-white duration-300">Services</Link>
                </li>
                <li>
                  <Link href="/contact" className="footer_nav_link has_line line_white capitalize text-variant2 hover:text-white duration-300">Contact Us</Link>
                </li>
                <li>
                  <Link href="#!" className="footer_nav_link has_line line_white capitalize text-variant2 hover:text-white duration-300">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className="footer_nav_area max-sm:w-full">
              <strong className="footer_nav_heading txt-label max-sm:hidden">Categories</strong>
              <button 
                type="button" 
                className={`footer_nav_btn btn_toggle flex items-center justify-between relative w-full py-2 border-b border-variant1 text-lg font-bold uppercase sm:hidden ${activeLink === 2 ? 'active' : ''}`}
                onClick={() => handleActiveLink(2)}
              >
                <span>Categories</span>
                <Icon.Plus className="ph ph-plus" />
                <Icon.Minus className="ph ph-minus absolute top-1/2 right-0 -translate-y-1/2" />
              </button>
              <ul className="footer_nav_list flex flex-col gap-2 mt-3">
                {serviceData.slice(0, 6).map(item => (
                  <li key={item.id}>
                    <Link className="footer_nav_link has_line line_white capitalize text-variant2 hover:text-white duration-300"
                      href={process.env.PUBLIC_URL + "/services/[slug]"}
                      as={
                        process.env.PUBLIC_URL + "/services/" + convertToSlug(item.title) + "?id=" + item.id
                      }
                    >
                      {item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer_nav_area max-sm:w-full">
              <strong className="footer_nav_heading txt-label max-sm:hidden">Quick Links</strong>
              <button 
                type="button" 
                className={`footer_nav_btn btn_toggle flex items-center justify-between relative w-full py-2 border-b border-variant1 text-lg font-bold uppercase sm:hidden ${activeLink === 3 ? 'active' : ''}`}
                onClick={() => handleActiveLink(3)}
              >
                <span>Quick Links</span>
                <Icon.Plus className="ph ph-plus" />
                <Icon.Minus className="ph ph-minus absolute top-1/2 right-0 -translate-y-1/2" />
              </button>
              <ul className="footer_nav_list flex flex-col gap-2 mt-3">
                <li>
                  <Link href="/pages/our-services" className="footer_nav_link has_line line_white capitalize text-variant2 hover:text-white duration-300">Our Services</Link>
                </li>
                <li>
                  <Link href="/pages/our-pricing" className="footer_nav_link has_line line_white capitalize text-variant2 hover:text-white duration-300">Pricing Plans</Link>
                </li>
                <li>
                  <Link href="/contact" className="footer_nav_link has_line line_white capitalize text-variant2 hover:text-white duration-300">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="footer_nav_area max-md:w-full">
              <strong className="footer_nav_heading txt-label">Get a Free Estimate Today!</strong>
              <p className="footer_nav_desc mt-3 text-variant2">Call us for a cost estimate over the phone</p>
              <h5 className="footer_nav_contact heading5 mt-4">512-524-6935</h5>
              <Link href="/pages/book-appointment" className={`btn mt-4 bg-${color} hover:bg-white`}>Request an estimate</Link>
            </div>
          </div>
        </div>
        <div className="footer_bottom flex items-center justify-between max-sm:flex-col gap-2 w-full mt-5 py-4 border-t border-white border-opacity-10">
          <p className="copyright text-variant2 text-center">Copyright © 2025 Precision Design & Build By <Link href="https://avitex.vn/" className="text-white hover:underline" target="_blank">Avitex</Link>. <br className="xs:hidden" />All rights reserved</p>
          <div className="footer_bottom_link flex items-center gap-2.5">
            <Link className="text-variant2 hover:underline hover:text-white" href="#!">Terms Of Services</Link>
            <span className="text-white opacity-10">|</span>
            <Link className="text-variant2 hover:underline hover:text-white" href="#!">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
