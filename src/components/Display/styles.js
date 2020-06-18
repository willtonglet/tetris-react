import styled from "styled-components";

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 0 0.2rem;
  padding: 0.7rem;
  border: 2px solid #777;
  border-radius: 0.5rem;
  color: ${(props) => (props.gameOver ? "#ff6d00" : "#999")};
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
`;
