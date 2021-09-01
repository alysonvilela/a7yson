import React from 'react';

const mock = ['Raphael', 'Michelangelo', 'Leonardo', 'Donatello'];

const meuapi = () => {
  const date = mock.map((x) => (
    <ul key={x}>
      <li>{x}</li>
    </ul>
  ));

  return <h1>{date}</h1>;
};

const App = () => {
  return;
};

export default App;
