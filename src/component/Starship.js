import React, { useState } from 'react';
import styled from 'styled-components'

const BorderedDiv = styled.div`
border: 2px solid black;
`

const Starship = ({ name, manufacturers, costInCredits }) => {
  const [addStarshipInput, setAddStarshipInput] = useState(1)
  const [removeStarshipInput, setRemoveStarshipInput] = useState(1)

  const handleStarshipInput = (e, action) => {
    const value = e.target.value
    if (value < 1) {
      console.log('value < 1, ', action)
    }

    if (action === 'adding') {
      setAddStarshipInput(value)
    }

    if (action === 'removing') {
      setRemoveStarshipInput(value)
    }
  }

  return (
    <BorderedDiv>
      <h3>name: {name}</h3>
      <h3>manufacturers: {manufacturers}</h3>
      <h3>cost: {costInCredits}</h3>

      <form>
        <label>Add to basket</label>
        <input type="number" value={addStarshipInput} onChange={(e) => handleStarshipInput(e, 'adding')} />
        <button>Add to your basket</button>
      </form>

      <form>
        <label>Remove from basket</label>
        <input type="number" value={removeStarshipInput} onChange={(e) => handleStarshipInput(e, 'removing')} />
        <button>Remove from your basket</button>
      </form>
    </BorderedDiv>
  )
};

export default Starship;
