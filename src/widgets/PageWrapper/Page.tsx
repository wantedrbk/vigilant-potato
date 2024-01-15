import {classNames} from 'shared/lib/classNames/classNames'
import cls from './Page.module.scss'
import {MutableRefObject, ReactNode, UIEvent, useRef} from 'react'
import {useInfiniteScroll} from 'shared/lib/hooks/useInfiniteScroll'
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch'
import {getScrollControllerByPath, uiActions} from 'features/scrollController'
import {useLocation} from 'react-router-dom'
import {StateSchema} from 'app/providers/StoreProvider'
import {useSelector} from 'react-redux'
import {useInitialEffect} from 'shared/lib/hooks/useInitialEffect'
import {useThrottle} from 'shared/lib/hooks/useThrottle'

interface PageProps {
	className?: string
	children: ReactNode
	onScrollEnd?: () => void
}

export const Page = ({className, children, onScrollEnd}: PageProps) => {
	const dispatch = useAppDispatch()
	const {pathname} = useLocation()

	const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
	const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

	const getScrollPos = useSelector((state: StateSchema) =>
		getScrollControllerByPath(state, pathname)
	)

	useInitialEffect(() => {
		if (wrapperRef.current) {
			wrapperRef.current.scrollTop = getScrollPos
		}
	})

	useInfiniteScroll({
		triggerRef,
		wrapperRef,
		callback: onScrollEnd
	})

	const onScroll = useThrottle({
		callback: (event: UIEvent<HTMLDivElement>) => {
			dispatch(
				uiActions.setScrollPosition({path: pathname, position: event.currentTarget.scrollTop})
			)
		},
		delay: 500
	})

	return (
		<section
			onScroll={onScroll}
			ref={wrapperRef}
			className={classNames(cls.Page, {}, [className])}
		>
			{children}
			{onScrollEnd ? <div className={cls.triggerDiv} ref={triggerRef} /> : null}
		</section>
	)
}
