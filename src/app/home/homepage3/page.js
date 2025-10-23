import LayoutThree from "@/components/Layout/LayoutThree";
import SliderThree from "@/components/Sections/Slider/SliderThree";
import AboutThree from "@/components/Sections/About/AboutThree";
import serviceData from "@/data/service/data.json"
import ServiceThree from "@/components/Sections/Service/ServiceThree";
import BannerOne from "@/components/Sections/Banner/BannerOne";
import processData from "@/data/process/data.json"
import ProcessThree from "@/components/Sections/Process/ProcessThree";
import PricingThree from "@/components/Sections/Pricing/PricingThree";
import CtaThree from "@/components/Sections/Cta/CtaThree";
import testimonialData from "@/data/testimonial/data.json"
import TestimonialThree from "@/components/Sections/Testimonial/TestimonialThree";
import CounterTwo from "@/components/Sections/Counter/CounterTwo";
import projectData from "@/data/project/data.json";
import ProjectThree from "@/components/Sections/Project/ProjectThree";
import teamData from "@/data/team/data.json";
import TeamThree from "@/components/Sections/Team/TeamThree";
import FormRequestThree from "@/components/Sections/FormRequest/FormRequestThree";
import blogData from "@/data/blog/data.json";
import BlogThree from "@/components/Sections/Blog/BlogThree";

export default function homepage3() {
    return (
        <LayoutThree>
            <SliderThree />
            <AboutThree color={'yellow'} />
            <ServiceThree data={serviceData} start={12} limit={17} />
            <BannerOne type={3} />
            <ProcessThree data={processData} className={'style-three'} color={'yellow'} />
            <PricingThree />
            <CtaThree />
            <TestimonialThree className={'sm:pt-25 pt-15'} data={testimonialData} start={0} limit={3} />
            <CounterTwo />
            <ProjectThree data={projectData} start={10} limit={14} />
            <TeamThree data={teamData} color={'yellow'} />
            <FormRequestThree className={'style-three'} />
            <BlogThree data={blogData} start={6} limit={8} />
        </LayoutThree>
    );
}
