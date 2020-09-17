import styled from 'styled-components';


const Button = styled.button`
    background-color: grey;
    color: black;
    font-size: 20px;
    padding: 8px 60px;
    // border-radius: 5px;
    // margin: 10px 0px;
    cursor: pointer;
        &:disabled {
            color: grey;
            opacity: 0.7;
            cursor: default;
        }
        &:hover {
            background-color: #EDEDED
        }
`;

export const ButtonToggle = styled(Button)`
  opacity: 0.5;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
  `}
`;

export const ButtonGroup = styled.div`
    display: inline-grid;
    block-size: 0;
`;
