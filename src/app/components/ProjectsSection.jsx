"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Dr AiGuru-Chatbot",
    description: "An intelligent medical chatbot that provides personalized health insights,symptom analysis, and smart recommendations using NLP and contextual understanding.",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Goutham-1610/hacksprint_a2?tab=readme-ov-file",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "brainovision",
    description: "Project 2 description",
    image: "/images/projects/9.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Goutham-1610/brainovision_hackathon-main",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Multi Agent sales-bot",
    description: "multi-agent sales bot system that autonomously handles sales, marketing, and customer support through intelligent agent collaboration.",
    image: "/images/projects/10.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Goutham-1610/HackALeague-2.0-main",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "codeXvalidator",
    description: " AI-powered tool that analyzes code, generates test cases, detects bugs, and provides intelligent debugging suggestions.(Repository is private)",
    image: "/images/projects/11.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "SG Medibot",
    description: " intelligent medical chatbot leveraging NLP and a fine-tuned language model to deliver accurate, symptom-based health guidance and contextual responses.(repository is private)",
    image: "/images/projects/12.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
//   {
//     id: 6,
//     title: "Full-stack Roadmap",
//     description: "Project 5 description",
//     image: "/images/projects/6.png",
//     tag: ["All", "Web"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      {/* <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div> */}
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
