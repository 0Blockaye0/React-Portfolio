import React from "react";

function Portfolio() {
  const projectsArr = [
    {
      name: "WeatherGroupie",
      image: {
          id: "WeatherGroupie-img",
          src: "./develop/images/screencapture-0blockaye0-github-io-WeatherGroupie-2021-04-04-20_30_35.png"
      },
      link: {
          href: "https://0blockaye0.github.io/WeatherGroupie/",
          class: "project-links",
          txt: "Weather Groupie"
      },
    },      
    {       
      name: "Travel Blogger",
      image: {
          id: "TravelBlogger-img",
          src: './develop/images/TravelBlogger.png'
      },
      link: {
          href: "https://serene-tor-80949.herokuapp.com/",
          class: "project-links",
          txt: "Travel Blogger"
      }
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
            {project.image}
            {project.link}
          </div>
          )
        })}
      {/* </section> */}
    </section>
  );
}

export default Portfolio;



// `<img id="TravelBlogger-img" src="./develop/images/TravelBlogger.png" />`,
        // <a href="https://serene-tor-80949.herokuapp.com/" class="project-links">Travel Blogger</a>`,
        // `<a href="https://0blockaye0.github.io/WeatherGroupie/" class="project-links">WeatherGroupie</a>`
        //`<img id="WeatherGroupie-img" src="./develop/images/screencapture-0blockaye0-github-io-WeatherGroupie-2021-04-04-20_30_35.png" />`