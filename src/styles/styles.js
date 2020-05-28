import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyleElement = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    letter-spacing: 2px;
    color: #ebecec;
  }
`;

export const ContainerElement = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #1f2835;
`;

export const HeaderElement = styled.header`
width: 100%;
height: 50px;
text-align: center;
position: fixed;
background-color: #293446;
border-bottom: 2px solid #a24952;
`

export const CardElement = styled.div`
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
flex-basis: 450px;
min-height: 300px;
border: 2px solid #a24952;
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
padding: 7px;
margin: 2px;
border: 2px solid #293446;
cursor: ${props => props.disabled ? `not-allowed` : `text`};
`

export const ButtonElement = styled.button`
padding: 7px;
margin: 2px;
border: 2px solid #293446;
cursor: ${props => props.disabled ? `not-allowed` : `pointer`};
width: 100%;
background-color: ${props => props.disabled ? `#738caa` : `#689fde`};;
color: #ebecec;
`
