/* eslint-disable import/no-anonymous-default-export */
import AuthLayout from "../Layouts/AuthLayout"
import RootLayout from "../Layouts/RootLayout"
import ErrorPage from "../pages/Error"
import Guardian from "../pages/Guardian"
import Home from "../pages/Home"
import Login from "../pages/Login"
import NewYorkTimes from "../pages/NewYorkTimes"
import NewsApi from "../pages/NewsApi"
import Search from "../pages/Search"
import Settings from "../pages/Settings"
import SignUp from "../pages/SignUp"

export const HomePath = {
    id: 'home',
    relativePath: '/',
    path: '/',
    page: <Home />
}

export const SearchPath = {
    id: 'search',
    relativePath: 'search',
    path: '/search',
    page: <Search />
}

export const NYTPath = {
    id: 'nyt',
    relativePath: 'nyt',
    path: '/nyt',
    page: <NewYorkTimes />
}

export const GuardianPath = {
    id: 'guardian',
    relativePath: 'guardian',
    path: '/guardian',
    page: <Guardian />
}

export const NewsApiPath = {
    id: 'newsapi',
    relativePath: 'newsapi',
    path: '/newsapi',
    page: <NewsApi />
}

export const LoginPath = {
    id: 'login',
    relativePath: '/',
    path: '/auth',
    page: <Login />
}

export const ErrorPath = {
    id: 'error',
    relativePath: '*',
    path: '*',
    page: <ErrorPage />
}

export const RegisterPath = {
    id: 'register',
    relativePath: 'register',
    path: 'auth/register',
    page: <SignUp />
}

export const SettingsPath = {
    id: 'settings',
    relativePath: 'settings',
    path: 'settings',
    page: <Settings />
}

export const RootLayoutPath = {
    id: 'root',
    path: '/',
    element: <RootLayout />
}

export const AuthLayoutPath = {
    id: 'auth',
    path: 'auth',
    element: <AuthLayout />
}

export const LayoutPaths = {
    RootLayoutPath,
    AuthLayoutPath
}

export default {
    HomePath,
    LoginPath,
    ErrorPath,
    RegisterPath,
    NYTPath,
    GuardianPath,
    NewsApiPath,
    SettingsPath,
    SearchPath
}