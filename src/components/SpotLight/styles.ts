import { styled } from "styled-components";
import { Newspaper } from "@styled-icons/ionicons-solid/Newspaper";

export const StyledNewspaper = styled(Newspaper)`
    width: 2rem;
    color: ${({theme}) => theme.colors.text.lightRed};
`

export const StyledContainer = styled.div`

    .spot-light-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 2rem;

        .title {
            font-size: 5rem;
            font-family: ${props => props.theme.fonts.primary};
        }

        .description {
            font-size: 1.4rem;
            font-family: ${props => props.theme.fonts.primary};
            text-transform: uppercase;
            text-align: center;
        }

        .dividers-container {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            .divider {
                height: 2px;
                background-color: ${({theme}) => theme.colors.background.lightBlack}; 
                width: 25%;
            }
        }
    }
`;