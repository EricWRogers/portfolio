import React from 'react';
import { FaSteam, FaItchIo } from "react-icons/fa";
import { MdPublic } from "react-icons/md"; // For Global Game Jam
import './Card.css';

interface CardProps {
  imageSrc: string;
  link: string;
  altText?: string;
  platform?: "steam" | "itch" | "ggj";
  platformMode?: "light" | "dark";
}

const Card: React.FC<CardProps> = ({ imageSrc, link, altText, platform, platformMode }) => {
  const getPlatformIcon = () => {
    var cn: string = (platformMode == 'light') ? "platform-icon-light" : "platform-icon-dark";
    
    switch (platform) {
    case "steam":
        return <FaSteam size={32} className={cn} />;
    case "itch":
        return <FaItchIo size={32} className={cn} />;
    case "ggj":
        return <MdPublic size={32} className={cn} />;
    default:
        return null;
    }
  };

  return (
    <div className="card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {platform && <div className="icon-wrapper">{getPlatformIcon()}</div>}
        <img src={imageSrc} className="card" alt={altText} />
      </a>
    </div>
  );
};

export default Card;
