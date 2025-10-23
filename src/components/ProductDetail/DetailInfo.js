'use client'

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Rate from "../Other/Rate";
import ProductDetailController from "./Elements/ProductDetailController";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/actions/cartActions";
import { addToWishlist } from "@/redux/actions/wishlistActions";
import { toast } from "react-toastify";
import { checkProductInWishList } from "@/common/shopUtils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from 'swiper/modules';
import 'swiper/css/bundle';

export default function DetailInfo({ data }) {
  const dispatch = useDispatch();
  const wishlistState = useSelector((state) => state.wishlistReducer);
  const [quantity, setQuantity] = useState();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const percentDiscount = data.originPrice - data.price > 0 ? Math.ceil(100 - (100 * data.price) / data.originPrice) : null;

  const getQuantity = (q) => {
    setQuantity(q);
  };

  const onAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(data, quantity));
    toast.success("Product added to cart");
  };

  const onAddToWishList = (e) => {
    e.preventDefault();
    let product = checkProductInWishList(wishlistState, data.id);
    dispatch(addToWishlist(data));
    toast.dismiss();
    if (!product) {
      return toast.success("Product added to wishlist !");
    } else {
      return toast.error("Product removed from wishlist !");
    }
  };

  return (
    <>
      <div className="flex max-lg:flex-col gap-y-12 w-full">
        <div className="product_thumb flex-shrink-0 lg:w-1/2 w-full lg:pr-4 h-fit">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[Thumbs]}
            className="swiper-thumb overflow-hidden"
          >
            {data.images.slice(0, 4).map((item, index) => (
              <SwiperSlide
                key={index}
              // onClick={() => {
              //   swiperRef.current?.slideTo(index);
              // }}
              >
                <Image
                  src={item}
                  width={1000}
                  height={1000}
                  alt='prd-img'
                  className='w-full aspect-square object-cover'
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={0}
            slidesPerView={4}
            watchSlidesProgress={true}
            modules={[Thumbs]}
            className="swiper-list"
          >
            {data.images.slice(0, 4).map((item, index) => (
              <SwiperSlide
                key={index}
              >
                <Image
                  src={item}
                  width={1000}
                  height={1000}
                  alt='prd-img'
                  className='w-full aspect-square object-cover'
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="product_detail w-full xl:pl-16 lg:pl-8">
          <div className="flex flex-wrap items-center gap-4">
            <span className="product_badge py-0.5 px-1.5 bg-red txt-button text-white">Best Seller</span>
            <Rate currentRate={data.rate || 5} color={'text-yellow'} />
            <span className="caption1 text-variant1">(1.234)</span>
            <span className="flex items-center gap-1">
              <Icon.Lightning weight="fill" className="text-red text-xl" />
              <span className="caption1">18 sold in last 32 hours</span>
            </span>
          </div>
          <h4 className="product_name mt-4 heading4">{data.name || "Dewalt 20V MAX XR Impact Driver, Brushless, 1/4'', 3-Speed, Bare Tool Only"}</h4>
          <div className="flex flex-wrap items-center mt-5">
            <h5 className="product_price heading5">${data.price || 79}.00</h5>
            {percentDiscount && <>
              <del className="product_origin_price ml-2 body2 text-variant2">${data.originPrice || 98}.00</del>
              <span className="product_discount ml-4 py-0.5 px-1.5 bg-red txt-button text-white">-{percentDiscount}%</span>
            </>}
          </div>
          <p className="product_desc mt-5 text-variant1">{data.desciption || "Swiffer duster starter kit includes one handle and three unscented disposable dusters, when you run out of Swiffer 360-degree Dusters, save your handle and buy refills. Clever all-around design features 50% more fibers."}</p>
          <div className="quantity_area mt-6">
            <p>Quantity:</p>
            <ProductDetailController
              data={data}
              getQuantity={getQuantity}
              onAddToCart={onAddToCart}
              onAddToWishList={onAddToWishList}
            />
          </div>
          <a href="checkout.html" className="btn flex items-center justify-center w-full h-12 mt-4">Buy it now</a>
          <div className="mt-6">
            <p className="caption1">Pickup available at Shop location. Usually ready in 24 hours</p>
            <Link href="https://maps.app.goo.gl/Z8zKdiKbpcEdV6MV8" className="flex items-center gap-1 mt-3" target="_blank">
              <Icon.MapPin className='text-xl' />
              <span className="caption1 underline duration-300 hover:text-orange">View Store Information</span>
            </Link>
            <div className="flex items-center gap-1 mt-3">
              <Icon.Timer className='text-xl' />
              <p>
                <span className="caption1 text-variant1">Estimated Delivery:</span>
                <span className="caption1 text-variant1"><span className="text-black">12-26 days</span> (International), <span className="text-black">3-6 days</span> (United States)</span>
              </p>
            </div>
            <div className="flex items-center gap-1 mt-3">
              <Icon.ArrowClockwise className='text-xl' />
              <span className="caption1 text-variant1">Return within <span className="text-black">45 days</span> of purchase. Duties & taxes are non-refundable.</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 mt-3">
              <div className="flex items-center gap-1 pr-4 border-r border-outline">
                <Icon.Truck className='text-xl' />
                <span className="caption1">Delivery & Return</span>
              </div>
              <div className="flex items-center gap-1 pr-4 border-r border-outline">
                <Icon.Question className='text-xl' />
                <span className="caption1">Ask A Question</span>
              </div>
              <div className="flex items-center gap-1">
                <Icon.ShareNetwork className='text-xl' />
                <span className="caption1">Share</span>
              </div>
            </div>
          </div>
          <ul className="flex flex-col gap-2 mt-6 pt-6 border-t border-outline">
            <li className="flex items-center gap-1 caption1">
              <span className="txt-button">SKU:</span>
              <span className="text-variant1">53453412</span>
            </li>
            <li className="flex items-center gap-1 caption1">
              <span className="txt-button">Vendor:</span>
              <span className="text-variant1">dewalt</span>
            </li>
            <li className="flex items-center gap-1 caption1">
              <span className="txt-button">Available:</span>
              <span className="text-variant1">Instock</span>
            </li>
            <li className="flex items-center gap-1 caption1">
              <span className="txt-button">Categories:</span>
              <span className="text-variant1">tools, electric</span>
            </li>
          </ul>
          <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-outline">
            <span>Guranteed safe checkout:</span>
            <ul className="payment_list flex flex-wrap gap-3">
              <li className="payment_item">
                <Image width={2000} height={2000} src="/images/other/payment1.png" className="h-[32px]" alt="visa" />
              </li>
              <li className="payment_item">
                <Image width={2000} height={2000} src="/images/other/payment2.png" className="h-[32px]" alt="mastercard" />
              </li>
              <li className="payment_item">
                <Image width={2000} height={2000} src="/images/other/payment3.png" className="h-[32px]" alt="amex" />
              </li>
              <li className="payment_item">
                <Image width={2000} height={2000} src="/images/other/payment4.png" className="h-[32px]" alt="paypal" />
              </li>
              <li className="payment_item">
                <Image width={2000} height={2000} src="/images/other/payment5.png" className="h-[32px]" alt="diners club" />
              </li>
              <li className="payment_item">
                <Image width={2000} height={2000} src="/images/other/payment6.png" className="h-[32px]" alt="discover" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
