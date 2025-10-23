import LayoutOne from '@/components/Layout/LayoutOne'
import serviceData from "@/data/service/data.json"
import ServiceOne from '@/components/Sections/Service/ServiceOne'
import testimonialData from "@/data/testimonial/data.json"
import TestimonialThree from '@/components/Sections/Testimonial/TestimonialThree'
import FormRequestThree from '@/components/Sections/FormRequest/FormRequestThree'
import { Breadcrumb } from '@/components/Other/Breadcrumb'
import FaqsSection from '@/components/Sections/Faqs/FaqsSection'

export default function ourServices() {
    return (
        <LayoutOne>
            <Breadcrumb image={'/images/breadcrumb/services.jpg'} nav2={'Services'} nav2Link={'/pages/our-services'} title={'Our Services'} />
            <ServiceOne className={'bg-white'} data={serviceData} start={0} limit={6} />
            <TestimonialThree className={'sm:py-25 py-15 bg-surface style-orange'} data={testimonialData} start={0} limit={3} />
            <FormRequestThree />
            <section className="section faqs sm:pb-25 pb-15">
                <div className="container flex flex-col items-center">
                    <FaqsSection tag={'FAQs'} title={'Frequently Asked Questions'} desc={'Get Answers to Common Questions About Our Services and How We Work'} start={0} limit={5} />
                </div>
            </section>
        </LayoutOne>
    )
}