'use client'

import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import * as Icon from "@phosphor-icons/react/dist/ssr";
import blogData from '@/data/blog/data.json'
import testimonialData from '@/data/testimonial/data.json'
import { convertToSlug } from '@/common/utils';
import BlogSidebar from './BlogSidebar';

const LayoutDetailTwo = ({ data }) => {
    const [showReply, setShowReply] = useState()

    const handleShowReply = (id) => {
        setShowReply(prevId => prevId === id ? null : id)
    }

    return (
        <>
            <section className="blog_detail">
                <div className="blog_detail_thumb overflow-hidden w-full md:h-[40rem] h-[30rem]">
                    <Image width={2000} height={2000} src={data.coverImage} alt={data.title} className="blog_img h-full object-cover" />
                </div>
                <div className="container flex justify-center -mt-[5.625rem]">
                    <div className="blog_content xl:w-[980px] sm:px-15 px-4 sm:pt-15 pt-10 bg-white">
                        <span className="blog_cate block txt-label text-center">{data.category}</span>
                        <h2 className="heading2 title mt-4 text-center">{data.title}</h2>
                        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
                            <div className="date flex items-center gap-2">
                                <Icon.CalendarBlank className="text-xl" />
                                <span className="blog_author caption1">{data.date}</span>
                            </div>
                            <div className="line flex-shrink-0 w-px h-4 bg-outline"></div>
                            <div className="date flex items-center gap-2">
                                <Icon.User className="text-xl" />
                                <span className="blog_date caption1">{data.author}</span>
                            </div>
                        </div>
                        <p className="md:mt-10 mt-7 body2">In today's digital age, the importance of mobile optimization cannot be overstated. With an increasing number of users accessing the internet through smartphones and tablets, designing for mobile-first has become imperative for businesses looking to provide seamless user experiences.</p>
                        <p className="mt-3 body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum sed mauris eu imperdiet. Donec congue orci nec mi luctus, ut faucibus mauris scelerisque. Donec orci lorem, volutpat a mauris nec, sodales imperdiet urna. Sed dictum enim libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas ligula libero, pharetra non dolor et, tempor bibendum magna. Mauris a efficitur nisi.</p>
                        <div className="images grid sm:grid-cols-2 gap-7.5 md:mt-10 mt-7">
                            <Image width={2000} height={2000} src="/images/services/detail/bg_list1.jpg" alt="bg_list1" />
                            <Image width={2000} height={2000} src="/images/services/detail/bg_list2.jpg" alt="bg_list2" />
                        </div>
                        <h4 className="heading4 md:mt-10 mt-7">How to Choose the Right Handyman for Your Home</h4>
                        <p className="mt-4 body2">Donec eu dui condimentum, laoreet nulla vitae, venenatis ipsum. Donec luctus sem sit amet varius laoreet. Aliquam fermentum sit amet urna fringilla tincidunt. Vestibulum ullamcorper nec lacus ac molestie. Curabitur congue neque sed nisi auctor consequat.</p>
                        <ul className="flex flex-col gap-3 mt-4">
                            <li className="flex body2">
                                <Icon.DotOutline weight='fill' className="mt-1 mr-1" />
                                <p>15+ years of industry experience designing, building, and supporting large-scale distributed systems in production, with recent experience in building large scale cloud services.</p>
                            </li>
                            <li className="flex body2">
                                <Icon.DotOutline weight='fill' className="mt-1 mr-1" />
                                <p>Deep knowledge and experience with different security areas like identity and access management, cryptography, network security, etc.</p>
                            </li>
                            <li className="flex body2">
                                <Icon.DotOutline weight='fill' className="mt-1 mr-1" />
                                <p>Experience with database systems and database internals, such as query engines and optimizers are a big plus. </p>
                            </li>
                            <li className="flex body2">
                                <Icon.DotOutline weight='fill' className="mt-1 mr-1" />
                                <p>Strong fundamentals in computer science skills.</p>
                            </li>
                            <li className="flex body2">
                                <Icon.DotOutline weight='fill' className="mt-1 mr-1" />
                                <p>Expert-level development skills in Java or C++.</p>
                            </li>
                            <li className="flex body2">
                                <Icon.DotOutline weight='fill' className="mt-1 mr-1" />
                                <p>Advanced degree in Computer Science or related degree.</p>
                            </li>
                            <li className="flex body2">
                                <Icon.DotOutline weight='fill' className="mt-1 mr-1" />
                                <p>Ph.D. in the related field is a plus</p>
                            </li>
                        </ul>
                        <p className="mt-3 body2">Curabitur aliquam ac arcu in mattis. Phasellus pulvinar erat at aliquam hendrerit. Nam ut velit dolor. Sed fermentum tempus odio, ac faucibus elit scelerisque consequat. Fusce ac malesuada elit. Nam at aliquam libero, quis lacinia erat. In hac habitasse platea dictumst. Suspendisse id dolor orci. Vivamus at aliquam tellus. Vestibulum a augue ac purus suscipit varius non eget lectus. Nam lobortis mauris luctus tristique feugiat. Nulla eleifend risus sit amet nisi feugiat, id eleifend sapien malesuada.</p>
                        <div className="action flex flex-wrap items-center justify-between gap-5 md:mt-10 mt-7">
                            <div className="list_tags flex flex-wrap items-center gap-3">
                                <span>Tag:</span>
                                <ul className="list flex flex-wrap items-center gap-3">
                                    <li>
                                        <Link href="/blog/default?tag=equipment" className="block px-4 py-1.5 bg-surface caption1 duration-300 hover:bg-orange hover:text-white">Equipment</Link>
                                    </li>
                                    <li>
                                        <Link href="/blog/default?tag=maintenance" className="block px-4 py-1.5 bg-surface caption1 duration-300 hover:bg-orange hover:text-white">Maintenance</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="list_social flex items-center gap-3 flex-wrap">
                                <span>Share:</span>
                                <ul className="list flex flex-wrap items-center gap-3">
                                    <li>
                                        <Link href="https://www.messenger.com/" target="_blank" className="flex items-center justify-center w-10 h-10 rounded-full bg-surface duration-300 hover:bg-orange hover:text-white">
                                            <Icon.MessengerLogo className="text-xl" />
                                            <span className="blind">link messenger logo</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.instagram.com/" target="_blank" className="flex items-center justify-center w-10 h-10 rounded-full bg-surface duration-300 hover:bg-orange hover:text-white">
                                            <Icon.InstagramLogo className="text-xl" />
                                            <span className="blind">link instagram logo</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.x.com/" target="_blank" className="flex items-center justify-center w-10 h-10 rounded-full bg-surface duration-300 hover:bg-orange hover:text-white">
                                            <Icon.XLogo className="text-xl" />
                                            <span className="blind">link x logo</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="next-pre grid sm:grid-cols-2 gap-y-7 relative md:mt-10 mt-7 py-6 border-y border-outline">
                            {data.id === 1 ? (
                                <Link className="left sm:pr-10 sm:border-r border-outline group"
                                    href={process.env.PUBLIC_URL + "/blog/detail1/[slug]"}
                                    as={process.env.PUBLIC_URL + "/blog/detail1/" + convertToSlug(blogData[blogData.length - 1].title) + "?id=" + blogData[blogData.length - 1].id}
                                >
                                    <span className="txt-label uppercase">Previous</span>
                                    <strong className="heading6 inline-block mt-2 duration-300 group-hover:text-orange">{blogData[blogData.length - 1].title}</strong>
                                </Link>
                            ) : (
                                <Link className="left sm:pr-10 sm:border-r border-outline group"
                                    href={process.env.PUBLIC_URL + "/blog/detail1/[slug]"}
                                    as={process.env.PUBLIC_URL + "/blog/detail1/" + convertToSlug(blogData[Number(data.id) - 2].title) + "?id=" + blogData[Number(data.id) - 2].id}
                                >
                                    <span className="txt-label uppercase">Previous</span>
                                    <strong className="heading6 inline-block mt-2 duration-300 group-hover:text-orange">{blogData[Number(data.id) - 2].title}</strong>
                                </Link>
                            )}
                            {Number(data.id) === blogData.length ? (
                                <Link className="right sm:pl-10 sm:text-right group"
                                    href={process.env.PUBLIC_URL + "/blog/detail1/[slug]"}
                                    as={process.env.PUBLIC_URL + "/blog/detail1/" + convertToSlug(blogData[0].title) + "?id=" + blogData[0].id}
                                >
                                    <span className="txt-label uppercase">Next</span>
                                    <strong className="heading6 inline-block mt-2 duration-300 group-hover:text-orange">{blogData[0].title}</strong>
                                </Link>
                            ) : (
                                <Link className="right sm:pl-10 sm:text-right group"
                                    href={process.env.PUBLIC_URL + "/blog/detail1/[slug]"}
                                    as={process.env.PUBLIC_URL + "/blog/detail1/" + convertToSlug(blogData[Number(data.id)].title) + "?id=" + blogData[Number(data.id)].id}
                                >
                                    <span className="txt-label uppercase">Next</span>
                                    <strong className="heading6 inline-block mt-2 duration-300 group-hover:text-orange">{blogData[Number(data.id)].title}</strong>
                                </Link>
                            )}
                        </div>
                        <div className="review mt-10">
                            <h5 className="heading5">Customer reviews</h5>
                            <ul className="review_list flex flex-col gap-6 mt-5">
                                {testimonialData.slice(0, 3).map(item => (
                                    <li className="review_item">
                                        <div className="review_inner relative z-[1]">
                                            <div className="heading flex items-center justify-between">
                                                <div className="user flex gap-4">
                                                    <div className="user_avatar w-[52px] h-[52px] rounded-full overflow-hidden">
                                                        <Image
                                                            src={item.image}
                                                            width={2000}
                                                            height={2000}
                                                            alt={item.image}
                                                            className='h-full object-cover'
                                                        />
                                                    </div>
                                                    <div className="user_info">
                                                        <strong className="user_name block txt-button">{item.name}</strong>
                                                        <span className="user_date caption1 text-surface2">1 days ago</span>
                                                    </div>
                                                </div>
                                                <button className="more-action">
                                                    <Icon.DotsThree size={24} weight='bold' />
                                                    <span className="blind">more action</span>
                                                </button>
                                            </div>
                                            <p className="review_desc mt-3">{item.review}</p>
                                            <div className="action w-full flex items-center justify-between mt-3">
                                                <div className="flex items-center gap-4">
                                                    <button className="like-btn flex items-center gap-1">
                                                        <Icon.HandsClapping size={18} />
                                                        <strong className="txt-button">20</strong>
                                                    </button>
                                                    <button className="show-reply-btn flex items-center gap-1" onClick={() => handleShowReply(item.id)}>
                                                        {item.listReply.length > 0 && (
                                                            <>
                                                                <Icon.Chat size={18} />
                                                                <strong className="txt-button">1 Replies</strong>
                                                            </>
                                                        )}
                                                    </button>
                                                </div>
                                                <Link href={'#form-review'} className="reply-btn txt-button text-surface1 hover:text-black">Reply</Link>
                                            </div>
                                        </div>
                                        {item.listReply.length > 0 && (
                                            <>
                                                <ul className={`list-reply pl-[60px] ${showReply === item.id ? 'open' : ''}`}>
                                                    <li className="review_item pb-6">
                                                        <div className="heading flex items-center justify-between">
                                                            <div className="user flex gap-4">
                                                                <div className="user_avatar">
                                                                    <Image
                                                                        src={'/images/team/team4.jpg'}
                                                                        width={200}
                                                                        height={200}
                                                                        alt='img'
                                                                        className='w-[52px] aspect-square rounded-full'
                                                                    />
                                                                </div>
                                                                <div className="user_info">
                                                                    <div className="user_name txt-button">Darlene Robertson</div>
                                                                    <div className="user_date caption1 text-surface2">1 days ago</div>
                                                                </div>
                                                            </div>
                                                            <button className="more-action">
                                                                <Icon.DotsThree size={24} weight='bold' />
                                                                <span className="blind">more action</span>
                                                            </button>
                                                        </div>
                                                        <div className="review_desc mt-3">From the initial consultation to project completion, demonstrated exceptional professionalism to detail.</div>
                                                        <div className="action w-full flex items-center justify-between mt-3">
                                                            <button className="like-btn flex items-center gap-1">
                                                                <Icon.HandsClapping size={18} />
                                                                <strong className="txt-button">20</strong>
                                                            </button>
                                                            <Link href={'#form-review'} className="reply-btn txt-button text-surface1 hover:text-black">Reply</Link>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </>
                                        )}
                                    </li>
                                ))}
                            </ul>
                            <div id="form-review" className="form-review mt-10 p-7 border border-outline">
                                <h5 className="heading5">Leave A comment</h5>
                                <form className="form grid sm:grid-cols-2 gap-5 mt-6">
                                    <div className="name">
                                        <label htmlFor="username">Name</label>
                                        <input className="form_input w-full mt-2 px-4 py-3 border border-outline" id="username" type="text" placeholder="Your Name" required />
                                    </div>
                                    <div className="mail">
                                        <label htmlFor="email">Email</label>
                                        <input className="form_input w-full mt-2 px-4 py-3 border border-outline" id="email" type="email" placeholder="Your Email" required />
                                    </div>
                                    <div className="col-span-full message">
                                        <label htmlFor="message">Review</label>
                                        <textarea className="form_input w-full mt-2 px-4 py-3 border border-outline" id="message" name="message" rows="3" placeholder="Write comment " required></textarea>
                                    </div>
                                    <div className="form_checkbox flex col-span-full">
                                        <input type="checkbox" className="checkbox" id="saveAccount" />
                                        <Icon.CheckSquare weight='fill' className="text-[22px] checkbox_icon" />
                                        <label className="label pl-7" htmlFor="saveAccount">Save my name, email, and website in this browser for the next time I comment.</label>
                                    </div>
                                    <div className="col-span-full">
                                        <button type="submit" className="btn">Submit Review</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LayoutDetailTwo
