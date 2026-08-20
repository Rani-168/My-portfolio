function About() {
  return (
    <section id="about" className="section about-section reveal">
      <div className="section-heading">
        <div>
          <h2>About Me</h2>
          <p>
            Final-year B.Tech Computer Engineering student targeting entry-level Java Full Stack Developer roles.
          </p>
        </div>
      </div>

      <div className="about-grid">
        <div className="about-copy">
          <p>
            I am a final-year B.Tech Computer Engineering student focused on Java Full Stack Development, Spring Boot, React.js, REST APIs, and SQL. I enjoy building responsive applications that solve practical problems.
          </p>
          <p>
            Through a six-month Java Full Stack internship and academic projects, I have worked with CRUD workflows, database integration, API testing, and Git-based development. I am seeking an entry-level Java Full Stack opportunity where I can contribute while continuing to grow as a software engineer.
          </p>
        </div>

        <div className="about-details">
          <div className="detail-row">
            <span>Name</span>
            <strong>Rani Bhosale</strong>
          </div>
          <div className="detail-row">
            <span>Email</span>
            <strong>ranibhosale168@gmail.com</strong>
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
              <strong>Java Full Stack Developer Intern</strong> at Unified Mentor Private Limited | 6 months
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
