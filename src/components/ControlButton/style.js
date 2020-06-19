import styled from "styled-components";

export const StyledControl = styled.button`
  margin: 0.2rem;
  border-radius: 0.5rem;
  border: none;
  height: 3rem;
  width: 3rem;
  color: white;
  background: #ff6d00;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 2.5rem;
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-tap-highlight-color: transparent;

  &:active {
    -webkit-box-shadow: inset 0px 5px 0px 0px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: inset 0px 5px 0px 0px rgba(0, 0, 0, 0.4);
    box-shadow: inset 0px 5px 0px 0px rgba(0, 0, 0, 0.4);
  }
`;
