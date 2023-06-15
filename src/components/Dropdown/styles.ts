import { styled } from "styled-components";
import { CaretDown } from '@styled-icons/fa-solid/CaretDown'
import { CaretUp } from '@styled-icons/fa-solid/CaretUp'

export const StyledCaretDown = styled(CaretDown)`
    width: 15px;
    margin-left: 10px !important;
`

export const StyledCaretUp = styled(CaretUp)`
    width: 15px;
    margin-left: 10px !important;
`


export const StyledDropdown = styled.div<{ width?: number }>`
    width: ${({ width }) => width ? width + 'px' : 'fit-content'};
    margin: 0 auto;
    position: relative;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

export const DropdownButton = styled.div`
    padding: 0px 20px;
    color: ${({ theme }) => theme.colors.text.white};
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    font-weight: 700;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: space-between;
`;

export const DropdownContent = styled.div`
    position: absolute;
    top: 110%;
    left: 0;
    background: ${({ theme }) => theme.colors.background.black};
    color: ${({ theme }) => theme.colors.text.white};
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    font-weight: 700;
    width: 95%;
`;

export const DropdownItem = styled.div<{ selected?: boolean }>`
    padding: 10px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    background: ${({ theme, selected }) => selected ? theme.colors.background.lightRed : theme.colors.background.black};
    &:hover {
        background: ${({ theme }) => theme.colors.background.lightRed};
    }
`;