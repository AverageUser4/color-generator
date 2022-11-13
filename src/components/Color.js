import React from 'react';

export default function Color({ colorData, index }) {
  const [justCopied, setJustCopied] = React.useState(false);

  const style = {
    backgroundColor: colorData.rgbString(),
    color: index < 11 ? 'black' : 'white'
  };

  function copyToClipboard() {
    navigator.clipboard.writeText(colorData.hexString())
      .then(() => {
        setJustCopied(true);
        setTimeout(() => setJustCopied(false), 1000);
      });
  }

  return (
    <button 
      className="color"
      style={style}
      onClick={copyToClipboard}
    >

      <div>

        <span className="color__first-text">{colorData.weight}%</span>
        <span>{colorData.hexString()}</span>

      </div>

      {justCopied && <span>Copied!</span>}

    </button>
  );
}