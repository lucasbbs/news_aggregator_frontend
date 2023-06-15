import React from 'react'
import { LeftArrow, RightArrow, TitleHeader, TitleWrapper, OuterWrapper } from './styles'

interface Props {
    source: {
        id: string
        name: string
        setPage?: (page: number) => void
        page?: number
    }
    handleNavigatePage: (sourceId: string, direction: string) => void
    showArrowButtons?: boolean
}

function HeaderSource({ source, handleNavigatePage, showArrowButtons = false }: Props) {

    return (
        <OuterWrapper>
            <TitleWrapper showArrowButtons={showArrowButtons}>
                {showArrowButtons && <LeftArrow
                    onClick={() => {
                        handleNavigatePage(source.id, 'left');
                        source.setPage && source.setPage((source.page ? source.page : 0) - 1)
                    }}
                />}
                <TitleHeader id={source.id}>{source.name}</TitleHeader>
                {showArrowButtons && <RightArrow
                    onClick={() => {
                        handleNavigatePage(source.id, 'right')
                        source.setPage && source.setPage((source.page ? source.page : 0) + 1)
                    }}
                />}
            </TitleWrapper>
        </OuterWrapper>
    )
}

export default HeaderSource