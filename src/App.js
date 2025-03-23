import './App.css';
import Header from './pages/header/header';
import Hero from './pages/hero/hero';
import About from './pages/about/about';
import Projects from './pages/projects/projects';
import Services from './pages/services/services';
import Contact from './pages/contact/contact';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
