import React from 'react';
import Values from 'values.js';

import Inputs from './components/Inputs.js';
import ColorsGrid from './components/ColorsGrid.js';

export default function App() {
  const [colors, setColors] = React.useState(
    new Values('#f15025').all(10)
  );

  function changeColors(newColorString) {
    try {
      const color = new Values(newColorString);
      setColors(color.all(10));
      return true;
    } catch(e) {
      return false;
    }
  }

  return (
    <div>

      <header className="header">

        <h1 className="heading">Color Generator</h1>

        <Inputs
          changeColors={changeColors}
        />

      </header>

      <ColorsGrid
        colors={colors}
      />

    </div>
  );
}