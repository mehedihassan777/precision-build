import LayoutOne from '@/components/Layout/LayoutOne'
import { Breadcrumb } from '@/components/Other/Breadcrumb'
import AboutThree from '@/components/Sections/About/AboutThree'
import CounterOne from '@/components/Sections/Counter/CounterOne'
import processData from "@/data/process/data.json"
import ProcessThree from '@/components/Sections/Process/ProcessThree'
import testimonialData from "@/data/testimonial/data.json"
import TestimonialThree from '@/components/Sections/Testimonial/TestimonialThree'
import ChooseUsTwo from '@/components/Sections/ChooseUs/ChooseUsTwo'
import teamData from "@/data/team/data.json";
import TeamThree from '@/components/Sections/Team/TeamThree'

export default function aboutUs() {
  return (
    <LayoutOne>
      <Breadcrumb image={'/images/breadcrumb/about.jpg'} nav2={'About Us'} nav2Link={'/pages/about-us'} title={'About Us'} />
      <AboutThree color={'orange'} />
      <CounterOne />
      <ProcessThree data={processData} className={'style-three sm:py-25 py-15'} color={'orange'} />
      <TestimonialThree className={'sm:py-25 py-15 bg-surface style-orange'} data={testimonialData} start={0} limit={3} />
      <ChooseUsTwo className={'border-b border-outline'} color={'orange'} />
      <TeamThree data={teamData} color={'orange'} />
    </LayoutOne>
  )
}