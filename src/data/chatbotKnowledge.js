// Chatbot Knowledge Base
export const portfolioData = {
  name: "Rani Bhosale",
  title: "Java Full Stack Developer",
  location: "Pune, Maharashtra",
  education: "B.Tech Computer Engineering (Final Year)",
  
  about: "Final-year B.Tech Computer Engineering student passionate about Java Full Stack Development, Spring Boot, React.js, and AI-powered applications. I enjoy designing and developing scalable, responsive web applications that solve real-world problems.",
  
  skills: {
    programming: ["Java", "JavaScript", "HTML", "CSS"],
    frontend: ["React.js", "Tailwind CSS"],
    backend: ["Spring Boot", "Node.js", "REST APIs", "Servlets", "JDBC"],
    database: ["MySQL", "MongoDB", "Room"],
    mobile: ["Flutter"],
    tools: ["Git", "GitHub", "Firebase", "Postman"],
    others: ["AI/Chatbots", "Data Structures", "System Design", "SDLC"]
  },
  
  experience: {
    internship: {
      title: "Java Full Stack Developer Internship",
      company: "Unified Mentor Private Limited",
      duration: "6 Months",
      description: "Developed and maintained Java web applications using Core Java, Servlets, JDBC, SQL, HTML, CSS, JavaScript, and REST APIs.",
      highlights: [
        "Developed and maintained Java web applications using Core Java, Servlets, JDBC, SQL, HTML, CSS, JavaScript, and REST APIs",
        "Implemented CRUD operations, integrated MySQL databases, and optimized SQL queries for efficient data management",
        "Collaborated in an Agile environment using Git/GitHub, participated in code reviews, and resolved backend issues",
        "Tested APIs with Postman and gained hands-on experience in the SDLC from development to deployment"
      ]
    }
  },
  
  education: {
    degree: "B.Tech Computer Engineering (Final Year)",
    certifications: [
      { name: "Frontend Developer (React.js)", platform: "HackerRank", year: "2025" },
      { name: "Software Engineer Certification", platform: "HackerRank", year: "2025" },
      { name: "Problem Solving Certification", platform: "HackerRank", year: "2025" },
      { name: "Java Full Stack Developer Virtual Internship", platform: "EduSkills Foundation", year: "2025" },
      { name: "Artificial Intelligence Master Class", platform: "SkillDzire", year: "2024" }
    ]
  },
  
  achievements: [
    { title: "Problem Solving", description: "Solved 75+ DSA problems on LeetCode covering core data structures and algorithms" },
    { title: "1st Prize", description: "Hackathon competition (Phishing URL Detection System)" },
    { title: "3rd Prize", description: "Aveskar Problem-Solving Competition" }
  ],
  
  projects: [
    {
      title: "Smart Mobile Store Web App",
      description: "E-commerce and admin system for mobile shopping with both online and offline customer management.",
      technologies: ["React.js", "Firebase", "Tailwind CSS"],
      features: [
        "Add to Cart with quantity control",
        "Search and filter by price/brand/category",
        "Smart chatbot recommendations",
        "Walk-in customer token system",
        "Admin sales dashboard & daily reports"
      ],
      github: "https://github.com/ranibhosale/smart-mobile-store",
      liveDemo: "https://mobile-store-1234.netlify.app/login"
    },
    {
      title: "NutriScan – Personalized Health Analyzer",
      description: "Mobile app that analyzes ingredients and offers personalized health guidance using barcode scanning.",
      technologies: ["Flutter", "Java", "Room"],
      features: [
        "Barcode scanning & ingredient analysis",
        "Personalized health recommendations",
        "Multi-language support",
        "History tracking",
        "Clean & intuitive mobile UI"
      ],
      github: "https://drive.google.com/file/d/1QeUqmgLfJRrXrreMuGxNR4WgkQlb5Poc/view?ts=6a65ee03",
      liveDemo: "https://nutriscan-health-analyzer.netlify.app/"
    },
    {
      title: "Medicine Supply Management System",
      description: "Responsive web system for medicine availability management with AI chatbot support.",
      technologies: ["Node.js", "MongoDB", "AI"],
      features: [
        "Medicine inventory management",
        "Order & supplier management",
        "AI chatbot for medicine search",
        "Reports & analytics",
        "Secure admin dashboard"
      ],
      github: "https://github.com/ranibhosale/medicine-supply-management",
      liveDemo: "https://med-sup.netlify.app/"
    }
  ],
  
  contact: {
    email: "ranibhosale168@email.com",
    github: "https://github.com/Rani-168",
    linkedin: "https://www.linkedin.com/in/rani-bhosale-833945290/",
    resumeUrl: "src/Resume.pdf"
  },
  
  expertise: "Building scalable web applications and modern user interfaces using Java, Spring Boot, React.js, and AI-powered solutions."
};

