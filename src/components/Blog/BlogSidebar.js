'use client'

import React, { useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { convertToSlug } from '@/common/utils';

const BlogSidebar = ({ data, layout, hideElements }) => {
    const router = useRouter()
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [search, setSearch] = useState()
    const [categorySelected, setCategory] = useState();
    const [tagSelected, setTag] = useState();
    const uniqueCategories = Array.from(new Set(data.map(item => item.category)));
    const uniqueTags = Array.from(new Set(data.map(item => item.tag)));

    const handleSearch = (search) => {
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set('search', convertToSlug(search.toLowerCase()));
        if (layout === 'style-detail') {
            router.push(`/blog/blog-list?${newParams.toString()}`);
        } else {
            router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
        }
    }

    const handleCategoryClick = (category) => {
        const newCategory = categorySelected === category ? null : category;
        setCategory(newCategory);
        const newParams = new URLSearchParams(searchParams.toString());

        if (newCategory) {
            newParams.set('category', convertToSlug(newCategory.toLowerCase()));
        } else {
            newParams.delete('category');
        }

        if (layout === 'style-detail') {
            router.push(`/blog/blog-list?${newParams.toString()}`);
        } else {
            router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
        }
    };

    const handleTagClick = (tag) => {
        const newTag = tagSelected === tag ? null : tag;
        setTag(newTag);
        const newParams = new URLSearchParams(searchParams.toString());

        if (newTag) {
            newParams.set('tag', convertToSlug(newTag.toLowerCase()));
        } else {
            newParams.delete('tag');
        }

        if (layout === 'style-detail') {
            router.push(`/blog/blog-list?${newParams.toString()}`);
        } else {
            router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
        }
    };


    return (
        <>
            {!hideElements.includes('search') && (
                <div className="form_search overflow-hidden relative w-full h-13">
                    <input
                        className="form_input py-3 pr-10 w-full h-full border-b border-outline"
                        type="text"
                        placeholder="Search"
                        required
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch(search)}
                    />
                    <button
                        className='flex items-center justify-end absolute top-0 right-0 w-8 h-full aspect-square duration-300 hover:text-orange'
                        onClick={() => handleSearch(search)}
                    >
                        <Icon.MagnifyingGlass className="text-xl" />
                        <span className="blind">search</span>
                    </button>
                </div>
            )}
            {!hideElements.includes('category') && (
                <div className="filter_category md:mt-10 mt-7">
                    <h5 className="heading5">Categories</h5>
                    <ul className="category_list flex flex-col gap-3 mt-5" role="tablist">
                        {uniqueCategories.map((category, index) => (
                            <li key={index} role="presentation">
                                <button
                                    className={`tab_btn flex items-center justify-between w-full text-variant1 duration-300 hover:text-black ${category === categorySelected ? 'active' : ''}`} 
                                    role="tab" 
                                    aria-selected={category === categorySelected ? 'true' : 'false'}
                                    onClick={() => handleCategoryClick(category)}
                                >
                                    <span className="txt">{category}</span>
                                    <span className="quantity">({data.filter(dataItem => dataItem.category === category).length})</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <div className="recent md:mt-10 mt-7">
                <h5 className="heading5">Recent Posts</h5>
                {!hideElements.includes('outstanding') && (
                    <>
                        {data.slice(3, 4).map(item => (
                            <div className="blog_item flex flex-col gap-6 mt-6 pb-4 border-b border-outline">
                                <Link className="blog_thumb block overflow-hidden w-full aspect-[1.3] group"
                                    href={process.env.PUBLIC_URL + "/blog/detail1/[slug]"}
                                    as={process.env.PUBLIC_URL + "/blog/detail1/" + convertToSlug(item.title) + "?id=" + item.id}
                                >
                                    <Image width={2000} height={2000} src={item.thumbImage} className="h-full object-cover duration-400 group-hover:scale-110" alt={item.title} />
                                </Link>
                                <div className="blog_info">
                                    <div className="flex items-center gap-3 txt-label text-variant1">
                                        <span className="blog_date txt-label">{item.date}</span>
                                        <span className="flex-shrink-0 w-px h-3 bg-outline"></span>
                                        <Link href="/blog/default" className="blog_cate txt-label duration-300 hover:underline hover:text-black">{item.category}</Link>
                                    </div>
                                    <Link className="blog_tit mt-3 line-clamp-3 heading6 duration-300 hover:text-orange"
                                        href={process.env.PUBLIC_URL + "/blog/detail1/[slug]"}
                                        as={process.env.PUBLIC_URL + "/blog/detail1/" + convertToSlug(item.title) + "?id=" + item.id}
                                    >
                                        {item.title}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </>
                )}
                <ul className="recent_list mt-4">
                    {data.slice(5, 9).map(item => (
                        <li
                            key={item.id}
                            className="blog_item flex items-center gap-6 mt-4 pb-4 border-b border-outline group"
                        >
                            <Link
                                href={process.env.PUBLIC_URL + "/blog/detail1/[slug]"}
                                as={process.env.PUBLIC_URL + "/blog/detail1/" + convertToSlug(item.title) + "?id=" + item.id}
                                className="blog_thumb block flex-shrink-0 w-[90px] h-[90px] overflow-hidden"
                            >
                                <Image width={2000} height={2000} src={item.thumbImage} alt={item.title} className="blog_img h-full object-cover duration-300 group-hover:scale-110" />
                            </Link>
                            <div className="blog_info">
                                <span className="blog_date caption1 text-variant1">{item.date}</span>
                                <Link
                                    href={process.env.PUBLIC_URL + "/blog/detail1/[slug]"}
                                    as={process.env.PUBLIC_URL + "/blog/detail1/" + convertToSlug(item.title) + "?id=" + item.id}
                                    className="blog_name mt-1 txt-button line-clamp-3 duration-300 group-hover:text-orange"
                                >
                                    {item.title}
                                </Link>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="filter_tag md:mt-10 mt-7">
                <h5 className="heading5">Popular Tags</h5>
                <div className="tag_list flex items-center flex-wrap gap-3 mt-5" role="tablist">
                    {uniqueTags.slice(0, 5).map((tag, index) => (
                        <li key={index} role="presentation">
                            <button 
                                className={`tab_btn tab_btn_fill px-4 py-1.5 caption1 capitalize bg-surface border border-transparent duration-300 hover:border-black ${tag === tagSelected ? 'active' : ''}`}
                                role="tab" 
                                aria-selected={tag === tagSelected ? 'true' : 'false'}
                                onClick={() => handleTagClick(tag)}
                            >
                                {tag}
                            </button>
                        </li>
                    ))}
                </div>
            </div>
        </>
    )
}

export default BlogSidebar
