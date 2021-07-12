import React from "react";


function Portfolio() {
  const projectsArr = [
    {
      name: "WeatherGroupie",
      image_id: "WeatherGroupie-img",
      image_src: "./assets/WeatherGroupie.png",
    //   link: {
    //     href: "https://0blockaye0.github.io/WeatherGroupie/",
    //     class: "project-links",
    //     txt: "Weather Groupie",
    //   },
    },
    {
      name: "Travel Blogger",
      image_id: "TravelBlogger-img",
      img_src: "./assets/TravelBlogger.png",
    //   link: {
    //     href: "https://serene-tor-80949.herokuapp.com/",
    //     class: "project-links",
    //     txt: "Travel Blogger",
    //   },
    },
  ];

  return (
    <section>
      <h1>Portfolio</h1>
      <p>Here is some of my work</p>
      {/* <section> */}
      {projectsArr.map((project, idx) => {
        return (
          <div key={idx}>
            <h1 className="projName">{project.name}</h1>
            <div>
              <img alt="" id={project.image_id} src={require(project.image_src)}></img>
              {/* {project.link} */}
            </div>
          </div>
        );
      })}
      {/* </section> */}
    </section>
  );
}

export default Portfolio;

// ,
// <a href="https://serene-tor-80949.herokuapp.com/" class="project-links">Travel Blogger</a>`,
// `<a href="https://0blockaye0.github.io/WeatherGroupie/" class="project-links">WeatherGroupie</a>`
//
