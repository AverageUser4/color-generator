import React from 'react';

import Color from './Color.js';

export default function ColorsGrid({ colors }) {
  const listItems = colors.map((color, index) => 
    <li key={index}>

      <Color
        colorData={color}
        index={index}
      />

    </li>
  );

  return (
    <ul className="colors-grid">

      {listItems}

    </ul>
  );
}