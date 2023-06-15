import { styled } from "styled-components";
import { Login } from "@styled-icons/material/Login";
import { Logout } from "@styled-icons/material/Logout";
import { Link } from "react-router-dom";

export const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const StyledLogoContainer = styled(Link)`
    font-size: 3rem;
    margin-left: 1rem;
    text-decoration: none;
    color: ${({theme}) => theme.colors.text.black};
    font-family: ${props => props.theme.fonts.primary};

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
        font-size: 2.5rem;
        margin-top: 15px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.xs}px) {
        font-size: 2rem;
        margin-top: 20px;
    }
`;

export const StyledLoginButton = styled(Login)`
    width: 2rem;
    font-family: ${props => props.theme.fonts.primary};
    cursor: pointer;
    &:hover {
        color: ${({theme}) => theme.colors.text.lightRed};
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
        display: none !important;
    }
`;

export const StyledLogoutButton = styled(Logout)`
    width: 2rem;
    font-family: ${props => props.theme.fonts.primary};
    cursor: pointer;
    &:hover {
        color: ${({theme}) => theme.colors.text.lightRed};
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
        display: none !important;
    }
`;