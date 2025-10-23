import React from 'react'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

const logos = [
    {
        type: 1,
        logo: "orange"
    },
    {
        type: 2,
        logo: "blue"
    },
    {
        type: 3,
        logo: "yellow"
    },
    {
        type: 4,
        logo: "pink"
    }
]

const BannerOne = ({ type }) => {
    return (
        <section className={`section banner sm:py-16 py-10`}>
            <h3 className="blind">Banner</h3>
            <Marquee>
                <strong className={`heading2 lg:px-15 sm:px-10 px-5`}>Leak Detection</strong>
                <Image src={`/images/logo.jpg`} width={2000} height={2000} alt='logo_orange' className='max-w-28' />
                <strong className={`heading2 lg:px-15 sm:px-10 px-5`}>Drain Cleaning</strong>
                <Image src={`/images/logo.jpg`} width={2000} height={2000} alt='logo_orange' className='max-w-28' />
                <strong className={`heading2 lg:px-15 sm:px-10 px-5`}>Pipe Installation</strong>
                <Image src={`/images/logo.jpg`} width={2000} height={2000} alt='logo_orange' className='max-w-28' />
                <strong className={`heading2 lg:px-15 sm:px-10 px-5`}>Heater Installation</strong>
                <Image src={`/images/logo.jpg`} width={2000} height={2000} alt='logo_orange' className='max-w-28' />
                <strong className={`heading2 lg:px-15 sm:px-10 px-5`}>Leak Detection</strong>
                <Image src={`/images/logo.jpg`} width={2000} height={2000} alt='logo_orange' className='max-w-28' />
                <strong className={`heading2 lg:px-15 sm:px-10 px-5`}>Drain Cleaning</strong>
                <Image src={`/images/logo.jpg`} width={2000} height={2000} alt='logo_orange' className='max-w-28' />
                <strong className={`heading2 lg:px-15 sm:px-10 px-5`}>Pipe Installation</strong>
                <Image src={`/images/logo.jpg`} width={2000} height={2000} alt='logo_orange' className='max-w-28' />
                <strong className={`heading2 lg:px-15 sm:px-10 px-5`}>Heater Installation</strong>
                <Image src={`/images/logo.jpg`} width={2000} height={2000} alt='logo_orange' className='max-w-28' />
            </Marquee>
        </section>
    )
}

export default BannerOne