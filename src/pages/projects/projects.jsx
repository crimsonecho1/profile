import "./projects.css";
import imgapp from "../images/app.png";
import imgweb from "../images/website.png";
import imgwebgrem from '../images/website-grm.png';

const projects = [
  {
    title: "Desktop App",
    description: "An application that allows you to download any video, playlist, or audio you want, and it has other features. Click to learn about them.",
    image: imgapp,
    link: "https://www.youtube.com/watch?v=g6AosypT7XM&ab_channel=CodeOdyssey"
  },
  {
    title: "Online shopping store",
    description: "A website designed for small businesses, designed in HTML, CSS and JS.",
    image: imgweb,
    link: "https://grand-starburst-fe4e92.netlify.app/"
  },
  {
    title: "German questions application",
    description: "An app built using React and designed for customers interested in running student tests.",
    image: imgwebgrem,
    link: "https://zesty-pasca-fb7b29.netlify.app/"
  },
];

function Projects() {
  return (
    <div className="projects" id="projects">
      <h2>My <span>Projects</span></h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <div className="overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
