import LayoutOne from '@/components/Layout/LayoutOne'
import Image from 'next/image'
import projectData from "@/data/project/data.json"
import { getPostByTitle } from '@/common/postSelect'
import { notFound } from 'next/navigation'
import ProjectItem from '@/components/Project/ProjectItem'

export default function projectDetail({ params }) {
    const { slug } = params

    // Decode URL
    const decodedSlug = decodeURIComponent(slug);

    // handle with ' and "
    const cleanedSlug = decodedSlug.replace(/['"]/g, "'");

    let foundPost = getPostByTitle(projectData, cleanedSlug);

    if (!foundPost) {
        notFound(); // Render 404 if `foundPost` is null or undefined
    }

    return (
        <LayoutOne>
            <section className="section projects_detail">
                <div className="projects_detail_thumb sm:h-[42.5rem] h-[32rem]">
                    <Image width={2000} height={2000} src={foundPost.image} className="h-full object-cover" alt={foundPost.title} />
                </div>
                <div className="container">
                    <div className="projects_detail_heading flex max-lg:flex-wrap justify-between xl:gap-36 gap-24 gap-y-8 sm:py-20 py-12 border-b border-outline">
                        <h2 className="flex-shrink-0 w-[28rem] heading2 animate">{foundPost.title}</h2>
                        <ul className="flex max-sm:flex-wrap justify-between gap-6 w-full">
                            <li className="max-sm:w-full">
                                <ul className="sm:flex sm:flex-col max-sm:grid grid-cols-2 gap-12">
                                    <li className="animate" style={{ "--i": 1 }}>
                                        <span className="body2 text-variant1">Service:</span>
                                        <strong className="block heading6">{foundPost.category}</strong>
                                    </li>
                                    <li className="animate" style={{ "--i": 4 }}>
                                        <span className="body2 text-variant1">Area:</span>
                                        <strong className="block heading6">East Chicago, IN</strong>
                                    </li>
                                </ul>
                            </li>
                            <li className="max-sm:w-full">
                                <ul className="sm:flex sm:flex-col max-sm:grid grid-cols-2 gap-12">
                                    <li className="animate" style={{ "--i": 2 }}>
                                        <span className="body2 text-variant1">Duration:</span>
                                        <strong className="block heading6">3 days</strong>
                                    </li>
                                    <li className="animate" style={{ "--i": 5 }}>
                                        <span className="body2 text-variant1">Company:</span>
                                        <strong className="block heading6">Precision Design & Build</strong>
                                    </li>
                                </ul>
                            </li>
                            <li className="max-sm:w-full">
                                <ul className="sm:flex sm:flex-col max-sm:grid grid-cols-2 gap-12">
                                    <li className="animate" style={{ "--i": 3 }}>
                                        <span className="body2 text-variant1">Budget:</span>
                                        <strong className="block heading6">$1200</strong>
                                    </li>
                                    <li className="animate" style={{ "--i": 6 }}>
                                        <span className="body2 text-variant1">Date</span>
                                        <strong className="block heading6">May 31, 2023</strong>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="projects_detail_content sm:pt-20 pt-12">
                        <h4 className="heading4 animate">About the Project</h4>
                        <p className="mt-4 body2 text-variant1 animate">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi interdum sed mauris eu imperdiet. Donec congue orci nec mi luctus, ut faucibus mauris scelerisque. Donec orci lorem, volutpat a mauris nec, sodales imperdiet urna. Sed dictum enim libero. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas ligula libero, pharetra non dolor et, tempor bibendum magna. Mauris a efficitur nisi.</p>
                        <ul className="grid xs:grid-cols-2 gap-7.5 my-10">
                            <li className="w-full aspect-square animate" style={{ "--i": 1 }}>
                                <Image width={2000} height={2000} src="/images/projects/projects2.jpg" className="h-full object-cover" alt="projects2" />
                            </li>
                            <li className="w-full aspect-square animate" style={{ "--i": 2 }}>
                                <Image width={2000} height={2000} src="/images/projects/projects4.jpg" className="h-full object-cover" alt="projects4" />
                            </li>
                        </ul>
                        <h4 className="heading4 animate">Office Building Water Supply Installation</h4>
                        <p className="mt-4 body2 text-variant1 animate">Praesent interdum lacus ac est viverra hendrerit. Aliquam dapibus, ante vitae mattis gravida, purus sapien interdum magna, convallis volutpat est turpis pulvinar dui. Aenean eu turpis est. In hac habitasse platea dictumst. Integer at lobortis metus. Proin molestie eget massa vel gravida. Suspendisse nec ante vel augue consectetur mollis.</p>
                        <p className="mt-4 body2 text-variant1 animate">Vestibulum et pharetra arcu. In porta lobortis turpis. Ut faucibus fermentum posuere. Suspendisse potenti. Mauris a metus sed est semper vestibulum. Mauris tortor sem, consectetur vehicula vulputate id, suscipit vel leo.</p>
                    </div>
                </div>
            </section>
            <section className="section projects sm:py-25 py-15">
                <div className="container">
                    <h4 className="heading4 animate">Related Projects</h4>
                    <ul className="projects_list grid lg:grid-cols-3 sm:grid-cols-2 gap-7.5 mt-10">
                        {projectData.slice(0, 3).map(item => (
                            <ProjectItem key={item.id} data={item} type={'style-default'} />
                        ))}
                    </ul>
                </div>
            </section>
        </LayoutOne>
    )
}