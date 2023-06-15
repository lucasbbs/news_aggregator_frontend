import { styled } from "styled-components";

export const StyledWrapper = styled.div`
    margin: auto;
    width: 60vw;
    gap: 1rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
        width: 80vw;
    }

`;

export const StyledForm = styled.form`
    margin-bottom: 1rem;
`;


export const ArticlesSection = styled.section`
    display: flex;
    gap: 5rem;
    flex-wrap: wrap;
    max-width: 100%;
    height: fit-content;

    @media (max-width: ${({ theme }) => theme.breakpoints.xl}px) {
        max-width: 100%;
        border-right: none;
        gap: 1rem;
    }
`
export const SubmitButton = styled.button`
    width: 100%;
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