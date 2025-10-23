import React from 'react'
import BlogItem from '@/components/Blog/BlogItem';

const BlogFour = ({ data, start, limit }) => {
    return (
        <section className="section blog sm:py-25 py-15">
            <div className="container flex flex-col items-center">
                <span className="section_tag tag bg-red animate">Latest News</span>
                <h3 className="section_tit mt-4 heading3 text-center animate">Home Repair Tips & Expert Advice</h3>
                <p className="section_desc lg:mt-5 mt-3 body2 text-variant1 text-center animate">Discover articles with DIY tips, expert insights, and advice to help you easily maintain and improve your home.</p>
                <div className="blog_list grid lg:grid-cols-2 gap-7.5 w-full lg:mt-12 mt-9">
                    <BlogItem data={data[8]} type={'style-four'} />
                    <div className='flex flex-col sm:gap-6 gap-7.5'>
                        {data.slice(start, limit).map((item, index) => (
                            <BlogItem key={index} data={item} type={'style-sub'} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogFour