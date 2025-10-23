import LayoutOne from '@/components/Layout/LayoutOne'
import { Breadcrumb } from '@/components/Other/Breadcrumb'
import FormAppointment from '@/components/Other/FormAppointment';
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Link from 'next/link';

export default function bookAppointment() {
    return (
        <LayoutOne>
            <Breadcrumb image={'/images/breadcrumb/appointment.jpg'} nav2={'Projects'} nav2Link={'/pages/book-appointment'} title={'Appointment'} />
            <section className="section appointment sm:py-25 py-15">
                <div className="container flex max-xl:flex-col gap-[9.5rem] gap-y-14">
                    <div className="appointment_content w-full">
                        <span className="section_tag tag animate">Book a Consultation</span>
                        <h3 className="section_tit mt-4 heading3 animate">Book Your Trusted Handyman Expert Now!</h3>
                        <p className="section_desc lg:mt-5 mt-3 body2 text-variant1 animate">Affordable pricing plans tailored to your home repair needs, from quick fixes to large-scale renovations.</p>
                        <ul className="list_feature flex flex-col gap-3 mt-7 pt-7 border-t border-outline">
                            <li className="flex items-center gap-3 animate">
                                <Icon.MapPin className="text-2xl" />
                                <span>4023 Dominion Cove, Austin Texas 78759</span>
                            </li>
                            <li className="flex items-center gap-3 animate">
                                <Icon.Envelope className="text-2xl" />
                                <span>info@precisionbuild.com</span>
                            </li>
                            <li className="flex items-center gap-3 animate">
                                <Icon.PhoneCall className="text-2xl" />
                                <span>512-524-6935</span>
                            </li>
                        </ul>
                        <div className="btn_area animate">
                            <Link href="https://maps.app.goo.gl/Z8zKdiKbpcEdV6MV8" className="inline-flex items-center gap-1 mt-7 duration-300 hover:text-orange" target="_blank">
                                <strong className="txt-button underline underline-offset-4">Google map</strong>
                                <Icon.ArrowRight weight='bold' className="text-xl" />
                            </Link>
                        </div>
                    </div>
                    <div className="appointment_form flex-shrink-0 relative xl:w-1/2 w-full shadow-lg animate animate_left" style={{"--i": 2}}>
                        <FormAppointment />
                    </div>
                </div>
            </section>
        </LayoutOne>
    )
}