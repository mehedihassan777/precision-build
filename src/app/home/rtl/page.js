import LayoutOne from "@/components/Layout/LayoutOne";
import SliderOne from "@/components/Sections/Slider/SliderOne";
import CtaOne from "@/components/Sections/Cta/CtaOne";
import AboutOne from "@/components/Sections/About/AboutOne";
import serviceData from "@/data/service/data.json"
import ServiceOne from "@/components/Sections/Service/ServiceOne";
import processData from "@/data/process/data.json"
import ProcessOne from "@/components/Sections/Process/ProcessOne";
import CounterOne from "@/components/Sections/Counter/CounterOne";
import PricingOne from "@/components/Sections/Pricing/PricingOne";
import ChooseUsOne from "@/components/Sections/ChooseUs/ChooseUsOne";
import BannerOne from "@/components/Sections/Banner/BannerOne";
import ProjectOne from "@/components/Sections/Project/ProjectOne";
import testimonialData from "@/data/testimonial/data.json";
import TestimonialOne from "@/components/Sections/Testimonial/TestimonialOne";
import teamData from "@/data/team/data.json";
import TeamOne from "@/components/Sections/Team/TeamOne";
import blogData from "@/data/blog/data.json";
import BlogOne from "@/components/Sections/Blog/BlogOne";
import BrandOne from "@/components/Sections/Brand/BrandOne";

export default function homeRtl() {
  return (
    <>
      <LayoutOne>
        <SliderOne />
        <CtaOne />
        <AboutOne />
        <ServiceOne className={'bg-surface'} data={serviceData} start={0} limit={6} />
        <ProcessOne data={processData} />
        <CounterOne />
        <ChooseUsOne />
        <BannerOne type={1} />
        <ProjectOne />
        <TestimonialOne data={testimonialData} />
        <PricingOne className={'bg-surface'} />
        <TeamOne data={teamData} />
        <BlogOne data={blogData} start={0} limit={3} />
        <BrandOne />
      </LayoutOne>
    </>
  );
}
