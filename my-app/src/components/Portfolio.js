import React from "react";
import WGimg from "../assets/WeatherGroupie.png";
import TBimg from "../assets/TravelBlogger.png";
import REXimg from "../assets/REX.png";
import TPGimg from "../assets/TPG.png";
import ECBimg from "../assets/ECB.png";
import EMTimg from "../assets/EMT.png";
import GHicon from "../assets/GHicon.png";

function Portfolio() {
  const projectsArr = [
    {
      name: "WeatherGroupie",
      image_id: "WeatherGroupie-img",
      image_src: `${WGimg}`,
      link_href: "https://0blockaye0.github.io/WeatherGroupie/",
      link_class: "project-links",
      GHLink: "https://github.com/0Blockaye0/WeatherGroupie",
      vid_links: [],
      deployed_link: "https://0blockaye0.github.io/WeatherGroupie/",
    },
    {
      name: "Travel Blogger",
      image_id: "TravelBlogger-img",
      image_src: `${TBimg}`,
      link_href: "https://serene-tor-80949.herokuapp.com/",
      link_class: "project-links",
      GHLink: "https://github.com/0Blockaye0/Travel-Blogger",
      vid_links: [],
      deployed_link: "https://serene-tor-80949.herokuapp.com/",
    },
    {
      name: "REX Rescue Express",
      image_id: "REX-img",
      image_src: `${REXimg}`,
      link_href: "https://still-plains-06700.herokuapp.com/",
      link_class: "project-links",
      GHLink: "https://github.com/0Blockaye0/REX-Rescue_Express",
      vid_links: [],
      deployed_link: "https://still-plains-06700.herokuapp.com/",
    },
    {
      name: "Team Profile Generator",
      image_id: "TeamProfileGenerator-img",
      image_src: `${TPGimg}`,
      link_href:
        "https://drive.google.com/file/d/1YlEnXuKaZ263BjGAMqDaSJHyjyLbkDls/view",
      link_class: "project-links",
      GHLink: "https://github.com/0Blockaye0/Team-Profile-Generator",
      vid_links: ["https://drive.google.com/file/d/1YlEnXuKaZ263BjGAMqDaSJHyjyLbkDls/view"],
      deployed_link: "",
    },
    {
      name: "E-Commerce Backend",
      image_id: "E-CommerceBackend-img",
      image_src: `${ECBimg}`,
      link_href: "https://github.com/0Blockaye0/fantastic-umbrella",
      link_class: "project-links",
      GHLink: "https://github.com/0Blockaye0/fantastic-umbrella",
      description:
        "Walk Through Part 1: https://drive.google.com/file/d/1rb4pB3xlnKHMbOAgIx37aMndLAmkJae5/view  &  Walk Through Part 2: https://drive.google.com/file/d/1w8YItyO8WSBn9ziyN0j0FTGFoOH1mR0H/view",
      vid_links: [
        "https://drive.google.com/file/d/1rb4pB3xlnKHMbOAgIx37aMndLAmkJae5/view",
        "https://drive.google.com/file/d/1w8YItyO8WSBn9ziyN0j0FTGFoOH1mR0H/view",
      ],
      deployed_link: "",
    },
    {
      name: "Employee Tracker",
      image_id: "EmployeeTracker-img",
      image_src: `${EMTimg}`,
      link_href: "https://github.com/0Blockaye0/Employee-Tracker",
      link_class: "project-links",
      GHLink: "https://github.com/0Blockaye0/Employee-Tracker",
      vid_links: ["https://drive.google.com/file/d/1jYAfd1ifTtHCz9rO3f-VgQPjXw80-ldU/view"],
      deployed_link: "",
    },
  ];

  return (
    <section className="parent">
      <h1>Portfolio</h1>
      <p>Here is some of my work</p>
      {/* <section> */}
      {projectsArr.map((project, idx) => {
        return (
          <div key={idx}>
            <h1 className="projName">
              <a href={project.link_href} className="project-title">
                {project.name}
              </a>
              <a href={project.GHLink} className="git-hub-icon">
                <img alt="github-icon" src={GHicon}></img>
              </a>
            </h1>
            <div className="form-container">
              <div className="form-content">
                <a href={project.link_href} className={project.link_class}>
                  <img
                    className="profileImages"
                    alt=""
                    id={project.image_id}
                    src={project.image_src}
                    style={{ height: `16rem`, width: `30rem` }}
                  ></img>
                </a>
              </div>
              <div className="flap"></div>
            </div>
            <div className="vid_links">
              {project.vid_links.length > 0 &&
                project.vid_links.map((link, idx) => {
                  return (
                    <div key={idx}>
                      <a href={link}>Video Walkthrough {project.vid_links.length > 1 && project.vid_links.indexOf(link) + 1}</a>
                    </div>
                  );
                })}
                {project.deployed_link !== "" &&  <a href={project.deployed_link} className="deployed_link">CLICK ME, IM LIVE!</a>}
            </div>
            {/* <div className="deployed-links-container">
                {project.deployed_link !== "" &&  <a href={project.deployed_link} className="deployed_link">CLICK ME, IM LIVE!</a>}
            </div> */}
          </div>
        );
      })}
      {/* </section> */}
    </section>
  );
}

export default Portfolio;
