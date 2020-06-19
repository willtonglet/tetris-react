import styled from "styled-components";

export const StyledSwitch = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 1rem;

  .theme-switch {
    display: inline-block;
    height: 24px;
    position: relative;
    width: 45px;

    input {
      display: none;
    }

    .slider {
      background-color: #666;
      bottom: 0;
      cursor: pointer;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      outline: none;
      -webkit-tap-highlight-color: transparent;
      transition: 0.4s;

      &:before {
        background-color: #fff;
        bottom: 4px;
        content: "";
        height: 16px;
        left: 4px;
        position: absolute;
        transition: 0.4s;
        width: 16px;
      }

      &.round {
        border-radius: 34px;

        &:before {
          border-radius: 50%;
        }
      }
    }

    input:checked + .slider {
      background-color: #ff6d00;
    }

    input:checked + .slider:before {
      transform: translateX(20px);
    }
  }
  .text {
    color: ${({ theme }) => theme.text};
    margin-top: 0.5rem;
    font-family: Pixel, Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
  }
`;
