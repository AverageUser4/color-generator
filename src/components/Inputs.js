import React from 'react';

export default function Inputs({ changeColors }) {
  const [baseColorString, setBaseColorString] = React.useState('');
  const [isValid, setIsValid] = React.useState(true);

  return (
    <div className="inputs">

      <input
        className="inputs__text"
        placeholder="#f15025"
        onChange={(event) => setBaseColorString(event.target.value)}
        style={isValid ? {} : { border: '2px solid rgb(187, 37, 37)' }}
      />

      <button 
        className="inputs__button"
        onClick={() => {
          if(changeColors(baseColorString))
            setIsValid(true);
          else
            setIsValid(false)
        }}
      >
        Submit
      </button>

    </div>
  );
}