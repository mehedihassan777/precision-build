import Image from "next/image"
import Link from "next/link"
import { convertToSlug } from "@/common/utils"

const ProjectItem = ({ data, type, isActive }) => {
    return (
        <>
            {type === 'style-default' && (
                <Link
                    href={process.env.PUBLIC_URL + "/pages/project-details/[slug]"}
                    as={
                        process.env.PUBLIC_URL + "/pages/project-details/" + convertToSlug(data.title) + "?id=" + data.id
                    }
                    className="projects_link block relative group"
                >
                    <div className="projects_thumb overflow-hidden aspect-[3/4]">
                        <Image width={2000} height={2000} src={data.image} className="h-full object-cover duration-300 group-hover:scale-110" alt={data.title} />
                    </div>
                    <div className="projects_info flex flex-col gap-2 mt-5">
                        <span className="projects_cate txt-label text-variant1">{data.category}</span>
                        <strong className="projects_name heading6 group-hover:underline">{data.title}</strong>
                    </div>
                </Link>
            )}
            {type === 'style-two' && (
                <Link
                    href={process.env.PUBLIC_URL + "/pages/project-details/[slug]"}
                    as={
                        process.env.PUBLIC_URL + "/pages/project-details/" + convertToSlug(data.title) + "?id=" + data.id
                    }
                    className="projects_link block relative aspect-[3/4] group"
                >
                    <Image width={2000} height={2000} src={data.image} className="h-full object-cover" alt={data.title} />
                    <div className="projects_info flex flex-col items-center justify-center gap-3 absolute top-5 right-5 bottom-5 left-5 px-8 bg-dark bg-opacity-80 text-white lg:opacity-0 opacity-100 lg:scale-0 scale-100 duration-500 group-hover:scale-100 group-hover:opacity-100">
                        <span className="projects_cate txt-label">{data.category}</span>
                        <strong className="projects_name heading6 text-center">{data.title}</strong>
                    </div>
                </Link>
            )}
            {type === 'style-three' && (
                <Link href={process.env.PUBLIC_URL + "/pages/project-details/[slug]"}
                    as={
                        process.env.PUBLIC_URL + "/pages/project-details/" + convertToSlug(data.title) + "?id=" + data.id
                    }
                    className={`projects_link block md:p-8 p-7 bg-dark text-white duration-400 hover:bg-yellow ${isActive}`}
                >
                    <span className="projects_cate txt-label">{data.category}</span>
                    <strong className="projects_name mt-3 heading5 line-clamp-1">{data.title}</strong>
                </Link>
            )}
            {type === 'style-four' && (
                <div className="projects_item">
                    <Link href={process.env.PUBLIC_URL + "/pages/project-details/[slug]"}
                        as={
                            process.env.PUBLIC_URL + "/pages/project-details/" + convertToSlug(data.title) + "?id=" + data.id
                        }
                        className="projects_link block overflow-hidden relative group"
                    >
                        <Image width={2000} height={2000} src={data.image} className="duration-400 group-hover:scale-105" alt={data.title} />
                        <div className="projects_info md:absolute md:bottom-8 md:left-8 md:w-[65%] p-8 bg-white">
                            <span className="projects_cate txt-label">{data.category}</span>
                            <strong className="projects_name mt-3 heading4 line-clamp-1 break-all hover:underline">{data.title}</strong>
                            <p className="projects_desc mt-4 text-variant1 line-clamp-2">{data.desc}</p>
                        </div>
                    </Link>
                </div>
            )}
        </>
    )
}

export default ProjectItem