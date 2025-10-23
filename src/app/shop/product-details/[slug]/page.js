import React from 'react'
import Link from 'next/link';
import * as Icon from "@phosphor-icons/react/dist/ssr";
import LayoutOne from "@/components/Layout/LayoutOne";
import DetailInfo from '@/components/ProductDetail/DetailInfo';
import prdData from "@/data/products.json"
import DetailReview from '@/components/ProductDetail/DetailReview';
import RelatedProduct from '@/components/ProductDetail/RelatedProduct';
import { getProductBySlug } from '@/common/productSelect';

export default function ProductsDetail({ params }) {
    const { slug } = params

    // Decode URL
    const decodedSlug = decodeURIComponent(slug);

    // handle with ' and "
    const cleanedSlug = decodedSlug.replace(/['"]/g, "'");
    
    let foundPrd = getProductBySlug(prdData, cleanedSlug);

    if (!foundPrd) {
        notFound(); // Render 404 if `foundPrd` is null or undefined
    }

    return (
        <LayoutOne>
            <section className="section breadcrumb pt-5 border-t border-outline">
                <h3 className="blind">Product Detail</h3>
                <div className="container">
                    <ul className="breadcrumb_nav flex items-center gap-1">
                        <li className="flex items-center">
                            <Link href="/" className="breadcrumb_link caption1 duration-300 hover:underline">Home</Link>
                        </li>
                        <li className="flex items-center">
                            <Icon.CaretRight className="text-xs" />
                            <Link href="/shop/our-products" className="breadcrumb_link pl-1 caption1 duration-300 hover:underline">Shop</Link>
                        </li>
                        <li className="flex items-center">
                            <Icon.CaretRight className="text-xs opacity-50" />
                            <Link href="#!" scroll={false} className="breadcrumb_link pl-1 caption1 opacity-50 line-clamp-1 max-w-60">{foundPrd.name}</Link>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="section product sm:mt-15 mt-7">
                <div className="container flex flex-col items-center">
                    <DetailInfo data={foundPrd} />
                    <DetailReview data={foundPrd} />
                </div>
            </section>
            <RelatedProduct />
        </LayoutOne>
    );
}