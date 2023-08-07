import {useTheme} from 'app/providers/ThemeProvider'
import {AppRouter} from 'app/providers/router'
import {userActions} from 'entities/User'
import {Suspense, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {classNames} from 'shared/lib/classNames/classNames'
import {NavBar} from 'widgets/Navbar'
import {Sidebar} from 'widgets/SideBar'

const App = () => {
	const {theme} = useTheme()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(userActions.initAuthData())
	}, [dispatch])
	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback=''>
				<NavBar />
				<div className='content-page'>
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	)
}

export default App
