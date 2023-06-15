import React, { useState } from 'react'
import { DropdownButton, DropdownContent, DropdownItem, StyledCaretDown, StyledCaretUp, StyledDropdown } from './styles'
import { useNavigate } from 'react-router-dom'

interface Props {
    litItems: {
        id: string
        name: string
        path?: string
        action?: () => void
    }[]
    defaultOption: string
    selected?: string
    setSelected?: (value: string) => void
    width?: number
}

function Dropdown({ litItems, defaultOption, selected, setSelected, width }: Props) {
    const navigate = useNavigate()
    const [isActive, setIsActive] = useState(false)

    const isSelected = (id: string) => {
        const selectedOption = litItems.find(item => item.name === defaultOption)
        if (selectedOption) {
            return selectedOption.id === id
        }
        return false
    }

    return (
        <StyledDropdown width={width} >
            <DropdownButton onClick={() => setIsActive(!isActive)}>{ selected || defaultOption} {isActive? <StyledCaretUp/> :<StyledCaretDown /> }</DropdownButton>
            {isActive && <DropdownContent>
                {litItems.map((item) => <DropdownItem selected={isSelected(item.id)} key={item.id} onClick={() => {
                    setSelected && setSelected(item.id)
                    item.path && navigate(item.path)
                    item.action && item.action()
                    setIsActive(false)
                }}>{item.name}</DropdownItem>)}
            </DropdownContent>}
        </StyledDropdown>
    )
}


export default Dropdown