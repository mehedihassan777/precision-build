import LayoutFour from "@/components/Layout/LayoutFour";
import SliderFour from "@/components/Sections/Slider/SliderFour";
import serviceData from "@/data/service/data.json"
import processData from "@/data/process/data.json"
import AboutFour from "@/components/Sections/About/AboutFour";
import ServiceFour from "@/components/Sections/Service/ServiceFour";
import ChooseUsFour from "@/components/Sections/ChooseUs/ChooseUsFour";
import ProcessFour from "@/components/Sections/Process/ProcessFour";
import ProjectFour from "@/components/Sections/Project/ProjectFour";
import projectData from "@/data/project/data.json";
import testimonialData from "@/data/testimonial/data.json"
import TestimonialFour from "@/components/Sections/Testimonial/TestimonialFour";
import CounterTwo from "@/components/Sections/Counter/CounterTwo";
import FormRequestFour from "@/components/Sections/FormRequest/FormRequestFour";
import VideoFour from "@/components/Sections/Video/VideoFour";
import BlogFour from "@/components/Sections/Blog/BlogFour";
import blogData from "@/data/blog/data.json";

export default function homepage4() {
    return (
        <LayoutFour>
            <SliderFour />
            <AboutFour />
            <ServiceFour data={serviceData} start={12} limit={17} />
            <ChooseUsFour />
            <ProcessFour data={processData} />
            <ProjectFour data={projectData} start={14} limit={17} />
            <TestimonialFour data={testimonialData} start={0} limit={5} />
            <CounterTwo className={'border-t border-outline'} />
            <FormRequestFour />
            <VideoFour />
            <BlogFour data={blogData} start={0} limit={3} />
        </LayoutFour>
    );
}
