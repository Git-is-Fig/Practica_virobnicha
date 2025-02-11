import React, { useState } from 'react';
import palettes from '../pallete.json';
import PaletteModal from './PalleteWindow';

const Table = () => {
  const [selectedPalette, setSelectedPalette] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePaletteClick = (palette) => {
    setSelectedPalette(palette);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPalette(null);
  };

  return (
    <div style={styles.table}>
      {palettes.slice(0, 20).map((palette) => (
        <div
          key={palette.id}
          style={styles.palette}
          onClick={() => handlePaletteClick(palette)}
        >
          <div style={styles.colors}>
            {palette.colors.slice(0, 20).map((color, idx) => (
              <div
                key={idx}
                style={{
                  ...styles.colorBox,
                  backgroundColor: color.color,
                }}
                title={color.name}
              />
            ))}
          </div>
          <h2 style={styles.paletteName}>
            {palette.paletteName} {palette.emoji}
          </h2>
        </div>
      ))}
      <PaletteModal
        palette={selectedPalette}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

const styles = {
  table: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 17em)',
    gridTemplateRows: 'repeat(3, 17em)',
    justifyContent: 'center',
    gap: '20px',
    padding: '40px',
  },
  palette: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '10px',
    cursor: 'pointer',
    width: '250px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
    boxShadow: '2px 2px 10px rgba(0,0,0,0.1)',
  },
  colors: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 45px)',
    gridTemplateRows: 'repeat(5, 45px)',
    justifyContent: 'center',
    gap: '5px',
  },
  colorBox: {
    width: '50px',
    height: '50px',
  },
  paletteName: {
    marginTop: '-25px',
    fontSize: '16px',
    fontWeight: 'bold',
  },
};

export default Table;