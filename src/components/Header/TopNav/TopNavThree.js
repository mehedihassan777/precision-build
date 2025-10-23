'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import * as Icon from "@phosphor-icons/react/dist/ssr";

const TopNavThree = () => {
  const [isOpenLanguage, setIsOpenLanguage] = useState(false)
  const [isOpenCurrence, setIsOpenCurrence] = useState(false)
  const [language, setLanguage] = useState('english')
  const [currence, setCurrence] = useState('new york office')

  useEffect(() => {
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.select-block')) {
        setIsOpenLanguage(false)
        setIsOpenCurrence(false)
      }
    })

    return () => {
      document.removeEventListener('click', (e) => {
        if (!e.target.closest('.select-block')) {
          setIsOpenLanguage(false)
          setIsOpenCurrence(false)
        }
      });
    };
  }, [isOpenLanguage, isOpenCurrence])

  return (
    <>
      <div className="top_nav flex items-center justify-between h-15 xl:px-6 px-4 border-b border-outline max-lg:hidden">
        <ul className="top_nav_info flex items-center gap-6">
          <li className="info_item inline-flex items-center gap-2 max-[1400px]:hidden">
            <Icon.Alarm />
            <span className="caption1">8:00am : 10:00pm Mon-Sun</span>
          </li>
          <li className="info_item inline-flex items-center gap-2">
            <Icon.MapPin />
            <span className="caption1">4023 Dominion Cove, Austin Texas 78759</span>
          </li>
        </ul>
        <ul className="top_nav_social flex items-center gap-3">
          <li className="social_item">
            <Link href="https://www.facebook.com/"
              className="social_link flex items-center justify-center w-10 h-10 border border-outline duration-300 hover:bg-yellow hover:text-white" target="_blank">
              <Icon.FacebookLogo className="text-xl" />
              <span className="blind">link facebook</span>
            </Link>
          </li>
          <li className="social_item">
            <Link href="https://www.x.com/" 
              className="social_link flex items-center justify-center w-10 h-10 border border-outline duration-300 hover:bg-yellow hover:text-white" target="_blank">
              <Icon.XLogo className="text-xl" />
              <span className="blind">link x</span>
            </Link>
          </li>
          <li className="social_item">
            <Link href="https://www.instagram.com/"
              className="social_link flex items-center justify-center w-10 h-10 border border-outline duration-300 hover:bg-yellow hover:text-white" target="_blank">
              <Icon.InstagramLogo className="text-xl" />
              <span className="blind">link instagram</span>
            </Link>
          </li>
          <li className="social_item">
            <Link href="https://www.skype.com/"
              className="social_link flex items-center justify-center w-10 h-10 border border-outline duration-300 hover:bg-yellow hover:text-white" target="_blank">
              <Icon.SkypeLogo className="text-xl" />
              <span className="blind">link skype</span>
            </Link>
          </li>
          <li className="social_item">
            <Link href="https://www.telegram.com/"
              className="social_link flex items-center justify-center w-10 h-10 border border-outline duration-300 hover:bg-yellow hover:text-white" target="_blank">
              <Icon.TelegramLogo className="text-xl" />
              <span className="blind">link telegram</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default TopNavThree