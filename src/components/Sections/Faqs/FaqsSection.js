'use client'

import React, { useState } from 'react'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import faqsData from "@/data/faqs/data.json"

const FaqsSection = ({ tag, title, desc, start, limit }) => {
    const [openFaq, setOpenFaq] = useState()

    const handleOpenFaq = (id) => {
        setOpenFaq(prevId => prevId === id ? null : id)
    }

    return (
        <>
            {tag && (
                <span className="section_tag tag animate">{tag}</span>
            )}
            <h3 className={`section_title heading3 ${tag ? 'mt-4' : ''} text-center animate`}>{title}</h3>
            {desc && (
                <p className="section_desc lg:mt-5 mt-3 body2 text-variant1 text-center animate">{desc}</p>
            )}
            <ul className="faqs_list sm:w-5/6 w-full lg:mt-10 mt-8 border border-outline">
                {faqsData.slice(start, limit).map((item) => (
                    <li className={`faqs_item p-6 border-b border-outline ${openFaq === item.id ? 'active' : ''}`}>
                        <button className="faqs_btn heading flex items-center justify-between gap-4 w-full" onClick={() => handleOpenFaq(item.id)}>
                            <strong className="title heading5 text-left">{item.title}</strong>
                            <span className="icon_arrow">
                                <Icon.Plus className="icon_arrow_plus text-2xl duration-400" />
                                <Icon.Minus className="icon_arrow_minus text-2xl duration-400" />
                            </span>
                        </button>
                        <div className="answer mt-4">
                            <p className="text-variant1">{item.desc}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default FaqsSection
