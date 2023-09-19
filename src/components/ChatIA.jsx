import React, { useState } from "react";
import "../style/ChatComponent.css";
import Logo from "../images/logo-abogado.png";
const ChatComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="chat-container">
      <button className="chat-button" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Cerrar Chat" : "Abrir Chat"}
      </button>
      {isOpen && (
        <div className="chat-box">
          <div className="chat-header">
            <img src={Logo} alt="Logo" />
            <span className="chat-title">Nombre del Chat</span>
          </div>
          <div className="chat-messages">
            {/* Aquí irán los mensajes del chat */}
          </div>
          <div className="chat-input">
            <input type="text" placeholder="Escribe tu mensaje..." />
            <button>Enviar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatComponent;
