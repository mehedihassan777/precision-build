import React from 'react'
import LayoutOne from "@/components/Layout/LayoutOne";
import { Breadcrumb } from '@/components/Other/Breadcrumb';
import CartLayout from '@/components/Cart/CartLayout';

export default function cart() {
    return (
        <LayoutOne>
            <Breadcrumb image={'/images/breadcrumb/blog.jpg'} nav2={'Shopping Cart'} nav2Link={'/shop/cart'} title={'Shopping Cart'} />
            <CartLayout />
        </LayoutOne>
    );
}