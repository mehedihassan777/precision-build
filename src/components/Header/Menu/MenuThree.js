import React from "react";
import Link from "next/link";
import Navigator from "../Elements/Navigator";
import MenuFunctionIcons from "../Elements/MenuFunctionIcons";
import * as Icon from "@phosphor-icons/react/dist/ssr";

export default function MenuThree() {
  return (
    <div className="header_menu flex items-center justify-between max-lg:justify-end h-20 xl:px-6 px-4">
      <Navigator className={'style-yellow max-xl:gap-3'} />
      <ul className="header_info flex items-center gap-6 h-full">
        <li>
          <MenuFunctionIcons type={'style-three style-yellow'} color={'yellow'} />
        </li>
        <li className="flex items-center h-full pl-6 border-l border-outline max-2xl:hidden">
          <Link href="tel:+1555678888" className="flex items-center gap-3 group">
            <span className="flex items-center justify-center sm:w-14 w-12 sm:h-14 h-12 bg-yellow duration-400">
              <Icon.PhoneCall weight="fill" className="sm:text-3xl text-2xl text-white" />
            </span>
            <div className="max-lg:hidden">
              <span>Call Us Now:</span>
              <strong className="heading6 block mt-0.5">512-524-6935</strong>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