// Chatbot Response Generator
export const generateResponse = (userQuery) => {
  const query = userQuery.toLowerCase().trim();
  
  // Greetings
  if (query.match(/^(hi|hello|hey|greetings|good morning|good afternoon|good evening|what'?s up)\b/)) {
    return `👋 Hello! I'm Rani's AI Assistant. I can help you learn about Rani's skills, projects, experience, certifications, and how to get in touch. What would you like to know?`;
  }
  
  // Name / About Yourself
  if (query.match(/\b(what'?s? your name|who are you|tell me about yourself|who is rani|your name|about you)\b/)) {
    return `📌 My name is ${portfolioData.name}, a ${portfolioData.education} student located in ${portfolioData.location}.\n\n${portfolioData.about}\n\nI'm passionate about building real-world solutions and continuously learning new technologies!`;
  }
  
  // Location
  if (query.match(/\b(where|location|city|based)\b/)) {
    return `📍 I'm based in ${portfolioData.location}.`;
  }
  
  // Projects - General
  if (query.match(/\b(project|portfolio|work|built|created|developed|what have you built)\b/)) {
    if (query.match(/smart mobile store|e-commerce|mobile store/i)) {
      const p1 = portfolioData.projects[0];
      return `🛒 **Smart Mobile Store Web App**\n\n${p1.description}\n\n**Tech Stack:** ${p1.technologies.join(", ")}\n\n**Key Features:**\n${p1.features.map(f => `• ${f}`).join("\n")}\n\n**Links:**\n• GitHub: ${p1.github}\n• Live Demo: ${p1.liveDemo}`;
    }
    if (query.match(/nutriscan|health|barcode|ingredient|nutrition/i)) {
      const p2 = portfolioData.projects[1];
      return `🥗 **NutriScan – Personalized Health Analyzer**\n\n${p2.description}\n\n**Tech Stack:** ${p2.technologies.join(", ")}\n\n**Key Features:**\n${p2.features.map(f => `• ${f}`).join("\n")}\n\n**Links:**\n• GitHub: ${p2.github}\n• Live Demo: ${p2.liveDemo}`;
    }
    if (query.match(/medicine|supply|inventory|medical|health system/i)) {
      const p3 = portfolioData.projects[2];
      return `💊 **Medicine Supply Management System**\n\n${p3.description}\n\n**Tech Stack:** ${p3.technologies.join(", ")}\n\n**Key Features:**\n${p3.features.map(f => `• ${f}`).join("\n")}\n\n**Links:**\n• GitHub: ${p3.github}\n• Live Demo: ${p3.liveDemo}`;
    }
    return `🚀 **My Projects:**\n\n${portfolioData.projects.map((p, i) => `${i + 1}. **${p.title}** - ${p.description.substring(0, 60)}...\n   Tech: ${p.technologies.join(", ")}`).join("\n\n")}\n\nAsk me about specific projects or check my GitHub: ${portfolioData.contact.github}`;
  }
  
  // Skills - General
  if (query.match(/\b(skills?|what can you do|what languages|what technologies?|expertise|proficiencies?|good at|skillset)\b/)) {
    if (query.match(/\b(backend|java|spring|api|server)\b/)) {
      return `🔧 **Backend Skills:**\n• ${portfolioData.skills.backend.join("\n• ")}\n\n**Database:** ${portfolioData.skills.database.join(", ")}\n\nI specialize in building robust server-side applications, REST APIs, and database management.`;
    }
    if (query.match(/\b(frontend|react|javascript|html|css|ui|web|design)\b/)) {
      return `🎨 **Frontend Skills:**\n• ${portfolioData.skills.frontend.join("\n• ")}\n• ${portfolioData.skills.programming.join("\n• ")}\n\nI create responsive and user-friendly interfaces with modern web technologies.`;
    }
    if (query.match(/\b(database|db|mysql|mongo)\b/)) {
      return `🗄️ **Database Skills:**\n• ${portfolioData.skills.database.join("\n• ")}\n\nI design and manage efficient database solutions with optimization and CRUD operations.`;
    }
    if (query.match(/\b(mobile|flutter|app|android)\b/)) {
      return `📱 **Mobile Development:**\n• ${portfolioData.skills.mobile.join("\n• ")}\n\nI build cross-platform mobile applications with Flutter.`;
    }
    return `🛠️ **All Technical Skills:**\n\n**Programming Languages:** ${portfolioData.skills.programming.join(", ")}\n\n**Frontend:** ${portfolioData.skills.frontend.join(", ")}\n\n**Backend:** ${portfolioData.skills.backend.join(", ")}\n\n**Database:** ${portfolioData.skills.database.join(", ")}\n\n**Tools & Platforms:** ${portfolioData.skills.tools.join(", ")}\n\n**Specializations:** ${portfolioData.skills.others.join(", ")}`;
  }
  
  // Experience / Internship
  if (query.match(/\b(experience|work|internship|background|career|previously|worked|job|professional)\b/)) {
    const int = portfolioData.experience.internship;
    return `💼 **Professional Experience:**\n\n**${int.title}**\n**Company:** ${int.company}\n**Duration:** ${int.duration}\n\n${int.description}\n\n**Key Achievements:**\n${int.highlights.map(h => `• ${h}`).join("\n")}`;
  }
  
  // Education
  if (query.match(/\b(education|degree|studied|university|school|studying)\b/)) {
    const certs = portfolioData.education.certifications;
    return `🎓 **Education:**\n\n**Degree:** ${portfolioData.education.degree}\n\n**Certifications & Achievements:**\n${certs.map((c, i) => `${i + 1}. ${c.name} - ${c.platform} (${c.year})`).join("\n")}`;
  }
  
  // Certifications specifically
  if (query.match(/\b(certification|certified|certificate|credentials?|qualifications?)\b/)) {
    const certs = portfolioData.education.certifications;
    return `📜 **My Certifications:**\n\n${certs.map((c, i) => `${i + 1}. **${c.name}**\n   Platform: ${c.platform} | Year: ${c.year}`).join("\n\n")}`;
  }
  
  // Achievements
  if (query.match(/\b(achievement|award|prize|accomplish|won|competition|hackathon|dsa|leetcode)\b/)) {
    return `🏆 **Achievements:**\n\n${portfolioData.achievements.map((a, i) => `${i + 1}. **${a.title}** - ${a.description}`).join("\n\n")}`;
  }
  
  // Contact
  if (query.match(/\b(contact|email|reach|get in touch|how to reach|communicate|call|connect)\b/)) {
    return `📧 **Contact Me:**\n\n• **Email:** ${portfolioData.contact.email}\n• **GitHub:** ${portfolioData.contact.github}\n• **LinkedIn:** ${portfolioData.contact.linkedin}\n\nFeel free to reach out for collaborations, opportunities, or just to chat! 😊`;
  }
  
  // Resume/Download
  if (query.match(/\b(resume|cv|download|pdf|profile)\b/)) {
    return `📄 **Resume & Portfolio:**\n\nYou can download my resume from the Download Resume button on the home page.\n\nFor detailed work samples, visit:\n• **GitHub:** ${portfolioData.contact.github}\n• **LinkedIn:** ${portfolioData.contact.linkedin}\n\nI'm always open to new opportunities! 🚀`;
  }
  
  // Social/Links
  if (query.match(/\b(github|linkedin|social|links?|profiles?|follow)\b/)) {
    return `🔗 **Connect With Me:**\n\n• **GitHub:** ${portfolioData.contact.github}\n• **LinkedIn:** ${portfolioData.contact.linkedin}\n• **Email:** ${portfolioData.contact.email}\n\nI love connecting with developers and collaborating on interesting projects!`;
  }
  
  // Help/What can I do
  if (query.match(/^(help|what can you do|what do you do|how can you help|capabilities|menu)\b/)) {
    return `💡 **I can help you learn about:**\n\n✓ My technical skills & expertise\n✓ My 3 amazing projects & their features\n✓ My professional experience & internship\n✓ Certifications & achievements\n✓ Education & qualifications\n✓ How to contact me\n✓ My resume & portfolio\n✓ Specific technologies I know\n\n**Try asking:**\n• "Tell me about your projects"\n• "What are your skills?"\n• "Show me your certifications"\n• "What's your experience?"\n• "How can I contact you?"\n\nJust ask me anything! 😊`;
  }
  
  // Specific project questions
  if (query.match(/\b(features?|technology|tech stack|technologies?|built with|developed with)\b/)) {
    if (query.match(/smart mobile store|store|cart/i)) {
      return `🛒 **Smart Mobile Store - Tech & Features:**\n\n**Built With:** ${portfolioData.projects[0].technologies.join(", ")}\n\n**Features:**\n${portfolioData.projects[0].features.map(f => `✓ ${f}`).join("\n")}\n\nCheck it out: ${portfolioData.projects[0].liveDemo}`;
    }
    if (query.match(/nutriscan|health|nutrition/i)) {
      return `🥗 **NutriScan - Tech & Features:**\n\n**Built With:** ${portfolioData.projects[1].technologies.join(", ")}\n\n**Features:**\n${portfolioData.projects[1].features.map(f => `✓ ${f}`).join("\n")}\n\nTry it out: ${portfolioData.projects[1].liveDemo}`;
    }
    if (query.match(/medicine|supply|inventory/i)) {
      return `💊 **Medicine Supply - Tech & Features:**\n\n**Built With:** ${portfolioData.projects[2].technologies.join(", ")}\n\n**Features:**\n${portfolioData.projects[2].features.map(f => `✓ ${f}`).join("\n")}\n\nView it here: ${portfolioData.projects[2].liveDemo}`;
    }
  }
  
  // Default response
  return `I'm not sure about that. 🤔 Could you ask me about:\n\n• **My projects** - Smart Mobile Store, NutriScan, Medicine Supply System\n• **Skills** - Java, React, Node.js, and more\n• **Experience** - My internship at Unified Mentor\n• **Certifications** - HackerRank, EduSkills, and others\n• **Achievements** - Hackathon prizes and DSA problems\n• **Contact info** - Email, GitHub, LinkedIn\n\nTry asking:\n• "What are your projects?"\n• "Tell me about your skills"\n• "Show me certifications"\n• "How can I contact you?"\n\nI'm here to help! 😊`;
}