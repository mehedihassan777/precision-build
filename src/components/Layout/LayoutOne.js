import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import TopNavOne from "../Header/TopNav/TopNavOne";
import MenuOne from "../Header/Menu/MenuOne";
import FooterOne from "../Footer/FooterOne";

export default function LayoutOne(props) {
  return (
    <>
      <header id="header" className="header relative z-[2]">
        <TopNavOne />
        <div className="header_main sm:h-25 h-20 bg-white">
          <div className="container flex items-center justify-between h-full">
            <h1>
              <Link href="/" className="logo flex items-center gap-3">
                <Image width={1000} height={1000} src="/images/logo.jpg" className="flex-shrink-0 w-20" alt="logo" />
                <strong className="heading4">Precision Design & Build</strong>
              </Link>
            </h1>
            <ul className="header_info flex items-center xl:gap-15 gap-5">
              <li>
                <Link href="tel:+1555678888" className="flex items-center gap-3 group">
                  <span
                    className="flex items-center justify-center sm:w-14 w-12 sm:h-14 h-12 border-2 border-orange duration-400 group-hover:bg-orange group-hover:text-white">
                    <Icon.PhoneCall className="sm:text-3xl text-2xl" />
                  </span>
                  <div className="max-lg:hidden">
                    <span className="text-variant1">Call Us Now:</span>
                    <strong className="heading6 block mt-0.5">512-524-6935</strong>
                  </div>
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <Link href="mailto:info@precisionbuild.com" className="flex items-center gap-3 group">
                  <span
                    className="flex items-center justify-center sm:w-14 w-12 sm:h-14 h-12 border-2 border-orange duration-400 group-hover:bg-orange group-hover:text-white">
                    <Icon.Envelope className="sm:text-3xl text-2xl" />
                  </span>
                  <div className="max-lg:hidden">
                    <span className="text-variant1">Email Address</span>
                    <strong className="heading6 block mt-0.5">info@precisionbuild.com</strong>
                  </div>
                </Link>
              </li>
              <li className="max-sm:hidden">
                <Link href="/pages/book-appointment" className="btn">Request an estimate</Link>
              </li>
            </ul>
          </div>
        </div>
        <MenuOne />
      </header>
      {props.children}
      <FooterOne color={'orange'} />
    </>
  );
}
