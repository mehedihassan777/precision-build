import LayoutOne from '@/components/Layout/LayoutOne'
import { Breadcrumb } from '@/components/Other/Breadcrumb'
import PricingOne from '@/components/Sections/Pricing/PricingOne'
import testimonialData from "@/data/testimonial/data.json"
import TestimonialThree from '@/components/Sections/Testimonial/TestimonialThree'
import FaqsSection from '@/components/Sections/Faqs/FaqsSection'

export default function ourPricing() {
    return (
        <LayoutOne>
            <Breadcrumb image={'/images/breadcrumb/pricing.jpg'} nav2={'Pricing'} nav2Link={'/pages/our-pricing'} title={'Our Pricing'} />
            <PricingOne />
            <TestimonialThree className={'sm:py-25 py-15 bg-surface style-orange'} data={testimonialData} start={0} limit={3} />
            <section className="section faqs sm:py-25 py-15">
                <div className="container flex flex-col items-center">
                    <FaqsSection tag={'FAQs'} title={'Frequently Asked Questions'} desc={'Get Answers to Common Questions About Our Services and How We Work'} start={0} limit={5} />
                </div>
            </section>
        </LayoutOne>
    )
}