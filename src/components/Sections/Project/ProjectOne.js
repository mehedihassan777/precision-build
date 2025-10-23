'use client'

import React, { useState } from "react"
import Image from "next/image";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";

const ProjectOne = () => {
    const [ranges, setRanges] = useState({
        project1: 50,
        project2: 50,
        project3: 50,
        project4: 50,
    });

    const handleRangeChange = (projectKey, value) => {
        setRanges((prev) => ({
            ...prev,
            [projectKey]: value,
        }));
    };

    return (
        <section className="section projects sm:py-25 py-15 bg-dark">
            <div className="container flex flex-col items-center">
                <span className="section_tag tag bg-white animate">Our Projects</span>
                <h3 className="section_tit mt-4 heading3 text-white animate">Amazing Work Results</h3>
                <p className="section_desc lg:mt-5 mt-3 body2 text-white text-center animate">
                    We pride ourselves on delivering consistent, high-quality services that you can depend on.
                    <br className="max-md:hidden" /> Whether it’s a small fix or a large-scale renovation
                </p>
                <ul className="projects_list grid sm:grid-cols-2 gap-5 lg:mt-12 mt-9">
                    {["project1", "project2", "project3", "project4"].map((project, index) => (
                        <li className="projects_item animate" key={project} style={{ "--i": index + 1 }}>
                            <Image
                                width={2000}
                                height={2000}
                                src={`/images/projects/${index + 1}-1.jpg`}
                                className="opacity-0 pointer-events-none"
                                alt={`projects ${index + 1}`}
                            />
                            <figure className="projects_figure">
                                <button
                                    className="comparison_btn"
                                    style={{ left: `${ranges[project]}%` }}
                                >
                                    <span className="blind">button compare</span>
                                </button>
                                <div
                                    className="projects_divisor"
                                    style={{ width: `${ranges[project]}%` }}
                                ></div>
                            </figure>
                            <input
                                className="comparison_ipt"
                                type="range"
                                min="0"
                                max="100"
                                value={ranges[project]}
                                onChange={(e) =>
                                    handleRangeChange(project, e.target.value)
                                }
                            />
                        </li>
                    ))}
                </ul>
                <Link
                    href="/pages/our-projects1"
                    className="inline-flex items-center gap-2 lg:mt-12 mt-9 mx-auto text-white animate"
                    style={{ "--i": 5 }}
                >
                    <span className="has_line line_white animate_width txt-button">
                        View All Projects
                    </span>
                    <Icon.ArrowUpRight className="text-2xl" />
                </Link>
            </div>
        </section>
    );
};

export default ProjectOne;
