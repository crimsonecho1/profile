import './about.css';
import profileImg from '../images/Abdo.png'; // استبدل بالصورة الخاصة بك

function About() {
  return (
    <div class="about-section" id="about">
        <div class="container">
            <h2 class="section-title">About Me</h2>
            
            <div class="about-content">
                <div class="about-image">
                    <img src={profileImg} alt="nopicture" />
                </div>

                <div class="about-text">
                    <h3>Website Designer & Developer</h3>
                    <p class="description">
                        I'm Abdo, a passionate full-stack developer specializing in modern web technologies. 
                        With over 3 years of professional experience, I create responsive and user-friendly websites 
                        using cutting-edge tools like React.js and Node.js.
                    </p>

                    <div class="skills">
                        <div class="skill-item">
                            <div class="skill-header">
                                <span>Web Development</span>
                                <span>95%</span>
                            </div>
                            <div class="progress-bar">
                                <div class="progress"></div>
                            </div>
                        </div>

                        <div class="skill-item">
                            <div class="skill-header">
                                <span>UI/UX Design</span>
                                <span>90%</span>
                            </div>
                            <div class="progress-bar">
                                <div class="progress"></div>
                            </div>
                        </div>
                    </div>

                    <a href="#contact" class="cta-button">Contact me</a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default About;