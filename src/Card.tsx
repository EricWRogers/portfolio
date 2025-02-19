import React, { useState } from 'react';
import { FaSteam, FaItchIo } from "react-icons/fa";
import { MdPublic } from "react-icons/md"; // Global Game Jam
import GameModal from './GameModal.tsx';
import './Card.css';

interface CardProps {
  imageSrc: string;
  link: string;
  gameTitle: string;
  iframeSrc: string; // The HTML file for the popup
  platform?: "steam" | "itch" | "ggj";
  platformMode?: "light" | "dark";
}

const Card: React.FC<CardProps> = ({ imageSrc, link, gameTitle, iframeSrc, platform, platformMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getPlatformIcon = () => {
    const iconClass = platformMode === "light" ? "platform-icon-light" : "platform-icon-dark";
    
    switch (platform) {
      case "steam":
        return <FaSteam size={32} className={iconClass} />;
      case "itch":
        return <FaItchIo size={32} className={iconClass} />;
      case "ggj":
        return <MdPublic size={32} className={iconClass} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="card" onClick={() => setIsModalOpen(true)}>
        {/* Platform Icon in Top Right */}
        <a href={link} target="_blank" rel="noopener noreferrer">
        {platform && <div className="icon-wrapper">{getPlatformIcon()}</div>}
        </a>
        <img src={imageSrc} className="card-image" alt={gameTitle} />
      </div>

      {/* Modal Popup */}
      <GameModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        gameTitle={gameTitle}
        gameIframeSrc={iframeSrc}
      />
    </>
  );
};

export default Card;
