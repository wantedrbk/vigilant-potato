import React from 'react'
import {RouteProps} from 'react-router-dom'
import {NotFoundPage} from 'pages/NotFoundPage'
import {MainPage} from 'pages/MainPage'
import {AboutPage} from 'pages/AboutPage'
import {ProfilePage} from 'pages/ProfilePage'
import {ArticlesPage} from 'pages/ArticlesPage'
import {ArticleDetailsPage} from 'pages/ArticleDetailsPage'

export type AppRouteProps = RouteProps & {
	authOnly?: boolean
}

export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
	PROFILE = 'profile',
	ARTICLES = 'articles',
	ARTICLE_DETAILS = 'article_details',
	//last route
	NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.PROFILE]: '/profile',
	[AppRoutes.ARTICLES]: '/articles',
	[AppRoutes.ARTICLE_DETAILS]: '/article_details/', // add id
	// if all routes are defined, then the last route will be used for all other routes
	[AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		element: <MainPage />
	},
	[AppRoutes.ABOUT]: {
		path: RoutePath.about,
		element: <AboutPage />
	},
	[AppRoutes.PROFILE]: {
		path: RoutePath.profile,
		element: <ProfilePage />,
		authOnly: true
	},
	[AppRoutes.ARTICLES]: {
		path: RoutePath.articles,
		element: <ArticlesPage />,
		authOnly: true
	},
	[AppRoutes.ARTICLE_DETAILS]: {
		path: `${RoutePath.articles}/:id`,
		element: <ArticleDetailsPage />,
		authOnly: true
	},
	[AppRoutes.NOT_FOUND]: {
		path: RoutePath.not_found,
		element: <NotFoundPage />
	}
}
