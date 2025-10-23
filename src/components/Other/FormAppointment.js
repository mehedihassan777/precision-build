'use client'

import React, { useState } from 'react'
import Modal from '@/components/Control/Modal';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import * as Icon from "@phosphor-icons/react/dist/ssr";

const FormAppointment = () => {
  const [value, onChange] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showAppointment, setShowAppointment] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeDate, setActiveDate] = useState(new Date());

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <>
      <div className="calendar w-full h-full">
        <Calendar
          onChange={onChange}
          value={value}
          prevLabel={<Icon.CaretLeft className='text-3xl text-white' />}
          nextLabel={<Icon.CaretRight className='text-3xl text-white' />}
          tileDisabled={({ date, view }) => {
            if (view === "month") {
              const currentDate = new Date(date);
              currentDate.setHours(0, 0, 0, 0); // Đặt giờ của ngày trong lịch về 0
              return currentDate < today; // Disable các ngày trước hôm nay
            }
            return false; // Không disable trong các view khác
          }}
          onClickDay={(value, event) => {
            setShowModal(true)
            setShowDatePicker(true)
            setActiveDate(value)
          }}
        />
      </div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
      >
        <div
          className={`time_picker fixed top-1/2 left-1/2 z-[100] -translate-x-1/2 -translate-y-1/2 md:w-[700px] w-[90vw] bg-white ${showDatePicker === false ? 'invisible opacity-0' : 'visible opacity-100'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <h5 className="heading5 py-3.5 bg-orange text-white text-center">Available Appointments</h5>
          <ul className="time_slots flex flex-col gap-3 p-3">
            <li className="time_slots_item flex items-center justify-between p-2 bg-white">
              <span>9:00 AM - 10:00 AM</span>
              <span>1 time slots available</span>
              <button
                className="btn js_btn_open_popup"
                onClick={() => {
                  setShowDatePicker(false)
                  setShowAppointment(true)
                }}
              >
                Booking
              </button>
            </li>
            <li className="time_slots_item flex items-center justify-between p-2 bg-white">
              <span>10:00 AM - 11:00 AM</span>
              <span>0 time slots available</span>
              <button
                className="btn btn_disabled js_btn_open_popup"
                onClick={() => {
                  setShowDatePicker(false)
                  setShowAppointment(true)
                }}
              >
                unavailable
              </button>
            </li>
            <li className="time_slots_item flex items-center justify-between p-2 bg-white">
              <span>2:00 PM - 3:00 PM</span>
              <span>1 time slots available</span>
              <button
                className="btn js_btn_open_popup"
                onClick={() => {
                  setShowDatePicker(false)
                  setShowAppointment(true)
                }}
              >
                Booking
              </button>
            </li>
            <li className="time_slots_item flex items-center justify-between p-2 bg-white">
              <span>3:00 PM - 4:00 PM</span>
              <span>1 time slots available</span>
              <button
                className="btn js_btn_open_popup"
                onClick={() => {
                  setShowDatePicker(false)
                  setShowAppointment(true)
                }}
              >
                Booking
              </button>
            </li>
          </ul>
          <button
            className="btn_close flex items-center justify-center absolute -top-8 right-0 w-7 h-7 rounded-full bg-variant2 text-white duration-300 hover:bg-black"
            onClick={() => setShowModal(false)}
          >
            <Icon.X className='text-lg' />
          </button>
        </div>
      </Modal>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
      >
        <div
          className={`popup_booking fixed top-1/2 left-1/2 z-[100] -translate-x-1/2 -translate-y-1/2 md:w-[690px] w-[90vw] h-fit bg-white shadow-lg ${showAppointment === false ? 'invisible opacity-0' : 'visible opacity-100'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <h5 className="heading5 py-3.5 bg-orange text-white text-center">Request An Appointment</h5>
          <div className="popup_content overflow-x-hidden max-h-[70vh] p-7">
            <h6 className="heading6">Date & Time</h6>
            <p className="mt-3">Please confirm that you would like to request the following appointment:</p>
            <div className="flex flex-wrap items-center gap-2 px-5 py-3.5 mt-3 bg-surface">
              <Icon.CalendarBlank className="text-2xl" />
              <span className="popup_booking_date">{activeDate.toLocaleDateString()}</span>
              <span>at</span>
              <span className="popup_booking_time">8:00 AM - 9:00 AM</span>
            </div>
            <form>
              <h6 className="mt-7 heading6">Information</h6>
              <div className="form_group w-full mt-3">
                <input type="text" name="firstName" className="form_input w-full py-3 px-4 border border-outline" placeholder="First Name *" required />
              </div>
              <div className="form_group w-full mt-3">
                <input type="text" name="lastName" className="form_input w-full py-3 px-4 border border-outline" placeholder="Last Name *" required />
              </div>
              <div className="form_group w-full mt-3">
                <input type="tel" name="phone" className="form_input w-full py-3 px-4 border border-outline" placeholder="Phone Number *" required />
              </div>
              <h6 className="mt-7 heading6">Services</h6>
              <ul className="grid md:grid-cols-3 xs:grid-cols-2 gap-8 gap-y-3 mt-3">
                <li className="form_checkbox flex">
                  <input type="checkbox" className="checkbox" id="renovationServices" />
                  <Icon.CheckSquare weight='fill' className="text-[22px] text-orange checkbox_icon" />
                  <label className="label pl-7" htmlFor="renovationServices">Renovation Services</label>
                </li>
                <li className="form_checkbox flex">
                  <input type="checkbox" className="checkbox" id="electricalServices" />
                  <Icon.CheckSquare weight='fill' className="text-[22px] text-orange checkbox_icon" />
                  <label className="label pl-7" htmlFor="electricalServices">Electrical Services</label>
                </li>
                <li className="form_checkbox flex">
                  <input type="checkbox" className="checkbox" id="plumbingServices" />
                  <Icon.CheckSquare weight='fill' className="text-[22px] text-orange checkbox_icon" />
                  <label className="label pl-7" htmlFor="plumbingServices">Plumbing Services</label>
                </li>
                <li className="form_checkbox flex">
                  <input type="checkbox" className="checkbox" id="hvacServices" />
                  <Icon.CheckSquare weight='fill' className="text-[22px] text-orange checkbox_icon" />
                  <label className="label pl-7" htmlFor="hvacServices">HVAC Services</label>
                </li>
                <li className="form_checkbox flex">
                  <input type="checkbox" className="checkbox" id="paintingAndDrywall" />
                  <Icon.CheckSquare weight='fill' className="text-[22px] text-orange checkbox_icon" />
                  <label className="label pl-7" htmlFor="paintingAndDrywall">Painting and Drywall</label>
                </li>
                <li className="form_checkbox flex">
                  <input type="checkbox" className="checkbox" id="roofingServices" />
                  <Icon.CheckSquare weight='fill' className="text-[22px] text-orange checkbox_icon" />
                  <label className="label pl-7" htmlFor="roofingServices">Roofing Services</label>
                </li>
              </ul>
              <ul className="group_btn flex flex-wrap gap-3 mt-7">
                <li>
                  <button type="submit" className="btn">Request Appointment</button>
                </li>
                <li>
                  <button 
                    type="button" 
                    className="btn btn_outline js_btn_close_popup"
                    onClick={() => {
                      setShowDatePicker(true)
                      setShowAppointment(false)
                    }}
                  >
                    Cancel
                  </button>
                </li>
              </ul>
            </form>
          </div>
          <button
            className="btn_close flex items-center justify-center absolute -top-8 right-0 w-7 h-7 rounded-full bg-variant2 text-white duration-300 hover:bg-black"
            onClick={() => {
              setShowDatePicker(true)
              setShowAppointment(false)
            }}
          >
            <Icon.X className='text-lg' />
          </button>
        </div>
      </Modal>
    </>
  )
}

export default FormAppointment
