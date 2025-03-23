import "./services.css";
import { FaCode, FaPaintBrush, FaServer } from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    description: "Create professional websites with React and Next.js.",
    icon: <FaCode />,
  },
  {
    title: "UI/UX Design",
    description: "Design attractive and user-friendly user interfaces using Figma and Qt Designer.",
    icon: <FaPaintBrush />,
  },
  {
    title: "Backend Development",
    description: "Backend development using Node.js, Express, and MongoDB.",
    icon: <FaServer />,
  }
];

function Services() {
  return (
    <div className="services" id="services">
      <h2>My <span>Services</span></h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
