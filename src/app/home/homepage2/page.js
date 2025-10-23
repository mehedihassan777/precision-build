import LayoutTwo from "@/components/Layout/LayoutTwo";
import SliderTwo from "@/components/Sections/Slider/SliderTwo";
import AboutTwo from "@/components/Sections/About/AboutTwo";
import serviceData from "@/data/service/data.json"
import ServiceTwo from "@/components/Sections/Service/ServiceTwo";
import BannerOne from "@/components/Sections/Banner/BannerOne";
import processData from "@/data/process/data.json"
import ProcessTwo from "@/components/Sections/Process/ProcessTwo";
import TestimonialTwo from "@/components/Sections/Testimonial/TestimonialTwo";
import testimonialData from "@/data/testimonial/data.json"
import CtaTwo from "@/components/Sections/Cta/CtaTwo";
import ChooseUsTwo from "@/components/Sections/ChooseUs/ChooseUsTwo";
import CounterTwo from "@/components/Sections/Counter/CounterTwo";
import ProjectTwo from "@/components/Sections/Project/ProjectTwo";
import projectData from "@/data/project/data.json";
import BlogTwo from "@/components/Sections/Blog/BlogTwo";
import blogData from "@/data/blog/data.json";
import BrandTwo from "@/components/Sections/Brand/BrandTwo";

export default function homepage2() {
    return (
        <LayoutTwo>
            <SliderTwo />
            <AboutTwo />
            <ServiceTwo data={serviceData} start={6} limit={12} />
            <BannerOne type={2} />
            <ProcessTwo data={processData} />
            <TestimonialTwo data={testimonialData} start={0} limit={5} className={'style-two'} color={'blue'} />
            <CtaTwo />
            <ChooseUsTwo className={'border-b border-outline'} color={'blue'} />
            <CounterTwo />
            <ProjectTwo data={projectData} start={0} limit={5} />
            <BrandTwo />
            <BlogTwo data={blogData} start={3} limit={6} />
        </LayoutTwo>
    );
}
