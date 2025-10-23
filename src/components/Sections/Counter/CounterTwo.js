import classNames from "classnames";

const CounterTwo = ({ className }) => {
  return (
    <section className="section counter">
            <div className="container">
                <ul className={`counter_list flex max-xl:flex-wrap items-center justify-between gap-y-10 sm:py-25 py-15 ${classNames(className)}`}>
                    <li className="counter_item flex flex-col items-center gap-4 max-xl:w-1/2 max-sm:w-full animate" style={{"--i": 1}}>
                        <h2 className="heading1"><span id="counter_number1" className="counter_number">20</span>k+</h2>
                        <strong className="heading6">Services Completed</strong>
                    </li>
                    <li className="line max-xl:hidden flex-shrink-0 w-px h-32 bg-white bg-opacity-20"></li>
                    <li className="counter_item flex flex-col items-center gap-4 max-xl:w-1/2 max-sm:w-full animate" style={{"--i": 2}}>
                        <h2 className="heading1"><span id="counter_number2" className="counter_number">4.8</span>/5</h2>
                        <strong className="heading6">By 1,200 customers</strong>
                    </li>
                    <li className="line max-xl:hidden flex-shrink-0 w-px h-32 bg-white bg-opacity-20"></li>
                    <li className="counter_item flex flex-col items-center gap-4 max-xl:w-1/2 max-sm:w-full animate" style={{"--i": 3}}>
                        <h2 className="heading1"><span id="counter_number3" className="counter_number">10</span>k+</h2>
                        <strong className="heading6">Satisfied Customers</strong>
                    </li>
                    <li className="line max-xl:hidden flex-shrink-0 w-px h-32 bg-white bg-opacity-20"></li>
                    <li className="counter_item flex flex-col items-center gap-4 max-xl:w-1/2 max-sm:w-full animate" style={{"--i": 4}}>
                        <h2 className="heading1"><span id="counter_number4" className="counter_number">10</span>+</h2>
                        <strong className="heading6">Years Of Experience</strong>
                    </li>
                </ul>
            </div>
        </section>
  )
}
export default CounterTwo