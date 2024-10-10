'use client'

import React, { useState } from 'react'
import { FcGraduationCap } from 'react-icons/fc'
import TechSkills from './TechSkills'
import { FaJava } from 'react-icons/fa'
import {
    SiC,
    SiCplusplus,
    SiCss3,
    SiDocker,
    SiExpress,
    SiFramer,
    SiGithubactions,
    SiHtml5,
    SiJavascript,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiPowerbi,
    SiPython,
    SiReact,
    SiRedis,
    SiRedux,
    SiTailwindcss,
    SiTypescript,
} from 'react-icons/si'

export default function Resume() {
    const languages = ['English', 'Hindi', 'Malayalam', 'Konkani', 'Sanskrit']

    const techSkills = [
        { title: 'HTML', Component: SiHtml5, color: '#E34F26' },
        { title: 'CSS', Component: SiCss3, color: '#1572B6' },
        { title: 'Javascript', Component: SiJavascript, color: '#F7DF1E' },
        { title: 'Typescript', Component: SiTypescript, color: '#3178C6' },
        { title: 'Java', Component: FaJava, color: '' },
        { title: 'C++', Component: SiCplusplus, color: '#00599C' },
        { title: 'Objective C', Component: SiC, color: '#A8B9CC' },
        { title: 'Python', Component: SiPython, color: '#3776AB' },
        { title: 'React', Component: SiReact, color: '#61DAFB' },
        { title: 'Redux', Component: SiRedux, color: '#764ABC' },
        { title: 'Next JS', Component: SiNextdotjs, color: '#fff' },
        { title: 'Framer Motion', Component: SiFramer, color: '#0055FF' },
        { title: 'Tailwindcss', Component: SiTailwindcss, color: '#06B6D4' },
        { title: 'Mongo', Component: SiMongodb, color: '#47A248' },
        { title: 'Node js', Component: SiNodedotjs, color: '#339933' },
        { title: 'Express js', Component: SiExpress, color: '#fff' },
        { title: 'Redis', Component: SiRedis, color: '#DC382D' },
        {
            title: 'Github Actions',
            Component: SiGithubactions,
            color: '#2088FF',
        },
        {
            title: 'Docker',
            Component: SiDocker,
            color: '#2496ED',
        },
        {
            title: 'Power BI',
            Component: SiPowerbi,
            color: '#ff0000',
        },
    ]

    const softSkills = [
        'Communication',
        'Collaboration',
        'Time-Management',
        'Problem Solving',
        'Adaptability',
    ]
    return (
        <div>
            {/* about me section  */}
            <div className="aboutme mt-10">
                <h1 className="font-bold tracking-wide text-2xl capitalize">
                    about
                </h1>

                <div className="mt-6 rounded-lg leading-relaxed text-base tracking-wider font-semibold">
                    <p>
                        Passionate Full Stack Developer with 2+ years of
                        experience, specializing in creating interactive,
                        animation-driven web applications. Proficient in React,
                        Node.js, and modern web technologies. Skilled at
                        crafting seamless user experiences with clean,
                        maintainable code. Strong expertise in integrating
                        server-side logic with dynamic front-end designs.
                        Dedicated to staying at the forefront of development
                        trends and delivering high-performance solutions.
                    </p>
                    {/* <p>
                        As a full-stack developer, I have a strong foundation,
                        yet I remain down-to-earth, always acknowledging the
                        potential for improvement and seeking opportunities to
                        grow. I have a genuine passion for acquiring knowledge
                        in areas where I am currently unfamiliar.
                    </p>
                    <p className="mt-3">
                        Learning new technologies and exploring different
                        aspects of web development excites me. Moreover, I am
                        determined to enhance my expertise in the MERN (MongoDB,
                        Express.js, React.js, Node.js) stack, which I already
                        have a solid foundation in.
                    </p>
                    <p className="mt-3">
                        I'm enthusiastic about trying out new things and
                        exploring various possibilities to broaden my horizons.
                        Additionally, I'm eager to apply my knowledge and
                        expertise in the MERN stack to create innovative
                        solutions.
                    </p>
                    <p className="mt-3">
                        My ultimate goal is to become a well-rounded and skilled
                        full-stack web developer capable of delivering
                        cutting-edge solutions that positively impact the
                        digital world.
                    </p> */}
                </div>
            </div>

            {/* education section */}
            <div className="education mt-10">
                <h1 className=" font-bold tracking-wide text-2xl capitalize">
                    Education
                </h1>

                <div className="mt-6 rounded-lg shadow-md bg-slate-200 dark:bg-[#181818] p-4">
                    <div className="flex items-start space-x-4 p-2">
                        <FcGraduationCap size={'2em'} />
                        <div className="flex-grow space-y-1">
                            <h1 className="text-2xl font-bold capitalize">
                                Mahatma Gandhi University
                            </h1>
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                                <h1 className="tracking-wide flex items-center text-neutral-800 dark:text-slate-200">
                                    Bachelor degree, Computer Applications
                                </h1>
                                <h4 className="font-semibold tracking-wide">
                                    2019 - 2022
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 rounded-lg shadow-md bg-slate-200 dark:bg-[#181818] p-4">
                    <div className="flex items-start space-x-4 p-2">
                        <FcGraduationCap size={'2em'} />
                        <div className="flex-grow space-y-1">
                            <h1 className="text-2xl font-bold capitalize">
                                St Mary&apos;s HSS, Pattom.
                            </h1>
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                                <h1 className="tracking-wide flex items-center text-neutral-800 dark:text-slate-200">
                                    <span>
                                        Higher Secondary, Computer Science
                                    </span>
                                </h1>
                                <h4 className="font-semibold tracking-wide">
                                    2017 - 2019
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-6 rounded-lg shadow-md bg-slate-200 dark:bg-[#181818] p-4">
                    <div className="flex items-start space-x-4 p-2">
                        <FcGraduationCap size={'2em'} />
                        <div className="flex-grow space-y-1">
                            <h1 className="text-2xl font-bold capitalize">
                                TDHS, Kochi.
                            </h1>
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                                <h1 className="tracking-wide flex items-center text-neutral-800 dark:text-slate-200">
                                    <span>Matriculation</span>
                                </h1>
                                <h4 className="font-semibold tracking-wide">
                                    2016 - 2017
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* skills section */}
            {/* Tech skills section */}
            <div className="Tech-skills mt-9 flex-1">
                <h1 className="font-bold tracking-wide text-2xl capitalize">
                    Tech Skills
                </h1>
                <div className="mt-3 flex flex-row flex-wrap items-center ">
                    {techSkills.map((el, elXid) => {
                        return (
                            <TechSkills
                                key={elXid}
                                Component={el.Component}
                                color={el.color}
                            >
                                {el.title}
                            </TechSkills>
                        )
                    })}
                </div>
            </div>
            {/* Soft skills section */}
            <div className="Soft-skills mt-9">
                <h1 className="font-bold tracking-wide text-2xl capitalize">
                    Soft Skills
                </h1>
                <div className="mt-3 flex flex-wrap items-center">
                    {softSkills.map((el, elXid) => {
                        return <TechSkills key={elXid}>{el}</TechSkills>
                    })}
                </div>
            </div>

            {/* Languages section */}
            <div className="Languages mt-9">
                <h1 className=" font-bold tracking-wide text-2xl capitalize">
                    Languages
                </h1>
                <div className="mt-6 flex flex-wrap items-center ">
                    {languages.map((el, elXid) => {
                        return <TechSkills key={elXid}>{el}</TechSkills>
                    })}
                </div>
            </div>
        </div>
    )
}
