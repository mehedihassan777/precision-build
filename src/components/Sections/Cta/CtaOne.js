const CtaOne = () => {
    return (
        <section className="section cta py-10 bg-dark">
            <div className="container">
                <h2 className="blind text-xs">CTA</h2>
                <form className="cta_form flex gap-5">
                    <div className="cta_form_ipt grid xl:grid-cols-3 sm:grid-cols-2 gap-5 w-full">
                        <div className="cta_form_group">
                            <input type="text" className="cta_form_control w-full h-14 px-4 bg-white" placeholder="Your Name" required />
                        </div>
                        <div className="cta_form_group">
                            <input type="text" className="cta_form_control w-full h-14 px-4 bg-white" placeholder="Phone Number" required />
                        </div>
                        <div className="cta_form_group">
                            <input type="text" className="cta_form_control w-full h-14 px-4 bg-white" placeholder="Message" required />
                        </div>
                        <div className="cta_form_group xl:hidden">
                            <button type="submit" className="cta_btn btn w-full">Make An Appointment</button>
                        </div>
                    </div>
                    <div className="cta_form_btn flex-shrink-0 max-xl:hidden">
                        <button type="submit" className="cta_btn btn hover:bg-white">Make An Appointment</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default CtaOne