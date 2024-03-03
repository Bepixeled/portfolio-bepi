import React, { useState, useEffect } from "react";
import { createClient } from "contentful";
import * as Unicons from "@iconscout/react-unicons";
import Markdown from "react-markdown";

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
        {projects.map((project) => {
          return (
            <div className="p-4 bg-rich_black-300 text-rich_black-800 rounded-xl md:max-w-[300px] overflow-hidden">
              <h3 className="text-xl font-bold mb-2 ">
                {project.fields.title}
              </h3>
              <div>
                <Markdown>{project.fields.content}</Markdown>
              </div>
              <div className="flex gap-4">
                {project.fields.images.map((image, index) => (
                  <img
                    key={index}
                    src={image.fields.file.url}
                    alt={image.fields.title}
                    className="w-auto h-72 rounded-xl p-2"
                  />
                ))}
              </div>
              <div className="flex justify-start items-center">
                <a
                  href={project.fields.link}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2"
                >
                  <Unicons.UilLink />{" "}
                </a>
                <a
                  href={project.fields.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2"
                >
                  <Unicons.UilGithub />{" "}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
