import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navigator from "../Elements/Navigator";
import MenuFunctionIcons from "../Elements/MenuFunctionIcons";
import * as Icon from "@phosphor-icons/react/dist/ssr";

export default function MenuTwo() {
  return (
    <header id="header" className="header style-two relative z-[2]">
      <div className="header_main flex items-center justify-between absolute top-0 left-0 w-full sm:h-25 h-20 xl:px-10 px-6">
        <h1>
          <Link href="/" className="logo flex items-center gap-3">
            <Image width={1000} height={1000} src="/images/logo_blue.png" className="flex-shrink-0 w-10" alt="logo" />
            <strong className="heading4 text-white">Precision Design & Build</strong>
          </Link>
        </h1>
        <Navigator className={'style-blue'} />
        <ul className="header_info flex items-center gap-6">
          <li className="max-3xl:hidden">
            <Link href="tel:+1555678888" className="flex items-center gap-3 group">
              <span
                className="flex items-center justify-center sm:w-14 w-12 sm:h-14 h-12 bg-blue duration-400">
                <Icon.PhoneCall className="sm:text-3xl text-2xl text-white" />
              </span>
              <div className="max-lg:hidden">
                <span className="text-white">Call Us Now:</span>
                <strong className="heading6 block mt-0.5 text-white">512-524-6935</strong>
              </div>
            </Link>
          </li>
          <li className="max-xl:hidden">
            <Link href="/pages/book-appointment" className="btn bg-blue">Request an estimate</Link>
          </li>
          <li>
            <MenuFunctionIcons type="style-two style-blue" color={'blue'} />
          </li>
        </ul>
      </div>
    </header>
  );
}
