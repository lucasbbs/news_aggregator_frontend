import { css, styled } from "styled-components";
import { ThumbUp } from "@styled-icons/material-outlined/ThumbUp";
import { InsertComment }  from "@styled-icons/material-outlined/InsertComment";
import { ReadMore } from "@styled-icons/material/ReadMore";
import { CalendarDays } from "styled-icons/fa-regular";

export const StyledThumbUp = styled(ThumbUp)`
    width: 1.5rem;
`;

export const StyledComment = styled(InsertComment)`
    width: 1.5rem;
`;

export const StyledReadMore = styled(ReadMore)`
    width: 1.5rem;
`;

export const StyledCalendarDays = styled(CalendarDays)`
    width: 0.8rem;
`;


export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    .article-card {
        display: flex;
        flex-direction: column;
        max-width: 20vw;
        align-items: center;
        .divider {

        }

        .description {
            font-size: 1rem;
            font-family: ${({ theme }) => theme.fonts.secondary};
            text-align: center;
            font-weight: 300;
            padding: 0.5rem;
            color: ${({theme}) => theme.colors.text.lightBlack};
        }

        .data-section {
            display: flex;
            width: 70%;

        }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.xl}px) {
        width: 49%;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
        width: 100%;
    }
`;

export const Divider = styled.div`
    margin-top: 1rem !important;
    margin-bottom: 1rem !important;
    height: 1px;
    width: 45%;
    border-radius: 10px;
    background-color: ${({theme}) => theme.colors.background.lightBlack}; 
`;

export const Description = styled.p`
    font-size: 1rem;
    font-family: ${({ theme }) => theme.fonts.secondary};
    text-align: center;
    font-weight: 300;
    color: ${({theme}) => theme.colors.text.lightBlack};
    width: 100%;


    @media (max-width: ${({ theme }) => theme.breakpoints.xl}px) {
        text-align: left;
    }
`

export const CategoryAndDateContainer = styled.div`
margin-top: 1rem;
    display: flex;
    gap: 0.5rem;
    font-size: small;
`

export const Image = styled.img`
    max-width: 100%;
`;

export const OutterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
        /* width: calc(100% - 20px); */
    }
`

export const InnerContainer = styled.div<{hasimage: boolean}>`
    display: flex;
    flex-direction: column;

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
        /* width: calc(100vw - 0.5em); */
        display: grid;
        grid-template-columns: ${({hasimage})=> hasimage ? '1fr 2fr': '1fr 0fr'};

    }

`;

export const Title = styled.div`
    font-size: 1.2rem;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.secondary};
    padding: 0rem;
    font-weight: 600;
    width: 95%;

    @media (max-width: ${({ theme }) => theme.breakpoints.xl}px) {
        text-align: left;
    }
`;

export const ArticleCardContainer = styled.div<{isSearchCard?: boolean}>`
    display: flex;
    flex-direction: column;
    max-width: 20vw;
    align-items: center;
    padding-left: 18px;

    ${({ isSearchCard }) => isSearchCard && css`
        max-width: 17vw;
    `}


    @media (max-width: ${({ theme }) => theme.breakpoints.xl}px) {
        max-width: calc(100% - 20px);
    }
`;

export const ActionsContainer = styled.div`
    margin-bottom: 30px;
    gap: 1.5rem;
    display: flex;

    span {
        padding-left: 2px;
        font-size: 0.8rem;
    }

    .vertical-centered {
        display: flex;
        align-items: center;
    }

    .more-icon {
        text-decoration: underline;
    }

`