import { styled } from "styled-components";

export const HeaderContainer = styled.div`
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    width: calc(100% - 3rem);
    display: flex;
    flex-direction: column;
`;

export const HeaderText = styled.h2`
    font-size: 30px;
    font-weight: 600;
    line-height: 1.24;
    color: ${({ theme }) => theme.colors.text.black};
    margin: 0;
`;

export const SmallText = styled.h5`
    color: ${({ theme }) => theme.colors.text.black};
    font-weight: 600;
    font-size: 14px;
    margin: 0;
    margin-top: 7px;
`;

export const InnerContainer = styled.div`
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    width: calc(100% - 3rem);
    display: flex;
    flex-direction: column;
`;

export const StyledContainer = styled.div`
width: 100%;
`;