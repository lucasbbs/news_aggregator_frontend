import { styled } from "styled-components";
import { Cancel } from '@styled-icons/material-sharp/Cancel';

export const StyledCancel = styled(Cancel)`
    width: 20px;
    cursor: pointer;
    margin-left: 2px;
    color: ${props => props.theme.colors.text.white};

    &:hover {
        filter: brightness(0.8);
    }
`

export const StyledParagraph = styled.div`
    display: flex;
    flex-direction: row;
    color: white;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #485058;
    font-size: 12px;
    font-weight: 300;
    margin-bottom: 5px;
    padding: 4px;
    border-radius: 5px;
`

export const StyledCategory = styled.div`
    color: ${props => props.theme.colors.text.white};
`