import React from 'react';

import './App.css';

function App(props) {
  return (
    <div className="App">
      <ul>
          {props.elements.map((el, i) => (
            <li key={i} className="dropMenuItems">
              {JSON.stringify(el)}
            </li>
          ))}
        </ul>
    </div>
  );
}

export default App;
