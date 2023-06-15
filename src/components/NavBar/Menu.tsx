import React, { useEffect, useMemo, useState } from 'react'
import { Ul } from './styles'
import Dropdown from '../Dropdown'
import { NavLink, useLocation } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import Routes from '../../routes'
import { sources } from '../../data/sources.data'

type MenuProps = {
    open: boolean
  }

function Menu({open}: MenuProps) {

    const { user, logoutUser } = useAuth()
    const location = useLocation()
    const [defaultPageName, setDefaultPageName] = useState('Home')

  const userOptions = [
    {
      id: 'profile',
      name: 'Profile',
      action: () => console.log('clicked profile')
    },
    {
      id: 'settings',
      name: 'User Settings',
      path: Routes.SettingsPath.path
    }
  ]
  const pageOptions = useMemo(() => sources, [])


  useEffect(() => {
    const pageName = pageOptions.find(page => page.path === location.pathname)?.name
    if (pageName) {
      setDefaultPageName(pageName)
    } else if (location.pathname === '/') {
      setDefaultPageName('Home')
    }
  }, [location.pathname, pageOptions])



  return (
    <Ul open={open}>
    <nav><Dropdown width={250} defaultOption={defaultPageName} litItems={pageOptions} /></nav>
    <nav><NavLink to={Routes.SearchPath.path}>Search</NavLink></nav>
    <nav><NavLink to="#Technology">Technology</NavLink></nav>
    <nav><NavLink to="#Politics">Politics</NavLink></nav>
    <nav><NavLink to="#Sports">Sports</NavLink></nav>
    <nav><NavLink to="#Environment">Environment</NavLink></nav>
    <nav><NavLink to="#WTF">Arts</NavLink></nav>
    {user && <nav><Dropdown defaultOption='User menu' litItems={userOptions} /></nav>}
  </Ul>

  )
}

export default Menu