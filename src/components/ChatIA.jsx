import React, { useState } from "react";
import "../style/ChatComponent.css";
import Logo from "../images/onlyLogo.png";
import ChatLogo from "../images/chatbot.png";
import SendImg from "../images/send-message.png";
import { useSpring, animated } from "react-spring";
import { FaTimes } from "react-icons/fa";

const ChatComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const chatAnimation = useSpring({
    transform: isOpen ? "translateX(0%)" : "translateX(105%)",
    config: { tension: 210, friction: 20 },
  });

  const handleClose = () => {
    console.log("Closing chat..."); // Depuración
    setIsOpen(false);
  };

  return (
    <div className="chat-container">
      {!isOpen && (
        <button className="chat-button" onClick={() => setIsOpen(true)}>
          <img src={ChatLogo} alt="Chat" />
        </button>
      )}
      <animated.div style={chatAnimation} className="chat-box">
        <div className="chat-header">
          <img className="chat-logo" src={ChatLogo} alt="Logo" />
          <span className="chat-title">KEITHSTON AI</span>
          <FaTimes className="close-icon" onClick={handleClose} />
        </div>
        <div className="chat-messages"></div>
        <div className="chat-input">
          <textarea
            placeholder="Escribe tu mensaje..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {message && (
            <button>
              <img src={SendImg} alt="Enviar" />
            </button>
          )}
        </div>
      </animated.div>
    </div>
  );
};

export default ChatComponent;
