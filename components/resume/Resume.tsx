'use client'

import { LANGUAGES, SOFTSKILLS, TECHSKILLS } from '@/data'
import { FcGraduationCap } from 'react-icons/fc'
import TechSkills from './TechSkills'

export default function Resume() {
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
                        <div className="grow space-y-1">
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
                        <div className="grow space-y-1">
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
                        <div className="grow space-y-1">
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
                    {TECHSKILLS.map((el, elXid) => {
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
                    {SOFTSKILLS.map((el, elXid) => {
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
                    {LANGUAGES.map((el, elXid) => {
                        return <TechSkills key={elXid}>{el}</TechSkills>
                    })}
                </div>
            </div>
        </div>
    )
}
