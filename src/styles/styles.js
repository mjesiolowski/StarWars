import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyleElement = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    font-family: 'StarWars', Arial, Helvetica, sans-serif;
  }
`;

export const ContainerElement = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const HeaderElement = styled.header`
width: 100%;
height: 50px;
text-align: center;
position: fixed;
background: beige;
`

export const CardElement = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;

flex-basis: 450px;
border: 2px solid firebrick;
margin: 50px 10px 10px 10px;
padding: 10px;
`

export const WrapperDivElement = styled.div`
text-align: center;
`;

export const FormElement = styled.form`
display: flex;
`
export const InputElement = styled.input`
padding: 5px;
margin: 25x;
`