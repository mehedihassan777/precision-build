import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { convertToSlug } from '@/common/utils'
import * as Icon from "@phosphor-icons/react/dist/ssr"

const BlogItem = ({ data, type }) => {
    return (
        <>
            {type === 'style-one' && (
                <div className="blog_item flex flex-col gap-6">
                    <Link className="blog_thumb block overflow-hidden group"
                        href={process.env.PUBLIC_URL + "/blog/detail1/[slug]"}
                        as={process.env.PUBLIC_URL + "/blog/detail1/" + convertToSlug(data.title) + "?id=" + data.id}
                    >
                        <Image width={2000} height={2000} src={data.thumbImage} className="duration-400 group-hover:scale-110" alt={data.title} />
                    </Link>
                    <div className="blog_info">
                        <div className="flex items-center gap-3 txt-label text-variant1">
                            <span className="blog_date">{data.date}</span>
                            <span className="flex-shrink-0 w-px h-3 bg-outline"></span>
                            <Link href="/blog/default" className="blog_cate duration-300 hover:underline hover:text-black">{data.category}</Link>
                        </div>
                        <Link className="blog_tit mt-3 line-clamp-3 heading5 duration-300 hover:text-orange"
                            href={process.env.PUBLIC_URL + "/blog/detail1/[slug]"}
                            as={process.env.PUBLIC_URL + "/blog/detail1/" + convertToSlug(data.title) + "?id=" + data.id}
                        >
                            {data.title}
                        </Link>
                    </div>
                </div>
            )}
            {type === 'style-two' && (
                <div className="blog_item style-two overflow-hidden relative group">
                    <Link href={process.env.PUBLIC_URL + "/blog/detail1/[slug]"}
                        as={process.env.PUBLIC_URL + "/blog/detail1/" + convertToSlug(data.title) + "?id=" + data.id}
                        className="blog_thumb block"
                    >
                        <Image width={2000} height={2000} src={data.thumbImage} alt={data.title} />
                    </Link>
                    <div className="blog_info absolute bottom-0 left-0 w-full p-7 group-hover:text-white duration-500">
                        <div className="flex items-center gap-3 relative txt-label text-variant1 group-hover:text-white duration-300">
                            <span className="blog_date">{data.date}</span>
                            <span className="flex-shrink-0 w-px h-3 bg-outline"></span>
                            <Link href="/blog/default" className="blog_cate hover:underline">{data.category}</Link>
                        </div>
                        <Link href={process.env.PUBLIC_URL + "/blog/detail1/[slug]"}
                            as={process.env.PUBLIC_URL + "/blog/detail1/" + convertToSlug(data.title) + "?id=" + data.id}
                            className="blog_tit relative mt-3 line-clamp-3 heading5 hover:underline">{data.title}</Link>
                        <Link href={process.env.PUBLIC_URL + "/blog/detail1/[slug]"}
                            as={process.env.PUBLIC_URL + "/blog/detail1/" + convertToSlug(data.title) + "?id=" + data.id}
                            className="inline-flex relative items-center gap-2 mt-6"
                        >
                            <span className="border-b-2 underline-offset-2 txt-button">Read More</span>
                            <Icon.ArrowUpRight className="text-xl" />
                        </Link>
                    </div>
                </div>
            )}
            {type === 'style-three' && (
                <div className="blog_item flex max-md:flex-col md:items-center justify-end relative h-full border border-outline bg-white group">
                    <Link href={process.env.PUBLIC_URL + "/blog/detail1/[slug]"}
                        as={process.env.PUBLIC_URL + "/blog/detail1/" + convertToSlug(data.title) + "?id=" + data.id}
                        className="blog_thumb block overflow-hidden md:absolute top-0 left-0 h-full md:w-[46%]"
                    >
                        <Image width={2000} height={2000} src={data.thumbImage} alt={data.title} className="h-full object-cover duration-300 hover:scale-105" />
                    </Link>
                    <div className="blog_info flex-shrink-0 md:w-[54%] 2xl:p-9 p-7">
                        <div className="flex flex-wrap items-center gap-3 relative txt-label text-variant1">
                            <span className="blog_date">{data.date}</span>
                            <span className="flex-shrink-0 w-px h-3 bg-outline"></span>
                            <a href="/blog/default" className="blog_cate duration-300 hover:text-black hover:underline">{data.category}</a>
                        </div>
                        <Link href={process.env.PUBLIC_URL + "/blog/detail1/[slug]"}
                            as={process.env.PUBLIC_URL + "/blog/detail1/" + convertToSlug(data.title) + "?id=" + data.id}
                            className="block mt-3"
                        >
                            <strong className="blog_tit relative mt-3 line-clamp-3 heading5 hover:underline">{data.title}</strong>
                            <p className="blog_desc mt-5 text-variant1 line-clamp-2">{data.description}</p>
                            <strong className="inline-flex relative items-center gap-2 mt-5 duration-300 hover:text-yellow">
                                <span className="border-b-2 underline-offset-2 txt-button">Read More</span>
                                <Icon.ArrowUpRight weight='bold' className="text-xl" />
                            </strong>
                        </Link>
                    </div>
                </div>
            )}
            {type === 'style-four' && (
                <div className="blog_item flex flex-col gap-6">
                    <Link className="blog_thumb block overflow-hidden aspect-[1.3778] group"
                        href={process.env.PUBLIC_URL + "/blog/detail1/[slug]"}
                        as={process.env.PUBLIC_URL + "/blog/detail1/" + convertToSlug(data.title) + "?id=" + data.id}
                    >
                        <Image width={2000} height={2000} src={data.thumbImage} className="h-full object-cover duration-400 group-hover:scale-110" alt={data.title} />
                    </Link>
                    <div className="blog_info">
                        <div className="flex items-center gap-3 txt-label text-variant1">
                            <span className="blog_date">{data.date}</span>
                            <span className="flex-shrink-0 w-px h-3 bg-outline"></span>
                            <Link href="/blog/default" className="blog_cate duration-300 hover:underline hover:text-black">{data.category}</Link>
                        </div>
                        <Link href={process.env.PUBLIC_URL + "/blog/detail1/[slug]"}
                            as={process.env.PUBLIC_URL + "/blog/detail1/" + convertToSlug(data.title) + "?id=" + data.id}
                            className="block mt-4"
                        >
                            <strong className="blog_tit line-clamp-2 heading4 duration-300 hover:text-red">{data.title}</strong>
                            <p className="blog_tit mt-5 line-clamp-2 text-variant1">{data.description}</p>
                        </Link>
                    </div>
                </div>
            )}
            {type === 'style-sub' && (
                <div className="blog_item flex max-sm:flex-col sm:items-center gap-6 animate animate_left">
                    <Link href={process.env.PUBLIC_URL + "/blog/detail1/[slug]"}
                        as={process.env.PUBLIC_URL + "/blog/detail1/" + convertToSlug(data.title) + "?id=" + data.id}
                        className="blog_thumb block overflow-hidden flex-shrink-0 sm:w-56 group"
                    >
                        <Image width={2000} height={2000} src={data.thumbImage} className="duration-400 group-hover:scale-110" alt={data.title} />
                    </Link>
                    <div className="blog_info">
                        <div className="flex flex-wrap items-center gap-3 txt-label text-variant1">
                            <span className="blog_date">{data.date}</span>
                            <span className="flex-shrink-0 w-px h-3 bg-outline"></span>
                            <Link href="/blog/default" className="blog_cate duration-300 hover:underline hover:text-black">{data.category}</Link>
                        </div>
                        <Link href={process.env.PUBLIC_URL + "/blog/detail1/[slug]"}
                            as={process.env.PUBLIC_URL + "/blog/detail1/" + convertToSlug(data.title) + "?id=" + data.id}
                            className="block mt-4"
                        >
                            <strong className="blog_tit line-clamp-2 heading5 duration-300 hover:text-red">{data.title}</strong>
                        </Link>
                    </div>
                </div>
            )}
            {type === 'style-default' && (
                <div className="blog_item">
                    <Link className="blog_thumb block overflow-hidden aspect-[16/9] group"
                        href={process.env.PUBLIC_URL + "/blog/detail1/[slug]"}
                        as={process.env.PUBLIC_URL + "/blog/detail1/" + convertToSlug(data.title) + "?id=" + data.id}
                    >
                        <Image width={2000} height={2000} src={data.thumbImage} className="blog_img h-full object-cover duration-400 group-hover:scale-110" alt={data.title} />
                    </Link>
                    <div className="blog_info mt-5">
                        <div className="flex items-center gap-3 txt-label text-variant1">
                            <span className="blog_date">{data.date}</span>
                            <span className="flex-shrink-0 w-px h-3 bg-outline"></span>
                            <Link href="/blog/default" className="blog_cate duration-300 hover:underline hover:text-black">{data.category}</Link>
                        </div>
                        <Link href={process.env.PUBLIC_URL + "/blog/detail1/[slug]"}
                            as={process.env.PUBLIC_URL + "/blog/detail1/" + convertToSlug(data.title) + "?id=" + data.id}
                            className="block"
                        >
                            <strong className="blog_title mt-4 heading5 line-clamp-2 hover:underline">{data.title}</strong>
                            <p className="blog_desc mt-5 line-clamp-3 text-variant1">{data.description}</p>
                            <strong className="inline-block mt-5 underline duration-300 hover:text-orange">Read More</strong>
                        </Link>
                    </div>
                </div>
            )}
            {type === 'style-list' && (
                <div className="blog_item flex max-sm:flex-col items-center border border-outline">
                    <Link href={process.env.PUBLIC_URL + "/blog/detail1/[slug]"}
                        as={process.env.PUBLIC_URL + "/blog/detail1/" + convertToSlug(data.title) + "?id=" + data.id}
                        className="blog_thumb block flex-shrink-0 overflow-hidden sm:w-[48%] aspect-[1.45] group"
                    >
                        <Image width={2000} height={2000} src={data.thumbImage} alt={data.title} className="blog_img h-full object-cover duration-400 group-hover:scale-110" />
                    </Link>
                    <div className="blog_info sm:p-10 p-6">
                        <div className="flex flex-wrap items-center gap-3 txt-label text-variant1">
                            <span className="blog_date">{data.date}</span>
                            <span className="flex-shrink-0 w-px h-3 bg-outline"></span>
                            <Link href="/blog/list" className="blog_cate duration-300 hover:underline hover:text-black">{data.category}</Link>
                        </div>
                        <Link href={process.env.PUBLIC_URL + "/blog/detail1/[slug]"}
                            as={process.env.PUBLIC_URL + "/blog/detail1/" + convertToSlug(data.title) + "?id=" + data.id}
                            className="block"
                        >
                            <strong className="blog_title heading5 mt-3 line-clamp-2 hover:underline">{data.title}</strong>
                            <p className="blog_desc mt-4 line-clamp-3 text-variant1">{data.description}</p>
                            <strong className="inline-block mt-4 underline duration-300 hover:text-orange">Read More</strong>
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}

export default BlogItem