import React, { useState } from 'react';
import styled from 'styled-components'
import {
  CardElement,
  WrapperDivElement,
  FormElement,
  InputElement
} from '../../styles';


export const Starship = ({
  name,
  manufacturers,
  costInCredits,
  addStarship,
  isStarshipInBasket
}) => {
  const [starshipsToAddCount, setStarshipsToAddCount] = useState(1)
  const [starshipsToRemoveCount, setStarshipsToRemoveCount] = useState(1)

  const isStarshipAvailable = Boolean(costInCredits)

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

    if (isStarshipInBasket({ name })) {
      return console.log('UPDATE')
    }
    addStarship({ name, count: starshipsToAddCount, unitPrice: costInCredits })
    setStarshipsToRemoveCount(starshipsToAddCount)
  }

  return (
    <CardElement>
      <WrapperDivElement>
        <h3>name: {name}</h3>
        <h3>manufacturers: {manufacturers}</h3>
        <h3>cost: {isStarshipAvailable ? costInCredits : `not available`}</h3>
      </WrapperDivElement>

      {isStarshipAvailable ?
        <WrapperDivElement>
          <FormElement >
            <InputElement type="number" value={starshipsToAddCount} onChange={(e) => handleStarshipInput(e, 'adding')} />
            <button onClick={handleAddToBasketButton}>Add to basket</button>
          </FormElement>

          <FormElement >
            <InputElement type="number" value={starshipsToRemoveCount} onChange={(e) => handleStarshipInput(e, 'removing')} />
            <button>Remove from basket</button>
          </FormElement>
        </WrapperDivElement>
        : null
      }

    </CardElement>
  )
};
