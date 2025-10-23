'use client'

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import classNames from "classnames";
import * as Icon from "@phosphor-icons/react/dist/ssr";

import Rate from "../Other/Rate";
import { convertToSlug, formatCurrency } from "@/common/utils";
import { checkProductInWishList, checkProductInCart, checkProductInCompare } from "../../common/shopUtils";
import { addToCart } from "../../redux/actions/cartActions";
import { addToWishlist, removeFromWishlist } from "../../redux/actions/wishlistActions";
import { addToCompare, removeFromCompare } from "../../redux/actions/compareActions";

function Product(props) {
  const dispatch = useDispatch();
  const { data } = props;
  const cartState = useSelector((state) => state.cartReducer);
  const wishlistData = useSelector((state) => state.wishlistReducer);
  const compareData = useSelector((state) => state.compareReducer);
  const percentDiscount = data.originPrice - data.price > 0 ? Math.ceil(100 - (100 * data.price) / data.originPrice) : null;
  function renderType() {
    if (data.new) {
      return <span className="product_discount -new absolute top-4 left-4 z-[1] py-0.5 px-1.5 bg-blue txt-button text-white">New</span>;
    }
    if (percentDiscount) {
      return <span className="product_discount -sale absolute top-4 left-4 z-[1] py-0.5 px-1.5 bg-red txt-button text-white">-{percentDiscount}%</span>;
    }
    return null;
  }
  const addToCartHandle = (e) => {
    e.preventDefault();
    let productItem = checkProductInCart(cartState, data.id);
    if (!productItem && data.quantity > 0) {
      dispatch(addToCart(data, 1));
      return toast.success("Product added to cart !");
    } else {
      return toast.info("Products already in the cart !");
    }
  };
  const addToWishlistHandle = (e) => {
    e.preventDefault();
    const wishlistItem = checkProductInWishList(wishlistData, data.id);
    if (!wishlistItem) {
      dispatch(addToWishlist(data));
      return toast.success("Product added to wishlist !");
    } else {
      dispatch(removeFromWishlist(data.id))
      return toast.error("Product removed from wishlist !");
    }
  };
  const addToCompareHandle = (e) => {
    e.preventDefault();
    const compareItem = checkProductInCompare(compareData, data.id);
    if (!compareItem) {
      dispatch(addToCompare(data));
      return toast.success("Product added to compare !");
    } else {
      dispatch(removeFromCompare(data.id))
      return toast.error("Product removed from compare !");
    }
  };

  return (
    <>
      <li className="product_item group">
        <div className="product_thumb overflow-hidden relative">
          <Link
            href={`${process.env.PUBLIC_URL}/shop/product-details/[slug]`}
            as={`${process.env.PUBLIC_URL}/shop/product-details/${convertToSlug(data.name.toLowerCase())}?id=${data.id}`}
            className="product_img block"
          >
            <Image width={2000} height={2000} src={data.image} className="h-full object-cover duration-300 group-hover:scale-105" alt={data.name} />
          </Link>
          {renderType()}
          <ul className="product_action flex flex-col gap-2 absolute top-4 right-4 z-[1] max-lg:hidden">
            <li className="translate-x-20 duration-400 delay-0 group-hover:translate-x-0">
              <button
                className="product_action_btn btn_wishlist flex items-center justify-center w-10 h-10 border border-outline bg-white duration-300 hover:bg-black hover:text-white"
                onClick={addToWishlistHandle}
              >
                {checkProductInWishList(wishlistData, data.id) ? <Icon.Heart weight="fill" className="text-2xl text-red" /> : <Icon.Heart className="text-xl" />}
                <span className="blind">button wishlist</span>
              </button>
            </li>
            <li className="translate-x-20 duration-400 delay-100 group-hover:translate-x-0">
              <button
                className="product_action_btn btn_compare flex items-center justify-center w-10 h-10 border border-outline bg-white duration-300 hover:bg-black hover:text-white"
                onClick={addToCompareHandle}
              >
                {checkProductInCompare(compareData, data.id) ? <Icon.CheckCircle className="text-2xl text-[#71f84f]" /> : <Icon.GitDiff className="text-xl" />}
                <span className="blind">button compare</span>
              </button>
            </li>
            <li className="translate-x-20 duration-400 delay-200 group-hover:translate-x-0">
              <button
                className="product_action_btn btn_view flex items-center justify-center w-10 h-10 border border-outline bg-white duration-300 hover:bg-black hover:text-white"
              >
                <Icon.Eye className="text-xl" />
              </button>
            </li>
          </ul>
          <button
            className={`btn_cart btn absolute right-5 bottom-5 left-5 text-center translate-y-20 duration-400 group-hover:translate-y-0 max-lg:hidden ${checkProductInCart(cartState, data.id) ? 'active' : ''}`}
            onClick={addToCartHandle}
          >
            Add To cart
          </button>
        </div>
        <a href="product-detail.html" className="product_info block pt-5">
          <div className="flex items-center gap-2">
            <Rate currentRate={data.rate} color={'text-yellow'} />
            <span className="caption1 text-variant1">(1.234)</span>
          </div>
          <strong className="product_name my-2 txt-button line-clamp-2 duration-300 group-hover:text-orange">{data.name}</strong>
          <strong className="heading6">${data.price}.00</strong>
        </a>
      </li>
    </>
  );
}

export default Product;
