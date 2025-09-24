"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TabList from "./TabList";
import { projects } from "./projectData";
import ProjectCard from "./ProjectCard";



export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("all");

  const getFilteredProjects = () => {
    if (activeTab === "all") {
      return projects ; // Return all projectsData if the "all" tab is active
    }
    return projects.filter((project) => project.category === activeTab); // Filter projects based on the active tab
  };

  return (
    <section className="py-16 max-w-[85rem] mx-auto">
      <div className="container mx-auto px-4">
        <TabList activeTab={activeTab} onTabChange={setActiveTab} />
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {getFilteredProjects().map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
