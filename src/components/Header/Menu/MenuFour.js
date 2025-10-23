import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navigator from "../Elements/Navigator";
import MenuFunctionIcons from "../Elements/MenuFunctionIcons";
import * as Icon from "@phosphor-icons/react/dist/ssr";

export default function MenuFour() {
  return (
    <div className="header_main flex items-center justify-between absolute top-11 left-0 w-full sm:h-25 h-20 lg:px-10 px-4 bg-[#000] bg-opacity-[12%] backdrop-blur">
      <h1>
        <Link href="/" className="logo flex items-center gap-3">
          <Image width={1000} height={1000} src="/images/logo_red.png" className="flex-shrink-0 w-10" alt="logo" />
          <strong className="heading4 text-white">Precision Design & Build</strong>
        </Link>
      </h1>
      <Navigator className={'style-red'} />
      <ul className="header_info flex items-center gap-6">
        <li>
          <MenuFunctionIcons type="style-two style-red" color={'red'} />
        </li>
        <li className="max-xl:hidden">
          <Link href="/pages/book-appointment" className="btn bg-red">Request an estimate</Link>
        </li>
        <li className="max-2xl:hidden">
          <Link href="tel:+1555678888" className="flex items-center gap-3 group">
            <span
              className="flex items-center justify-center sm:w-14 w-12 sm:h-14 h-12 bg-white text-red duration-400 group-hover:bg-red group-hover:text-white">
              <Icon.PhoneCall className="sm:text-3xl text-2xl" />
            </span>
            <div className="max-lg:hidden">
              <span className="text-white">Call Us Now:</span>
              <strong className="heading6 block mt-0.5 text-white">512-524-6935</strong>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
