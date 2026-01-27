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
  const modalContentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const getAvailableHeight = () => {
    const modal = modalContentRef.current;
    const title = titleRef.current;
    if (!modal) {
      return window.innerHeight * 0.9;
    }
    const styles = window.getComputedStyle(modal);
    const paddingTop = parseFloat(styles.paddingTop || '0');
    const paddingBottom = parseFloat(styles.paddingBottom || '0');
    const titleHeight = title ? title.getBoundingClientRect().height : 0;
    const maxModalHeight = window.innerHeight * 0.9;
    return Math.max(200, maxModalHeight - paddingTop - paddingBottom - titleHeight - 8);
  };
  const handleLoad = () => {
    const iframe = iframeRef.current;
    if (iframe && iframe.contentDocument && iframe.contentDocument.body) {
      const doc = iframe.contentDocument;
      const bodyHeight = doc.body.scrollHeight;
      const docHeight = doc.documentElement ? doc.documentElement.scrollHeight : 0;
      const scrollHeight = Math.max(bodyHeight, docHeight);
      const availableHeight = getAvailableHeight();
      const nextHeight = Math.min(scrollHeight, availableHeight);
      iframe.style.height = `${nextHeight}px`;
    }
  };

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe && iframe.contentDocument && iframe.contentDocument.readyState === 'complete') {
      handleLoad();
    }
  }, []);

  useEffect(() => {
    const onResize = () => handleLoad();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const timers = [
      window.setTimeout(handleLoad, 50),
      window.setTimeout(handleLoad, 250),
      window.setTimeout(handleLoad, 800),
    ];
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, [isOpen]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div ref={modalContentRef} className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2 ref={titleRef} className='modal-title'>{gameTitle}</h2>
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
