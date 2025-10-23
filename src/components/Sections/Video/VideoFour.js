'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Modal from '@/components/Control/Modal'

const VideoFour = () => {
  const [openVideo, setOpenVideo] = useState(false)

  return (
    <>
      <section className="section video animate">
        <div className="video_inner flex items-center justify-center lg:h-[35rem] h-[20rem]">
          <h3 className="blind">Video</h3>
          <Image width={2000} height={2000} src="/images/components/bg_video4.jpg" className="absolute top-0 left-0 z-[-1] w-full h-full object-cover" alt="video" />
          <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
            <source src="/images/other/video4.mp4" type="video/mp4" />
          </video>
          <button className="btn_play absolute w-full h-full" onClick={() => setOpenVideo(true)}>
            <span className="blind">button play video</span>
          </button>
        </div>
      </section>
      <Modal
        showModal={openVideo}
        setShowModal={setOpenVideo}
      >
        <div className={`fixed top-1/2 left-1/2 z-[100] -translate-x-1/2 -translate-y-1/2 md:w-[50vw] w-[90vw] aspect-[16/9] bg-white duration-400 ${openVideo ? 'opacity-100' : 'opacity-0'}`}>
          <iframe className="w-full h-full object-cover" src="https://www.youtube.com/embed/eoiRkkmg2NA?si=Q4WVpTusWMVT5Eej&controls=1&rel=0&enablejsapi=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </Modal>
    </>
  )
}

export default VideoFour