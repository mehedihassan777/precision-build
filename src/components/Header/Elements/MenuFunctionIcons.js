'use client'

import React, { useState } from "react";
import { useSelector } from "react-redux";
import SearchBox from "./SearchBox";
import CartItemsSidebar from "./CartItemsSidebar";
import MobileNavSidebar from "./MobileNavSidebar";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import WishlistItemsSidebar from "./WishlistItemsSidebar";

export default function MenuFunctionIcons(props) {
  const cartState = useSelector((state) => state.cartReducer);
  const wishlistState = useSelector((state) => state.wishlistReducer);
  const type = props.type || "";
  const color = props.color || "orange";
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showWishlist, setShowWishlist] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);
  
  return (
    <>
      <ul className={`menu_icons ml-auto ${type ? type : ''}`}>
        <li className="menu_icons_item inline-block align-middle max-lg:hidden">
          <button
            className="menu_icons_btn"
            onClick={(e) => {
              e.preventDefault()
              setShowSearch(true)
            }}
          >
            <Icon.MagnifyingGlass className="text-2xl" />
          </button>
        </li>
        {/* <li className="menu_icons_item inline-block align-middle relative ml-5">
          <button
            className="menu_icons_btn"
            onClick={(e) => {
              e.preventDefault()
              setShowCart(!showCart)
            }}
          >
            <Icon.Handbag className="text-2xl" />
            <span className="blind">button cart</span>
          </button>
          <span className="cart_quantity flex items-center justify-center absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-black text-[10px] text-white pointer-events-none">{cartState.length}</span>
        </li> */}
        {/* <li className="menu_icons_item inline-block align-middle relative ml-5">
          <button
            className="menu_icons_btn"
            onClick={(e) => {
              e.preventDefault()
              setShowWishlist(!showWishlist)
            }}
          >
            <Icon.Heart className="text-2xl" />
            <span className="blind">button wishlist</span>
          </button>
          <span className="wishlist_quantity flex items-center justify-center absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-black text-[10px] text-white pointer-events-none">{wishlistState.length}</span>
        </li> */}
        <li className={`menu_icons_item inline-block align-middle${type.includes('style-one') ? ' absolute left-[16px] ' : ' ml-5 '}lg:hidden`}>
          <button 
            className="menu_icons_btn"
            onClick={(e) => {
              e.preventDefault();
              setShowMobileNav(!showMobileNav);
            }}
          >
            <Icon.List className={`text-2xl ${type.includes('style-two') || type.includes('style-four') ? 'text-white' : ''}`} />
            <span className="blind">button menu mobile</span>
          </button>
        </li>
      </ul>
      {/* Search input */}
      <SearchBox showSearch={showSearch} setShowSearch={setShowSearch} />
      {/* Cart sidebar */}
      <CartItemsSidebar showCart={showCart} setShowCart={setShowCart} />
      {/* Cart sidebar */}
      <WishlistItemsSidebar showWishlist={showWishlist} setShowWishlist={setShowWishlist} />
      {/* Mobile navigation sidebar */}
      <MobileNavSidebar
        showMobileNav={showMobileNav}
        setShowMobileNav={setShowMobileNav}
        type={type}
        color={color}
      />
    </>
  );
}
