import { styled } from "styled-components";
import { CalendarDays } from "styled-icons/fa-regular";

export const StyledContainer = styled.div`

        font-family: ${({ theme }) => theme.fonts.secondary};
        margin-bottom: 2rem;
        
        .title {
            font-size: 1.2rem;
            font-weight: 700;
        }

        .description {
            font-size: 1rem;
            font-weight: 300;
        }

        @media (max-width: ${({ theme }) => theme.breakpoints.xl}px) {
            max-width: calc(100% - 20px);
        }

`

export const Title = styled.h1`
    font-size: 1.6rem;
    font-weight: 700;
`;


export const Description = styled.p`
    font-size: 1rem;
    font-weight: 300;
`;


export const DateContainer = styled.div`
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    gap: 0.5rem;
    font-size: small;
`
export const StyledCalendarDays = styled(CalendarDays)`
    width: 0.8rem;
`;
