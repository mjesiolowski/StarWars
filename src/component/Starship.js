import React from 'react';

const Starship = ({ name, manufacturers, costInCredits }) => (
  <div>
    <h3>name: {name}</h3>
    <h3>manufacturers: {manufacturers}</h3>
    <h3>cost: {costInCredits}</h3>
  </div>
);

export default Starship;
