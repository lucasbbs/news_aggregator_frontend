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

export const SideBarTitle = styled.h2`
    font-family: ${({ theme }) => theme.fonts.primary};
`

export const ArticlesSection = styled.section`
    display: flex;
    gap: 4rem;
    flex-wrap: wrap;
    max-width: 45vw;
    height: fit-content;
    padding-top: 10px;
    border-right: solid 1px ${({ theme }) => theme.colors.background.black};

    @media (max-width: ${({ theme }) => theme.breakpoints.xl}px) {
        max-width: 100%;
        border-right: none;
        gap: 1rem;
    }
`


export const QuickNewsSection = styled.aside`
    max-width: 15vw;
    margin-left: 18px !important;

    @media (max-width: ${({ theme }) => theme.breakpoints.xl}px) {
        max-width: 100%;
    }
`;