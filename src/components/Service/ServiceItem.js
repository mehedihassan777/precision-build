import Image from "next/image"
import Link from "next/link"
import * as Icon from "@phosphor-icons/react/dist/ssr"
import { convertToSlug } from "@/common/utils"

const ServiceItem = ({ data, type }) => {
    return (
        <>
            {type === 'style-one' && (
                <Link
                    className="services_link flex h-full bg-white group"
                    href={process.env.PUBLIC_URL + "/services/[slug]"}
                    as={
                        process.env.PUBLIC_URL + "/services/" + convertToSlug(data.title)
                    }
                >
                    <span className="services_icon flex items-center justify-center flex-shrink-0 w-[5.75rem] h-[5.75rem] border-r-[0.75rem] border-b-[0.75rem] border-surface bg-white duration-500 group-hover:bg-black group-hover:text-white">
                        <span className={`${data.icon} text-5xl`}></span>
                    </span>
                    <div className="services_info p-7">
                        <strong className="services_name line-clamp-2 heading5">{data.title}</strong>
                        <p className="services_desc mt-4 line-clamp-5 text-variant1">{data.desc}</p>
                        <span className="flex items-center gap-2 mt-4 duration-300 group-hover:text-orange">
                            <span className="border-b-2 underline-offset-2 txt-button">Learn More</span>
                            <Icon.ArrowUpRight className="text-2xl" />
                        </span>
                    </div>
                </Link>
            )}
            {type === 'style-two' && (
                <Link href={process.env.PUBLIC_URL + "/services/[slug]"}
                    as={
                        process.env.PUBLIC_URL + "/services/" + convertToSlug(data.title) + "?id=" + data.id
                    }
                    className="services_link flex flex-col gap-7 h-full p-7 bg-white group">
                    <div className="services_thumb relative">
                        <div className="services_img overflow-hidden">
                            <Image width={2000} height={2000} src={data.image} className="duration-400 group-hover:scale-110" alt={data.title} />
                        </div>
                        <span className="services_icon flex items-center justify-center flex-shrink-0 absolute sm:-bottom-10 -bottom-7 right-5 sm:w-20 w-14 sm:h-20 h-14 border-8 border-white bg-black duration-500 group-hover:bg-blue">
                            <span className={`${data.icon} text-white sm:text-3xl text-xl`}></span>
                        </span>
                    </div>
                    <div className="services_info">
                        <strong className="services_name line-clamp-2 heading5 hover:underline">{data.title}</strong>
                        <p className="services_desc mt-4 line-clamp-2 text-variant1">{data.desc}</p>
                        <span className="flex items-center gap-2 mt-4 duration-300 hover:text-blue">
                            <span className="border-b-2 underline-offset-2 txt-button">Learn More</span>
                            <Icon.ArrowUpRight className="text-2xl" />
                        </span>
                    </div>
                </Link>
            )}
            {type === 'style-three' && (
                <Link href={process.env.PUBLIC_URL + "/services/[slug]"}
                    as={
                        process.env.PUBLIC_URL + "/services/" + convertToSlug(data.title) + "?id=" + data.id
                    }
                    className="services_link block overflow-hidden relative group"
                >
                    <div className="services_thumb">
                        <Image width={2000} height={2000} src={data.image} className="h-full object-cover duration-400 group-hover:scale-110" alt={data.title} />
                    </div>
                    <div className="services_info absolute top-full left-0 w-full bg-white lg:-translate-y-[4.25rem] -translate-y-full duration-400">
                        <div className="heading flex items-center justify-between w-full h-[4.25rem]">
                            <strong className="services_name px-6 line-clamp-1 break-all heading5">{data.title}</strong>
                            <span className="flex flex-shrink-0 items-center justify-center w-[4.25rem] h-[4.25rem] bg-yellow text-white duration-300 hover:bg-black">
                                <Icon.ArrowUpRight className="text-3xl" />
                            </span>
                        </div>
                        <div className="detail p-6 border-t border-outline">
                            <p className="services_desc line-clamp-2 mb-2 text-variant1 text-left">{data.desc}</p>
                            <span className="block txt-button text-left underline decoration-2 underline-offset-2 duration-300 hover:text-yellow">Learn More</span>
                        </div>
                    </div>
                </Link>
            )}
            {type === 'style-four' && (
                <div className="services_card">
                    <Link href={process.env.PUBLIC_URL + "/services/[slug]"}
                        as={
                            process.env.PUBLIC_URL + "/services/" + convertToSlug(data.title) + "?id=" + data.id
                        }
                        className="services_link block overflow-hidden relative group"
                    >
                        <div className="services_thumb">
                            <Image width={2000} height={2000} src={data.image} alt={data.title} />
                        </div>
                        <span className="flex flex-shrink-0 items-center justify-center absolute top-7 max-3xl:right-25 right-30 w-15 h-15 rounded-full bg-[#000] bg-opacity-15 backdrop-blur duration-300 group-hover:bg-white group-hover:bg-opacity-100 group-hover:backdrop-blur-none">
                            <Icon.ArrowRight className="text-3xl text-white duration-300 group-hover:text-black group-hover:-rotate-45" />
                        </span>
                        <div className="services_info flex items-center justify-center absolute bottom-0 left-0 w-full py-6 px-18 bg-[#000] bg-opacity-15 backdrop-blur heading4 text-white text-center duration-300 group-hover:bg-red">
                            <strong className="services_name line-clamp-1 break-all">{data.title}</strong>
                        </div>
                    </Link>
                </div>
            )}
            {type === 'style-five' && (
                <div className="service-item -solution style-five">
                    <Link className="main p-10 block relative h-full bg-white border-r border-outline"
                        href={process.env.PUBLIC_URL + "/services/[slug]"}
                        as={
                            process.env.PUBLIC_URL + "/services/" + convertToSlug(data.title) + "?id=" + data.id
                        }
                    >
                        <div className="slash flex items-center absolute -top-4 right-6 opacity-0 duration-500">
                            <span className="icon-slash text-5xl"></span>
                            <span className="icon-slash text-5xl -ml-6"></span>
                        </div>
                        <i className={`${data.icon} text-6xl flex-shrink-0`}></i>
                        <div className="mt-6">
                            <strong className="service-name heading5 duration-300">{data.title}</strong>
                            <p className="service-desc body2 text-surface1 whitespace-normal mt-3">{data.desc}</p>
                        </div>
                    </Link>
                </div>
            )}
            {type === 'style-six' && (
                <div className="service-item style-six">
                    <Link className="main p-8 block relative h-full bg-white rounded-[20px] shadow-lg"
                        href={process.env.PUBLIC_URL + "/services/[slug]"}
                        as={process.env.PUBLIC_URL + "/services/" + convertToSlug(data.title) + "?id=" + data.id}
                    >
                        <i className={`${data.icon} text-purple text-6xl flex-shrink-0`}></i>
                        <div className="mt-6">
                            <strong className="service-name heading5 duration-300">{data.title}</strong>
                            <p className="service-desc body2 text-surface1 whitespace-normal mt-3">{data.desc}</p>
                        </div>
                    </Link>
                </div>
            )}
            {type === 'style-seven' && (
                <div className="service-item -solution rounded-2xl bg-white border border-outline h-full">
                    <Link className="main md:p-10 p-8 flex flex-col items-center h-full"
                        href={process.env.PUBLIC_URL + "/services/[slug]"}
                        as={
                            process.env.PUBLIC_URL + "/services/" + convertToSlug(data.title) + "?id=" + data.id
                        }
                    >
                        <i className={`${data.icon} text-6xl`}></i>
                        <strong className="service-name heading5 mt-6">{data.title}</strong>
                        <p className="service-desc text-surface1 text-center mt-3">{data.desc}</p>
                    </Link>
                </div>
            )}
        </>
    )
}

export default ServiceItem