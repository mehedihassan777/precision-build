'use client'

import React from 'react'
import Link from "next/link";
import Image from 'next/image';

export default function PageNotFound() {
    return (
        <div className="error flex items-center justify-center w-screen h-screen py-10 overflow-x-hidden">
            <div className="container">
                <div className="error_inner flex max-lg:flex-col items-center justify-between gap-y-5">
                    <div className="error_thumb flex-shrink-0 xl:w-7/12 sm:w-1/2 w-full">
                        <Image src="/images/components/error.png" width={4000} height={4000} alt="error" />
                    </div>
                    <div className="content">
                        <h1 className="md:text-9xl text-7xl font-bold">Oops!</h1>
                        <h3 className="heading3 mt-6">Page Not Found!</h3>
                        <p className="body1 text-secondary mt-3">The page you are looking for cannot be found. <br className="max-sm:hidden" />Take a break before trying again</p>
                        <Link href={'/'} className="btn mt-6">Back To Homepage</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
