'use client';

import * as React from 'react';

export default function DrumKey(props) {
  const { keyName, keyCode, soundName } = props;

  const playSound = () => {
    new Audio('/drumkit/' + soundName + '.wav').play();
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === keyCode) {
      playSound();
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  });

  return (
    <div onClick={playSound} className="key rounded-lg m-4 p-4 text-lg w-40 text-white bg-gray-950/50 border-8 border-dashed border-yellow-400" id={keyName}>
      <kbd className="block text-9xl">{keyName}</kbd>
      <span className="text-amber-400 tracking-wider uppercase text-lg">{soundName}</span>
    </div>
  );
}
