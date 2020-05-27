import React, { useState } from 'react';
import styled from 'styled-components'

const BorderedDiv = styled.div`
border: 2px solid black;
`

export const Starship = ({
  name,
  manufacturers,
  costInCredits,
  addStarship,
  allStarshipsInBasket
}) => {
  const [starshipsToAddCount, setStarshipsToAddCount] = useState(1)
  const [starshipsToRemoveCount, setStarshipsToRemoveCount] = useState(1)

  const isStarshipAvailable = Boolean(costInCredits)
  const isStarshipInBasket = _.compose(
    Boolean,
    _.find({ name })
  )

  const handleStarshipInput = (e, action) => {
    const value = e.target.value
    if (value < 1) {
      console.log('value < 1, ', action)
    }

    else if (action === 'adding') {
      setStarshipsToAddCount(value)
    }

    else if (action === 'removing') {
      setStarshipsToRemoveCount(value)
    }
  }

  const handleAddToBasketButton = (e) => {
    e.preventDefault()
    if (isStarshipInBasket(allStarshipsInBasket)) {
      return console.log('in the basket')
    }
    addStarship({ name, count: starshipsToAddCount, unitPrice: costInCredits })
  }

  return (
    <BorderedDiv>
      <h3>name: {name}</h3>
      <h3>manufacturers: {manufacturers}</h3>
      <h3>cost: {isStarshipAvailable ? costInCredits : `not available`}</h3>

      {isStarshipAvailable ?
        <>
          <form>
            <label>Add to basket</label>
            <input type="number" value={starshipsToAddCount} onChange={(e) => handleStarshipInput(e, 'adding')} />
            <button onClick={handleAddToBasketButton}>Add to your basket</button>
          </form>

          <form>
            <label>Remove from basket</label>
            <input type="number" value={starshipsToRemoveCount} onChange={(e) => handleStarshipInput(e, 'removing')} />
            <button>Remove from your basket</button>
          </form>
        </>
        : null
      }

    </BorderedDiv>
  )
};
