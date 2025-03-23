import './hero.css';
import img from '../images/Abdo.png';

function Hero() {
  return (
    <div className="hero" id='hero'>
      <div className='image'>
        <img src={img} alt="Abdo" />
      </div>
      <div className='description'>
        <h2>Hello, my name is Abdo</h2>
        <p>I am a website designer and developer using different programming languages, including React and Node.js. I have three years of experience, and you can see my projects if you click on the button.</p>
        <a href="#projects"><button>Projects Display</button></a>
      </div>
    </div>
  );
}

export default Hero;
