import React, { useState } from 'react';
import {
  CardElement,
  WrapperDivElement,
  FormElement,
  InputElement,
  ButtonElement
} from '../../styles';


export const Starship = ({
  name,
  manufacturers,
  costInCredits,
  addStarship,
  updateStarship,
  isStarshipInBasket,
  getStarshipCountInBasket
}) => {
  const [numberOfStarshipsToAddInput, setNumberOfStarshipsToAddInput] = useState(10)
  const [numberOfStarshipsToRemoveInput, setNumberOfStarshipsToRemoveInput] = useState(0)
  const [removeButtonValidationError, setRemoveButtonValidationError] = useState(false)
  const [addButtonValidationError, setAddButtonValidationError] = useState(false)

  const ADDING = 'ADDING'
  const REMOVING = 'REMOVING'
  const isStarshipAvailable = Boolean(costInCredits)
  const isRemoveButtonEnabled = Boolean(numberOfStarshipsToRemoveInput)
  const numberOfStarshipsInBasket = parseInt(getStarshipCountInBasket({ name }), 10)
  const comaSeparatedManufacturers = manufacturers.join(', ')

  const handleStarshipInput = (e, action) => {
    const value = e.target.value
    const validationPattern = /^[0-9\b]+$/;

    if (action === ADDING) {
      if (value < 1 || !validationPattern.test(value)) {
        return setAddButtonValidationError(true)
      }

      setNumberOfStarshipsToAddInput(value)
      setRemoveButtonValidationError(false)
      setAddButtonValidationError(false)
    }

    else if (action === REMOVING) {
      if (value < 1 || !validationPattern.test(value) || value > numberOfStarshipsInBasket) {
        return setRemoveButtonValidationError(true)
      }

      setNumberOfStarshipsToRemoveInput(value)
      setRemoveButtonValidationError(false)
    }
  }

  const handleAddToBasketButton = (e) => {
    e.preventDefault()

    const maximumNumberOfStarshipsToRemove = parseInt(getStarshipCountInBasket({ name }), 10) + parseInt(numberOfStarshipsToAddInput, 10)

    if (isStarshipInBasket({ name })) {
      updateStarship({ name, count: numberOfStarshipsToAddInput })
      setNumberOfStarshipsToRemoveInput(maximumNumberOfStarshipsToRemove)
    }
    else {
      addStarship({ name, count: numberOfStarshipsToAddInput, unitPrice: costInCredits })
      setNumberOfStarshipsToRemoveInput(numberOfStarshipsToAddInput)
    }

    setRemoveButtonValidationError(false)
    setAddButtonValidationError(false)
  }

  const handleRemoveFromBasketButton = (e) => {
    e.preventDefault()

    updateStarship({ name, count: -Math.abs(numberOfStarshipsToRemoveInput) })
    setNumberOfStarshipsToRemoveInput(numberOfStarshipsInBasket - numberOfStarshipsToRemoveInput)
  }


  return (
    <CardElement>
      <WrapperDivElement>
        <h3>name: {name}</h3>
        <h3>manufacturers: {comaSeparatedManufacturers}</h3>
        <h3>cost: {isStarshipAvailable ? costInCredits : `not available`}</h3>
      </WrapperDivElement>

      {isStarshipAvailable ?
        <WrapperDivElement>

          <FormElement >
            <InputElement
              type="number"
              value={numberOfStarshipsToAddInput}
              onChange={(e) => handleStarshipInput(e, ADDING)}
              validationError={addButtonValidationError}
            />

            <ButtonElement
              onClick={handleAddToBasketButton}>
              Add to basket</ButtonElement>
          </FormElement>

          <FormElement >
            <InputElement
              type="number"
              value={numberOfStarshipsToRemoveInput}
              onChange={(e) => handleStarshipInput(e, REMOVING)}
              validationError={removeButtonValidationError}
              disabled={!isRemoveButtonEnabled}
            />

            <ButtonElement
              onClick={handleRemoveFromBasketButton}
              disabled={!isRemoveButtonEnabled}
            >Remove from basket</ButtonElement>
          </FormElement>

        </WrapperDivElement>
        : null
      }

    </CardElement>
  )
};
