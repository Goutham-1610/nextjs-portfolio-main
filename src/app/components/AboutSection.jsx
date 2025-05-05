"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { SiAmazonaws, SiMlops, SiOpenai, SiCplusplus } from "react-icons/si";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>React Js</li>
        <li>LLm</li>
        <li>SQL</li>
        <li>C and C++</li>
        <li>Machine learnig</li>
        <li>Gen AI</li>
        <li>Flask</li>
        <li>AWS</li>
        <li>Deep Learning</li>
        <li>Docker</li>
        <li>SQL</li>
        <li>Node JS</li>
      </ul>
    ),
  },
  // {
  //   title: "Tools",
  //   id: "Tools",
  //   content: (
  //     <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-white">
  //       <div className="flex flex-col items-center">
  //         <SiAmazonaws className="text-4xl" />
  //         <span className="mt-2 text-sm">AWS Cloud</span>
  //       </div>
  //       {/* <div className="flex flex-col items-center">
  //         <SiMlops className="text-4xl" />
  //         <span className="mt-2 text-sm">MLOps</span>
  //       </div> */}
  //       <div className="flex flex-col items-center">
  //         <SiOpenai className="text-4xl" />
  //         <span className="mt-2 text-sm">LLM Engineering</span>
  //       </div>
  //       <div className="flex flex-col items-center">
  //         <SiCplusplus className="text-4xl" />
  //         <span className="mt-2 text-sm">C++ Programming</span>
  //       </div>
  //     </div>
  //   ),
  // },

  {
    title: "Education",
    id: "education",
    content: (
<ul className="list-disc pl-4 space-y-2">
  <li>
    <span className="font-semibold">Global Academy of Technology</span>
    <ul className="list-none pl-6 mt-1 space-y-1">
      <li>Bachelor of Engineering in Artificial Intelligence and Machine Learning</li>
      <li>2021 – 2025</li>
    </ul>
  </li>
  <li>
    <span className="font-semibold">Narayana College</span>
    <ul className="list-none pl-6 mt-1 space-y-1">
      <li>11th – 12th (PCMC Stream)</li>
      <li>2019 – 2021</li>
    </ul>
  </li>
  <li>
    <span className="font-semibold">Narayana E-Techno School</span>
    <ul className="list-none pl-6 mt-1 space-y-1">
      <li>10th Grade</li>
      <li>2015 – 2019</li>
    </ul>
  </li>
</ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Complete MLOps Bootcamp</li>
        <li>LLM Engineering</li>
        <li>Beginning C++ Programming</li>
        
      </ul>
    ),
  },
  
];


const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/pc.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a tech enthusiast with a strong passion for building intelligent and efficient systems. I have hands-on experience with technologies such as Node.js,
           Express, PostgreSQL, Sequelize, Python, and various AI/ML tools.With a completed degree in Artificial Intelligence and Machine Learning,
           I enjoy applying my knowledge to real-world problems involving automation, data engineering, and smart solutions. I&apos;m a quick learner,
           an analytical thinker, and a collaborative team player, always eager to innovate and grow.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("Tools")}
              active={tab === "Tools"}
            >
              {" "}
              Tools{" "}
            </TabButton> */}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
