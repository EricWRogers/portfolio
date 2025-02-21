import React from 'react';
import './GameModal.css';

interface GameModalProps {
  isOpen: boolean;
  onClose: () => void;
  gameTitle: string;
  gameIframeSrc: string;
}

const GameModal: React.FC<GameModalProps> = ({ isOpen, onClose, gameTitle, gameIframeSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2 className='modal-title'>{gameTitle}</h2>
        <iframe src={gameIframeSrc} className="game-iframe" frameBorder="0"></iframe>
      </div>
    </div>
  );
};

export default GameModal;
