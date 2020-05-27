import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Starship } from '../Starship';

const GET_STARSHIPS = gql` {
  allStarships {
    starships {
      name
      manufacturers
      costInCredits
    }
  }
}`;

export const App = () => {
  const { loading, error, data } = useQuery(GET_STARSHIPS);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const { starships } = data.allStarships;
  console.log(starships);

  return (
    starships.map(({ name, manufacturers, costInCredits }) => <Starship
      key={name}
      name={name}
      manufacturers={manufacturers}
      costInCredits={costInCredits} />)
  );
};
