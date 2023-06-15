import React from 'react'
import { BackDrop, BoxContainer, TopContainer } from './styles'
import { Outlet } from 'react-router-dom'
import useSwitch from '../../hooks/useSwitch'
import Spinner from '../../components/Spinner'
import useAuth from '../../hooks/useAuth'

function AuthLayout() {
    const { backDropVariants, expandingTransition, isExpanded } = useSwitch()
    const { loading } = useAuth()
    return (
        <>{ loading ? <Spinner/> :
        <BoxContainer>
            <TopContainer>
                <BackDrop
                    initial={false}
                    animate={isExpanded ? "expanded" : 'collapsed'}
                    variants={backDropVariants}
                    transition={expandingTransition}
                />
            </TopContainer>
            <Outlet />
        </BoxContainer>}
        </>
    )
}

export default AuthLayout
