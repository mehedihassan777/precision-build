import LayoutOne from '@/components/Layout/LayoutOne'
import { Breadcrumb } from '@/components/Other/Breadcrumb'
import FaqsSection from '@/components/Sections/Faqs/FaqsSection'

export default function faqs() {
    return (
        <LayoutOne>
            <Breadcrumb image={'/images/breadcrumb/faqs.jpg'} nav2={'FAQs'} nav2Link={'/pages/faqs'} title={'Frequently Asked Questions'} />
            <section className="section faqs sm:py-25 py-15">
                <div className="container flex flex-col items-center sm:gap-25 gap-15">
                    <div className="faqs_area sm:w-5/6 w-full">
                        <FaqsSection title={'General Questions'} start={0} limit={5} />
                    </div>
                    <div className="faqs_area sm:w-5/6 w-full">
                        <FaqsSection title={'Scheduling Questions'} start={5} limit={10} />
                    </div>
                    <div className="faqs_area sm:w-5/6 w-full">
                        <FaqsSection title={'Orders & Purchases'} start={10} limit={15} />
                    </div>
                </div>
            </section>
        </LayoutOne>
    )
}