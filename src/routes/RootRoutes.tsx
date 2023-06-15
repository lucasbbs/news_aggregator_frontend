import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import  Routes, { LayoutPaths } from '.'
import ProtectedRoute from "./ProtectedRoute";

export const RootRoutes = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route element={LayoutPaths.RootLayoutPath.element} path={LayoutPaths.RootLayoutPath.path}>
                <Route index element={Routes.HomePath.page} />
                <Route path={Routes.NYTPath.relativePath} element={Routes.NYTPath.page} />
                <Route path={Routes.GuardianPath.relativePath} element={Routes.GuardianPath.page} />
                <Route path={Routes.NewsApiPath.relativePath} element={Routes.NewsApiPath.page} />
                <Route path={Routes.SearchPath.relativePath} element={Routes.SearchPath.page} />
                <Route path={Routes.SettingsPath.relativePath} element={<ProtectedRoute/>}>
                    <Route index element={Routes.SettingsPath.page} />
                </Route>
            </Route>
            <Route path={LayoutPaths.AuthLayoutPath.path} element={LayoutPaths.AuthLayoutPath.element}>
                <Route index element={Routes.LoginPath.page} />
                <Route path={Routes.RegisterPath.relativePath} element={Routes.RegisterPath.page} />
            </Route>
            <Route path={Routes.ErrorPath.relativePath} element={Routes.ErrorPath.page} />
        </Route>
    )
)
