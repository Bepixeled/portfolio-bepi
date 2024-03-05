import React, { useState, useEffect } from "react";
import { createClient } from "contentful";
import ProjectCards from "./ProjectCards";

function Projects() {
  const client = createClient({
    space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
    accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  });

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const entries = await client.getEntries();
        const unfilteredProjects = entries.items;
        setProjects(
          unfilteredProjects.filter(
            (project) => project.sys.contentType.sys.id === "project"
          )
        );
      } catch (error) {
        console.error("Error fetching entries:", error);
      }
    };

    fetchEntries();
  }, []);

  console.log(projects);

  return (
    <div
      id="projects"
      className="flex flex-col md:flex-row items-center justify-around my-8 gap-4"
    >
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <h2 className="text-6xl font-bold bg-gradient-to-r from-hot_magenta-300 via-oxford_blue-700 to-aquamarine pb-4 text-transparent bg-clip-text mr-8">
            Projects
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-4 jus">
          {projects.map((project) => (
            <ProjectCards key={project.sys.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;