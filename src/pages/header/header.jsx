import './header.css';
import { useState, useEffect } from 'react';
import { FaGithub, FaWhatsapp, FaYoutube } from "react-icons/fa";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className='logo'><h1>Abdo</h1></div>
      <div className='navbar'>
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="social-icons">
        <a href="https://github.com/crimsonecho1" target="_blank" rel="noopener noreferrer" className="github">
          <FaGithub />
        </a>
        <a href="https://www.youtube.com/channel/UCJG3XSYeI5nw-EcxHxHQBbw" target="_blank" rel="noopener noreferrer" className="youtube">
          <FaYoutube />
        </a>
        <a href="https://wa.me/201019358366" target="_blank" rel="noopener noreferrer" className="whatsapp">
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
}

export default Header;
