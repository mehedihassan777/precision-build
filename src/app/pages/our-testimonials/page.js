import LayoutOne from '@/components/Layout/LayoutOne'
import { Breadcrumb } from '@/components/Other/Breadcrumb'
import testimonialData from "@/data/testimonial/data.json"
import TestimonialThree from '@/components/Sections/Testimonial/TestimonialThree'
import TestimonialTwo from '@/components/Sections/Testimonial/TestimonialTwo'
import TestimonialOne from '@/components/Sections/Testimonial/TestimonialOne'

export default function ourTestimonials() {
    return (
        <LayoutOne>
            <Breadcrumb image={'/images/breadcrumb/testimonials.jpg'} nav2={'Testimonials'} nav2Link={'/pages/our-testimonials'} title={'Our Testimonials'} />
            <TestimonialTwo data={testimonialData} start={0} limit={5} color={'orange'} />
            <TestimonialThree className={'sm:py-25 py-15 bg-surface style-orange'} data={testimonialData} start={0} limit={3} />
            <TestimonialOne data={testimonialData} />
        </LayoutOne>
    )
}