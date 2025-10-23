import React from "react";
import Link from "next/link";
import Image from "next/image";
import * as Icon from "@phosphor-icons/react/dist/ssr";

export const Breadcrumb = ({ image, nav2, nav2Link, nav3, title }) => {
  return (
    <section className="section breadcrumb flex items-center h-[320px] relative">
      <div className="breadcrumb_bg absolute top-0 left-0 w-full h-full pointer-events-none">
        <Image width={2000} height={2000} src={image} alt={title} priority={true} className="h-full object-cover" />
      </div>
      <div className="container relative text-white">
        <ul className="breadcrumb_nav flex items-center gap-1">
          <li className="flex items-center">
            <Link href="/" className="breadcrumb_link caption1 duration-300 hover:underline">Home</Link>
          </li>
          <li className="flex items-center">
            <Icon.CaretRight className="text-xs opacity-50" />
            <Link href={nav2Link} className="breadcrumb_link pl-1 caption1 opacity-50 hover:underline">{nav2}</Link>
          </li>
          {nav3 && (
            <li className="flex items-center">
              <Icon.CaretRight className="text-xs opacity-50" />
              <Link href="#!" className="breadcrumb_link pl-1 caption1 opacity-50 hover:underline" scroll={false}>{nav3}</Link>
            </li>
          )}
        </ul>
        <h2 className="section_tit mt-3 heading2" style={{"--i": 2}}>{title}</h2>
      </div>
    </section>
  );
};
