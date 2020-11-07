import styled from "styled-components";

const Button = styled.button`
  background-color: #cfcfcf;
  color: black;
  font-size: 20px;
  padding: 8px 20px;

  // border-radius: 5px;
  // margin: 10px 0px;
  cursor: pointer;
  &:disabled {
    color: grey;
    opacity: 0.7;
    cursor: default;
  }
  &:hover {
    background-color: #ededed;
  }
`;

export const ButtonToggleContainer = styled(Button)`
  /* margin: 0 10px; */
  /* opacity: 0.5; */
  text-transform: capitalize;
  ${({ active }) =>
    active &&
    `
    background-color: grey;
  `}
`;

export const ButtonGroupContainer = styled.div`
  width: 100%;
  max-width: 200px;
  position: absolute;
  background-color: white;
  opacity: 1;
  /* margin: 10px; */
  display: inline-grid;
  block-size: 0;
  z-index: 10;
`;
