import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { ExpandMore } from '@styled-icons/material-rounded/ExpandMore'


export const StyledExpandMore = styled(ExpandMore)`
    width: 20px;
`;

export const BoxContainer = styled.div`
  width: 60vw;
  list-style: none;
  margin: 0;
  padding: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: 80vw;
  }

    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column; 
    align-items: center;
    margin-top: 20px;
`;


export const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    p {
        display:inline-block;
        font-size: 11px;
        color: rgba(0, 0, 0, 0.5);
    }
`;

export const MutedLink = styled(Link)`
    display:inline-block;
    font-size: 11px;
    color: rgba(0, 0, 0, 0.5);
    font-weight: 500;
    text-decoration: none;
    margin: 10px 0;
`;

export const BoldLink = styled(Link)`
    display:inline-block;
    font-size: 11px;
    color: rgb(0, 0, 0);
    font-weight: 500;
    text-decoration: none;
    margin: 0 4px;
`;

export const Input = styled.input`
    height: 42px;
    outline: none;
    border: 1px solid rgba(200, 200, 200, 0.3);
    padding: 0px 10px;
    border-bottom: 1.4px solid transparent;
    transition: all 200ms ease-in-out;
    font-size: 12px;
    &::placeholder {
        color: rgba(200, 200, 200, 1);
    }
    &:not(:last-of-type) {
        border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
    }
    &:focus {
        outline: none;
        border-bottom: 2px solid ${({ theme }) => theme.colors.text.lightRed};
    }
`;



export const SubmitButton = styled.button`
    margin-top: 10px;
    padding: 11px 40%;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 100px 100px 100px 100px;
    cursor: pointer;
    transition: all, 240ms ease-in-out;
    background: linear-gradient(
        58deg,
        ${({ theme }) => theme.colors.background.lightBlack} 20%,
        ${({ theme }) => theme.colors.background.black} 100%
    );
    &:hover {
        background: linear-gradient(
            58deg,
            ${({ theme }) => theme.colors.background.lightRed} 20%,
            ${({ theme }) => theme.colors.background.brown} 100%
        );
    }

`;

export const InputsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 5px 5px 10.5px rgba(207,106,135, 0.69);
`;