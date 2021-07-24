import React from "react";
import WGimg from "../assets/WeatherGroupie.png";
import TBimg from "../assets/TravelBlogger.png";
import REXimg from "../assets/REX.png";
import TPGimg from "../assets/TPG.png";
import ECBimg from "../assets/ECB.png";
import EMTimg from "../assets/EMT.png";
import GHicon from "../assets/GHicon.png"

function Portfolio() {
  const projectsArr = [
    {
      name: "WeatherGroupie",
      image_id: "WeatherGroupie-img",
      image_src: `${WGimg}`,
      link_href: "https://0blockaye0.github.io/WeatherGroupie/",
      link_class: "project-links",
      GHLink: "https://github.com/0Blockaye0/WeatherGroupie"
    },
    {
      name: "Travel Blogger",
      image_id: "TravelBlogger-img",
      image_src: `${TBimg}`,
      link_href: "https://serene-tor-80949.herokuapp.com/",
      link_class: "project-links",
      GHLink: "https://github.com/0Blockaye0/Travel-Blogger"
    },
    {
      name: "REX Rescue Express",
      image_id: "REX-img",
      image_src: `${REXimg}`,
      link_href: "https://still-plains-06700.herokuapp.com/",
      link_class: "project-links",
      GHLink: "https://github.com/0Blockaye0/REX-Rescue_Express"
    },
    {
      name: "Team Profile Generator",
      image_id: "TeamProfileGenerator-img",
      image_src: `${TPGimg}`,
      link_href: "https://github.com/0Blockaye0/Team-Profile-Generator",
      link_class: "project-links",
      GHLink: "https://github.com/0Blockaye0/Team-Profile-Generator"
    },
    {
      name: "E-Commerce Backend",
      image_id: "E-CommerceBackend-img",
      image_src: `${ECBimg}`,
      link_href: "https://github.com/0Blockaye0/fantastic-umbrella",
      link_class: "project-links",
      GHLink: "https://github.com/0Blockaye0/fantastic-umbrella"
    },
    {
      name: "Employee Tracker",
      image_id: "EmployeeTracker-img",
      image_src: `${EMTimg}`,
      link_href: "https://github.com/0Blockaye0/Employee-Tracker",
      link_class: "project-links",
      GHLink: "https://github.com/0Blockaye0/Employee-Tracker"
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
            <h1 className="projName">{project.name}<a href={project.GHLink} className="git-hub-icon"><img alt="github-icon" src={GHicon}></img></a></h1>
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
          </div>
        );
      })}
      {/* </section> */}
    </section>
  );
}

export default Portfolio;
