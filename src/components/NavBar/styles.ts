import styled from 'styled-components';

export const StyledContainer = styled.div`
    z-index:9;
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  font-family: ${(props) => props.theme.fonts.primary};
    
    .nav-items {
        width: 100%;
        background-color: #000000;
        font-family: ${props => props.theme.fonts.primary};
        display: flex;
        line-height: 3em;
        justify-content: center;
        flex-wrap: wrap;
        height: 100%;

        nav {
            a {
                height: 100%;
                color: #ffffff;
                text-decoration: none;
                font-size: 1.5rem;
                padding: 0 1rem;
                font-weight: 600;
                letter-spacing: 0.05rem;

            }

        &:hover {
            background-color: ${({theme}) => theme.colors.background.lightRed};
            @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
                height: fit-content;
            }
        }

    }
}
`;

export const Ul = styled.ul<{ open: boolean }>`
  list-style: none;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  color: #fff;
  padding-inline-start: 0;
  justify-content: center;

  li {
    padding: 18px 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    justify-content: unset;
    flex-flow: column nowrap;
    background-color: ${({theme}) => theme.colors.background.black};
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      color: #fff;
    }
  }
`;
