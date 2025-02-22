import React, { useRef, useEffect } from 'react';
import './GameModal.css';

interface GameModalProps {
  isOpen: boolean;
  onClose: () => void;
  gameTitle: string;
  gameIframeSrc: string;
}

const GameModal: React.FC<GameModalProps> = ({ isOpen, onClose, gameTitle, gameIframeSrc }) => {
  if (!isOpen) return null;

  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleLoad = () => {
    const iframe = iframeRef.current;
    if (iframe) {
      const scrollHeight = iframe.contentDocument.body.scrollHeight;
      const viewportWidth = window.innerWidth; // equivalent to 100vw in pixels
      if (scrollHeight > viewportWidth) {
        iframe.style.height = '100vw';
      } else {
        iframe.style.height = `${scrollHeight}px`;
      }
    }
  };

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe && iframe.contentDocument && iframe.contentDocument.readyState === 'complete') {
      handleLoad();
    }
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2 className='modal-title'>{gameTitle}</h2>
        <iframe
        ref={iframeRef}
        src={gameIframeSrc}
        className="game-iframe"
        width="100%"
        style={{ border: 'none' }}
        onLoad={handleLoad}></iframe>
      </div>
    </div>
  );
};

export default GameModal;
