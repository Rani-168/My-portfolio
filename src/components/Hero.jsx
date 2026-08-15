import heroImage from "../assets/Rani3.png";

function Hero() {
  return (
    <section id="home" className="hero reveal">
      <div className="hero-left">
        <div className="hero-text">
          <span className="hero-label">Rani Bhosale</span>
          <h1>Full Stack<br />Developer</h1>
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
          <h2>Developer</h2>
          <p>I build modern, responsive and user-friendly web applications using Java, HTML, CSS, JavaScript,ReactJs, MySQL.</p>
          <div className="hero-actions">
            <a className="primary-btn" href="src/Resume.pdf" download>Download Resume</a>
            <a className="secondary-btn" href="#contact">Contact Me</a>
          </div>
          <div className="hero-social">
            <a href="https://github.com/Rani-168" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/rani-bhosale-833945290/" target="_blank">LinkedIn</a>
            <a href="mailto:ranibhosale168@gmail.com" target="_blank">
 Mail
</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
