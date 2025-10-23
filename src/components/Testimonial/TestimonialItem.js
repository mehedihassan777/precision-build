import Image from "next/image";
import Rate from "../Other/Rate";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr"

const TestimonialItem = ({ data, type, color }) => {
    return (
        <>
            {type === 'style-one' && (
                <div className="testimonials_item">
                    <Rate currentRate={data.rate} style={'text-2xl'} />
                    <p className="testimonials_desc mt-6 text-2xl line-clamp-4">{data.description}</p>
                    <div className="flex flex-wrap items-end justify-between gap-5 mt-4">
                        <div className="testimonials_author">
                            <strong className="testimonials_name heading6">{data.name}</strong>
                            <span className="testimonials_address text-variant1 block mt-1">{data.address}</span>
                        </div>
                        <Link href="/pages/our-testimonials" className="inline-flex items-center gap-2 duration-300 hover:text-orange">
                            <span className="border-b-2 underline-offset-2 txt-button">Read More Stories</span>
                            <Icon.ArrowRight className="text-xl" />
                        </Link>
                    </div>
                </div>
            )}
            {type === 'style-two' && (
                <div className={`testimonials_item p-7 border border-outline duration-300 hover:border-${color}`}>
                    <Rate currentRate={data.rate} style={'text-xl'} />
                    <p className="testimonials_desc mt-3 body2 line-clamp-4">{data.description}</p>
                    <div className="flex items-center gap-4 mt-6 pt-6 border-t border-outline">
                        <div className="testimonials_img flex-shrink-0 overflow-hidden w-15 h-15 rounded-full">
                            <Image width={4000} height={4000} className="h-full object-cover" src={data.image} alt={data.image} />
                        </div>
                        <div className="testimonials_author">
                            <div className="testimonials_name heading6">{data.name}</div>
                            <div className="testimonials_address block mt-1 text-variant1">{data.address}</div>
                        </div>
                    </div>
                </div>
            )}
            {type === 'style-three' && (
                <div className="testimonials_item">
                    <Rate currentRate={data.rate} style={'text-yellow text-xl'} />
                    <p className="testimonials_desc mt-4 text-3xl font-bold line-clamp-4">"I was so impressed with the HVAC installation. The technicians were on time, explained everything clearly, left no mess behind. The new system works flawlessly, and my home is much more comfortable.”</p>
                    <div className="flex items-center gap-4 mt-8">
                        <div className="testimonials_img flex-shrink-0 overflow-hidden w-15 h-15 rounded-full">
                            <Image width={2000} height={2000} src={data.image} className="h-full object-cover" alt={data.name} />
                        </div>
                        <div className="testimonials_author">
                            <strong className="testimonials_name heading6">{data.name}</strong>
                            <span className="testimonials_address block mt-1 text-variant1">{data.address}</span>
                        </div>
                    </div>
                </div>
            )}
            {type === 'style-four' && (
                <div className="testimonials_item">
                    <div className="flex items-center gap-4 pb-7">
                        <div className="testimonials_img flex-shrink-0 overflow-hidden w-15 h-15 rounded-full">
                            <Image width={2000} height={2000} src={data.image} className="h-full object-cover" alt={data.name} />
                        </div>
                        <div className="testimonials_author">
                            <strong className="testimonials_name heading6">{data.name}</strong>
                            <span className="testimonials_address block mt-1 text-variant1">{data.address}</span>
                        </div>
                    </div>
                    <Rate currentRate={data.rate} style={'text-xl'} />
                    <p className="testimonials_desc mt-3 body2 line-clamp-4">“Excellent electrical work done at our home. The technicians were thorough, punctual, and left the place spotless. The team’s attention to detail was truly impressive”</p>
                </div>
            )}
        </>
    )
}

export default TestimonialItem