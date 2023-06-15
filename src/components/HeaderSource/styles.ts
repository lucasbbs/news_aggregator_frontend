import { css, styled } from "styled-components";
import { RightArrowCircle, LeftArrowCircle } from "styled-icons/boxicons-regular";

export const RightArrow = styled(RightArrowCircle)<{disabled?: boolean}>`
    width: 30px;
    height: 30px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text.white};

    &:hover {
        color: ${({ theme }) => theme.colors.text.lightRed};
    }
`;

export const OuterWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.text.black};
`;

export const LeftArrow = styled(LeftArrowCircle)<{disabled?: boolean}>`
    width: 30px;
    height: 30px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text.white};

    ${({ disabled }) => disabled && css`
    cursor: default;
        color: ${({ theme }) => theme.colors.text.lightGray};`}
    &:hover {
        color: ${({ theme, disabled }) => disabled ? theme.colors.text.lightGray : theme.colors.text.lightRed};
    }
`

export const TitleWrapper = styled.div<{showArrowButtons: boolean}>`
    margin-right: auto !important;
    margin-left: auto !important;
    max-width: 40vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    ${({ showArrowButtons }) => showArrowButtons && css`
        justify-content: space-between;
    `}
`

export const TitleHeader = styled.h2`
    color: ${({ theme }) => theme.colors.text.white};
    font-size: 1.5rem;
    font-weight: 500;
    font-family: ${({ theme }) => theme.fonts.primary};
    text-align: center;
`