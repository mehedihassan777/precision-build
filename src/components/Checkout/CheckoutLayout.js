'use client'

import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Link from "next/link";
import Image from 'next/image';
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { convertToSlug } from '@/common/utils';

const CheckoutLayout = () => {
    const orderState = useSelector((state) => state.orderReducer);
    const [activePayment, setActivePayment] = useState('credit-card')
    const [openLogin, setOpenLogin] = useState(false)

    const handlePayment = (item) => {
        setActivePayment(item)
    }

    const handleOpenLogin = () => {
        setOpenLogin(!openLogin)
    }

    return (
        <div className="checkout lg:py-20 sm:py-14 py-10 border-b border-outline">
            <div className="container flex justify-between max-xl:flex-col gap-y-8">
                <div className="checkout_form_login xl:w-1/2 xl:pr-[15px] w-full">
                    <button className={`btn_form_login flex items-center justify-between w-full py-3 px-4 bg-surface ${openLogin ? 'active' : ''}`} onClick={handleOpenLogin}>
                        <span className="left flex items-center">
                            <span className="text-on-surface-variant1 pr-4">Already have an account? </span>
                            <span className="txt-button text-on-surface hover-underline">
                                Login
                            </span>
                        </span>
                        <Icon.CaretDown className="text-xl block" />
                    </button>
                    <div className={`form_login mt-3 ${openLogin ? 'open' : ''}`}>
                        <form className="p-5 border border-outline">
                            <div className="grid sm:grid-cols-2 gap-5">
                                <div className="email ">
                                    <input className="border border-outline px-4 pt-3 pb-3 w-full" id="username" type="email" placeholder="Username or email" required />
                                </div>
                                <div className="pass ">
                                    <input className="border border-outline px-4 pt-3 pb-3 w-full" id="password" type="password" placeholder="Password" required />
                                </div>
                            </div>
                            <div className="block-button mt-3">
                                <button className="btn">Login</button>
                            </div>
                        </form>
                    </div>
                    <div className="information mt-5">
                        <div className="heading5">Information</div>
                        <div className="form-checkout mt-5">
                            <form>
                                <div className="grid sm:grid-cols-2 gap-4 gap-y-5 flex-wrap">
                                    <div className="">
                                        <input className="form_input w-full px-4 py-3 border border-outline" id="firstName" type="text" placeholder="First Name *" required />
                                    </div>
                                    <div className="">
                                        <input className="form_input w-full px-4 py-3 border border-outline" id="lastName" type="text" placeholder="Last Name *" required />
                                    </div>
                                    <div className="">
                                        <input className="form_input w-full px-4 py-3 border border-outline" id="email" type="email" placeholder="Email Address *" required />
                                    </div>
                                    <div className="">
                                        <input className="form_input w-full px-4 py-3 border border-outline" id="phoneNumber" type="text" placeholder="Phone Numbers *" required />
                                    </div>
                                    <div className="col-span-full form_select">
                                        <select className="form_input w-full px-4 py-3 border border-outline" id="region" name="region" defaultValue={'default'}>
                                            <option value="default" disabled>Choose Country/Region</option>
                                            <option value="India">India</option>
                                            <option value="France">France</option>
                                            <option value="Singapore">Singapore</option>
                                        </select>
                                        <Icon.CaretDown className='arrow_down' />
                                    </div>
                                    <div className="">
                                        <input className="form_input w-full px-4 py-3 border border-outline" id="city" type="text" placeholder="Town/City *" required />
                                    </div>
                                    <div className="">
                                        <input className="form_input w-full px-4 py-3 border border-outline" id="apartment" type="text" placeholder="Street,..." required />
                                    </div>
                                    <div className="form_select">
                                        <select className="form_input w-full px-4 py-3 border border-outline" id="country" name="country" defaultValue={'default'}>
                                            <option value="default" disabled>Choose State</option>
                                            <option value="India">India</option>
                                            <option value="France">France</option>
                                            <option value="Singapore">Singapore</option>
                                        </select>
                                        <Icon.CaretDown className='arrow_down' />
                                    </div>
                                    <div className="">
                                        <input className="form_input w-full px-4 py-3 border border-outline" id="postal" type="text" placeholder="Postal Code *" required />
                                    </div>
                                    <div className="col-span-full">
                                        <textarea className="form_input w-full px-4 py-3 border border-outline" id="note" name="note" rows={3} placeholder="Write note..."></textarea>
                                    </div>
                                </div>
                                <div className="payment md:mt-10 mt-6">
                                    <div className="heading5">Choose payment Option:</div>
                                    <div className="list-payment flex flex-col gap-6 mt-5">
                                        {['credit card', 'cash delivery', 'apple pay', 'paypal'].map((item, index) => (
                                            <div className={`payment_item bg-surface p-5 border border-outline ${activePayment === item ? 'open' : ''}`} key={index}>
                                                <div className="form_radio flex items-center gap-2">
                                                    <input className="radio_input flex-shrink-0 relative w-4 h-4 rounded-full cursor-pointer" type="radio" id={convertToSlug(item)} name="payment" checked={activePayment === convertToSlug(item)} onChange={() => handlePayment(convertToSlug(item))} />
                                                    <label className="txt-button cursor-pointer" htmlFor={convertToSlug(item)}>{item}</label>
                                                </div>
                                                <div className="payment_infor">
                                                    <p className="text-on-surface-variant1 pt-4">Make your payment directly into our bank account. Your order will not be shipped until the funds have cleared in our account.</p>
                                                    <div className="grid grid-cols-2 gap-4 gap-y-5 mt-4">
                                                        <div className="col-span-full">
                                                            <input className="form_input w-full mt-2 px-4 py-3 border border-outline bg-white" type="text" id="cardNameCredit" placeholder="Name On Card*" />
                                                        </div>
                                                        <div className="col-span-full">
                                                            <input className="form_input w-full mt-2 px-4 py-3 border border-outline bg-white" type="text" id="cardNumberCredit" placeholder="Card Numbers*" />
                                                        </div>
                                                        <div>
                                                            <input className="form_input w-full mt-2 px-4 py-3 border border-outline bg-white" type="date" id="dateCredit" name="date" />
                                                        </div>
                                                        <div>
                                                            <input className="form_input w-full mt-2 px-4 py-3 border border-outline bg-white" type="text" id="ccvCredit" placeholder="CVV*" />
                                                        </div>
                                                        <div className="form_checkbox flex col-span-full">
                                                            <input type="checkbox" className="checkbox" id="saveCredit" />
                                                            <Icon.CheckSquare weight='fill' className="text-[22px] checkbox_icon" />
                                                            <label className="label pl-7" for="saveCredit">Save my name, email, and website in this browser for the next time I comment.</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="block-button md:mt-10 mt-6">
                                    <button className="btn w-full">Payment</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
                <div className="xl:w-5/12 xl:pl-[15px] w-full">
                    <div className="checkout-block">
                        <div className="heading5 pb-3">Your Order</div>
                        <div className="list-product-checkout">
                            {orderState.products.length < 1 ? (
                                <p className='txt-button pt-3'>No product in cart</p>
                            ) : (
                                orderState.products.map((product) => (
                                    <div className="item flex items-center justify-between w-full pb-5 border-b border-outline gap-4 mt-5" key={product.id}>
                                        <div className="bg-img flex items-center justify-center w-[100px] aspect-square flex-shrink-0 overflow-hidden">
                                            <Image
                                                src={product.image}
                                                width={500}
                                                height={500}
                                                alt='img'
                                                className='h-full w-auto'
                                            />
                                        </div>
                                        <div className="flex items-center justify-between w-full">
                                            <div className="name txt-button line-clamp-2 pr-5">{product.name}</div>
                                            <div className="txt-button">
                                                <span className='quantity'>{product.cartQuantity}</span>
                                                <span className='px-1'>x</span>
                                                <span>
                                                    ${product.discount ? product.discount : product.price}.00
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                        <div className="discount-block py-5 flex justify-between border-b border-outline">
                            <div className="txt-button">Discounts</div>
                            <div className="txt-button">-$<span className="discount">{orderState.discount}</span><span>.00</span></div>
                        </div>
                        <div className="ship-block py-5 flex justify-between border-b border-outline">
                            <div className="txt-button">Shipping</div>
                            <div className="txt-button">{Number(orderState.ship) === 0 ? 'Free' : `$${orderState.ship}.00`}</div>
                        </div>
                        <div className="total-cart-block pt-5 flex justify-between">
                            <div className="heading5">Total</div>
                            <div className="heading5 total-cart">{orderState.total}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutLayout
