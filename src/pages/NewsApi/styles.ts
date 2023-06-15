import { styled } from "styled-components";

export const StyledContainer = styled.main`
    display: flex;
    justify-content: center;
    width: fit-content;
    margin-left: auto !important;
    margin-right: auto !important;
`;

export const NewsContainer = styled.div`
    padding-top: 50px;
    display: flex;

    @media (max-width: ${({ theme }) => theme.breakpoints.xl}px) {
        display: block;
    }
`

export const ArticlesSection = styled.section`
    display: flex;
    gap: 4rem;
    flex-wrap: wrap;
    max-width: 70vw;
    height: fit-content;

    @media (max-width: ${({ theme }) => theme.breakpoints.xl}px) {
        max-width: 100%;
        border-right: none;
        gap: 1rem;
    }
`
