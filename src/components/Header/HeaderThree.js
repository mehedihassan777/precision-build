import React from "react";
import MenuThree from "./Menu/MenuThree";
import TopNavThree from "./TopNav/TopNavThree";
import Image from "next/image";
import Link from "next/link";

export default function HeaderThree(props) {
  return (
    <>
      <header id="header" className="header relative z-[2]">
        <div className="header_main flex items-center justify-between lg:h-[8.75rem] h-20">
          <h1 className="block flex-shrink-0 2xl:px-15 px-5">
            <Link href="/" className="logo flex items-center gap-3">
              <Image width={2000} height={2000} src="/images/logo_yellow.png" className="flex-shrink-0 w-10" alt="logo" />
              <strong className="heading4">Precision Design & Build</strong>
            </Link>
          </h1>
          <div className="w-full lg:border-l border-outline">
            <TopNavThree />
            <MenuThree />
          </div>
          <Link href="/pages/book-appointment" className="btn flex flex-shrink-0 items-center h-full bg-yellow max-sm:hidden">Request an estimate</Link>
        </div>
      </header>
    </>
  );
}
