import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";

import ClientOnlyPortal from "../../../common/ClientOnlyPortal";
import NavigatorMobile from "./NavigatorMobile";
import { CSSTransition } from "react-transition-group";

export default function MobileNavSidebar({ showMobileNav, setShowMobileNav, type, color }) {
  return (
    <>
      <ClientOnlyPortal selector="#mobile-nav-sidebar">
        <CSSTransition
          in={showMobileNav}
          unmountOnExit
          timeout={200}
          classNames="mobile-nav-sidebar"
        >
          <div className={`menu mobile-nav__wrapper p-6 ${type}`}>
            <div className="heading flex justify-between">
              <Link href="/" className="logo flex items-center gap-3">
                <Image width={2000} height={2000} src={`/images/logo_${color}.png`} className="flex-shrink-0 w-12" alt="logo" />
                <strong className="heading3">Precision Design & Build</strong>
              </Link>
              <button 
                className="btn_close_popup flex items-center justify-center w-7 h-7 rounded-full bg-black text-white"
                onClick={() => setShowMobileNav(false)}
              >
                <Icon.X className="text-lg" />
                <span className="blind">button close popup</span>
              </button>
            </div>
            <form className="form_search overflow-hidden relative w-full h-13 mt-8">
              <input className="form_input py-3 pl-4 pr-16 w-full h-full border border-transparent bg-surface" type="text" placeholder="Search..." required />
              <button className="flex items-center justify-end absolute top-0 right-4 w-8 h-full aspect-square">
                <Icon.MagnifyingGlass className="text-2xl" />
              </button>
            </form>
            <NavigatorMobile />
          </div>
        </CSSTransition>
      </ClientOnlyPortal>
      {showMobileNav && (
        <ClientOnlyPortal selector="#overlay">
          <div
            className="overlay"
            onClick={() => setShowMobileNav(false)}
          ></div>
        </ClientOnlyPortal>
      )}
    </>
  );
}
