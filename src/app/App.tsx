import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/router'
import { Suspense } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { NavBar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/SideBar'

const App = () => {
	const { theme } = useTheme()

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
