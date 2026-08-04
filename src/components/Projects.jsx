import project1Image from "../assets/image1.png";
import project2Image from "../assets/image.png";
import project3Image from "../assets/image2.png";

function Projects() {
  const projects = [
    {
      title: "Smart Mobile Store Web App",
      description: "E-commerce and admin system for mobile shopping with both online and offline customer management.",
      image: project1Image,
      github: "https://github.com/ranibhosale/smart-mobile-store",
      liveDemo: "https://mobile-store-1234.netlify.app/login",
      tags: ["React.js", "Firebase", "Tailwind CSS"],
      features: [
        "Add to Cart with quantity control",
        "Search and filter by price/brand/category",
        "Smart chatbot recommendations",
        "Walk-in customer token system",
        "Admin sales dashboard & daily reports"
      ]
    },
    {
      title: "NutriScan – Personalized Health Analyzer",
      description: "Mobile app that analyzes ingredients and offers personalized health guidance using barcode scanning.",
      image: project2Image,
      github: "https://drive.google.com/file/d/1QeUqmgLfJRrXrreMuGxNR4WgkQlb5Poc/view?ts=6a65ee03",
      liveDemo: "https://nutriscan-health-analyzer.netlify.app/",
      tags: ["Flutter", "Java", "Room"],
      features: [
        "Barcode scanning & ingredient analysis",
        "Personalized health recommendations",
        "Multi-language support",
        "History tracking",
        "Clean & intuitive mobile UI"
      ]
    },
    {
      title: "Medicine Supply Management System",
      description: "Responsive web system for medicine availability management with AI chatbot support.",
      image: project3Image,
      github: "https://github.com/ranibhosale/medicine-supply-management",
      liveDemo: "https://med-sup.netlify.app/",
      tags: ["Node.js", "MongoDB", "AI"],
      features: [
        "Medicine inventory management",
        "Order & supplier management",
        "AI chatbot for medicine search",
        "Reports & analytics",
        "Secure admin dashboard"
      ]
    }
  ];

  return (
    <section id="projects" className="section projects-section reveal">
      <div className="section-heading">
        <h2>Projects</h2>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <div className="project-image-wrap">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-features">
                {project.features.map((feature, idx) => (
                  <div className="feature-item" key={idx}>
                    <span className="checkmark">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              <div className="project-actions">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn github-btn"
                >
                  GitHub
                </a>
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn live-demo-btn"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
