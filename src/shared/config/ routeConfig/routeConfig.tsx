import React from 'react'
import {RouteProps} from 'react-router-dom'
import {NotFoundPage} from 'pages/NotFoundPage'
import {MainPage} from 'pages/MainPage'
import {AboutPage} from 'pages/AboutPage'
import {ProfilePage} from 'pages/ProfilePage'

export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
	PROFILE_PAGE = 'profile_page',
	//last route
	NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.PROFILE_PAGE]: '/profile',
	// if all routes are defined, then the last route will be used for all other routes
	[AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		element: <MainPage />
	},
	[AppRoutes.ABOUT]: {
		path: RoutePath.about,
		element: <AboutPage />
	},
	[AppRoutes.PROFILE_PAGE]: {
		path: RoutePath.profile_page,
		element: <ProfilePage />
	},
	[AppRoutes.NOT_FOUND]: {
		path: RoutePath.not_found,
		element: <NotFoundPage />
	}
}
