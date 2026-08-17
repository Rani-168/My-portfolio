import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import "./App.css";

function App() {
  const chatbotRef = useRef(null);

  const handleChatbotClick = () => {
    if (chatbotRef.current) {
      chatbotRef.current.openChat();
    }
  };

  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar onChatbotClick={handleChatbotClick} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <Chatbot ref={chatbotRef} />
    </>
  );
}

export default App;
