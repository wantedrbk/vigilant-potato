import {useTheme} from 'app/providers/ThemeProvider'
import {AppRouter} from 'app/providers/router'
import {userActions} from 'entities/User'
import {Suspense, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {classNames} from 'shared/lib/classNames/classNames'
import {NavBar} from 'widgets/Navbar'
import {Sidebar} from 'widgets/SideBar'
import {getUserInitiated} from 'entities/User/model/types/user'

const App = () => {
	const {theme} = useTheme()
	const dispatch = useDispatch()
	const initiated = useSelector(getUserInitiated)

	useEffect(() => {
		dispatch(userActions.initAuthData())
	}, [dispatch])
	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback=''>
				<NavBar />
				<div className='content-page'>
					<Sidebar />
					{initiated && <AppRouter />}
				</div>
			</Suspense>
		</div>
	)
}

export default App
