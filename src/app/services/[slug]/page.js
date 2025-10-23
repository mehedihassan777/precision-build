import LayoutOne from '@/components/Layout/LayoutOne'
import { Breadcrumb } from '@/components/Other/Breadcrumb'
import serviceData from "@/data/service/data.json"
import { getPostByTitle } from '@/common/postSelect'
import { notFound } from 'next/navigation'
import ServiceSidebar from '@/components/Service/ServiceSidebar'
import ServiceContent from '@/components/Service/ServiceContent'

export default function serviceDetail({ params }) {
    const { slug } = params
    
    // Decode URL
    const decodedSlug = decodeURIComponent(slug);

    // handle with ' and "
    const cleanedSlug = decodedSlug.replace(/['"]/g, "'");

    let foundPost = getPostByTitle(serviceData, cleanedSlug);

    if (!foundPost) {
        notFound(); // Render 404 if `foundPost` is null or undefined
    }

    return (
        <LayoutOne>
            <Breadcrumb image={'/images/breadcrumb/services.jpg'} nav2={'Services'} nav2Link={'/pages/our-services'} nav3={foundPost.title} title={foundPost.title} />
            <section className="section services sm:py-25 py-15">
                <div className="container flex max-lg:flex-col-reverse xl:gap-25 gap-16">
                    <ServiceSidebar initActive={foundPost.id} />
                    <ServiceContent foundPost={foundPost} />
                </div>
            </section>
        </LayoutOne>
    )
}