import { useState, useEffect, useRef } from "react";
import { generateResponse } from "../data/chatbotKnowledge";
import "./Chatbot.css";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "👋 Hi! I'm Rani's AI Assistant. Ask me anything about her skills, experience, or projects!",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Toggle chatbot open/close
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  // Handle send message
  const handleSendMessage = (e) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate bot thinking time (50-500ms)
    setTimeout(() => {
      const botResponse = generateResponse(inputValue);
      const botMessage = {
        id: messages.length + 2,
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 300);
  };

  return (
    <>
      {/* Chatbot Button */}
      <button
        className={`chatbot-button ${isOpen ? "hidden" : ""}`}
        onClick={toggleChatbot}
        title="Open Chat Assistant"
      >
        🐧
      </button>

      {/* Chatbot Container */}
      <div className={`chatbot-container ${isOpen ? "open" : ""}`}>
        {/* Header */}
        <div className="chatbot-header">
          <div className="chatbot-title">
            <span className="chatbot-avatar">🐧</span>
            <div>
              <h3>Rani's Assistant</h3>
              <p className="chatbot-status">Always available</p>
            </div>
          </div>
          <button
            className="chatbot-close"
            onClick={toggleChatbot}
            title="Close Chat"
          >
            ✕
          </button>
        </div>

        {/* Messages Container */}
        <div className="chatbot-messages">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`message ${message.sender}-message`}
            >
              <div className="message-content">
                {message.text.split("\n").map((line, idx) => (
                  <div key={idx}>{line || "\u00A0"}</div>
                ))}
              </div>
              <span className="message-time">
                {message.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          ))}

          {isLoading && (
            <div className="message bot-message">
              <div className="message-content">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form className="chatbot-input-area" onSubmit={handleSendMessage}>
          <input
            type="text"
            className="chatbot-input"
            placeholder="Ask me anything..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isLoading}
          />
          <button
            type="submit"
            className="chatbot-send-btn"
            disabled={isLoading || !inputValue.trim()}
            title="Send message"
          >
            ➤
          </button>
        </form>

        {/* Quick Suggestions */}
        {messages.length === 1 && (
          <div className="chatbot-suggestions">
            <button
              onClick={() => {
                setInputValue("What are your skills?");
              }}
              className="suggestion-btn"
            >
              Skills
            </button>
            <button
              onClick={() => {
                setInputValue("Tell me about your experience");
              }}
              className="suggestion-btn"
            >
              Experience
            </button>
            <button
              onClick={() => {
                setInputValue("How can I contact you?");
              }}
              className="suggestion-btn"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Chatbot;
