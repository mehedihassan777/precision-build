"use client"

import Link from "next/link";
import menuData from "@/data/header/navigation.json";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { usePathname } from "next/navigation";
import { convertToSlug } from "@/common/utils"
import classNames from "classnames";

export default function Navigator({ className }) {
  const pathname = usePathname();

  function renderMenu() {
    return menuData.map((item, index) => {
      if (item.title !== "Services" && item.subMenu?.length > 0) {
        return (
          <li className={`menu_item h-full relative`} key={index}>
            <Link href={process.env.PUBLIC_URL + item.to} className={`menu_link inline-flex items-center gap-1 h-full ${pathname.includes(`/${item.title.toLowerCase()}/`) || (item.title === "Home" && pathname === '/') ? 'active' : ''}`}>
              <span className="has_line txt-button">{item.title}</span>
              <Icon.CaretDown className="mt-0.5 text-xs" />
            </Link>
            <ul className="menu_sub invisible absolute top-full -left-6 min-w-[13.75rem] p-3 border-t border-outline bg-white translate-y-5 opacity-0 pointer-events-none shadow duration-400">
              {item.subMenu?.map((i, index) => (
                <li key={index} className={`menu_sub_item`}>
                  {pathname === '/' ? (
                    <Link href={i.to} className={`menu_sub_link block px-3 py-[0.875rem] txt-button hover:bg-orange hover:bg-opacity-10 hover:text-orange duration-300 ${i.to === '/' ? 'active' : ''}`}>
                      <span>{i.title}</span>
                    </Link>
                  ) : (
                    <Link href={i.to} className={`menu_sub_link block px-3 py-[0.875rem] txt-button hover:bg-orange hover:bg-opacity-10 hover:text-orange duration-300 ${(pathname.includes(i.to) && i.to !== '/') ? 'active' : ''}`}>
                      <span>{i.title}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </li>
        );
      }
      if (item.title === "Services") {
        return (
          <li className={`menu_item h-full relative`} key={index}>
            <Link href={process.env.PUBLIC_URL + item.to} className={`menu_link inline-flex items-center gap-1 h-full ${pathname.includes(`/${item.title.toLowerCase()}/`) ? 'active' : ''}`}>
              <span className="has_line txt-button">{item.title}</span>
              <Icon.CaretDown className="mt-0.5 text-xs" />
            </Link>
            <div className={`menu_sub menu_sub_mega invisible fixed ${className === 'style-one' ? 'top-[12.75rem]' : 'top-[8.75rem]'} right-0 left-0 translate-y-5 opacity-0 pointer-events-none duration-400`}>
              <div className="container">
                <ul className="services_list grid grid-cols-3 gap-4 w-full p-8 border-t border-outline bg-white shadow">
                  {item.subMenu.slice(0, 6).map((i, index) => (
                    <li key={index} className={`services_item`}>
                      <Link
                        href={process.env.PUBLIC_URL + "/services/[slug]"}
                        as={process.env.PUBLIC_URL + "/services/" + convertToSlug(i.title)}
                        className={`services_link flex gap-5 py-4 px-5 border border-outline hover:bg-orange hover:bg-opacity-10 hover:border-orange duration-300 group ${pathname === i.to ? 'active' : ''}`}
                      >
                        <span className={`services_icon ${i.icon} flex-shrink-0 text-5xl duration-300 group-hover:text-orange`}></span>
                        <div className="services_info">
                          <strong className="services_tit heading6 group-hover:text-orange duration-300">{i.title}</strong>
                          <p className="services_desc mt-1 caption1 text-variant1 text-ellipsis line-clamp-2">{i.desc}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        );
      }
      if (item.title === "Contact" || item.title === "Home" || item.title === "Gallery" || item.title === "Testimonials") {
        return (
          <li className={`menu_item h-full relative`} key={index}>
            <Link href={process.env.PUBLIC_URL + item.to} className={`menu_link inline-flex items-center gap-1 h-full ${pathname.includes(`/${item.title.toLowerCase()}`) ? 'active' : ''}`}>
              <span className="has_line txt-button">{item.title}</span>
            </Link>
          </li>
        );
      }
    });
  }
  return (
    <ul className={`menu flex items-center gap-10 h-full max-lg:hidden ${classNames(className)}`}>{renderMenu()}</ul>
  );
}
