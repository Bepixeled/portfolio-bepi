import React from "react";
import Markdown from "react-markdown";
import * as Unicons from "@iconscout/react-unicons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function ProjectCard({ project }) {

  const settings = {
    infinite: true,
    autoplay: true,
    slidesToShow: 1, // Adjust this value to show more than one image at a time
    slidesToScroll: 1,
    
    centerMode: true,
    dots: true,
    arrows: true,
    centerPadding: "0",
    className: "max-w-96 max-h-100", // Adjust the max-width and max-height as needed
  };

  return (
    <div className="p-4 bg-rich_black-500 text-rich_black-800 rounded-xl md:max-w-[300px] overflow-hidden flex flex-col justify-between">
      <h3 className="text-xl md:text-2xl font-bold mb-2 text-bright_pink_(crayola)-600">{project.fields.title}</h3>
      <div>
        <Markdown   
        
        >{project.fields.content}</Markdown>
      </div>
<div >
      <div className="carousel max-w-100 h-96 overflow-hidden rounded-md">
        <Slider {...settings}>
          {project.fields.images.map((image, index) => (
            <div className="my-2">
            <div key={index}>
              <img
                src={image.fields.file.url}
                alt={image.fields.title}
                className="w-72 h-auto rounded-xl p-2"
              /></div>
            </div>
          ))}
        </Slider>
      </div>
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
}

export default ProjectCard;