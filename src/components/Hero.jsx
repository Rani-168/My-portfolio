import heroImage from "../assets/Rani3.png";
import resumePdf from "../Resume.pdf";

function Hero() {
  return (
    <section id="home" className="hero reveal">
      <div className="hero-left">
        <div className="hero-text">
          <span className="hero-label">Rani Bhosale</span>
          <h1>Java Full Stack<br />Developer</h1>
        </div>
      </div>

      <div className="hero-center">
        <div className="hero-image-wrap">
          <img src={heroImage} alt="Rani Bhosale portrait" />
        </div>
        <div className="hero-accent">Hi</div>
       </div>

      <div className="hero-right">
        <div className="hero-right-content">
          <h2>Java Full Stack Developer</h2>
          <p>I build responsive web applications with Java, Spring Boot, React.js, REST APIs, and SQL.</p>
          <div className="hero-actions">
            <a className="primary-btn" href={resumePdf} download>Download Resume</a>
            <a className="secondary-btn" href="#contact">Contact Me</a>
          </div>
          <div className="hero-social">
            <a href="https://github.com/Rani-168" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/rani-bhosale-833945290/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:ranibhosale168@gmail.com">Email</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
