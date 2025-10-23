import React from 'react'
import Image from 'next/image'

const SliderFour = () => {
  return (
    <section className="section slider md:h-[51rem] h-[28rem]">
      <h3 className="blind">Slider</h3>
      <div className="slider_video w-full h-full relative">
        <Image width={2000} height={2000} src="/images/slider/slider4.jpg" className="absolute bottom-0 left-0 w-full h-full" alt="bg video" />
        <video className="w-full h-full object-cover absolute bottom-0 left-0" autoPlay loop muted playsInline>
          <source src="/images/slider/video_slider4.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  )
}

export default SliderFour