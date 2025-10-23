'use client'

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Countdown from 'react-countdown';
import Link from "next/link";
import Image from 'next/image';
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { convertToSlug, formatCurrency } from '@/common/utils';
import { calculateTotalPrice, calculateTotalOrder } from '@/common/shopUtils';
import { decreaseQuantityCart, increaseQuantityCart, removeFromCart } from '@/redux/actions/cartActions';
import { setOrder } from '@/redux/actions/orderActions';
import Quantity from '../Control/Quantity';
import { useRouter } from 'next/navigation';

const CartLayout = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const cartState = useSelector((state) => state.cartReducer);
    let moneyForFreeship = 200;
    let [shipCart, setShipCart] = useState(30)
    let [discountCart, setDiscountCart] = useState(0)
    let [totalCart, setTotalCart] = useState(calculateTotalPrice(cartState, true))
    let [totalOrder, setTotalOrder] = useState(calculateTotalOrder(cartState, discountCart, shipCart, true))

    const renderer = ({ minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
            return <span>{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</span>;
        }
    };

    const removeProduct = (e, cartId) => {
        e.preventDefault();
        dispatch(removeFromCart(cartId));
        return toast.error("Product removed from cart");
    };

    useEffect(() => {
        setTotalCart(calculateTotalPrice(cartState, true))
        setTotalOrder(calculateTotalOrder(cartState, discountCart, shipCart, true))
    }, [cartState, shipCart, discountCart])

    const handleCheckout = () => {
        const orderData = {
            products: cartState,
            ship: shipCart,
            discount: discountCart,
            total: totalOrder,
        };

        dispatch(setOrder(orderData));
        router.push('/shop/checkout');
    };

    return (
        <div className="section cart sm:mt-25 mt-15">
            <div className="container flex justify-between max-xl:flex-col gap-y-8">
                <div className="xl:w-2/3 xl:pr-3 w-full">
                    <div className="time bg-surface py-3 px-5 flex items-center">
                        <div className="heding5">🔥</div>
                        <div className="caption1 pl-2">Your cart will expire in
                            <span className="min text-pink txt-button font-bold"> <Countdown date={Date.now() + 600000} renderer={renderer} /> </span>
                            <span>minutes! Please checkout now before your items sell out!</span>
                        </div>
                    </div>
                    <div className="heading banner mt-5">
                        <div className="text">Buy
                            <span className="txt-button"> $<span className="more-price">{moneyForFreeship - totalCart > 0 ? (<>{moneyForFreeship - totalCart}</>) : (0)}</span>.00 </span>
                            <span>more to get </span>
                            <span className="txt-button">freeship</span>
                        </div>
                        <div className="tow-bar-block mt-4">
                            <div
                                className="progress-line bg-orange h-full"
                                style={{ width: totalCart <= moneyForFreeship ? `${(totalCart / moneyForFreeship) * 100}%` : `100%` }}
                            ></div>
                        </div>
                    </div>
                    <div className="cart_list overflow-x-auto w-full sm:mt-7 mt-5">
                        <div className='w-full max-md:w-[900px]'>
                            <div className="heading bg-surface py-4">
                                <div className="flex">
                                    <div className="w-1/2">
                                        <div className="txt-button text-center">Products</div>
                                    </div>
                                    <div className="w-1/12">
                                        <div className="txt-button text-center">Price</div>
                                    </div>
                                    <div className="w-1/6">
                                        <div className="txt-button text-center">Quantity</div>
                                    </div>
                                    <div className="w-1/6">
                                        <div className="txt-button text-center">Total Price</div>
                                    </div>
                                </div>
                            </div>
                            <div className="product_list w-full mt-3">
                                {!cartState || cartState.length < 1 ? (
                                    <p className='txt-button pt-3'>No product in cart</p>
                                ) : (
                                    cartState.map((product) => (
                                        <div className="product-item style-cart flex md:mt-7 md:pb-7 mt-5 pb-5 border-b border-outline w-full" key={product.id}>
                                            <div className="w-1/2">
                                                <div className="flex items-center gap-6">
                                                    <Link
                                                        className="bg-img md:w-[100px] w-20 flex-shrink-0 aspect-square"
                                                        href={`${process.env.PUBLIC_URL}/shop/product-details/[slug]`}
                                                        as={`${process.env.PUBLIC_URL}/shop/product-details/${convertToSlug(product.name.toLowerCase())}?id=${product.id}`}
                                                    >
                                                        <Image
                                                            src={product.image}
                                                            width={1000}
                                                            height={1000}
                                                            alt={product.name}
                                                            className='w-full h-full object-cover'
                                                        />
                                                    </Link>
                                                    <div>
                                                        <Link
                                                            className="txt-button name line-clamp-2 duration-300 hover:text-orange"
                                                            href={`${process.env.PUBLIC_URL}/shop/product-details/[slug]`}
                                                            as={`${process.env.PUBLIC_URL}/shop/product-details/${convertToSlug(product.name.toLowerCase())}?id=${product.id}`}
                                                        >
                                                            {product.name}
                                                        </Link>
                                                        <div className="list-select mt-3"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-1/12 price flex items-center justify-center">
                                                <div className="txt-button text-center">{formatCurrency(product.price)}</div>
                                            </div>
                                            <div className="w-1/6 flex items-center justify-center">
                                                <div className="quantity-block flex-shrink-0">
                                                    <Quantity
                                                        className={'gap-5'}
                                                        defaultQuantity={product.cartQuantity}
                                                        onIncrease={() =>
                                                            dispatch(increaseQuantityCart(product.cartId))
                                                        }
                                                        onDecrease={() =>
                                                            dispatch(decreaseQuantityCart(product.cartId))
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-1/6 flex total-price items-center justify-center">
                                                <div className="txt-button text-center">{formatCurrency(product.price * product.cartQuantity)}</div>
                                            </div>
                                            <div className="w-1/12 flex items-center justify-center">
                                                <Icon.XCircle
                                                    className='text-xl max-md:text-base text-red cursor-pointer hover:text-pink duration-300'
                                                    onClick={(e) => removeProduct(e, product.cartId)}
                                                />
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="input-block discount-code w-full h-14 sm:mt-7 mt-5">
                        <form className='w-full h-full relative'>
                            <input type="text" placeholder='Add voucher discount' className='w-full h-full pl-4 pr-14 border border-outline' required />
                            <button className='btn absolute top-1.5 bottom-1.5 right-1.5 px-5 flex items-center justify-center'>Apply Code
                            </button>
                        </form>
                    </div>
                </div>
                <div className="xl:w-1/3 xl:pl-12 w-full">
                    <div className="checkout-block bg-surface p-6">
                        <div className="heading5">Order Summary</div>
                        <div className="total-block py-5 flex justify-between border-b border-line">
                            <div className="txt-button">Subtotal</div>
                            <div className="txt-button">{totalCart}</div>
                        </div>
                        <div className="discount-block py-5 flex justify-between border-b border-line">
                            <div className="txt-button">Discounts</div>
                            <div className="txt-button"> <span>-$</span><span className="discount">{discountCart}</span><span>.00</span></div>
                        </div>
                        <div className="ship-block py-5 flex justify-between border-b border-line">
                            <div className="txt-button">Shipping</div>
                            <div className="choose-type flex gap-12">
                                <div className="left">
                                    <div className="form_radio ship_item flex items-center gap-2">
                                        {moneyForFreeship - totalCart > 0 ?
                                            (
                                                <input
                                                    className='radio_input flex-shrink-0 relative w-4 h-4 border-orange rounded-full cursor-pointer'
                                                    id="shipping"
                                                    type="radio"
                                                    name="ship"
                                                    disabled
                                                />
                                            ) : (
                                                <input
                                                    className='radio_input flex-shrink-0 relative w-4 h-4 border-orange rounded-full cursor-pointer'
                                                    id="shipping"
                                                    type="radio"
                                                    name="ship"
                                                    value={0}
                                                    checked={shipCart === 0}
                                                    onChange={() => setShipCart(0)}
                                                />
                                            )}
                                        <label className="cursor-pointer pl-1" htmlFor="shipping">Free Shipping:</label>
                                    </div>
                                    <div className="form_radio ship_item flex items-center gap-2">
                                        <input
                                            className='radio_input flex-shrink-0 relative w-4 h-4 border-orange rounded-full cursor-pointer'
                                            id="local"
                                            type="radio"
                                            name="ship"
                                            value={30}
                                            checked={shipCart === 30}
                                            onChange={() => setShipCart(30)}
                                        />
                                        <label className="cursor-pointer text-on-surface-variant1 pl-1" htmlFor="local">Local:</label>
                                    </div>
                                    <div className="form_radio ship_item flex items-center gap-2">
                                        <input
                                            className='radio_input flex-shrink-0 relative w-4 h-4 border-orange rounded-full cursor-pointer'
                                            id="flat"
                                            type="radio"
                                            name="ship"
                                            value={40}
                                            checked={shipCart === 40}
                                            onChange={() => setShipCart(40)}
                                        />
                                        <label className="cursor-pointer text-on-surface-variant1 pl-1" htmlFor="flat">Flat Rate:</label>
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="ship">$0.00</div>
                                    <div className="local text-on-surface-variant1 mt-1">$30.00</div>
                                    <div className="flat text-on-surface-variant1 mt-1">$40.00</div>
                                </div>
                            </div>
                        </div>
                        <div className="total-cart-block pt-4 pb-4 flex justify-between">
                            <div className="heading5">Total</div>
                            <div className="heading5">{cartState.length > 0 ? totalOrder : '$0.00'}</div>
                        </div>
                        <div className="block-button flex flex-col items-center gap-y-4 mt-5">
                            <button className="checkout-btn btn text-center w-full" onClick={handleCheckout}>Process To Checkout</button>
                            <Link className="txt-button hover:underline" href={"/shop/our-products"}>Continue shopping</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartLayout
