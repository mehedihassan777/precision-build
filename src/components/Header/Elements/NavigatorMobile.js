import Link from "next/link";
import { useState } from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";

import menuData from "@/data/header/navigation.json";
import { convertToSlug } from "@/common/utils";
import { usePathname } from "next/navigation";

export default function NavigatorMobile() {
  const [dropdownItem, setDropdownItem] = useState();  
  const pathname = usePathname();
  
  function renderMenu() {
    return menuData.map((item, index) => {
      if (item.subMenu) {
        return (
          <li className="relative" key={index}>
            <Link
              href="#!"
              className={`menu_link menu_link_mo btn_toggle flex items-center justify-between w-full py-3 border-b border-outline ${dropdownItem === item.title ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                if (dropdownItem === item.title) {
                  setDropdownItem("");
                  return;
                }
                setDropdownItem(item.title);
              }}
            >
              <strong className="heading6">{item.title}</strong>
              <Icon.CaretDown className={`text-xl duration-500 ${dropdownItem === item.title ? '-rotate-180' : ''}`} />
            </Link>
            <ul className="menu_sub_nav px-4 pt-2">
              {item.title.toLowerCase() !== "services" ? (
                <>
                  {item.subMenu.map((i, index) => (
                    <li key={index}>
                      {pathname === '/' ? (
                        <Link href={`${process.env.PUBLIC_URL}${i.to}`} className={`menu_sub_link py-2 txt-button ${i.to === '/' ? 'active' : ''}`}>{i.title}</Link>
                      ) : (
                        <Link href={`${process.env.PUBLIC_URL}${i.to}`} className={`menu_sub_link py-2 txt-button ${(pathname.includes(i.to) && i.to !== '/') ? 'active' : ''}`}>{i.title}</Link>
                      )}
                    </li>
                  ))}
                </>
              ) : (
                <>
                  {item.subMenu.map((i, index) => (
                    <li key={index}>
                      <Link
                        href={process.env.PUBLIC_URL + "/services/[slug]"}
                        as={process.env.PUBLIC_URL + "/services/" + convertToSlug(i.title)}
                        className="menu_sub_link py-2 txt-button"
                      >
                        {i.title}
                      </Link>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </li>
        );
      }
      if (!item.subMenu) {
        return (
          <li className="relative" key={index}>
            <Link
              href={item.to}
              className={`menu_link menu_link_mo btn_toggle flex items-center justify-between w-full py-3 border-b border-outline ${dropdownItem === item.title ? 'active' : ''}`}
            >
              <strong className="heading6">{item.title}</strong>
            </Link>
          </li>
        )
      }
      // if (item.title === "Shop") {
      //   return (
      //     <li key={index}>
      //       <Link href="#">
      //         <span
      //           onClick={() => {
      //             if (dropdownItem === "shop") {
      //               setDropdownItem("");
      //               return;
      //             }
      //             setDropdownItem("shop");
      //           }}
      //         >
      //           {item.title}
      //           <span className="dropable-icon">
      //             <i
      //               className={`fas ${dropdownItem === "shop" ? "fa-angle-up" : "fa-angle-down"
      //                 }`}
      //             ></i>
      //           </span>
      //         </span>
      //       </Link>
      //       <CSSTransition
      //         in={dropdownItem === "shop"}
      //         unmountOnExit
      //         timeout={200}
      //         classNames="dropdown-menu-mobile"
      //       >
      //         <ul className="dropdown-menu">
      //           <ul className="dropdown-menu__col">
      //             {item.subMenu.slice(0, 4).map((i, index) => (
      //               <li key={index}>
      //                 <Link href={`${process.env.PUBLIC_URL}${i.to}`}>
      //                   <span>{i.title}</span>
      //                 </Link>
      //               </li>
      //             ))}
      //           </ul>
      //           <ul className="dropdown-menu__col">
      //             {item.subMenu.slice(4, 8).map((i, index) => (
      //               <li key={index}>
      //                 <Link href={`${process.env.PUBLIC_URL}${i.to}`}>
      //                   <span>{i.title}</span>
      //                 </Link>
      //               </li>
      //             ))}
      //           </ul>
      //           <ul className="dropdown-menu__col">
      //             {item.subMenu.slice(8).map((i, index) => (
      //               <li key={index}>
      //                 <Link href={`${process.env.PUBLIC_URL}${i.to}`}>
      //                   <span>{i.title}</span>
      //                 </Link>
      //               </li>
      //             ))}
      //           </ul>
      //           <ul className="dropdown-menu__col -banner">
      //             <Link href="/shop/fullwidth-4col">
      //               <span>
      //                 <img
      //                   src="/images/header/dropdown-menu-banner.png"
      //                   alt="New product banner"
      //                 />
      //               </span>
      //             </Link>
      //           </ul>
      //         </ul>
      //       </CSSTransition>
      //     </li>
      //   );
      // }
      // return (
      //   <li key={index}>
      //     <Link href={item.to}>
      //       <span>{item.title}</span>
      //     </Link>
      //   </li>
      // );
    });
  }
  return (
    <ul className="menu_mobile_nav flex flex-col gap-3 mt-6">{renderMenu()}</ul>
  );
}
