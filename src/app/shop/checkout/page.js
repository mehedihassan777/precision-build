import React from 'react'
import LayoutOne from "@/components/Layout/LayoutOne";
import { Breadcrumb } from '@/components/Other/Breadcrumb';
import CheckoutLayout from '@/components/Checkout/CheckoutLayout';

export default function checkout() {
    return (
        <LayoutOne>
            <Breadcrumb image={'/images/breadcrumb/blog.jpg'} nav2={'Check Out'} nav2Link={'/shop/checkout'} title={'Check Out'} />
            <CheckoutLayout />
        </LayoutOne>
    );
}