function About() {
  return (
    <section id="about" className="section about-section reveal">
      <div className="section-heading">
        <div>
          <h2>About Me</h2>
          <p>
            Final-year B.Tech Computer Engineering student passionate about Java Full Stack Development, Spring Boot, React.js, and AI-powered applications.
          </p>
        </div>
      </div>

      <div className="about-grid">
        <div className="about-copy">
          <p>
            I'm a final-year B.Tech Computer Engineering student with a strong interest in Java Full Stack Development, Spring Boot, React.js, and AI-powered applications. I enjoy designing and developing scalable, responsive web applications that solve real-world problems.
          </p>
          <p>
            I have completed multiple academic and personal projects, including AI-based solutions and full-stack web applications, and I am continuously improving my skills in Data Structures, System Design, and Cloud technologies. I am currently seeking opportunities as a Java Full Stack Developer where I can contribute, learn, and grow as a software engineer.
          </p>
        </div>

        <div className="about-details">
          <div className="detail-row">
            <span>Name</span>
            <strong>Rani Bhosale</strong>
          </div>
          <div className="detail-row">
            <span>Email</span>
            <strong>ranibhosale168@email.com</strong>
          </div>
          <div className="detail-row">
            <span>Location</span>
            <strong>Pune, Maharashtra</strong>
          </div>
          <div className="detail-row">
            <span>Education</span>
            <strong>B.Tech Computer Engineering</strong>
          </div>
        </div>
      </div>

      <div className="achievement-section">
        <h3>Internship, Certifications & Achievements</h3>
        <div className="achievement-cards">
          <div className="achievement-card">
            <h4>Internship</h4>
            <p>
              <strong>Java Full Stack Developer Internship</strong> at Unified Mentor Private Limited  | 6 Months
            </p>
            <ul>
              <li>Developed and maintained Java web applications using Core Java, Servlets, JDBC, SQL, HTML, CSS, JavaScript, and REST APIs.</li>
              <li>Implemented CRUD operations, integrated MySQL databases, and optimized SQL queries for efficient data management.</li>
              <li>Collaborated in an Agile environment using Git/GitHub, participated in code reviews, and resolved backend issues.</li>
              <li>Tested APIs with Postman and gained hands-on experience in the SDLC from development to deployment.</li>
            </ul>
          </div>
          <div className="achievement-card">
            <h4>Certifications</h4>
            <ul>
              <li><strong>Frontend Developer (React.js)</strong> – HackerRank (2025)</li>
              <li><strong>Software Engineer Certification</strong> – HackerRank (2025)</li>
              <li><strong>Problem Solving Certification</strong> – HackerRank (2025)</li>
              <li><strong>Java Full Stack Developer Virtual Internship</strong> – EduSkills Foundation (2025)</li>
              <li><strong>Artificial Intelligence Master Class</strong> – SkillDzire (2024)</li>
            </ul>
          </div>
          <div className="achievement-card">
            <h4>Achievements</h4>
            <ul>
              <li><strong>Problem Solving:</strong> Solved 75+ DSA problems on LeetCode covering core data structures and algorithms.</li>
              <li><strong>1st Prize</strong> – Hackathon competition (Phishing URL Detection System)</li>
              <li><strong>3rd Prize</strong> – Aveskar Problem-Solving Competition</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
