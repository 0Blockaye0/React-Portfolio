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
      overview:
        "WOW how far I have come! This was my first group project and I had so much fun experimenting with unique ways I could deliver data from multiple APIs to create an app to discover new music. WeatherGrooupie uses the Open Weather API to get current weather conditions in a given location and makes calls to the Last.fm API and Napster API to retrieve a sample of a track. We use weather conditions and their synonyms to gather tracks that are tagged with those descriptions. I will admit, the result was not exactly what we had hoped for but it was blast to test our new skills in a team environment. The application is fairly simple, built with only HTML, JS, and CSS with UIkit for some styling.",
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
      overview: "Travel Blogger is a social media style application using Node.js, Express.js, Handlebars.js, Bycrypt, Passport, MySQL and Sequelize ORM. Users may preform CRUD operations to share short blogs about their travels with other users. As much as I appreciate good old fashion queries in MySQL, Having the chance to work with an ORM like Sequelize proved to have its advantages when creating tables and the writing the queries to retrieve data from them. The server is built with Express.js in the Node.js runtime environment, using passport for user authentication and Bycrpt for password hashing. On the front end, we used Handlebars.js as a templating language which allowed us to conditionally render components and reuse them across the app, which improved performance as well.",
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
      overview: "Rescue Express is a shopping site for users to find rescue dogs. When the user creates an account, adds a couple pups to the cart, and proceeds to checkout, they can use stripe to complete an online transaction (this functionality is in test mode since this is a mock project). We utilized Apollo-Server and GraphQL to make queries, in combination with  Mongoose, an object modeling tool for MongoDB, to structure our data.  On the front-end, we choose React.js and used tools like react-router to create the Nav. The users receive JSON web tokens upon login and signup for user authentication. ",
    },
    {
      name: "Team Profile Generator",
      image_id: "TeamProfileGenerator-img",
      image_src: `${TPGimg}`,
      link_href:
        "https://drive.google.com/file/d/1YlEnXuKaZ263BjGAMqDaSJHyjyLbkDls/view",
      link_class: "project-links",
      GHLink: "https://github.com/0Blockaye0/Team-Profile-Generator",
      vid_links: [
        "https://drive.google.com/file/d/1YlEnXuKaZ263BjGAMqDaSJHyjyLbkDls/view",
      ],
      deployed_link: "",
      overview: "This project is all about objects! Using OOP (object-oriented-programming) and TDD, Team Profile Generator is a Node.js command line application that takes in user input for a software team, and out puts an HTML page with their information professionally displayed. I used constructor functions to create classes with methods and properties to produce objects based on the users input. User input is gathered in the command line with the Inquirer package, and all test are written and preformed using Jest.",
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
      overview: "This E-Commerce Back End project was meant to gain the fundamental architecture of e-commerce sites. The project began with a working Express.js API and seeded MySQL database. My Role was to incorporate Sequelize to create the models for the data base, and test the routes using Insomnia Core. The models have requirements, like having using foreign keys and associations to create relationships and references between them. I really enjoyed how much I learned during this project. The knowledge I gained was priceless when they were put to use in later projects. I also really enjoyed working with Insomnia Core to test the routes. Saving the routes to collections increased productivity, saved time, and helped create a nice workflow during testing. Environment variables like the MySQL username and password are stored using the dotenv npm package.",
    },
    {
      name: "Employee Tracker",
      image_id: "EmployeeTracker-img",
      image_src: `${EMTimg}`,
      link_href: "https://github.com/0Blockaye0/Employee-Tracker",
      link_class: "project-links",
      GHLink: "https://github.com/0Blockaye0/Employee-Tracker",
      vid_links: [
        "https://drive.google.com/file/d/1jYAfd1ifTtHCz9rO3f-VgQPjXw80-ldU/view",
      ],
      deployed_link: "",
      overview: "A Command Line CMS(Content Management System) for managing a theoretical company employee database, complete with optional seeds file for mock data. The application is built in Node.js runtime environment with the inquirer npm package for interacting and gathering data from the user. The MySQL2 npm package is used to connect to the MySQL database. Asynchronous functionality is used to preform queries by the use of prepared statements, preventing SQL injections into the MySQL database, improving performance, and making for smooth UI.  The Prepared statements include some join statements that helped me build my skills as a back end developer. Finally, the console.table npm package was used to print the tables in the console for visual reference. I love the way the application turned out, and its real world functionally makes it a great tool for any business.",
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
                    style={{ height: `13rem`, width: `22rem` }}
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
                      <a href={link}>
                        Video Walkthrough{" "}
                        {project.vid_links.length > 1 &&
                          project.vid_links.indexOf(link) + 1}
                      </a>
                    </div>
                  );
                })}
              {project.deployed_link !== "" && (
                <a href={project.deployed_link} className="deployed_link">
                  CLICK ME, IM LIVE!
                </a>
              )}
            </div>

            <div 
            className="overview-container"
            style={{ fontSize: `1.5rem`}}
            >{project.overview}</div>
          </div>
        );
      })}
    </section>
  );
}

export default Portfolio;
