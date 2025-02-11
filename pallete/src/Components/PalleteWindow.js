import React, { useState } from 'react';
import copySound from '../src_notify.mp3';

const PaletteWindow = ({ palette, isOpen, onClose }) => {
  const [isSoundOn, setIsSoundOn] = useState(true);
  const [copyFormat, setCopyFormat] = useState('HEX');
  const [copiedColor, setCopiedColor] = useState(null);
  const [showFullScreenColor, setShowFullScreenColor] = useState(false);
  const [fullScreenColor, setFullScreenColor] = useState("");

  if (!isOpen || !palette) return null;

  // Функція копіювання
  const copyColor = (color) => {
    let colorToCopy = '';

    if (copyFormat === 'HEX') {
      colorToCopy = color.color;
    } else if (copyFormat === 'RGB') {
      colorToCopy = hexToRgb(color.color);
    } else if (copyFormat === 'HSL') {
      colorToCopy = hexToHsl(color.color);
    }

    navigator.clipboard.writeText(colorToCopy).then(() => {
      setCopiedColor(color.color);
      setFullScreenColor(colorToCopy);
      setShowFullScreenColor(true);

      if (isSoundOn) playSound();

      setTimeout(() => {
        setShowFullScreenColor(false);
      }, 1500);
    });
  };

  const playSound = () => {
    const audio = new Audio(copySound);
    audio.play();
  };

  // Функція перетворення HEX → RGB
  const hexToRgb = (hex) => {
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
  };

  // Функція перетворення HEX → HSL
  const hexToHsl = (hex) => {
    let r = parseInt(hex.substring(1, 3), 16) / 255;
    let g = parseInt(hex.substring(3, 5), 16) / 255;
    let b = parseInt(hex.substring(5, 7), 16) / 255;

    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      let d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
        default: h = 0; break;
      }      
      h /= 6;
    }
    return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.header}>
        <button onClick={onClose} style={styles.backButton}>← Back</button>

        <select
          value={copyFormat}
          onChange={(e) => setCopyFormat(e.target.value)}
          style={styles.dropdown}
        >
          <option value="HEX">Copy Format: HEX</option>
          <option value="RGB">Copy Format: RGB</option>
          <option value="HSL">Copy Format: HSL</option>
        </select>

        <button onClick={() => setIsSoundOn(!isSoundOn)} style={styles.soundButton}>
          {isSoundOn ? '🔊 Sound On' : '🔇 Sound Off'}
        </button>
      </div>

      <div style={styles.colors}>
        {palette.colors.slice(0, 20).map((color, idx) => (
          <div
            key={idx}
            style={{
              ...styles.colorBox,
              backgroundColor: color.color,
            }}
          >
            <button 
              onClick={() => copyColor(color)}
              style={{
                ...styles.copyButton,
                backgroundColor: copiedColor === color.color ? 'lightgreen' : 'white',
              }}
            >
              {copiedColor === color.color ? '✔ Copied' : 'COPY'}
            </button>
            <span style={styles.colorText}>{color.name}</span>
          </div>
        ))}
      </div>

      {showFullScreenColor && (
        <div style={{ ...styles.fullScreenOverlay, backgroundColor: fullScreenColor }}>
          <span style={styles.fullScreenText}>{fullScreenColor}</span>
        </div>
      )}

      <div style={styles.footer}>
        <h2 style={styles.paletteName}>
          {palette.paletteName} {palette.emoji}
        </h2>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'black',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 1000,
  },
  header: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    left: 0,
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
  },
  backButton: {
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    color: 'black',
  },
  dropdown: {
    fontSize: '16px',
    padding: '5px',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: 'black',
    color: 'white',
  },
  soundButton: {
    fontSize: '16px',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    color: 'black',
    marginRight: '40px',
  },
  colors: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, minmax(200px, 1fr))',
    gridAutoRows: 'minmax(150px, auto)',
    width: '100vw',
    height: '100vh',
    marginTop: '50px',
  },
  colorBox: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  copyButton: {
    padding: '8px 12px',
    fontSize: '14px',
    fontWeight: 'bold',
    border: '2px solid white',
    borderRadius: '8%',
    cursor: 'pointer',
    color: 'grey',
    backgroundColor: 'rgba(111, 111, 111, 1)',
    marginBottom: '5px',
  },
  fullScreenOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    animation: '3s ease-in 1s 2 reverse both paused slidein',
    zIndex: 1001,
  },
  fullScreenText: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: 'white',
  },
  footer: {
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'right',
    padding: '15px',
    fontSize: '25px',
    fontWeight: 'bold',
    marginTop: 'auto'
  },
  colorText: {
    position: 'absolute',
    bottom: '10px',
    right: '10px',
    fontSize: '14px',
    fontWeight: 'bold',
    color: 'rgba(255, 255, 255, 0.8)',
  },
  paletteName: {
    fontSize: '14px',
    fontWeight: 'bold',
    marginRight: '30px',
  },
};

export default PaletteWindow;