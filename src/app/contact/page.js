import Link from 'next/link';
import LayoutOne from '@/components/Layout/LayoutOne'
import * as Icon from "@phosphor-icons/react/dist/ssr";

export default function contact() {
  return (
    <LayoutOne>
      <section className="section map h-[520px]">
        <h3 className="blind">Map</h3>
        <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d441.4680913356407!2d-87.62228106271256!3d41.89648109617101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd35495a09aed%3A0xb42b088078846442!2sADA%20Foundation!5e0!3m2!1svi!2s!4v1732091620619!5m2!1svi!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>
      <section className="section form_contact sm:py-25 py-15">
        <div className="container flex items-center max-xl:flex-col gap-[9.5rem] gap-y-14">
          <div className="form_contact_content w-full">
            <span className="section_tag tag animate">Contact Us</span>
            <h3 className="section_tit mt-4 heading3 animate">Get in Touch with Us</h3>
            <p className="section_desc lg:mt-5 mt-3 body2 text-variant1 animate">Reach out today for expert guidance, service inquiries, or personalized solutions. We're here to support your project every step of the way!</p>
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
              <Link href="https://maps.app.goo.gl/Z8zKdiKbpcEdV6MV8" className="inline-flex gap-1 mt-7 duration-300 hover:text-orange" target="_blank">
                <strong className="txt-button underline underline-offset-4">Google map</strong>
                <Icon.ArrowRight weight='bold' className="text-xl" />
              </Link>
            </div>
          </div>
          <div className="form_contact_form flex-shrink-0 relative xl:w-1/2 w-full sm:p-10 p-7 bg-surface animate animate_left" style={{"--i": 2}}>
            <h4 className="heading4">Get a Free Consultation</h4>
            <p className="mt-3 text-variant1">Use the form below to get in touch with the sales team</p>
            <form className="form grid sm:grid-cols-2 grid-cols-1 gap-5 w-full mt-6">
              <div className="form_group w-full">
                <input type="text" name="name" className="form_input w-full py-3 px-4 border border-outline bg-white" placeholder="Your Name (public) *" required />
              </div>
              <div className="form_group w-full">
                <input type="email" name="email" className="form_input w-full py-3 px-4 border border-outline bg-white" placeholder="Your email (private) *" required />
              </div>
              <div className="form_group form_select col-span-full w-full">
                <select name="services" className="w-full py-3 px-4 border border-outline bg-white" required>
                  <option selected disabled value>Choose Services</option>
                  <option value="HVAC Maintenance">HVAC Maintenance</option>
                  <option value="AC Installation">AC Installation</option>
                  <option value="Heating Repair">Heating Repair</option>
                  <option value="Emergency Repair">Emergency Repair</option>
                </select>
                <Icon.CaretDown className="arrow_down text-xl" />
              </div>
              <div className="form_group sm:col-span-2 w-full">
                <textarea name="message" className="form_input w-full py-3 px-4 border border-outline bg-white" rows="4" placeholder="Write your comment here *" required></textarea>
              </div>
              <div className="form_group mt-2 w-full">
                <button type="submit" className="btn">Make An Appointment</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </LayoutOne>
  )
}