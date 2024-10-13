// components/ColorButton.js
import { useState } from 'react';

export default function ColorButton() {
  const [color, setColor] = useState('blue');

  const handleClick = async () => {
    setColor('green');
    await fetch('/notify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ color: 'green' }),
    });
  };

  return (
    <button 
      id="colorButton" 
      onClick={handleClick} 
      style={{ backgroundColor: color, color: 'white', padding: '10px 20px', border: 'none', cursor: 'pointer' }}
    >
      Click Me
    </button>
  );
}
