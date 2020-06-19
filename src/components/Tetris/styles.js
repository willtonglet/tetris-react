import styled from "styled-components";

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  overflow: hidden;
  outline: none;
  display: flex;
  flex-direction: column;

  .wrapper {
    width: 20rem;
    text-align: center;

    h1 {
      font-family: Pixel, Arial, Helvetica, sans-serif;
      font-size: 4.6rem;
      color: ${({ theme }) => theme.text};
    }
  }
`;

export const StyledTetris = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 0 2rem;
  background-color: ${({ theme }) => theme.bg};

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
  }

  footer {
    margin-top: 1rem;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    display: flex;
  }
`;
