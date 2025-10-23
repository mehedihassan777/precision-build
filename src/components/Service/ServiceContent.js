import React from 'react'
import Image from 'next/image'
import * as Icon from "@phosphor-icons/react/dist/ssr";

const ServiceContent = ({foundPost}) => {
    return (
        <div className="services_detail w-full">
            <div className="services_detail_thumb w-full aspect-[1.775]">
                <Image width={2000} height={2000} src={foundPost.thumbImage} className='h-full object-cover' alt={foundPost.title} />
            </div>
            <h4 className="section_title mt-10 heading4">About Our {foundPost.title}</h4>
            <p className="section_desc mt-4 body2 text-variant1">At Precision Design & Build, we offer expert plumbing services for maintenance, repairs, and installations. Our licensed plumbers ensure efficient, reliable water systems with minimal disruption. Whether fixing leaks or handling complex installations, we provide long-lasting solutions to keep your plumbing in top shape.</p>
            <ul className="services_feature_list flex flex-col gap-4 mt-4">
                <li className="services_feature_item flex gap-3">
                    <Icon.Check className="mt-0.5 text-orange text-2xl" />
                    <p className="body2"><strong className="font-bold">Routine Maintenance:</strong> Keep your plumbing running smoothly with our scheduled maintenance plans, designed to prevent future problems before they start.</p>
                </li>
                <li className="services_feature_item flex gap-3">
                    <Icon.Check className="mt-0.5 text-orange text-2xl" />
                    <p className="body2"><strong className="font-bold">Emergency Repairs:</strong> When unexpected issues arise, our rapid response team is available 24/7 to fix leaks, blockages, and other urgent plumbing concerns.</p>
                </li>
                <li className="services_feature_item flex gap-3">
                    <Icon.Check className="mt-0.5 text-orange text-2xl" />
                    <p className="body2"><strong className="font-bold">Expert Installations:</strong> Need new pipes, fixtures, or systems? We handle all types of plumbing installations with precision, ensuring optimal performance and longevity.</p>
                </li>
                <li className="services_feature_item flex gap-3">
                    <Icon.Check className="mt-0.5 text-orange text-2xl" />
                    <p className="body2"><strong className="font-bold">Advanced Solutions:</strong> For complex plumbing needs, including sewer line work or water heater services, our specialized expertise ensures effective, long-lasting fixes.</p>
                </li>
            </ul>
            <ul className="services_detail_img grid xs:grid-cols-2 gap-7.5 mt-10">
                <li>
                    <Image width={2000} height={2000} src="/images/services/detail/bg_list1.jpg" alt="bg_list1" />
                </li>
                <li>
                    <Image width={2000} height={2000} src="/images/services/detail/bg_list2.jpg" alt="bg_list2" />
                </li>
            </ul>
            <p className="section_desc mt-4 body2 text-variant1">At Precision Design & Build, we offer expert plumbing services for maintenance, repairs, and installations. Our licensed plumbers ensure efficient, reliable water systems with minimal disruption. Whether fixing leaks or handling complex installations, we provide long-lasting solutions to keep your plumbing in top shape.</p>
            <p className="section_desc mt-4 body2 text-variant1">Aenean sit amet nunc id lorem ullamcorper mollis. Nullam orci nisi, faucibus sit amet porttitor eget, semper eu metus. Phasellus maximus pellentesque mauris id viverra. Vivamus eget sagittis nisl. Morbi sit amet augue auctor, blandit lectus et, vulputate eros.</p>
        </div>
    )
}

export default ServiceContent