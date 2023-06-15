import React from 'react'
import WebSiteLogo from '../../components/WebsiteLogo'
import NavBar from '../../components/NavBar'
import SpotLight from '../../components/SpotLight'
import { Outlet } from 'react-router-dom'
import { StyledContainer } from './styles'
import Spinner from '../../components/Spinner'
import useNews from '../../hooks/useNews'
import useSettings from '../../hooks/useSettings'

function RootLayout() {
    const { loading: loadingNews } = useNews()
    const { loading: loadingSettings } = useSettings()

    
    return (<>
        {(loadingNews || loadingSettings) ? (<Spinner/> ): (<StyledContainer>
            <WebSiteLogo />
            <NavBar />
            <div className="content">
                <SpotLight />
                <Outlet />
            </div>
        </StyledContainer>)}</>
    )
}

export default RootLayout