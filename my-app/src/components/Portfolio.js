import React from "react";
import WGimg from "../assets/WeatherGroupie.png";
import TBimg from "../assets/TravelBlogger.png";
import REXimg from "../assets/REX.png"

function Portfolio() {
  const projectsArr = [
    {
      name: "WeatherGroupie",
      image_id: "WeatherGroupie-img",
      image_src: `${WGimg}`,
      link_href: "https://0blockaye0.github.io/WeatherGroupie/",
      link_class: "project-links",
    },
    {
      name: "Travel Blogger",
      image_id: "TravelBlogger-img",
      image_src: `${TBimg}`,
      link_href: "https://serene-tor-80949.herokuapp.com/",
      link_class: "project-links",
    },
    {
      name: "REX Rescue Express",
      image_id: "REX-img",
      image_src: `${REXimg}`,
      link_href: "https://still-plains-06700.herokuapp.com/",
      link_class: "project-links",
    },
    // {
    //   name: "Travel Blogger",
    //   image_id: "TravelBlogger-img",
    //   image_src: `${TBimg}`,
    //   link_href: "https://serene-tor-80949.herokuapp.com/",
    //   link_class: "project-links",
    // },
    // {
    //   name: "Travel Blogger",
    //   image_id: "TravelBlogger-img",
    //   image_src: `${TBimg}`,
    //   link_href: "https://serene-tor-80949.herokuapp.com/",
    //   link_class: "project-links",
    // },
    // {
    //   name: "Travel Blogger",
    //   image_id: "TravelBlogger-img",
    //   image_src: `${TBimg}`,
    //   link_href: "https://serene-tor-80949.herokuapp.com/",
    //   link_class: "project-links",
    // },

  ];

  return (
    <section className="parent">
      <h1>Portfolio</h1>
      <p>Here is some of my work</p>
      {/* <section> */}
      {projectsArr.map((project, idx) => {
        return (
          <div key={idx}>
            <h1 className="projName">{project.name}</h1>
            <div>
              <a href={project.link_href} className={project.link_class}>
                <img
                  alt=""
                  id={project.image_id}
                  src={project.image_src}
                  style={{ height: `50%`, width: `75%` }}
                ></img>
              </a>
            </div>
          </div>
        );
      })}
      {/* </section> */}
    </section>
  );
}

export default Portfolio;
