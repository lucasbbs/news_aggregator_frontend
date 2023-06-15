import { styled } from "styled-components";

export const AccordionItemListItem = styled.li`
  border: 1px solid #ccc;

  &:not(:first-of-type) {
    border-top: 0;
  }
  
`;

export const AccordionItemTitle = styled.h3`
  width: 100%;
  margin: 0;
`;

export const AccordionItemButton = styled.button<{isOpen: boolean}>`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #fff;
  border: 0;
  padding: 15px 20px;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;

  &::after {
    content: "";
    flex-shrink: 0;
    width: 18px;
    height: 18px;
    margin-left: auto;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-size: 100%;
    transition: transform 0.2s ease-in-out;
    transform: ${({isOpen}) => isOpen? 'rotate(-180deg)': 'rotate(0deg)'}
  }


`;

export const AccordionItemContainer = styled.div`
  width: 100%;
  transition: height 0.2s ease-in-out;
  overflow: hidden;
`;

export const AccordionItemContent = styled.div`
  border-top: 1px solid #cccccc;
  padding: 15px 20px;
`; 

export const AccordionUnorderedList = styled.ul`
  width: 60vw;
  list-style: none;
  margin: 0;
  padding: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: 80vw;
  }

`